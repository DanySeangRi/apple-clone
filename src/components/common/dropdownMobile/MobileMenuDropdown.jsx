import React, { useState } from "react";
import menuItems from "../../layout/data/dropdownData";
import { IoArrowBack } from "react-icons/io5";

const MobileMenuDropdown = ({ isOpen, onClose }) => {
  const [activeMenu, setActiveMenu] = useState(null); // Track which menu is open
  const [breadcrumb, setBreadcrumb] = useState([]); // Track navigation history

  const goBack = () => {
    if (breadcrumb.length > 0) {
      const newBreadcrumb = breadcrumb.slice(0, -1);
      setBreadcrumb(newBreadcrumb);
      setActiveMenu(newBreadcrumb.length > 0 ? newBreadcrumb[newBreadcrumb.length - 1] : null);
    }
  };

  const openSubmenu = (index) => {
    setActiveMenu(index);
    setBreadcrumb([...breadcrumb, index]);
  };

  if (!isOpen) return null;

  // Show submenu if active, otherwise show main menu
  const displayItems = activeMenu !== null ? menuItems[activeMenu] : null;

  return (
    <div>
      {/* Back Button */}
      {activeMenu !== null && (
        <button
          onClick={goBack}
          className="flex items-center gap-2 py-3 px-2 text-white font-medium hover:bg-gray-700 rounded transition-colors"
        >
          <IoArrowBack size={20} />
        </button>
      )}

      {/* Main Menu */}
      {activeMenu === null && (
        <>
          {menuItems.slice(0, 11).map((item, index) => (
            <button
              key={index}
              onClick={() => openSubmenu(index)}
              className="w-full text-left py-3 px-2 text-xl font-medium  rounded transition-colors"
            >
              {item.name}
            </button>
          ))}
        </>
      )}

      {/* Submenu View */}
      {displayItems && (
        <div className="px-2">
          <h2 className="text-2xl font-bold py-4 ">{displayItems.name}</h2>

          {/* First Title & Items */}
          {displayItems.firstTitle && (
            <>
              <p className="text-gray-400  py-2   font-bold">
                {displayItems.firstTitle}
              </p>
              {displayItems.items.map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left text-[28px] py-1  font-bold  rounded transition-colors"
                  onClick={onClose}
                >
                  {item}
                </button>
              ))}
            </>
          )}

          {/* Second Title & Items */}
          {displayItems.secondTitle && (
            <>
              <p className="text-gray-400  py-2   font-medium mt-4">
                {displayItems.secondTitle}
              </p>
              {displayItems.secondItem?.map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left text-[17px] py-1   rounded transition-colors"
                  onClick={onClose}
                >
                  {item}
                </button>
              ))}
            </>
          )}

          {/* Third Title & Items */}
          {displayItems.thirdTittle && (
            <>
              <p className="text-gray-400  py-2  font-medium mt-4">
                {displayItems.thirdTittle}
              </p>
              {displayItems.thirdItem?.map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left text-[17px] py-1   rounded transition-colors"
                  onClick={onClose}
                >
                  {item}
                </button>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileMenuDropdown;
