import React from "react";
import { FaLightbulb, FaUsers, FaBullseye, FaRocket } from "react-icons/fa";
import { NavLink } from "react-router";

export default function Studio() {
  return (
    <div className="bg-base-100 text-base-content">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="hover-3d" data-aos="fade-up">
            <figure className="rounded-[40px]">
              <img
                src="/studio.jpg"
                alt="Studio"
                className=" w-full h-[600px] object-cover shadow-xl"
              />
            </figure>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div data-aos="fade-down">
            <h2 className="text-5xl hero-font mt-4 leading-tight md:text-center lg:text-left">
              We create digital
              <br />
              experiences that
              <br />
              people remember.
            </h2>
            <p className="pt-8 text-lg">
              Elementum is a creative digital agency focused on building
              meaningful brands, beautiful websites and engaging user
              experiences.
            </p>
            <p className="pt-6 text-lg">
              We combine creativity, strategy and technology to help businesses
              grow through thoughtful digital solutions.
            </p>

            <button className="btn btn-neutral rounded-full mt-10 px-8">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section className="bg-base-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl hero-font mb-16">
            Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="aura aura-dual">
              <div className="card bg-base-100 shadow-xl">
                <div className=" card-body">
                  <FaBullseye className="text-5xl text-green-500" />

                  <h3 className="text-3xl hero-font mt-4">Our Mission</h3>

                  <p className=" pt-4 leading-8">
                    To empower businesses with innovative digital experiences,
                    thoughtful design and modern technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="aura aura-dual">
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <FaRocket className="text-5xl text-purple-500" />

                  <h3 className="text-3xl hero-font mt-4">Our Vision</h3>

                  <p className="pt-4 leading-8">
                    To become a trusted creative partner for businesses around
                    the world through impactful digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-center text-5xl hero-font mb-16">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="aura aura-rainbow">
            <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="card-body items-center text-center">
                <FaLightbulb className="text-5xl text-yellow-500" />

                <h3 className="hero-font text-2xl">Creativity</h3>

                <p>Fresh ideas inspire meaningful digital experiences.</p>
              </div>
            </div>
          </div>
          <div className="aura aura-rainbow">
            <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="card-body items-center text-center">
                <FaUsers className="text-5xl text-blue-500" />

                <h3 className="hero-font text-2xl">Collaboration</h3>

                <p>We work closely with every client from start to finish.</p>
              </div>
            </div>
          </div>
          <div className="aura aura-rainbow">
            <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="card-body items-center text-center">
                <FaBullseye className="text-5xl text-red-500" />

                <h3 className="hero-font text-2xl">Strategy</h3>

                <p>Every decision is guided by purpose and business goals.</p>
              </div>
            </div>
          </div>

          <div className="aura aura-rainbow">
            <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition duration-300">
              <div className="card-body items-center text-center">
                <FaRocket className="text-5xl text-green-500" />

                <h3 className="hero-font text-2xl">Growth</h3>

                <p>Helping brands grow through modern technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-base-200 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div>
              <h2 className="text-6xl hero-font text-primary">150+</h2>

              <p className="mt-3 text-lg">Projects</p>
            </div>

            <div>
              <h2 className="text-6xl hero-font text-primary">98%</h2>

              <p className="mt-3 text-lg">Client Satisfaction</p>
            </div>

            <div>
              <h2 className="text-6xl hero-font text-primary">15+</h2>

              <p className="mt-3 text-lg">Team Members</p>
            </div>

            <div>
              <h2 className="text-6xl hero-font text-primary">8+</h2>

              <p className="mt-3 text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-6xl hero-font leading-tight">
          Let's Build Something Amazing Together
        </h2>

        <p className="pt-8 text-lg">
          Have an idea? We'd love to hear about your next project and help bring
          it to life.
        </p>
        <div className="aura aura-rainbow mt-6">
          <NavLink to="/contact">
            <button className="btn btn-neutral rounded px-10  ">
              Contact Us
            </button>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
