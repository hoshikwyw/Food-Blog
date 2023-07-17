import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import "../components/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" border-t-4 border-yellow-400 ">
      {/* search & flag */}
      <div className=" flex w-[90%] justify-between">
        {/* left side search bar  */}
        <div className=" flex items-center w-[300px] md:w-auto lg:w-auto px-3 ms-[15%] lg:ms-20 md:ms-10 rounded-full mt-2 border border-[#b5b0b028] hover:border-[#b5b0b08f] bg-slate-100 ">
          <input
            type="text"
            placeholder="Search"
            className=" outline-none border-e-2 bg-transparent text-sm "
          />
          <p className=" text-lg ps-2 cursor-pointer">
            <AiOutlineSearch />
          </p>
        </div>
        {/* right side icons  */}
        <div className=" flex gap-3 cursor-pointer invisible lg:visible md:visible">
          <div className=" shape-bg pt-2 px-2 w-8 h-12 text-sm hover:bg-blue-400 ">
            <BsTwitter />
          </div>
          <div className=" shape-bg pt-2 px-2 w-8 h-12 text-base hover:bg-blue-800">
            <BiLogoFacebook />
          </div>
          <div className=" shape-bg pt-2 px-2 w-8 h-12 text-sm hover:bg-pink-600">
            <BsInstagram />
          </div>
          <div className=" shape-bg pt-2 px-2 w-8 h-12 text-sm hover:bg-red-600">
            <TfiYoutube />
          </div>
        </div>
      </div>
      {/* title  */}
      <div className=" w-screen flex justify-center mt-6 ">
        <img
          className=" w-[280px] cursor-pointer"
          src="https://2.bp.blogspot.com/-rZzGGqrUuT4/WbKiVBzhezI/AAAAAAAAADw/txITCPwSuR0aoioqBnzPXhbfHVx0MCXKACK4BGAYYCw/s1600/Logo.png"
          alt=""
        />
      </div>
      {/* categories navbar  */}
      <div className=" flex  gap-3 w-full justify-center mt-6 border-t border-b py-4 shadow-lg main">
        <Link to={"/"}>
          <div className="uppercase cursor-pointer font-bold text-[#413f3fe0] hover:text-yellow-400 border-e-2 pe-2 item-home ">
            Home
          </div>
        </Link>
        <Link to={"/meals"}>
          <div className="uppercase cursor-pointer font-bold text-[#413f3fe0] hover:text-yellow-400 border-e-2 pe-2 item">
            posts
          </div>
        </Link>
        <Link to={"/detail"}>
          <div className=" uppercase cursor-pointer font-bold text-[#413f3fe0] hover:text-yellow-400 border-e-2 pe-2 item">
            Blog Details
          </div>
        </Link>
        <Link to={"/contact"}>
          <div className=" uppercase cursor-pointer font-bold text-[#413f3fe0] hover:text-yellow-400 item">
            Contact Me
          </div>
        </Link>
      </div>
      {/* drop-down navbar  */}
      <div className=" w-full drop-down relative">
        <div className=" flex gap-9 w-full justify-center border-t py-4 shadow-lg ">
          <Link to={"/"}>
            <button
              onClick={toggleDropdown}
              className=" text-xl uppercase cursor-pointer font-bold text-[#413f3fe0] hover:text-yellow-400 ">
              Home
            </button>
          </Link>
          <button onClick={toggleDropdown} className=" cursor-pointer text-xl">
            <IoIosArrowDown />
          </button>
        </div>
        {isOpen && (
          <div className=" absolute left-[25%] z-10 w-48 origin-top-right rounded bg-white shadow-lg">
            <div className=" py-3 px-5 flex flex-col gap-5">
              <Link to={"/meals"}>
                <button className=" uppercase cursor-pointer font-bold text-[#413f3fe0] hover:text-yellow-400 ">
                  posts
                </button>
              </Link>
              <Link to={"/detail"}>
                <button className=" uppercase cursor-pointer font-bold text-[#413f3fe0] hover:text-yellow-400 ">
                  blog details
                </button>
              </Link>
              <Link to={"/contact"}>
                <button className=" uppercase cursor-pointer font-bold text-[#413f3fe0] hover:text-yellow-400 ">
                  contact me
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
