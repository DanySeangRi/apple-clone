import React from "react";
import menuItems from "../../layout/data/dropdownData";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

const MobileSearchDropdown = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="space-y-4 animate-fadeIn">
      {/* Search Header */}
      <div className="flex items-center gap-3 px-2 py-4 border-b border-gray-700 transition-all duration-300">
        <IoIosSearch size={24} className="text-white" />
        <input
          type="search"
          placeholder="Search apple.com"
          className="w-full bg-[#161617] text-white focus:outline-none text-lg transition-colors duration-300"
          autoFocus
        />
      </div>

      {/* Quick Links Title */}
      <div className="px-2">
        <h3 className="text-sm text-gray-400 font-medium mb-4 transition-colors duration-300">Quick Links</h3>
        
        {/* Quick Links Items */}
        <div className="space-y-2">
          {menuItems[11].searchItem.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 py-3 px-2 hover:bg-gray-700 rounded cursor-pointer transition-all duration-300 group transform hover:translate-x-1"
              style={{
                animation: `slideInLeft 0.3s ease-out ${index * 50}ms both`,
              }}
            >
              <FaArrowRightLong size={16} className="text-gray-500 group-hover:text-[#0071e3] transition-colors duration-300" />
              <p className="text-white font-medium group-hover:text-[#0071e3] transition-colors duration-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileSearchDropdown;
