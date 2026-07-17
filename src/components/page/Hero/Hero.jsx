import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 lg:pt-20 lg:pb-20">
      <div className="absolute left-0 top-40 lg:top-72">
        <svg
          width="170"
          height="350"
          viewBox="0 0 120 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 0
               C90 20 90 70 30 90
               C-20 110 -20 170 30 190
               C90 210 90 260 30 280"
            stroke="#000"
            strokeWidth="4"
            fill="none"
          />

          <path
            d="M0 10
               C60 30 60 80 0 100
               C-40 120 -40 170 0 190
               C60 210 60 260 0 280"
            stroke="#FF6B6B"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>
      <div className=" px-10">
        <div className="text-center">
          <div className="relative" data-aos="fade-right">
            <motion.span
              animate={{
                color: ["#06b6d4", "#a855f7", "#ec4899", "#3b82f6", "#06b6d4"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <h1 className="text-7xl lg:text-8xl hero-font">
                The thinkers and
                <br />
                doers were ch
                <span className="bg-fuchsia-200 pr-4 lg:pr-6 rounded-full dark:text-black">
                  anging
                </span>
                <br />
                the {""}{" "}
                <span className="bg-green-100 px-2 lg:px-6 rounded-full dark:text-black">
                  status
                </span>
                {""} Quo with
              </h1>
            </motion.span>
            <div className="absolute right-1 lg:right-90 top-12 lg:top-28">
              <div className="w-16 h-28 bg-[#7C3AED] rounded-r-full rounded-br-full rotate-[25deg]"></div>
            </div>
          </div>
          <p className="text-xl lg:text-2xl pt-8 text-gray-600 dark:text-white">
            We are a team of strategists, designers communicators, researchers.
            Together, <br /> we believe that progress only happens when you
            refuse to play things safe.
          </p>
        </div>
        <div className="relative mt-24 h-[430px] ">
          <img
            src="/hero1.png"
            className="absolute left-0 top-24 lg:top-28 w-28 h-28 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg"
            alt="Team Member"
          />
          <img
            src="/hero2.png"
            className="absolute left-20 lg:left-36 top-20 w-28 h-28 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg"
            alt="Team Member"
          />
          <img
            src="/hero3.png"
            className="absolute left-56 lg:left-[480px] top-0 w-28 h-28 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg"
            alt="Team Member"
          />
          <img
            src="/hero4.png"
            className="absolute left-80 lg:left-[620px] top-28 lg:top-56 w-28 h-28 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg"
            alt="Team Member"
          />
          <img
            src="/hero5.png"
            alt="Team Member"
            className="absolute right-64 lg:right-[720px]  top-0 lg:top-10 w-28 h-28 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg"
          />
          <img
            src="/hero6.png"
            alt="Team Member"
            className="absolute right-44 lg:right-[540px] top-10 lg:top-24 w-28 h-28 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg"
          />
          <img
            src="/hero7.png"
            alt="Team Member"
            className="absolute right-10 lg:right-64 top-0 w-28 h-28 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg"
          />
          <img
            src="/hero8.png"
            alt="Team Member"
            className="absolute right-0 top-36 w-28 h-28 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg"
          />
          <div className="absolute left-[38%] top-52 w-5 h-5 rounded-full bg-[#A7D129]"></div>
          <div className="absolute right-[28%] top-5 w-4 h-4 rounded-full bg-[#FF9E44]"></div>
        </div>
      </div>
    </section>
  );
}
