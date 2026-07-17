import React from "react";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Message sent successfully!")
  };

  return (
    <div className="bg-base-100 text-base-content">
      <section className="max-w-7xl mx-auto px-6 pt-20">
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl hero-font mt-6 leading-tight">
            Let's build something{" "}
            <span className="bg-[#DDF3D6] rounded-full px-5 text-black">
              amazing
            </span>
            <br />
            together.
          </h1>
          <p className="mt-8 text-lg leading-8">
            Whether you're starting a new project or simply have a question,
            we'd love to hear from you. <br /> Our team is always ready to help.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="card bg-base-200 shadow-2xl">
            <div className="card-body p-10">
              <h2 className="text-4xl hero-font text-center">Send a Message</h2>
              <p className="pb-6 text-center">
                Fill out the form below and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered w-full"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="input input-bordered w-full"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Company Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <select
                  defaultValue=" "
                  className="select select-bordered w-full"
                  required
                >
                
                  <option disabled value="">
                    Select a Service
                  </option>
                  <option>Web Development</option>
                  <option>UI / UX Design</option>
                  <option>Brand Identity</option>
                  <option>SEO Optimization</option>
                  <option>Digital Marketing</option>
                  <option>Business Strategy</option>
                </select>

                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full"
                  required
                />

                <textarea
                  rows="6"
                  placeholder="Tell us about your project..."
                  className="textarea textarea-bordered w-full"
                ></textarea>

                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    required
                  />

                  <span>
                    I agree to the Privacy Policy and Terms of Service.
                  </span>
                </label>
                  <br />
                <button
                  type="submit"
                  className="btn btn-primary rounded-full  px-4"
                >
                  Send Message <GoArrowRight size={25}/>
                </button>
              </form>
            </div>
          </div>
          <div>
            <h2 className="text-4xl lg:text-5xl hero-font lg:mt-5">
              We'd love to hear from you.
            </h2>
            <p className="pt-2 lg:pt-8 text-lg leading-8">
              Reach out to us through any of the following channels. We usually
              reply within 24 hours.
            </p>
            <div className="space-y-4 lg:space-y-8 mt-6 lg:mt-12">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-primary text-white flex justify-center items-center text-2xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="hero-font text-2xl">Email</h3>
                  <p>hello@elementum.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-primary text-white flex justify-center items-center text-2xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="hero-font text-2xl">Phone</h3>
                  <p>+880 1319959656</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-primary text-white flex justify-center items-center text-2xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="hero-font text-2xl">Office</h3>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-primary text-white flex justify-center items-center text-2xl">
                  <FaClock />
                </div>
                <div>
                  <h3 className="hero-font text-2xl">Working Hours</h3>
                  <p>Mon - Fri : 9 AM - 6 PM</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-12">
              <button className="btn btn-circle btn-outline">
                <FaFacebookF />
              </button>
              <button className="btn btn-circle btn-outline">
                <FaInstagram />
              </button>
              <button className="btn btn-circle btn-outline">
                <FaLinkedinIn />
              </button>
              <button className="btn btn-circle btn-outline">
                <FaTwitter />
              </button>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
