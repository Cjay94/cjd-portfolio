import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full" id='contact'>
      <div>
        <Spotlight className="h-screen" fill="blue" />
        <Spotlight className="left-full h-[80vh]" fill="violet" />
        <Spotlight className="left-80 h-[80vh] w-[50vw]" fill="purple" />
      </div>
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-100 "
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className='heading lg:max-w-[45vw]'>
          Excited to apply my expertise to help{" "}
          <span className="text-purple">Your&nbsp;Team Succeed</span>!
        </h1>

        <p className="text-white-200 my-5 md:mt-10 text-center lg:max-w-[45vw]">
          As I actively pursue full-time career opportunities, I'm eager to discuss how my skills and experience can contribute to your organization's achievements.
        </p>

        <a href="mailto:cjephthah94@gmail.com">
          <MagicButton
            title="Let&apos;s get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>

      <div className="flex mt-16 flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base font-light md:font-normal text-white/70">
          &copy;{new Date().getFullYear()} Designed & Curated by {'</CJD>'}
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 "
            >
              <Link href={info.href} target="_blank" className="cursor-pointer">
                <img src={info.img} alt="icons" width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
