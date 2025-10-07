"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function HeroBackground({ children }: { children: ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

  const resizeCanvas = () => {
    const parent = canvas.parentElement;
    if (!parent) return;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
  };

    const colors = [
      ["#a960ee", "#ff333d", "#90e0ff", "#ffcb57"],
      ["#ff333d", "#90e0ff", "#ffcb57", "#a960ee"],
    ];

    let t = 0;

    const draw = () => {
      if (!ctx) return;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      const step = (Math.sin(t) + 1) / 2;

      const activeColors = colors[0].map((c, i) =>
        interpolateColor(c, colors[1][i], step)
      );

      const gradient = ctx.createLinearGradient(0, 0, w, h);

      activeColors.forEach((c, i) => {
        const offset =
          i / (activeColors.length - 1) + 0.05 * Math.sin(t * 0.8 + i);
        gradient.addColorStop(Math.min(Math.max(offset, 0), 1), c);
      });

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      t += 0.01;
      animationFrameId = requestAnimationFrame(draw);
    };

    const interpolateColor = (c1: string, c2: string, factor: number) => {
      const parse = (hex: string) =>
        hex
          .replace("#", "")
          .match(/.{1,2}/g)!
          .map((v) => parseInt(v, 16));
      const [r1, g1, b1] = parse(c1);
      const [r2, g2, b2] = parse(c2);
      const r = Math.round(r1 + (r2 - r1) * factor);
      const g = Math.round(g1 + (g2 - g1) * factor);
      const b = Math.round(b1 + (b2 - b1) * factor);
      return `rgb(${r}, ${g}, ${b})`;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full ">
      {/* Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full clip-section-bottom  -z-10 "
      />
      {/* Foreground */}
      <div className="relative z-10 ">{children}</div>
    </div>
  );
}
