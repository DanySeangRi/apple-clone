import React from "react";
import List from "../common/List";

const Dropdown = ({ name, items ,a}) => (
  <div className="group  cursor-pointer ">
  
    <List name={name} />

    <div className="group-hover:block hidden h-112 w-[max(1440px,100%)]
     fixed top-10 left-1/2 
     transform -translate-x-1/2 text-black 
      bg-white shadow-2xl z-auto 
         transition-all duration-300 ease-in-out">
      <ul className="grid">
        {items.map((item) => (
          <h1
            key={item}
            className="px-4 py-2 hover:bg-gray-800 hover:text-white cursor-pointer text-2xl"
          >
            {item}
          </h1>
        ))}
      </ul>
    </div>
  </div>
);

export default Dropdown;
