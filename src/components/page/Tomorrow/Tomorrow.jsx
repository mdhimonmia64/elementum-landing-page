import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function Tomorrow() {
  return (
    <section className="relative lg:container mx-auto lg:py-28 px-6 overflow-hidden">
      <img
        src="/backimage.png"
        alt=""
        className="absolute top-[330px] lg:top-[575px] left-24 w-full -z-10 pointer-events-none"
      />
      <div className="grid md:grid-cols-2 items-center gap-20">
        <div data-aos="fade-down"
     data-aos-duration="4000">
          <h2 className="text-4xl lg:text-6xl hero-font leading-tight">
            Tomorrow should <br /> be better than {''}
            <span className="bg-[#DDF3D6] dark:text-black px-3 rounded-full">today</span>
          </h2>

          <p className="mt-6">
            We are a team of strategists, designers communicators, researchers.{" "}
            <br /> Together, we believe that progress only happens when you
            refuse <br /> to play things safe.
          </p>

         <div className="aura aura-rainbow duration-2000 mt-6">
            <div className="card bg-base-100">
              <div className="flex items-center gap-2 px-4 py-2">
                <p> Read more </p>
                <GoArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[300px] lg:left-[600px] top-36 w-64 h-64 bg-red-400 opacity-40 blur-[120px] rounded-full"></div>

        <div className="relative flex justify-center" data-aos="fade-up"
     data-aos-duration="4000">
          <img
            src="/Tomorrow1.png"
            alt="image"
            className="md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full object-cover z-30"
          />

          <div className="absolute top-2 lg:top-8 right-7 lg:right-24 w-20 h-20 bg-[#FF6B6B] -rotate-8"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 items-center gap-20 mt-28">
        <div className="relative flex justify-center" data-aos="fade-right"
     data-aos-offset="200">
          <img
            src="/Tomorrow2.png"
            alt="image"
            className="md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full object-cover z-30"
          />
          <div
            className="absolute top-0 -left-2 lg:left-20 rotate-[-8deg]"
            style={{
              width: 0,
              height: 0,
              borderLeft: "70px solid transparent",
              borderRight: "70px solid transparent",
              borderBottom: "120px solid #FF6B6B",
            }}
          ></div>
          <div
            className="absolute -bottom-6 lg:bottom-2 right-3 lg:right-20 z-30"
            style={{
              width: 0,
              height: 0,
              borderLeft: "70px solid transparent",
              borderRight: "70px solid transparent",
              borderBottom: "120px solid #FF6B6B",
            }}
          ></div>
        </div>
        <div data-aos="fade-left"
     data-aos-offset="200">
          <h2 className="text-4xl lg:text-5xl lg:text-6xl hero-font leading-tight">
            <span className="bg-[#DDF3D6] dark:text-black px-3 rounded-full ">See</span> {''}
            how we can
            <br />
            help you progress
          </h2>

          <p className="pt-6">
            We add a layer of fearless insights and action that allows change{" "}
            <br /> makers to accelerate their progress in areas such as brand,
            design <br />
            digital, comms and social research.
          </p>
          <div className="aura aura-rainbow duration-2000 mt-6">
            <div className="card bg-base-100">
              <div className="flex items-center gap-2 px-4 py-2">
                <p> Read more </p>
                <GoArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
