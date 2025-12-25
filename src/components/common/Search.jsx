import React, { useState, useRef, useEffect } from "react";
import List from "./List";
import { CiSearch } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

const Search = ({ name, searchItem = [] }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative cursor-pointer">
      {/* Trigger */}
      <div onClick={() => setOpen((prev) => !prev)} className="cursor-pointer">
        <List name={name} />
      </div>

      {/* Dropdown */}
      <div
        className={`
          fixed top-9 left-1/2 -translate-x-1/2
          min-h-61.5 w-[max(1440px,100%)]
          bg-white text-black shadow-xl z-50

          transition-all duration-300 ease-in-out

          ${
            open
              ? "opacity-100 pointer-events-auto translate-y-3"
              : "opacity-0 pointer-events-none translate-y-0"
          }
        `}
      >
        <div className="flex mx-auto items-start justify-start w-5xl px-5.5 pt-10 pb-21">
          <div className="flex flex-col w-auto pr-22 text-[12px] gap-2">
            {/* Search input */}
            <div className="flex items-center gap-2">
              <CiSearch size={22} />
              <input
                type="search"
                placeholder="Search apple.com"
                className="text-[20px] focus:outline-none w-240"
                autoFocus
              />
            </div>

            {/* Quick links */}
            <div>
              <p className="text-[#898989] mt-4 font-medium mb-2">
                Quick Links
              </p>

              {searchItem.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 hover:bg-[#b7b7b71e] px-2 py-1 cursor-pointer"
                >
                  <FaArrowRightLong className="text-gray-400" />
                  <p className="text-[#2c2c2d] font-medium w-240">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
