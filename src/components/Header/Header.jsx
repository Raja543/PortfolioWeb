import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

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
          <HashLink to="/">
            <img
              className="w-20 cursor-pointer"
              src="/assets/Logo.svg"
              alt="Logo"
              width={20}
              height={20}
            />
          </HashLink>
        </div>
        <ul
          className={`md:flex md:items-center hidden space-x-3 text-xl  ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <HashLink to="/#about" smooth={true} duration={300}>
              <span className="px-4 text-[#fff]  hover:text-[#EFBF6B] ">
                About
              </span>
            </HashLink>
          </li>
          <li>
            <HashLink to="/#portfolio" smooth={true} duration={300}>
              <span className="px-4 text-[#fff]  hover:text-[#EFBF6B]">
                Portfolio
              </span>
            </HashLink>
          </li>
          <li>
            <HashLink to="/#contact" smooth={true} duration={300}>
              <span className="px-4 text-[#fff]  hover:text-[#EFBF6B]">
                Contact
              </span>
            </HashLink>
          </li>
        </ul>

        <div className="md:flex md:items-center hidden space-x-4">
          <HashLink to="#">
            <button className="bg-[#EFBF6B]  hover:cursor-pointer px-6 py-2 text-xl font-medium rounded-2xl">
              Resume
            </button>
          </HashLink>
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
          className={`fixed md:hidden top-0 right-0 h-full w-60 bg-[#34353A] bg-opacity-70 shadow-lg z-20 transform ease-in-out duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0`}
        >
          <div className="p-4 flex items-center justify-center">
            <ul className="space-y-4 mt-12">
              <li className="text-[#fff] pt-8 pb-2 px-2 text-xl">
                <HashLink to="/#about" smooth={true} duration={300}>
                  About
                </HashLink>
              </li>
              <li className="text-[#fff] p-2 text-xl">
                <HashLink to="/#portfolio" smooth={true} duration={300}>
                  Portfolio
                </HashLink>
              </li>
              <li className="p-2 text-[#fff] text-xl">
                <HashLink to="/#contact" smooth={true} duration={300}>
                  Contact
                </HashLink>
              </li>
              <li>
                <HashLink to="">
                  <button className="bg-[#EFBF6B]  hover:cursor-pointer px-4 py-2  my-2 text-lg font-medium rounded-2xl">
                    Resume
                  </button>
                </HashLink>
              </li>
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

{
  /* <button className="bg-[#EFBF6B]  hover:cursor-pointer px-4 py-2  my-2 text-lg font-medium rounded-2xl">
Resume
</button> */
}
