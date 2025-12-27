import React, { useState, useEffect } from "react";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { GrShop } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

import Dropdown from "../common/Dropdown";
import ClickDropdown from "../common/ClickDropdown";
import List from "../common/List";
import menuItems from "./dropdownData";
import { icon } from "../common/Icon";
import { IoIosSearch } from "react-icons/io";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false); // Mobile menu
  const [openSearch, setOpenSearch] = useState(false); // Mobile search
  const [hovered, setHovered] = useState(false); // Desktop hover blur
  const [desktopSearchOpen, setDesktopSearchOpen] = useState(false); // Desktop search click
  const [desktopShopOpen, setDesktopShopOpen] = useState(false); // Desktop shop click

  const closeAll = () => {
    setOpenMenu(false);
    setOpenSearch(false);
    setDesktopSearchOpen(false);
    setDesktopShopOpen(false);
  };

  // Lock body scroll for mobile overlays
  useEffect(() => {
    document.body.style.overflow = openMenu || openSearch ? "hidden" : "auto";
  }, [openMenu, openSearch]);

  return (
    <>
      {/*NAVBAR  */}
      <nav className="fixed top-0 left-0 z-50 w-full bg-[#202020] backdrop-blur">
        <ul className="flex items-center justify-between md:justify-center gap-6 h-12">
          {/* Logo */}
          <div className="ml-5 text-white">
            <List name={<FaApple size={20} />} to="/" />
          </div>

          {/* Desktop Menu (hover blur) */}
          <div
            className="hidden md:flex items-center gap-6"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {menuItems.slice(0, 11).map((item, index) => (
              <Dropdown key={index} {...item} />
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex mr-4 gap-5 items-center text-white">
            <ClickDropdown
              name={<IoIosSearch size={20} />}
              searchItem={menuItems[11].searchItem}
              icon={<IoIosSearch size={22} />}
              icons={<FaArrowRightLong className="text-gray-400" />}
              header={
                <input
                  type="search"
                  placeholder="Search apple.com"
                  className="w-240 focus:outline-none"
                />
              }
              titleList="Quick Links"
              isOpen={desktopSearchOpen}
              setIsOpen={setDesktopSearchOpen}
            />

            <ClickDropdown
              name={<GrShop size={20} />}
              searchItem={menuItems[12].shopItem}
              header="Your Bag is empty."
              icons={icon[0].icon1}
              titleList="My Profile"
              isOpen={desktopShopOpen}
              setIsOpen={setDesktopShopOpen}
            />
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden mr-4 gap-5 items-center text-white">
            <button
              onClick={() => {
                setOpenSearch(!openSearch);
                setOpenMenu(false);
              }}
            >
              {openSearch ? <IoMdClose size={24} /> : <IoIosSearch size={20} />}
            </button>

            <GrShop size={20} />

            <button
              onClick={() => {
                setOpenMenu(!openMenu);
                setOpenSearch(false);
              }}
            >
              {openMenu ? (
                <IoMdClose size={24} />
              ) : (
                <GiHamburgerMenu size={20} />
              )}
            </button>
          </div>
        </ul>
      </nav>

      {/*  DESKTOP HOVER BLUR  */}
      {hovered && (
        <div
          className="fixed
         inset-0 z-30
          bg-black/10
           backdrop-blur
            pointer-events-none transition-opacity duration-300"
        />
      )}

      {/*  DESKTOP CLICK BLUR  */}
      {(desktopSearchOpen || desktopShopOpen) && (
        <div
          className="fixed inset-0 z-30 bg-black/10 backdrop-blur transition-opacity duration-300"
          onClick={() => {
            setDesktopSearchOpen(false);
            setDesktopShopOpen(false);
          }}
        />
      )}

      {/*  MOBILE CLICK BLUR  */}
      {(openMenu || openSearch) && (
        <div
          className="fixed inset-0 z-30 bg-black/10 backdrop-blur transition-opacity duration-300"
          onClick={closeAll}
        />
      )}

      {/* MOBILE PANEL  */}
      {(openMenu || openSearch) && (
        <div className="fixed top-12 left-0 w-full h-screen bg-[#161617] z-40 px-4 py-6 md:hidden text-white translate-y-0 transition-all duration-300">
          {/* Mobile Search */}
          {openSearch && (
            <>
              <input
                type="search"
                placeholder="Search apple.com"
                className="w-full border-b pb-2 mb-4 focus:outline-none text-lg"
              />
              <h3 className="text-sm text-white mb-2">Quick Links</h3>
              {menuItems[11].searchItem.map((item, index) => (
                <p key={index} className="py-3 text-lg">
                  {item}
                </p>
              ))}
            </>
          )}

          {/* Mobile Menu */}
          {openMenu && (
            <>
              {menuItems.slice(0, 11).map((item, index) => (
                <button
                  key={index}
                  className="w-full text-left py-3 text-xl font-medium"
                  onClick={closeAll}
                >
                  {item.name}
                </button>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
