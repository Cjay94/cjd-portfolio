import { IoDocumentTextOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section className='pt-36 pb-20'>

      {/**  Link: https://ui.aceternity.com/components/spotlight*/}
      <div>
        <Spotlight className='-top-40 -left-10 h-screen md:-left-32 md:-top-20' fill='white' />
        <Spotlight className='h-[80vh] w-[50vw] top-10 left-full' fill='purple' />
        <Spotlight className='h-[80vh] w-[50vw] top-28 left-80' fill='blue' />
      </div>

      {/**  Link: https://ui.aceternity.com/components/grid-and-dot-backgrounds */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-[22rem]">
            Welcome to my <span className='text-purple'>front-End</span> ShowCase
          </p>


          {/* Link: https://ui.aceternity.com/components/text-generate-effect */}
          <TextGenerateEffect
            words='Crafting Digital Experiences from Creative Ideas.'
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
          />

          <p className="text-center mb-4 text-sm md:tracking-wider md:text-lg lg:text-2xl">
            Hi! I&apos;m Chad, a Front-End Developer based in Cape Town, South Africa.
          </p>

          <div className="flex gap-6 flex-col md:flex-row md:gap-4">
            <a href="#about">
              <MagicButton
                title='Show my work'
                icon={<FaLaptopCode />}
                position='left'
              />
            </a>

            <a href="#">
              <MagicButton
                title='CV / Resume'
                icon={<IoDocumentTextOutline />}
                position='right'
              />
            </a>
          </div>



        </div>
      </div>

    </section>
  )
};

export default Hero;
