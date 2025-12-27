import React from "react";
import menuItems from "../../layout/data/dropdownData";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrShop } from "react-icons/gr";

const MobileShopDropdown = ({ isOpen,icons=[] }) => {
  if (!isOpen) return null;

  return (
    <div className="space-y-4">
      {/* Bag Header */}
      <div className="flex items-center gap-3 px-2 py-4 border-b border-gray-700">
        <GrShop size={24} className="text-white" />
        <h2 className="text-xl font-medium text-white">Your Bag</h2>
      </div>

      {/* Empty Bag Message */}
      <div className="px-2 py-6 text-center">
        <p className="text-gray-400 text-lg mb-6">Your Bag is empty.</p>
        
        {/* Profile Section */}
        <div className="mt-8 border-t border-gray-700 pt-6">
          <h3 className="text-sm text-gray-400 font-medium mb-4 text-left">My Profile</h3>
          
          <div className="space-y-2">
            {menuItems[12].shopItem.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 py-3 px-2 hover:bg-gray-700 rounded cursor-pointer transition-colors group"
              >
                 {icons[index] || <FaArrowRightLong className="text-gray-400" />}
                <p className="text-white font-medium group-hover:text-[#0071e3]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileShopDropdown;
