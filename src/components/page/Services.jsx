import React from "react";
import {
  FaCode,
  FaPalette,
  FaBullhorn,
  FaMobileAlt,
  FaSearch,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import { NavLink } from "react-router";

const services = [
  {
    id: 1,
    icon: <FaCode size={40} />,
    title: "Web Development",
    description:
      "Modern, scalable and responsive websites built with React and the latest web technologies.",
  },
  {
    id: 2,
    icon: <FaPalette size={40} />,
    title: "UI / UX Design",
    description:
      "Beautiful interfaces focused on usability, accessibility and memorable user experiences.",
  },
  {
    id: 3,
    icon: <FaMobileAlt size={40} />,
    title: "Mobile App",
    description:
      "Cross-platform mobile applications designed to perform beautifully on every device.",
  },
  {
    id: 4,
    icon: <FaBullhorn size={40} />,
    title: "Digital Marketing",
    description:
      "Creative marketing strategies that increase brand awareness and customer engagement.",
  },
  {
    id: 5,
    icon: <FaSearch size={40} />,
    title: "SEO Optimization",
    description:
      "Improve your online visibility with technical SEO and high-quality content strategies.",
  },
  {
    id: 6,
    icon: <FaChartLine size={40} />,
    title: "Business Strategy",
    description:
      "Helping businesses grow through innovative digital solutions and strategic planning.",
  },
];

export default function Services() {
  return (
    <div className="bg-base-100 text-base-content">
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl hero-font mt-6 leading-tight ">
            We build digital
            <span className="bg-[#DDF3D6] px-4 rounded-full ml-3 text-black">
              solutions
            </span>
            <br />
            that grow your business.
          </h1>

          <p className="mt-8 text-lg leading-8 ">
            From strategy and branding to web development and digital marketing,
            we create experiences that inspire people and deliver measurable
            business results.
          </p>

          <button className="btn btn-neutral rounded-full mt-10 px-8">
            Explore Services
          </button>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 aura aura-rainbow">
          {services.map((service) => (
            <div
              key={service.id}
              className="card bg-base-100 border border-base-300 hover:shadow-2xl duration-300 group "
            >
              <div className="card-body ">
                <div className="text-primary group-hover:scale-110 duration-300">
                  {service.icon}
                </div>

                <h2 className="text-3xl hero-font mt-5">{service.title}</h2>

                <p className=" leading-7 mt-4">{service.description}</p>

                <button className="mt-6 flex items-center gap-2 font-semibold group-hover:text-primary duration-300">
                  Learn More
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="group" data-aos="fade-up-right">
            <img
              src="/service.jpg"
              alt="Service"
              className="rounded-[35px] h-[550px] w-full object-cover duration-1000 group-hover:scale-105 group-hover:rotate-[360deg]"
            />
          </div>

          <div data-aos="fade-left">
            <h2 className="text-5xl hero-font mt-5 leading-tight">
              Creative solutions
              <br />
              for modern brands.
            </h2>

            <p className="mt-8 text-lg leading-8">
              We don't just build websites—we create digital experiences that
              help businesses connect with their audience, strengthen their
              brand identity, and achieve long-term success.
            </p>
            <ul className="space-y-4 mt-8">
              <li>✔ Responsive Website Design</li>
              <li>✔ High Performance Development</li>
              <li>✔ SEO Friendly Structure</li>
              <li>✔ Long-Term Technical Support</li>
            </ul>
            <button className="btn btn-primary rounded-full mt-10 px-8">
              <NavLink to="/">Get Started</NavLink>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
