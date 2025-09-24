import Guides from "./Guides";
function HeroSection() {
  return (
    <section>
      <div className="w-full grid lg:grid-cols-4 items-stretch h-full pt-13  ">
        <Guides />
        <section className="col-span-4 md:col-span-2 flex flex-col gap-6 p-2  ">
          <header className="">
            <span className="p-2 rounded-lg backdrop-blur supports-[backdrop-filter]:bg-black/10 text-white">
              Sessions 2025 <span>.</span>
              <a href=""> watch on demand</a>
            </span>
            <h1
              className="font-serif font-bold md:font-black 
               text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
               text-black/90 leading-20 tracking-tight"
            >
              Stop Losing Billable Time <br className="hidden md:block" />
              You've Already Earned
            </h1>
          </header>
          <div>
            <h1 className="text-black font-sans font-normal text-2xl">
              Sque is the Legal Revenue & Operating System — it captures work
              automatically and runs billing as your system of record.
            </h1>
            <h1 className="mt-6">
              First invoice in 48 hours • Audit-ready proof in 14 days • 0
              rejected e-bills
            </h1>
          </div>
          <footer className="p-3 block md:flex justify-between gap-4">
            <button className=" h-16  rounded-xl  px-4 py-3 bg-indigo-600 text-white font-[600] md:font-medium shadow hover:bg-indigo-700 transition">
              Calculate My Revenue Recovery
            </button>
            <button className="px-4  py-3 h-16  mt-6 md:mt-0 bg-white rounded-xl hover:bg-gray-50  transition font font-medium border">
              Start Free Trial
            </button>
          </footer>
        </section>
        <div
          className="hidden lg:block bg-cover col-span-5 md:col-span-2"
          style={{ backgroundImage: "url('/images/sque.png')" }}
        ></div>
      </div>
    </section>
  );
}

export default HeroSection;
