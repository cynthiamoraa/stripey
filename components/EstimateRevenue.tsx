import FloatingCards from "./FloatingCards";
import Guides from "./Guides";

function EstimateRevenue() {
  return (
    <section className=" bg-white relative px-4 lg:px-22 ">
      <Guides  />
      <div className="max-w-6xl relative mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 pt-20  items-stretch">
        <section className="col-span-1 lg:col-span-2 flex flex-col gap-6 pl-2 pt-6">
          <header className="">
            <div className="text-[#3a3a3a] opacity-[3] font-bold md:font-bold  font-serif text-4xl md:text-6xl  ">
              Estimate your savings in 10 seconds
            </div>
          </header>
          <div>
            <h1 className="text-[#425466] font-serif pt-12 text-2xl">
              Sque is the Legal Revenue & Compliance OS. Turn it off and
              invoices stop, audit trails break, and revenue leaks return.
            </h1>
          </div>
        </section>
        <div className="hidden  md:block bg-cover  col-span-1 lg:col-span-2">
          <FloatingCards />
        </div>
      </div>
    </section>
  );
}

export default EstimateRevenue;
