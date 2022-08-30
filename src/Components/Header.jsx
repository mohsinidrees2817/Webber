import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  let [showmenu, setShowmenu] = useState(window.innerWidth>768);
  console.log(showmenu);
  return (
    <nav>
      <div className="bg-[#A5F3FC]/[.2]  w-full h-[11rem]">
        <header className="flex justify-between  py-8  relative mx-auto max-w-7xl z-10">
          <img
            src="./images/Logo.svg"
            alt="img here"
            className="w-20 h-16 inline"
          />
          {showmenu && <menu>
            <ul className="cursor-pointer absolute left-0 font-normal p-2 sm:static sm:block mt-16 sm:mt-4 bg-white w-full sm:w-auto sm:bg-transparent">
              <NavLink to="/" className=" hover:border-b-2 pb-2 border-black">
                <li className=" sm:inline m-3 text-[#18181B]  font-mulish ">
                  Overview
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
              <NavLink
                to="/faq"
                className="  hover:border-b-2 pb-2 border-black"
              >
                <li className="   sm:inline m-3 text-[#18181B]  font-mulish ">
                  {" "}
                  FAQ{" "}
                </li>
              </NavLink>
            </ul>
          </menu>
          }   
          <img
            src="./images/menu.png"
            onClick={()=>setShowmenu(!showmenu)}
            className="sm:hidden w-12 h-12"
          />
          <button className="w-20 h-10 text-[#0E7490]  font-mulish bg-[#CFFAFE] rounded hidden sm:block">
            Sign In
          </button>
        </header>
      </div>
    </nav>
  );
};

export default Header;
