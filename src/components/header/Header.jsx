import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/Logo.png";
import BrownDiamond from "../../assets/DiamondIcon/Brown Diamond Icon.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent w-full">
      <div className="h-[112px] px-[96px] flex justify-between items-center text-[#F6F6F6]">
        <div className="w-auto">
          <img
            className="w-[80px] h-[80px]"
            src={logoImage}
            alt="Website LOGO"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-auto">
          <ul className="flex gap-4 items-center">
            <li>
              <Link className="text-base font-normal font-monda" to="/">
                Home
              </Link>
            </li>
            <img
              className="w-[13px] h-[16px]"
              src={BrownDiamond}
              alt="Diamond Icon"
            />
            <li>
              <Link className="text-base font-normal font-monda" to="/about">
                About
              </Link>
            </li>
            <img
              className="w-[13px] h-[16px]"
              src={BrownDiamond}
              alt="Diamond Icon"
            />
            <li>
              <Link className="text-base font-normal font-monda" to="/menus">
                Menus
              </Link>
            </li>
            <img
              className="w-[13px] h-[16px]"
              src={BrownDiamond}
              alt="Diamond Icon"
            />
            <li>
              <Link
                className="text-base font-normal font-monda"
                to="/reservanceCheck"
              >
                Booking Info
              </Link>
            </li>
            <img
              className="w-[13px] h-[16px]"
              src={BrownDiamond}
              alt="Diamond Icon"
            />
            <li>
              <Link className="text-base font-normal font-monda" to="/shop">
                Shop
              </Link>
            </li>
            <img
              className="w-[13px] h-[16px]"
              src={BrownDiamond}
              alt="Diamond Icon"
            />
            <li>
              <Link className="text-base font-normal font-monda" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl">
            &#9776; {/* Hamburger Icon */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black w-full px-6 py-4 text-center">
          <ul className="flex flex-col gap-4 items-center text-[#F6F6F6]">
            {" "}
            {/* Ensure text color is visible */}
            <li>
              <Link
                className="text-base font-normal font-monda"
                to="/"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal font-monda"
                to="/about"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal font-monda"
                to="/menus"
                onClick={toggleMenu}
              >
                Menus
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal font-monda"
                to="/reservanceCheck"
                onClick={toggleMenu}
              >
                Booking Info
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal font-monda"
                to="/shop"
                onClick={toggleMenu}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="text-base font-normal font-monda"
                to="/contact"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
