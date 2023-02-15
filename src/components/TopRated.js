import React, { useState } from "react";
import { data } from "../data";

const TopRated = () => {
  const [foods, setFoods] = useState(data);

  const filterNames = (name) =>{
    setFoods(data.filter((food) => {
      return food.category === name
    }))
  }

  const filterPrice = (price) => {
    setFoods(data.filter((food) => {
      return food.price === price
    }))
  }

  return (
    <>
      <main className="w-[95%] mx-auto font-family capitalize tracking-wide">
        <h1 className="text-center py-8 font-black text-3xl text-black">
          top rated menu items
        </h1>
        {/* Filter btns */}
        <div className="h-[30%] flex flex-col justify-between md:flex-row">
          {/* name btns */}
          <div>
            <h1 className="font-black">
              filter by :<span className="text-[#04C46C]"> name</span>
            </h1>
            <div className="py-4 flex justify-between items-center space-x-3 font-black text-sm md:text-xs lg:text-sm">
              <button
                className="capitalize bg-[#04C46C] text-[#04C46C]border border green border-[#04C46C] px-2 py-1 text-white rounded-lg shadow-lg ease-in-out duration-300 hover:bg-white hover:text-[#04C46C] tracking-wide"
                onClick={() => setFoods(data)}
              >
                all
              </button>
              <button
                className="capitalize bg-[#04C46C] text-[#04C46C]border border green border-[#04C46C] px-2 py-1 text-white rounded-lg shadow-lg ease-in-out duration-300 hover:bg-white hover:text-[#04C46C] tracking-wide"
                onClick={() => filterNames("pizza")}
              >
                pizza
              </button>
              <button
                className="capitalize bg-[#04C46C] text-[#04C46C]border border green border-[#04C46C] px-2 py-1 text-white rounded-lg shadow-lg ease-in-out duration-300 hover:bg-white hover:text-[#04C46C] tracking-wide"
                onClick={() => filterNames("burger")}
              >
                burger
              </button>
              <button
                className="capitalize bg-[#04C46C] text-[#04C46C]border border green border-[#04C46C] px-2 py-1 text-white rounded-lg shadow-lg ease-in-out duration-300 hover:bg-white hover:text-[#04C46C] tracking-wide"
                onClick={() => filterNames("salad")}
              >
                salads
              </button>
              <button
                className="capitalize bg-[#04C46C] text-[#04C46C]border border green border-[#04C46C] px-2 py-1 text-white rounded-lg shadow-lg ease-in-out duration-300 hover:bg-white hover:text-[#04C46C] tracking-wide"
                onClick={() => filterNames("chicken")}
              >
                chicken
              </button>
            </div>
          </div>
          {/* price btns */}
          <div>
            <h1 className="mb-4 font-black">
              filter by :<span className="text-[#04C46C]"> price</span>
            </h1>
            <div
              className="flex justify-between items-center
            font-black text-xs md:text-xs lg:text-sm space-x-1"
            >
              <button
                className="flex items-center capitalize bg-black text-[#04C46C]border border green border-transparent px-2 md:px-3 py-1 text-white rounded-lg shadow-lg ease-in-out duration-300 hover:bg-black/80  tracking-wide"
                onClick={() => filterPrice("10")}
              >
                <span className="text-base pr-1">¢</span>10.00
              </button>
              <button
                className="flex items-center capitalize bg-black text-[#04C46C]border border green border-transparent px-2 md:px-3 py-1 text-white rounded-lg shadow-lg ease-in-out duration-300 hover:bg-black/80  tracking-wide"
                onClick={() => filterPrice("15")}
              >
                <span className="text-base pr-1">¢</span> 15.00
              </button>
              <button
                className="flex items-center capitalize bg-black text-[#04C46C]border border green border-transparent px-2 md:px-3 py-1 text-white rounded-lg shadow-lg ease-in-out duration-300 hover:bg-black/80  tracking-wide"
                onClick={() => filterPrice("20")}
              >
                <span className="text-base pr-1">¢</span> 20.00
              </button>
              <button
                className="flex items-center capitalize bg-black text-[#04C46C]border border green border-transparent px-2 md:px-3 py-1 text-white rounded-lg shadow-lg ease-in-out duration-300 hover:bg-black/80  tracking-wide"
                onClick={() => filterPrice("25")}
              >
                <span className="text-base pr-1">¢</span> 25.00
              </button>
              <button
                className="flex items-center capitalize bg-black text-[#04C46C]border border green border-transparent px-2 md:px-3 py-1 text-white rounded-lg shadow-lg ease-in-out duration-300 hover:bg-black/80 tracking-wide"
                onClick={() => filterPrice("30")}
              >
                <span className="text-base pr-1">¢</span> 30.00
              </button>
            </div>
          </div>
        </div>
        {/* foods */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 py-12">
          {foods.map((food) => {
            const { id, name, image, price } = food;
            return (
              <div
                className="w-full shadow-lg rounded-t-xl md:hover:scale-110 rounded-lg ease-in-out duration-300 cursor-pointer"
                key={id}
              >
                <img
                  src={image}
                  alt={name}
                  className="h-[200px] w-full object-cover rounded-t-lg"
                />
                {/* card subInfo */}
                <div className="flex justify-between items-center py-6 px-3 font-black">
                  <p>{name}</p>
                  <p>
                    <span className="text-lg pr-1">¢</span>
                    {price}.00
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default TopRated;
