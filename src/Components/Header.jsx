import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showmenu, setShowmenu] = useState(window.innerWidth>640);
  useEffect(()=>{
    window.addEventListener('resize',()=>{
       setShowmenu(window.innerWidth>640);
     }
     )
  },[]
)


  console.log(showmenu);
  return (
    <nav>
      <div className="bg-[#A5F3FC]/[.2]  w-full h-[11rem]">
        <header className="flex justify-between  py-8  relative px-4 max-w-7xl z-10">
          <img
            src="./images/Logo.svg"
            alt="img here"
            className="w-20 h-16 inline"
          />
          
            <ul  className={`flex items-center  flex-col cursor-pointer absolute font-normal md:w-auto w-full sm:static sm:block mt-20  sm:mt-4
             bg-[#1F2937] p-4  text-white sm:w-auto sm:bg-transparent duration-300 ease-linear ${ !showmenu ? 'right-[-100%]' : 'right-0'}`}>
              <NavLink to="/" className=" hover:border-b-2 pb-2 border-black">
                <li className=" sm:inline m-3 sm:text-[#18181B]  font-mulish ">
                  Overview
                </li>
              </NavLink>
              <NavLink
                to="/pricing"
                className="  hover:border-b-2 pb-2 border-black"
              >
                <li className="   sm:inline m-3 sm:text-[#18181B]  font-mulish ">
                  Pricing
                </li>
              </NavLink>
              <NavLink
                to="/case-studies"
                className="  hover:border-b-2 pb-2 border-black"
              >
                {" "}
                <li className="   sm:inline m-3 sm:text-[#18181B] font-mulish  ">
                  Case Studies{" "}
                </li>
              </NavLink>
              <NavLink
                to="/faq"
                className="  hover:border-b-2 pb-2 border-black"
              >
                <li className="   sm:inline m-3 sm:text-[#18181B]  font-mulish ">
                  {" "}
                  FAQ{" "}
                </li>
              </NavLink>
            </ul>
          <img
            src="./images/menu.png" alt=""
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
