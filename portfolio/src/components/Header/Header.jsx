import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <header className="bg-[#34353A] w-full">
      <nav className="flex justify-between items-center mx-auto px-6 py-6 md:px-12">
        <div className="flex items-center">
          <NavLink to="/">
            <img
              className="w-40 cursor-pointer"
              src="/assets/Logo.svg"
              alt="Logo"
            />
          </NavLink>
        </div>
        <ul
          className={`md:flex md:items-center hidden space-x-3 text-xl  ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <NavLink to="#">
            <li className=" px-4 text-gray-400 hover:text-[#fff]">About</li>
          </NavLink>
          <NavLink to="#">
            <li className="px-4  text-gray-400 hover:text-[#fff]">Portfolio</li>
          </NavLink>
          <NavLink to="#">
            <li className="px-4  text-gray-400 hover:text-[#fff]">Contact</li>
          </NavLink>
        </ul>
        <div className="md:flex md:items-center hidden space-x-4">
          <NavLink to="#">
            <button className="bg-orange max-w-fit text-textwhite font-[Albert-sans] py-2 px-6 rounded-md duration-500">
              Login
            </button>
          </NavLink>
        </div>
        {/* Sidebar Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none"
          >
            {menuOpen ? (
              <i className="fas fa-times hidden text-[#fff]" />
            ) : (
              <i className="fas fa-bars text-xl text-[#fff]" />
            )}
          </button>
        </div>
        {/* Sidebar Menu */}
        <div
          className={`fixed md:hidden top-0 right-0 h-full w-56 bg-[#34353A] bg-opacity-70 shadow-lg z-20 transform ease-in-out duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`}
        >
          <div className="p-4 flex items-center justify-center">
            <ul className="space-y-4 mt-12">
              <NavLink to="#">
                <li className="text-[#fff] pt-4 pb-2 px-2">About</li>
              </NavLink>
              <NavLink to="#">
                <li className="text-[#fff] p-2">Portfolio</li>
              </NavLink>
              <NavLink to="#">
                <li className="p-2 text-[#fff]">Contact</li>
              </NavLink>
            </ul>
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
            >
              <i className="fas fa-times text-2xl text-[#fff]" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
