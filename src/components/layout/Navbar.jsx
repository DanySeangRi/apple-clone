import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GrShop } from "react-icons/gr";
import Dropdown from "../common/Dropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import menuItems from "./dropdownData.js";
import ClickDropdown from "../common/ClickDropdown.jsx";
import List from "../common/List";
import { FaArrowRightLong } from "react-icons/fa6";
import { icon } from "../common/Icon.jsx";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <nav
        className="fixed top-0 left-0 z-50 h-12 w-full
        backdrop-blur-md [&:has(.element:hover)]:bg-white"
      >
        <ul
          className=" flex items-center w-auto
        justify-between md:justify-center gap-6 h-12 "
        >
          <div className="ml-5">
            <List name={<FaApple size={20} />} to="/" />
          </div>

          {/* Desktop Menu - Hidden on mobile */}
          <div className=" element hidden md:flex items-center gap-6">
            {menuItems.slice(0, 11).map((item, index) => (
              <Dropdown
                key={index}
                name={item.name}
                items={item.items}
                firstTitle={item.firstTitle}
                foot1={item.foot1}
                foot2={item.foot2}
                secondTitle={item.secondTitle}
                secondItem={item.secondItem}
                thirdTittle={item.thirdTittle}
                thirdItem={item.thirdItem}
              />
            ))}
          </div>

          {/* Search and Shop Icons - Hidden on mobile */}
          <div className="hidden md:flex mr-4 gap-5 items-center">
            <ClickDropdown
              name={<CiSearch size={20} />}
              searchItem={menuItems[11].searchItem}
              icon={<CiSearch size={22} />}
              icons={<FaArrowRightLong className="text-gray-400" />}
              header={
                <input
                  type="search"
                  placeholder="Search apple.com"
                 
                  autoFocus
                />
              }
              titleList="Quick Links"
            />
            <ClickDropdown
              name={<GrShop size={20} />}
              searchItem={menuItems[12].shopItem}
              header="Your Bag is empty."
              icons={icon[0].icon1}
              titleList="My Profile"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden mr-4 gap-5 items-center">
            <button
              onClick={() => {
                setOpenSearch(!openSearch);
                setOpen(false);
              }}
              className=""
            >
              {openSearch ? <IoMdClose size={24} /> : <CiSearch size={20} />}
            </button>
            <GrShop size={20} />
            <button
              onClick={() => {
                setOpen(!open);
                setOpenSearch(false);
              }}
            >
              {open ? <IoMdClose size={24} /> : <GiHamburgerMenu size={20} />}
            </button>
          </div>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-12 left-0 w-full bg-white z-40 overflow-y-auto transition-all duration-300 ease-in ${
          open
            ? "translate-y-0 opacity-100 transition-all duration-300 ease-in-out "
            : "-translate-y-2 duration-300 ease-in-out opacity-0 pointer-events-none "
        }`}
      >
        <div className="px-4 py-6 md:hidden">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button
                className="w-full text-left px-4 py-2"
                onClick={() => {
                  setOpen(false);
                  setOpenSearch(false);
                }}
              >
                <h1 className="cursor-pointer text-xl text-[#151516] font-medium">
                  {item.name}
                </h1>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`fixed top-12 left-0 w-full bg-white z-40 overflow-y-auto transition-all duration-300 ease-in ${
          openSearch
            ? "translate-y-0 opacity-100 transition-all duration-300 ease-in-out "
            : "-translate-y-2 duration-300 ease-in-out opacity-0 pointer-events-none "
        }`}
      >
        <div className="px-4 py-6 md:hidden">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button
                className="w-full text-left px-4 py-2"
                onClick={() => {
                  setOpen(false);
                  setOpenSearch(false);
                }}
              >
                <h1 className="cursor-pointer text-xl text-[#151516] font-medium">
                  {item.name}
                </h1>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
