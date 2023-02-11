import React from "react";


const Cards = ({name,subtitle,img}) => {
  return (
    <>
      <div className="w-full h-full relative">
        <div className="bg-black/50 absolute w-full h-full rounded-3xl p-6 grid grid-rows-5 cursor-pointer ease-in duration-300 hover:bg-black/0">
          {/* order info */}
          <div className="row-span-4">
            <p className="capitalize text-white font-black text-lg md:text-sm lg:text-base tracking-wide ">
             {name}
            </p>
            <p className="capitalize text-white font-black text-sm tracking-wide">
              {subtitle}
            </p>
          </div>
          {/* btn container */}
          <div className="row-span-1">
            <button className="text-black font-bold tracking-wide capitalize bg-white px-4 py-2 rounded-2xl ease-in duration-300 hover:bg-[#04C46C] cursor-pointer md:text-xs hover:text-white">
              order now
            </button>
          </div>
        </div>
        <img src={img} alt="pizza one" className="rounded-3xl" />
      </div>
    </>
  );
};

export default Cards;
