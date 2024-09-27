import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import Image from "next/image";
import { InfiniteMovingCardsDemo } from "./InfiniteSlider";
import { TextRevealCard } from "./ui/text-reveal-card";
import { TypewriterEffect, TypewriterEffectSmooth } from "./ui/typewriter-effect";

const Sidebar = () => {

  // const changeMode = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };
  return (
    <>
      <Image
        width="128"
        height="128"
        src='/main.jpg'
        alt="avatar"
        className="mx-auto border rounded-full "
      />
      <h3 className="font-bold mt-0 mb-0" style={{ fontFamily: 'sans-serif' }}>
        <TypewriterEffectSmooth words={[{ text: 'SOBHIT', className: 'text-[1.7rem] text-[#fffce1]' }, { text: 'SINHA', className: 'text-[1.7rem] text-[#fffce1]' }]} />
      </h3>
      <InfiniteMovingCardsDemo />
      {/* Resume */}
      <button>
        <a
          href="https://drive.google.com/file/d/1KhoGVOOkyk_iHZA-s_Tq4mfFusufXRpl/view?usp=drive_link"
          download="Sobhit Sinha Resume.pdf"
          target='_blank'
          className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-black-200"
        >
          <GiTie className="w-6 h-6" />
          <span>Resume</span>
        </a>
      </button>


      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        {/* //? THIS 👇 aria label */}
        <a
          href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A"
          aria-label="YouTube"
        >
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/sumit-dey-4a04431a9/"
          aria-label="Linkedin"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/_sumax__/" aria-label="GitHub">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-black-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Jaipur,India </span>
        </div>
        <p className="my-2">sobhit230@gmail.com</p>
        <p className="my-2">+91-9358250619</p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
      >
        <a href="mailto:sobhit230@gmail.com">Email me</a>
      </button>
      <button
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Change Theme
      </button>
    </>
  );
};

export default Sidebar;