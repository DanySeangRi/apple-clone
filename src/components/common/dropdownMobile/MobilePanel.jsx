import React from "react";

const MobilePanel = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-12 left-0 w-full h-screen bg-[#161617] z-40 px-4 py-6 md:hidden text-white translate-y-0 transition-all duration-300 overflow-y-auto">
      {children}
    </div>
  );
};

export default MobilePanel;
