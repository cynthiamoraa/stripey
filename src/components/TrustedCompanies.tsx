import Guides from "./Guides";

export default function TrustedCompanies() {
  const companies = [
    "OpenAI",
    "Amazon",
    "Google",
    "Anthropic",
    "Adobe",
    "Shopify",
    "Airbnb",
    "Netflix",
  ];

  return (
    
    <section className="py-16  px-4 lg:px-22">
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4  gap-18 items-center opacity-60">
          {companies.map((company) => (
            <div key={company} className="text-center">
              <div className="text-lg font-semibold text-gray-900">
                {company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
