"use client";

import React, { useEffect, useRef, useState } from "react";

type Step = {
  id: string;
  title: string;
  copy: string;
  cta: string;
  seeAlso: string[];
  time: number; // seconds in the video where this step begins
};

const STEPS: Step[] = [
  {
    id: "find work",
    title: "Find Work You Already Did",
    copy: "Connect Google/Microsoft. Sque surfaces billable work from email, calendar, files, and call notes — with clear narratives.",
    cta: "Start with Billing →",
    seeAlso: [
      "Invoicing for invoice creation, collection, and tracking",
      "Usage-based billing for metering, billing, and insights",
      "Sigma for custom revenue reports—no SQL required",
    ],
    time: 0, // seconds
  },
  {
    id: "approve",
    title: " Approve & Check",
    copy: "Review drafts, apply categories, and approve in one flow. Automated checks catch issues before you send.",
    cta: "Start with Connect →",
    seeAlso: [
      "Terminal for custom in-person payments",
      "Instant Payouts for fast payments to users",
      "Payment Elements for customizable UIs",
    ],
    time: 8, // seconds (adjust based on your actual video)
  },
  {
    id: "invoice",
    title: " Invoice & Collect",
    copy: "Send invoices with a downloadable proof bundle. Track payments and reduce days-to-cash by 7–12 days.",
    cta: "Start with Issuing →",
    seeAlso: [
      "Treasury for financial accounts",
      "Capital for offering fast, flexible financing",
      "Connect for powering platform payments",
    ],
    time: 16, // seconds (adjust as needed)
  },
];

