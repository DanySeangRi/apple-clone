import React from "react";
import menuItems from "../../layout/data/dropdownData";

const MobileSearchDropdown = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <>
      <input
        type="search"
        placeholder="Search apple.com"
        className="w-full border-b pb-2 mb-4 focus:outline-none text-lg bg-[#161617] text-white"
      />
      <h3 className="text-sm text-gray-400 mb-2">Quick Links</h3>
      {menuItems[11].searchItem.map((item, index) => (
        <p key={index} className="py-3 text-lg hover:text-[#0071e3] transition-colors cursor-pointer">
          {item}
        </p>
      ))}
    </>
  );
};

export default MobileSearchDropdown;
