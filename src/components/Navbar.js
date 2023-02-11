import React, { useState } from "react";
import { AiOutlineSearch, AiFillApple, AiFillAndroid } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import logo2 from "../assets/icons8-uber-eats-app-100.svg";
import logo from "../assets/icons8-uber-eats-app-48.svg";
import { HiClock, HiLocationMarker } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <>
      <section className="w-full h-screen text-black px-2">
        {/* hero message */}
        <article className="absolute top-[25%] md:top-[35%] w-[97%]">
          <h1 className="text-black text-4xl font-bold md:text-5xl lg:text-6xl pb-8 font-family">
            Order food to your door
          </h1>
          {/* location input */}
          <div className="max-w-[96%] md:max-w-[85%] md:grid lg:max-w-[75%] grid-cols-11 gap-x-2 items-center font-family">
            {/* delivery */}
            <div className="col-span-6 md:col-span-5 flex items-center w-full bg-white px-3 py-4 mb-2">
              <HiLocationMarker size={25} />
              <input
                type="text"
                className="bg-transparent pl-2 font-bold focus:outline-none text-sm tracking-wider text-black w-full"
                placeholder="Enter delivery address"
              />
            </div>
            {/* deliver now */}
            <div className="col-span-4 grid grid-cols-5 items-center w-full bg-white px-3 py-4 mb-2 gap-x-12 md:gap-x-0">
              <div className="flex items-center col-span-4">
                <HiClock size={23} />
                <p className="pl-2 font-black tracking-wide text-sm lg:text-base">Deliver now</p>
              </div>
              {/* arrow down */}
              <div className="col-span-1">
                <FaChevronDown />
              </div>
            </div>
            {/* find food */}
            <div className="col-span-2 text-lg">
              <button className="flex items-center bg-black w-full justify-center py-4 md:py-[1rem] mb-2 text-white font-bold rounded-md hover:bg-[#04C46C] ease-in duration-500 tracking-wider capitalize">
                find food
              </button>
            </div>
          </div>
          {/* sign up */}
          <div className="font-family text-white tracking-wide font-black pt-8">
            <p><span className="underline w-fit pr-1 cursor-pointer
            ">Sign In</span>for your recent addresses</p>
          </div>
        </article>
        <nav className="w-[100%] h-[15%] mx-auto flex justify-between items-center z-[-1]">
          {/* menu icon and uner eat text*/}
          <div className="flex items-center mr-28">
            <TiThMenu
              size={30}
              className="text-black font-bold cursor-pointer"
              onClick={() => setNav(!nav)}
            />
            <div className="pl-8 cursor-pointer">
              <p className="text-2xl capitalize font-semibold md:text-4xl lg:text-4xl drop-shadow-md shadow-slate-300">
                uber <span className="font-bold text-[#04C46C]">eats</span>
              </p>
            </div>
          </div>
          {/* search */}
          <div className="hidden lg:flex items-center bg-white py-4 rounded-full pr-28 pl-6 font-family">
            <AiOutlineSearch className="text-black" />
            <input
              type="text"
              placeholder="search for foods"
              className="focus:outline-none bg-transparent text-black ml-3 text-sm font-bold"
            />
          </div>
          {/* btn container */}
          <div className="hidden lg:flex items-center font-family">
            <button className="ml-16 mr-6 flex items-center bg-white px-5 py-3 text-black font-semibold rounded-full hover:bg-slate-200 tracking-wide">
              <BsPersonFill size={28} className="pr-2" /> Log in
            </button>
            <button className="flex items-center bg-black px-5 py-4 text-white font-semibold rounded-full hover:bg-[#04C46C] ease-in duration-500 border-transparent tracking-wide">
              Sign up <FaChevronUp size={22} className="pl-2 animate-bounce" />
            </button>
          </div>
          {/* logo */}
          <div className="md">
            <img src={logo} alt="logo" className="md:w-16 h-14 lg:hidden" />
          </div>
        </nav>
        {/* overlay */}
        <div
          className={
            nav ? "w-full h-screen fixed bg-black/60 top-0 left-0 z-[5]" : ""
          }
          onClick={() => setNav(!nav)}
        ></div>
        {/* sidemenu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 h-screen w-[75%] md:w-[34%] lg:w-[25%] bg-white z-10 flex flex-col justify-between ease-in duration-500"
              : "fixed top-0 left-[-100%] h-screen w-[75%] md:w-[34%] lg:w-[25%] bg-white z-15 flex flex-col justify-between ease-in duration-500"
          }
        >
          {/* upper side of sidebar */}
          <div>
            {/* btn container */}
            <div className="flex flex-col justify-between items-center mt-7 font-family space-y-2 mb-6">
              <button className="flex items-center bg-black w-[90%] justify-center py-4 text-white font-bold rounded-xl hover:bg-[#04C46C] ease-in duration-500 tracking-wide">
                Sign up
              </button>
              <button className="flex items-center bg-[#EEEEEE] w-[90%] justify-center py-4 text-black font-bold rounded-xl hover:bg-slate-300 ease-in duration-500 tracking-wide">
                Log in
              </button>
            </div>
            {/* menu info */}
            <div className="w-[90%] pl-4 cursor-pointer">
              <p className="font-family text-black text-sm font-extrabold tracking-wide pb-4">
                Create a business account
              </p>
              <p className="font-family text-black text-sm font-extrabold tracking-wide pb-4">
                Add your restaurant
              </p>
              <p className="font-family text-black text-sm font-extrabold tracking-wide">
                Sign up to delivery
              </p>
            </div>
          </div>
          {/* lower part of the sidebar */}
          <div className="font-family text-black font-bold w-[80%] mb-16">
            <div className="flex items-center mb-4 space-x-2 ml-1">
              <div>
                <img src={logo2} alt="logo" />
              </div>
              {/* text */}
              <div>
                <p className="text-sm md:text-normal">
                  There's more to love in the app
                </p>
              </div>
            </div>
            {/* phones */}
            <div className="flex space-x-8 cursor-pointer ml-3 text-sm">
              {/* iphone */}
              <div className="flex items-center bg-[#EEEEEE] rounded-full p-3 hover:bg-slate-200">
                <AiFillApple /> iPhone
              </div>
              <div className="flex items-center bg-[#EEEEEE] rounded-full p-3 hover:bg-slate-200">
                <AiFillAndroid className="mr-2" /> Android
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