export default function ProductShowcaseWithVideo() {
  const containerRef = useRef<HTMLElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [videoReady, setVideoReady] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // if autoplay allowed, start playing muted
  const [progress, setProgress] = useState(0); // 0..1

  // Utility: clamp
  const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));

  // seek + play helper (robust)
  const seekTo = async (timeSec: number) => {
    const vid = videoRef.current;
    if (!vid) return;
    // if metadata not ready, wait for it
    if (!videoReady) {
      setIsBuffering(true);
      await new Promise<void>((resolve) => {
        const onLoaded = () => {
          setVideoReady(true);
          vid.removeEventListener("loadedmetadata", onLoaded);
          resolve();
        };
        vid.addEventListener("loadedmetadata", onLoaded);
      });
    }

    // clamp time to duration if available
    const duration = vid.duration || Infinity;
    const safeTime = Math.min(timeSec, Math.max(0, duration - 0.05));

    try {
      // set buffering state while seeking
      setIsBuffering(true);
      vid.currentTime = safeTime;
      // attempt to play (muted autoplay is allowed in most browsers)
      vid.muted = true;
      const playPromise = vid.play();
      if (playPromise && typeof playPromise.then === "function") {
        await playPromise;
      }
      setIsPlaying(true);
    } catch (err) {
      // fallback: if play fails (autoplay prevented), leave paused but update currentTime
      console.warn("Video play prevented, user interaction required.", err);
      setIsPlaying(false);
    } finally {
      // waiting for 'playing' event will clear buffering
    }
  };

  // IntersectionObserver to detect which section is active
  useEffect(() => {
    const nodes = sectionRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!nodes.length) return;

    // Create observer if not present
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // pick the entry with the largest intersectionRatio (prefer the most visible)
        const visible = Array.from(entries)
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const idx = nodes.indexOf(visible.target as HTMLDivElement);
          if (idx !== -1 && idx !== activeIndex) {
            setActiveIndex(idx);
            // immediate seek when a new section becomes active
            seekTo(STEPS[idx].time);
          }
        }
      },
      {
        root: null,
        // require at least 45% of the section to be visible to count as active
        threshold: [0.45, 0.5, 0.6],
      }
    );

    nodes.forEach((n) => observerRef.current?.observe(n));

    return () => {
      observerRef.current?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once after mount

  // Video event wiring
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const onLoaded = () => {
      setVideoReady(true);
      setIsBuffering(false);
    };
    const onWaiting = () => setIsBuffering(true);
    const onPlaying = () => setIsBuffering(false);
    const onPause = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);
    const onTime = () => {
      if (!vid.duration || isNaN(vid.duration)) return setProgress(0);
      setProgress(clamp(vid.currentTime / vid.duration));
    };

    vid.addEventListener("loadedmetadata", onLoaded);
    vid.addEventListener("waiting", onWaiting);
    vid.addEventListener("playing", onPlaying);
    vid.addEventListener("pause", onPause);
    vid.addEventListener("play", onPlay);
    vid.addEventListener("timeupdate", onTime);

    return () => {
      vid.removeEventListener("loadedmetadata", onLoaded);
      vid.removeEventListener("waiting", onWaiting);
      vid.removeEventListener("playing", onPlaying);
      vid.removeEventListener("pause", onPause);
      vid.removeEventListener("play", onPlay);
      vid.removeEventListener("timeupdate", onTime);
    };
  }, [videoReady]);

  // On activeIndex change (manual trigger, e.g. user clicked left CTA), seek
  useEffect(() => {
    // already seeking in IntersectionObserver, but this keeps it robust
    seekTo(STEPS[activeIndex].time);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  // helper: scroll to a section and update active index
  const goToIndex = (i: number) => {
    const node = sectionRefs.current[i];
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveIndex(i);
    // call seek immediately for snappy experience
    seekTo(STEPS[i].time);
  };

  // toggle play/pause (unmute on explicit user play)
  const togglePlay = async () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      try {
        // on manual play, unmute to allow audible playback if desired
        vid.muted = false;
        await vid.play();
        setIsPlaying(true);
      } catch (e) {
        console.warn("Play failed:", e);
      }
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  // initial auto-play attempt on mount (muted), but safe if blocked
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = true;
    vid.playsInline = true;
    vid.autoplay = false; // we'll attempt programmatic play
    // try to play; browsers may block until user interacts
    vid
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  }, []);

  return (
    <section ref={containerRef} className="relative bg-white py-24">
      <div className="max-w-6xl mx-auto flex gap-12 px-6">
        {/* LEFT: text steps */}
        <div className="w-full lg:w-1/2 space-y-32">
          {STEPS.map((s, i) => (
            <div
              key={s.id}
              ref={(el) => {
                sectionRefs.current[i] = el;
              }}
              className={`py-6 ${
                activeIndex === i ? "opacity-100" : "opacity-80"
              }`}
            >
              <h2 className="text-3xl font-bold text-gray-900">{s.title}</h2>
              <p className="text-lg text-gray-600 mt-4">{s.copy}</p>

             
            </div>
          ))}
        </div>

        {/* RIGHT: sticky video */}
        <div className="hidden lg:block w-1/2 sticky top-24 h-[520px]">
          <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
            {/* Video element */}
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              playsInline
              muted
              // poster="/video-poster.jpg" // optional poster
              preload="metadata"
              // NOTE: sources — you must place these files into /public and adjust names
            >
              {/* Provide multiple source formats for better browser support */}
              <source src="/demo/hero-steps.mp4" type="video/mp4" />
              <source src="/demo/hero-steps.webm" type="video/webm" />
              {/* Fallback */}
              Your browser does not support HTML5 video.
            </video>

            {/* Spinner when buffering */}
            {isBuffering && (
              <div
                role="status"
                aria-live="polite"
                className="absolute inset-0 flex items-center justify-center z-20 bg-black/30"
              >
                <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-white animate-spin" />
                <span className="sr-only">Loading video…</span>
              </div>
            )}

            {/* Controls overlay */}
            <div className="absolute left-4 bottom-4 right-4 z-30 flex items-center gap-3">
              {/* Play/Pause */}
              <button
                aria-pressed={isPlaying}
                onClick={togglePlay}
                className="bg-white/10 hover:bg-white/20 p-2 rounded"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="6" y="5" width="4" height="14" fill="white" />
                    <rect x="14" y="5" width="4" height="14" fill="white" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 3v18l15-9L5 3z" fill="white" />
                  </svg>
                )}
              </button>

              {/* Progress bar (visual only; full duration may be > last step) */}
              <div className="flex-1 h-2 bg-white/10 rounded overflow-hidden">
                <div
                  className="h-full bg-purple-500"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                  aria-hidden
                />
              </div>

              {/* Step label */}
              <div className="px-3 py-1 text-sm bg-black/25 rounded text-white">
                {STEPS[activeIndex].title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
