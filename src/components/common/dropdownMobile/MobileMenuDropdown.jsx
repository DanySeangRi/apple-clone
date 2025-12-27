import React from "react";
import menuItems from "../../layout/data/dropdownData";

const MobileMenuDropdown = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {menuItems.slice(0, 11).map((item, index) => (
        <button
          key={index}
          className="w-full text-left py-3 text-xl font-medium hover:text-[#0071e3] transition-colors"
          onClick={onClose}
        >
          {item.name}
        </button>
      ))}
    </>
  );
};

export default MobileMenuDropdown;
