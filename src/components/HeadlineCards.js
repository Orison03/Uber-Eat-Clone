import React from 'react'
import Cards from './Cards'
import Pizza1 from "../assets/pizza1.jpg"
import Pizza2 from "../assets/pizza2.jpg"
import burger1 from "../assets/burger1.jpg"
import burger2 from "../assets/burger2.jpg"
import food1 from "../assets/food1.jpg"
import food2 from "../assets/food2.jpg"

const HeadlineCards = () => {
  return (
    <>
      {/* outer conatianer */}
      <main>
        <div className="h-[40%] py-12 mx-auto w-[95%] font-family">
          <h1 className="capitalize text-3xl font-black text-black pb-4 tracking-wide">
            fast order
          </h1>
          <article className="grid md:grid-cols-3 gap-y-6 md:gap-8">
            <Cards
              name="we deliver dessert too"
              subtitle="tasty treats"
              img={Pizza1}
            />
            <Cards
              name="Quality Meal Available"
              subtitle="pretty meals"
              img={Pizza2}
            />
            <Cards
              name="Queen size burger"
              subtitle="Goose bumps feel"
              img={burger1}
            />
            <Cards
              name="priest first burger"
              subtitle="sunday special"
              img={burger2}
            />
            <Cards
              name="new restaurants"
              subtitle="Through 24 / 7"
              img={food1}
            />
            <Cards
              name="sun's out BOGO'S"
              subtitle="through 8/26"
              img={food2}
            />
          </article>
        </div>
      </main>
    </>
  );
}

export default HeadlineCards