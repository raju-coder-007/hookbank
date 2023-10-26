import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className="w-full flex p-6 justify-between items-center bg-primary navbar ">
        <img
          src={logo}
          alt="logo"
          className="w-[124px] h-[32px] cursor-pointer"
        />
        <ul className="list-none sm:flex text-white justify-end items-center hidden gap-6 flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px]`}>
              {nav.title}
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
            className="w-[28px] h-[28px] object-contain"
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } bg-black-gradient absolute top-20 right-0 p-6 mx-4 my-2 min-w-[140px] rounded-xl  sidebar`}>
            <ul className="text-white list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] mb-4`}>
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
