"use client";

import { FaGithub } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";
import { BackgroundBeams } from "./ui/Beams";

const RecentProjects = () => {
  return (
    <section id='projects' className="py-20">
      <h1 className='heading'>
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[80vw] sm:w-[570px] h-[32rem] sm:h-[41rem] lg:min-h-[32.5rem]"
          >
            <PinContainer
              title={item.pinTitle}
              href={item.linkSite}
            >
              <div className="relative flex items-center justify-center w-[80vw] sm:w-[570px] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#131162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>

                <img src={item.img} alt="cover" className='z-10 absolute bottom-0' />
              </div>
              <h1 className="font-bold line-clamp-1 text-base md:text-xl lg:text-2xl">
                {item.title}
              </h1>
              <p className="font-light lg:font-normal text-sm lg:text-xl line-clamp-2 my-[1vh] mx-0">
                {item.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center border border-white/20 rounded-full bg-black w-8 lg:w-10 h-8 lg:h-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`
                      }}
                    >
                      <img src={icon} alt="icons" className='p-2' />
                    </div>
                  ))}
                </div>

                <div className="flex gap-x-4">
                  <div className="flex items-center">
                    <Link
                      href={item.linkSite}
                      target="_blank"
                      title="View Live Site"
                      className="flex">
                      <TbWorldWww className="hover:text-purple text-white transition duration-500 w-8 lg:w-10 h-8 lg:h-10" />
                    </Link>

                  </div>
                  <div className="flex items-center">
                    <Link href={item.linkGH} target="_blank" title="View Source Code" className="flex">
                      <FaGithub className="hover:text-purple text-white transition duration-500 w-8 lg:w-10 h-8 lg:h-10" />
                    </Link>

                  </div>

                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <BackgroundBeams />
    </section>
  )
}

export default RecentProjects
