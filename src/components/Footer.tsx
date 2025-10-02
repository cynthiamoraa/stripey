import Image from "next/image";
import Logo from "../public/Sque_icon_universal.svg";

function Footer() {
  const footerLinks = {
    Company: ["Feedback", "Media inquiries", "Contact us"],
    Resources: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Security",
      "Subprocessors",
    ],
  };

  return (
    <footer className="bg-[#fff] px-4 lg:px-22 text-gray-500 ">
      <div className="  py-16">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Logo + About */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              {/* <img
                src="/Sque_icon_universal.svg"
                alt="Sque Logo"
                width={34}
                height={36}
              /> */}
              <span className="text-3xl text-[#0a2540] font-bold">Sque</span>
            </div>
            <p className="text-[#0a2540] max-w-md">
              Sque is an advanced AI legal platform that streamlines legal
              workflows, automates document creation, and provides intelligent
              legal research assistance.
            </p>
          </div>

          {/* Dynamic Footer Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-semibold mb-4 text-[#0a2540]">{section}</h3>
              <ul className="space-y-3 text-sm text-[#0a2540]">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-[#0a2540]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mx-auto max-w-6xl px-4 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#0a2540] text-sm">© 2025 Sque AI</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
