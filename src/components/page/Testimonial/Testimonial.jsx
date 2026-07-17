import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Testimonial() {
  return (
    <section className="my-32 mx-5 lg:mx-10 relative overflow-hidden">

      <div className="text-center mb-20">
        <h2 className="text-5xl lg:text-6xl hero-font leading-tight">
          <span className="bg-[#DDF3D6] dark:text-black px-4 rounded-full">What</span> our customer<br />says About Us
        </h2>
      </div>
      <img
        src="/user1.png"
        className="absolute top-8 left-8 w-16 h-16 rounded-full object-cover"
        alt=""
      />
      <img
        src="/user2.png"
        className="absolute top-36 left-0 w-10 h-10 rounded-full object-cover"
        alt=""
      />
      <img
        src="/user3.png"
        className="absolute lg:top-52 lg:left-16 w-28 h-28 lg:w-36 lg:h-36 rounded-full object-cover"
        alt=""
      />
      <img
        src="/user4.png"
        className="absolute bottom-24 left-4 w-14 h-14 rounded-full object-cover"
        alt=""
      />
      <img
        src="/user5.png"
        className="absolute top-8 right-6 w-20 h-20 rounded-full object-cover"
        alt=""
      />
      <img
        src="/user6.png"
        className="absolute top-20 right-40 w-12 h-12 rounded-full object-cover"
        alt=""
      />
      <img
        src="/user7.png"
        className="absolute top-44 right-0 lg:right-32 w-16 h-16 rounded-full object-cover"
        alt=""
      />
      <img
        src="/user8.png"
        className="absolute bottom-8 right-1 lg:right-4 w-28 h-28 lg:w-44 lg:h-44 rounded-full object-cover"
        alt=""
      />
      <div className="max-w-2xl lg:max-w-3xl mx-auto relative">
        <div className="bg-[#F3F9F1] rounded-[40px] px-9 py-11 lg:px-14 lg:py-14 relative shadow-sm">
          <FaQuoteLeft
            className="absolute left-1 lg:left-6 top-6 text-gray-300"
            size={38}
          />

          <p className="text-center text-lg leading-9 text-gray-700">
            Elementum delivered the site within the timeline as they requested.
            In the end, the client found a 50% increase in traffic within days
            since its launch. They also had an impressive ability to use
            technologies that the company hadn't used, which have also proved to
            be easy to use and reliable.
          </p>
          <FaQuoteRight
            className="absolute right-8 bottom-6 text-gray-300"
            size={38}
          />
        </div>
      </div>
    </section>
  );
}
