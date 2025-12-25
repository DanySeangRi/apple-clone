import React from "react";
import List from "../common/List";

const Dropdown = ({
  to,
  name,
  
  items = [],
  firstTitle,
  secondTitle,
  secondItem = [],
  foot1,
  foot2,
  thirdTittle,
  thirdItem = [],
}) => (
  // thirdTittle,thirdItem
  <div className="group  cursor-pointer px-1.5 hidden md:block ">
    <List name={name} to={to} />
    <div
      className="  
                            fixed top-9 left-1/2 -translate-x-1/2
                            min-h-61.5 w-[max(1440px,100%)]
                            bg-white text-black shadow-xl
                            z-50

                            opacity-0 translate-y-0
                            pointer-events-none

                            transition-all duration-300 ease-in-out

                            group-hover:opacity-100
                            group-hover:translate-y-3
                            group-hover:pointer-events-auto 
                       "
    >
      <div className="flex mx-auto items-start   justify-start w-5xl px-5.5 pt-10 pb-21 ">
        <div className="flex flex-col min-w-66 w-auto pr-22 text-[12px]">
          <p className="text-[#6e6e73]">{firstTitle}</p>
          {items.map((item) => (
            <h1
              key={item}
              className="  cursor-pointer text-2xl mt-1.5 text-[#151516] font-medium "
            >
              {item}
            </h1>
          ))}
          <div>
            <p className="text-[#333336] mt-4 font-medium">{foot1}</p>
            <p className="text-[#333336] py-1.5  font-medium">{foot2}</p>
          </div>
        </div>

        <div className="flex flex-col pr-11 text-[12px] min-w-32.75 w-auto">
          <p className="text-[#6e6e73] mb-2">{secondTitle}</p>
          {secondItem.map((item) => (
            <p
              key={item}
              className="text-[#2c2c2d] cursor-pointer  mt-1 font-medium "
            >
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-col pr-11 text-[12px] min-w-32.75 w-auto">
          <p className="text-[#6e6e73] mb-2">{thirdTittle}</p>
          {thirdItem.map((item) => (
            <p
              key={item}
              className="text-[#2c2c2d] cursor-pointer  mt-1 font-medium "
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Dropdown;
