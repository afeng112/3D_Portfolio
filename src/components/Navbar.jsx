import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(""); // State variable to track the active link
  const [toggle, setToggle] = useState(false); // State variable to toggle dropdown menu

  // Rendering the navigation bar
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20
  bg-primary`}
    >
      {/* Navbar Dimensions */}
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and site name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); // Resetting active state
            window.scrollTo(0, 0); // Scrolling to the top of the page
          }}
        >
          <img src={logo} alt="logo" className="w-11 h-11 object-contain" />
          <p className="text-white text-[16px] font-bold cursor-pointer flex">
            Anthony Feng &nbsp;
            <span className="sm:block hidden">
              | Aspiring Software and Web Developer
            </span>
          </p>
        </Link>
        {/* Links : About, Work, Contact*/}
        {/* Rendering navigation links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[20px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)} // Setting active link on click
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* Rendering dropdown menu for small devices */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* Toggling the menu icon */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} // Toggling the dropdown menu
          />
          {/* Dropdown menu */}
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6
          black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10
          rounded-xl`}
          >
            {/* Rendering dropdown links */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[18px]`}
                  onClick={() => {
                    setToggle(!toggle); // Toggling the dropdown menu
                    setActive(link.title); // Setting active link
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Exporting Navbar component as default
