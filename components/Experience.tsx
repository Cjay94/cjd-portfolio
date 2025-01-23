import React, { Fragment } from "react";

import { skills, workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section className="py-10 w-full">
      <h1 className='heading'>
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full my-12 grid grid-cols-1 lg:grid-cols-4 gap-10 ">
        {workExperience.map((card, index) => (
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius='1.75rem'
            className='flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800  bg-[#04071d] bg-gradient-to-r from-[#04071d] to-[#0c0e23] rounded-[calc(1.75rem*0.96)]'
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img src={card.thumbnail} alt={card.thumbnail} className='w-16 md:w-20 lg:w-32' />
              <div className="lg:ms-5">
                <h1 className='text-start text-xl md:text-2xl font-bold'>
                  {card.title}
                </h1>
                <p className='text-start text-white-100 mt-3 font-semibold'>
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
