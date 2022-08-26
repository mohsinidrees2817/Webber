import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  function togglemenu(){

  }
  return (
    <nav>
      <div className="bg-[#A5F3FC]/[.2]  w-full h-[11rem]">
        <header className="flex justify-between  mx-10 py-8 relative">
          <img
            src="./images/Logo.svg"
            alt="img here"
            className="w-20 h-16 inline"
          />
          <ul className="cursor-pointer font-normal absolute sm:static hidden sm:block mt-12 sm:mt-4 bg-white w-full sm:w-auto sm:bg-transparent ">
            <NavLink to="/" className=" hover:border-b-2 pb-2 border-black">
              <li className="   sm:inline m-3 text-[#18181B]  font-mulish ">
                Overview{" "}
              </li>
            </NavLink>
            <NavLink
              to="/pricing"
              className="  hover:border-b-2 pb-2 border-black"
            >
              <li className="   sm:inline m-3 text-[#18181B]  font-mulish ">
                Pricing
              </li>
            </NavLink>
            <NavLink
              to="/case-studies"
              className="  hover:border-b-2 pb-2 border-black"
            >
              {" "}
              <li className="   sm:inline m-3 text-[#18181B] font-mulish  ">
                Case Studies{" "}
              </li>
            </NavLink>
            <NavLink to="/faq" className="  hover:border-b-2 pb-2 border-black">
              <li className="   sm:inline m-3 text-[#18181B]  font-mulish "> FAQ </li>
            </NavLink>
          </ul>
          <img src="./images/menu.png" alt="" className="sm:hidden w-12 h-12" />
          {/* onClick={togglemenu} */}
          <button className="w-20 h-10 text-[#0E7490]  font-mulish bg-[#CFFAFE] rounded hidden sm:block">
            Sign In
          </button>
        </header>
      </div>
    </nav>
  );
};

export default Header;
