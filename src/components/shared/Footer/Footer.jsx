import React from "react";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="relative bg-[#D7EEDD] overflow-hidden">
      <div className="absolute right-10 top-8 md:right-32  md:top-44 lg:top-52">
        <div className="w-8 h-14 md:w-16 md:h-28 lg:w-24 lg:h-40 bg-[#7C3AED] rounded-r-full rounded-br-full -rotate-[150deg]"></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center pt-24 relative">
          <img
            src="/footerback.png"
            alt=""
            className="absolute top-0 right-[40%] md:right-[53%] w-36 md:w-40"
          />
          <img
            src="/footerback.png"
            alt=""
            className="absolute top-0 right-[30%] md:right-[48%] w-36 md:w-40"
          />
          <h2 className="text-5xl md:text-7xl lg:text-8xl hero-font leading-none text-black pt-4">
            Subscribe to
            <br />
            our newsletter
          </h2>
          <p className="my-6 text-gray-700">
            To make your stay special and even more memorable
          </p>
          <button className=" bg-black text-white px-3 md:px-8 py-2 md:py-4 rounded-full hover:bg-gray-900 duration-300">
            Subscribe Now
          </button>
        </div>
        <div className="border-t border-gray-500 mt-10 md:mt-24"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 py-8 md:py-20">
          <div>
            <h3 className="hero-font text-3xl mb-8 text-black">Company</h3>

            <ul className="space-y-4 text-gray-700">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Studio</li>
              <li>Service</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="hero-font text-3xl mb-8 text-black">
              Terms & Policies
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>Privacy Policy</li>

              <li>Terms & Conditions</li>

              <li>Explore</li>

              <li>Accessibility</li>
            </ul>
          </div>
          <div>
            <h3 className="hero-font text-3xl mb-8 text-black">Follow Us</h3>
            <ul className="space-y-4 text-gray-700">
              <li>Instagram</li>

              <li>LinkedIn</li>

              <li>YouTube</li>

              <li>Twitter</li>
            </ul>
          </div>
          <div>
            <h3 className="hero-font text-3xl mb-8 text-black">Contact</h3>

            <ul className="space-y-4 text-gray-700">
              <li>
                1498 W Fulton St,
                <br />
                Suite 2D
                <br />
                Chicago, IL 63867
              </li>

              <li>(123) 456-789000</li>

              <li>info@elementum.com</li>
            </ul>
          </div>
        </div>
        <div className="text-center pb-8 text-gray-700">
          ©2023 Elementum. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
