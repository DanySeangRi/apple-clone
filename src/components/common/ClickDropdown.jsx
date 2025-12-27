import React, { useRef } from "react";
import List from "./List";
import { FaArrowRightLong } from "react-icons/fa6";

const Search = ({
  name,
  searchItem = [],
  header,
  icon,
  icons = [],
  titleList,
  isOpen,
  setIsOpen,
}) => {
  const containerRef = useRef(null);
  const closeTimeout = useRef(null);

  /* Mouse hover delay (optional) */
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false);
    }, 120);
  };

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout.current);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        <List name={name} />
      </div>

      {/* Dropdown */}
      <div
        className={`
          fixed top-9 left-1/2 -translate-x-1/2
          min-h-61.5 w-[max(1440px,100%)]
          bg-black shadow-xl z-50
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 translate-y-3 pointer-events-auto"
              : "opacity-0 translate-y-0 pointer-events-none"
          }
        `}
      >
        <div className="flex mx-auto w-5xl px-5.5 pt-10 pb-21">
          <div className="flex flex-col gap-2 text-[12px] pr-22">
            <div className="flex text-white  items-center gap-2">
              {icon}
              <div className="text-white ">{header}</div>
            </div>

            <p className="text-[#898989] mt-4 font-medium mb-2">{titleList}</p>

            {searchItem.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 hover:bg-[#b7b7b71e] text-white  px-2 py-1 cursor-pointer"
              >
                {icons[index] || <FaArrowRightLong className="text-gray-400" />}
                <p className="text-white  font-medium w-240">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
