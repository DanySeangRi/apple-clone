import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { footerSections,legalNotes } from "../data/footerData";
/* ---------------- DATA ---------------- */


/* ---------------- COMPONENT ---------------- */

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <footer className="bg-[#1d1d1f] text-[#86868b] text-xs">
      <div className="max-w-5xl mx-auto px-4">
        {/* LEGAL NOTES */}
        <div className="py-4 space-y-2 border-b border-gray-300 text-[#ffffff8f]">
          {legalNotes.map((note, i) => (
            <p key={i}>
              {note.number && <span>{note.number} </span>}
              {note.text}
              {note.link && (
                <a
                  href={note.link.url}
                  className="text-[#ffffff8f] underline"
                >
                  {note.link.text}
                </a>
              )}
            </p>
          ))}
        </div>

        {/* MOBILE ACCORDION */}
        <div className="md:hidden divide-y divide-[#424245]">
          {footerSections.map((section, i) => (
            <div key={i}>
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-3   text-[#ffffffeb]"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium">{section.title}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* FULL COLLAPSE */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-3 space-y-2">
                    {section.links.map((link, idx) => (
                      <a key={idx} href="#" className="block hover:underline">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP FOOTER — APPLE FLEX LAYOUT */}
        <div className="hidden md:flex justify-between py-8">
          {/* COLUMN 1 */}
          <div className="space-y-6">
            <div>
              <h3 className="  text-[#ffffffeb] font-medium mb-3">
                Shop and Learn
              </h3>
              <ul className="space-y-2 text-[#ffffff8f]">
                {[
                  "Store",
                  "Mac",
                  "iPad",
                  "iPhone",
                  "Watch",
                  "Vision",
                  "AirPods",
                  "TV & Home",
                  "AirTag",
                  "Accessories",
                  "Gift Cards",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="  text-[#ffffffeb] font-medium mb-3">Apple Wallet</h3>
              <ul className="space-y-2 text-[#ffffff8f]">
                {["Wallet", "Apple Card", "Apple Pay", "Apple Cash"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:underline">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-6">
            <div>
              <h3 className="  text-[#ffffffeb] font-medium mb-3">Account</h3>
              <ul className="space-y-2 text-[#ffffff8f]">
                {[
                  "Manage Your Apple Account",
                  "Apple Store Account",
                  "iCloud.com",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="  text-[#ffffffeb] font-medium mb-3">Entertainment</h3>
              <ul className="space-y-2 text-[#ffffff8f]">
                {[
                  "Apple One",
                  "Apple TV+",
                  "Apple Music",
                  "Apple Arcade",
                  "Apple Fitness+",
                  "Apple News+",
                  "Apple Podcasts",
                  "Apple Books",
                  "App Store",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="  text-[#ffffffeb] font-medium mb-3">Apple Store</h3>
            <ul className="space-y-2 text-[#ffffff8f]">
              {[
                "Find a Store",
                "Genius Bar",
                "Today at Apple",
                "Group Reservations",
                "Apple Camp",
                "Apple Store App",
                "Certified Refurbished",
                "Apple Trade In",
                "Financing",
                "Carrier Deals at Apple",
                "Order Status",
                "Shopping Help",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div className="space-y-6">
            <div>
              <h3 className="  text-[#ffffffeb] font-medium mb-3">For Business</h3>
              <ul className="space-y-2 text-[#ffffff8f]">
                {["Apple and Business", "Shop for Business"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="  text-[#ffffffeb] font-medium mb-3">For Education</h3>
              <ul className="space-y-2 text-[#ffffff8f]">
                {[
                  "Apple and Education",
                  "Shop for K-12",
                  "Shop for College",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="  text-[#ffffffeb] font-medium mb-3">
                For Healthcare
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline text-[#ffffff8f]">
                    Apple and 
                  
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="  text-[#ffffffeb] font-medium mb-3">
                For Government
              </h3>
              <ul className="space-y-2 text-[#ffffff8f]">
                {[
                  "Apple and Government",
                  "Shop for Veterans and Military",
                  "Shop for State and Local Employees",
                  "Shop for Federal Employees",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMN 5 */}
          <div>
            <h3 className="  text-[#ffffffeb] font-medium mb-3">Apple Values</h3>
            <ul className="space-y-2 mb-6 text-[#ffffff8f]">
              {[
                "Accessibility",
                "Education",
                "Environment",
                "Inclusion and Diversity",
                "Privacy",
                "Racial Equity and Justice",
                "Supply Chain Innovation",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="  text-[#ffffffeb] font-medium mb-3">About Apple</h3>
            <ul className="space-y-2 text-[#ffffff8f]">
              {[
                "Newsroom",
                "Apple Leadership",
                "Career Opportunities",
                "Investors",
                "Ethics & Compliance",
                "Events",
                "Contact Apple",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* STORE INFO */}
        <div className="py-4 ">
          <p>
            More ways to shop:{" "}
            <a href="#" className="text-[#2997ff] hover:underline">
              Find an Apple Store
            </a>{" "}
            or{" "}
            <a href="#" className="text-[#2997ff] hover:underline">
              other retailer
            </a>{" "}
            near you. Or call{" "}
            <a href="#" className="text-[#2997ff] hover:underline">
              1-800-MY-APPLE
            </a>
            .
          </p>
        </div>

        {/* BOTTOM BAR */}
        <div className="py-4 border-t border-[#424245] flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <span>Copyright © 2025 Apple Inc. All rights reserved.</span>

          <div className="flex flex-wrap gap-x-2">
            {[
              "Privacy Policy",
              "Terms of Use",
              "Sales and Refunds",
              "Legal",
              "Site Map",
            ].map((item, i) => (
              <span key={i}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
                {i < 4 && <span className="mx-1">|</span>}
              </span>
            ))}
          </div>

          <span className="md:ml-auto">United States</span>
        </div>
      </div>
    </footer>
  );
}
