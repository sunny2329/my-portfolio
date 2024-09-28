'use client'
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import Image from "next/image";
import { InfiniteMovingCardsDemo } from "./InfiniteSlider";
import { TextRevealCard } from "./ui/text-reveal-card";
import { TypewriterEffect, TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { GrDocumentUser } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

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
      <h3 className="font-bold mt-3 text-2xl mb-0 text-[#fffce1]" style={{ fontFamily: 'sans-serif' }}>
        SOBHIT SINHA
      </h3>
      <InfiniteMovingCardsDemo />
      {/* Resume */}
      <button onClick={() => {
        window.open('https://drive.google.com/file/d/1KhoGVOOkyk_iHZA-s_Tq4mfFsusufXRpl/view?usp=drive_link');
      }} className="bg-slate-800 z-0 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-md font-semibold leading-6  text-[#fffce1] inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-xl bg-zinc-950 py-2 px-12 ring-1 ring-white/10 ">
          <span>{`📑Resume`}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
      <button onClick={() => {
        window.location.href = "mailto:sobhit230@gmail.com";
      }} className="bg-slate-800 z-[0] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm mt-3 font-semibold leading-6  text-[#fffce1] inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-xl bg-zinc-950 py-2 px-1 ring-1 ring-white/10 ">
          <span>{`📧sobhit230@gmail.com`}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
      <button onClick={() => {
        window.location.href = `tel:+91-9358250619`;
      }} className="bg-slate-800 z-0  no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-sm mt-3 font-semibold leading-6  text-[#fffce1] inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-xl bg-zinc-950 py-2 px-8 ring-1 ring-white/10 ">
          <span>{`📞+91-9358250619`}</span>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>


      {/* Socials */}
      <div className="flex justify-around text-[#fffce1] w-9/12 mx-auto my-5 text-green md:w-full ">
        {/* //? THIS 👇 aria label */}
        <a
          href="https://www.leetcode.com/"
          aria-label="YouTube"
          title="Leetcode"
        >
          <SiLeetcode className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/sobhit-sinha-18206823a/"
          aria-label="Linkedin" title="Linkedin"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/sunny2329" aria-label="GitHub" title="Github">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-transparent text-[#fffce1] dark:bg-black-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Jaipur,India </span>
        </div>
      </div>

      {/* Email Button */}

      {/* <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
      >
        <a href="mailto:sobhit230@gmail.com">Email me</a>
      </button> */}

    </>
  );
};

export default Sidebar;