import GlobeCanvas from "./globe";
export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-[#0a0c1b] text-white">
      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-24 px-6 lg:px-12">
        {/* Left content */}
        <div className="relative z-10 space-y-6">
          <p className="text-teal-400 font-semibold">Global scale</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            The backbone for <br /> global commerce
          </h1>
          <p className="text-lg text-gray-300">
            Stripe makes moving money as easy and programmable as moving data.
            Our teams are based in offices around the world and we process
            hundreds of billions of dollars each year for ambitious businesses
            of all sizes.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 text-left">
            <div>
              <p className="text-2xl font-bold">500M+</p>
              <p className="text-sm text-gray-400">
                API requests per day, peaking at 13,000 requests a second.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold">99.999%</p>
              <p className="text-sm text-gray-400">
                historical uptime for{" "}
                <span className="text-blue-400">Stripe services</span>.
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold">90%</p>
              <p className="text-sm text-gray-400">
                of U.S. adults have bought from businesses using Stripe.
              </p>
            </div>
          </div>
        </div>

        {/* Right content with globe canvas */}
        <div className="relative h-[500px] lg:h-[600px]">
          <GlobeCanvas />
        </div>
      </div>
    </div>
  );
}
