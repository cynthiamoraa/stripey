import Guides from "./Guides";
function HeroSection() {
  return (
    <section className="relative ">
    

      <div className=" grid lg:grid-cols-4 items-stretch h-full pt-13 pb-12 pl-2 md:pl-4 lg:pl-23 ">
        {/* <Guides /> */}
        <section className="col-span-4 md:col-span-2 flex flex-col gap-6 p-2  ">
          <header className="">
            <span className="p-2  rounded-lg backdrop-blur supports-[backdrop-filter]:bg-black/10 text-white">
              Sessions 2025 <span>.</span>
              <a href=""> watch on demand</a>
            </span>
            <h1
              className="font-serif font-bold md:font-black 
               text-4xl sm:text-5xl md:text-6xl lg:text-[90px] 
               text-black/90 pt-10 tracking-tight"
            >
              Stop Losing Billable Time <br className="hidden md:block" />
              You've Already Earned
            </h1>
          </header>
          <div>
            <h1 className="text-[#0a2540] font font-normal text-2xl">
              Sque is the Legal Revenue & Operating System — it captures work
              automatically and runs billing as your system of record.
            </h1>
            <h1 className="mt-6 text-[#0a2540]">
              First invoice in 48 hours • Audit-ready proof in 14 days • 0
              rejected e-bills
            </h1>
          </div>
          <footer className=" flex justify-between gap-2 pr-0 md:pr-27">
            <button className="   rounded-4xl px-2 md:px-4 py-1 bg-[#0a2540] text-white font-[600] md:font-medium shadow hover:bg-indigo-700 transition">
              Calculate My Revenue Recovery
            </button>
            <button className="px-4  py-1 text-[#0a2540]  mt-6 md:mt-0 bg-white rounded-4xl hover:bg-gray-50  transition font font-medium ">
              Start Free Trial
            </button>
          </footer>
        </section>
        <div
          className="hidden md:block bg-cover col-span-4 md:col-span-2 "
          style={{ backgroundImage: "url('/images/sque.png')" }}
        ></div>
      </div>
    </section>
  );
}

export default HeroSection;
