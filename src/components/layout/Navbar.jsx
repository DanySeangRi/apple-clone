import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GrShop } from "react-icons/gr";
import Dropdown from "../common/Dropdown";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import menuItems from "./data";
import Search from "../common/Search";
import List from "../common/List";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        className="fixed top-0 left-0 z-50 h-12 w-full
       bg-[#f5f5f7cc] backdrop-blur-md [&:has(.element:hover)]:bg-white" 
      >
        <ul
          className=" flex items-center w-auto
        justify-between md:justify-center gap-6 h-12 "
        >
          <div className="ml-5">
            <List name={<FaApple size={20} />} to='/'/>
          </div>

          {/* Desktop Menu - Hidden on mobile */}
          <div className=" element hidden md:flex items-center gap-6">
            <Dropdown
           
              name="Store"
              items={menuItems[0].items}
              firstTitle={menuItems[0].firstTitle}
              foot1={menuItems[0].foot1}
              secondTitle={menuItems[0].secondTitle}
              secondItem={menuItems[0].secondItem}
              thirdTittle={menuItems[0].thirdTittle}
              thirdItem={menuItems[0].thirdItem}
            />

            <Dropdown
              name="Mac"
              items={menuItems[1].items}
              firstTitle={menuItems[1].firstTitle}
              foot1={menuItems[1].foot1}
              foot2={menuItems[1].foot2}
              secondTitle={menuItems[1].secondTitle}
              secondItem={menuItems[1].secondItem}
              thirdTittle={menuItems[1].thirdTittle}
              thirdItem={menuItems[1].thirdItem}
            />

            <Dropdown
              name="iPad"
              items={menuItems[2].items}
              firstTitle={menuItems[2].firstTitle}
              foot1={menuItems[2].foot1}
              secondTitle={menuItems[2].secondTitle}
              secondItem={menuItems[2].secondItem}
              thirdTittle={menuItems[2].thirdTittle}
              thirdItem={menuItems[2].thirdItem}
            />

            <Dropdown
              to='/iphone'
              name="iPhone"
              items={menuItems[3].items}
              firstTitle={menuItems[3].firstTitle}
              foot1={menuItems[3].foot1}
              foot2={menuItems[3].foot2}
              secondTitle={menuItems[3].secondTitle}
              secondItem={menuItems[3].secondItem}
              thirdTittle={menuItems[3].thirdTittle}
              thirdItem={menuItems[3].thirdItem}
            />
            <Dropdown
              name="Watch"
              items={menuItems[4].items}
              firstTitle={menuItems[4].firstTitle}
              foot1={menuItems[4].foot1}
              foot2={menuItems[4].foot2}
              secondTitle={menuItems[4].secondTitle}
              secondItem={menuItems[4].secondItem}
              thirdTittle={menuItems[4].thirdTittle}
              thirdItem={menuItems[4].thirdItem}
            />
            <Dropdown
              name="Vision"
              items={menuItems[5].items}
              firstTitle={menuItems[5].firstTitle}
              foot1={menuItems[5].foot1}
              secondTitle={menuItems[5].secondTitle}
              secondItem={menuItems[5].secondItem}
              thirdTittle={menuItems[5].thirdTittle}
              thirdItem={menuItems[5].thirdItem}
            />
            <Dropdown
              name="Airpods"
              items={menuItems[6].items}
              firstTitle={menuItems[6].firstTitle}
              foot1={menuItems[6].foot1}
              secondTitle={menuItems[6].secondTitle}
              secondItem={menuItems[6].secondItem}
              thirdTittle={menuItems[6].thirdTittle}
              thirdItem={menuItems[6].thirdItem}
            />
            <Dropdown
              name="TV & Home"
              items={menuItems[7].items}
              firstTitle={menuItems[7].firstTitle}
              secondTitle={menuItems[7].secondTitle}
              secondItem={menuItems[7].secondItem}
              thirdTittle={menuItems[7].thirdTittle}
              thirdItem={menuItems[7].thirdItem}
            />
            <Dropdown
              name="Entertainment"
              items={menuItems[8].items}
              firstTitle={menuItems[8].firstTitle}
              secondTitle={menuItems[8].secondTitle}
              secondItem={menuItems[8].secondItem}
            />
            <Dropdown
              name="Accessories"
              items={menuItems[9].items}
              firstTitle={menuItems[9].firstTitle}
              secondTitle={menuItems[9].secondTitle}
              secondItem={menuItems[9].secondItem}
            />
            <Dropdown
              name="Support"
              items={menuItems[10].items}
              firstTitle={menuItems[10].firstTitle}
              foot1={menuItems[10].foot1}
              secondTitle={menuItems[10].secondTitle}
              secondItem={menuItems[10].secondItem}
              thirdTittle={menuItems[10].thirdTittle}
              thirdItem={menuItems[10].thirdItem}
            />
          </div>

          {/* Search and Shop Icons - Hidden on mobile */}
          <div className="hidden md:flex mr-4 gap-5 items-center element">
            <Search
              name={<CiSearch size={20} />}
              searchItem={menuItems[11].searchItem}
            />
            <GrShop size={20} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden mr-4 gap-5 items-center">
            <CiSearch size={20} />
            <GrShop size={20} />
            <button onClick={() => setOpen(!open)} className="">
              {open ? <IoMdClose size={24} /> : <GiHamburgerMenu size={20} />}
            </button>
          </div>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-12 left-0 w-full bg-white z-40 overflow-y-auto transition-all duration-300 ease-in-out ${
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
                onClick={() => setOpen(false)}
              >
                <h1 className="cursor-pointer text-3xl text-[#151516] font-medium">
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
