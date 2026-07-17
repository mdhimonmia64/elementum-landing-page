import React from "react";
import { FaQuestionCircle, FaArrowRight, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We offer UI/UX Design, Web Development, Branding, Digital Marketing, SEO Optimization, and Business Strategy tailored to your goals.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project duration depends on complexity. Most websites take between 2–8 weeks from planning to launch.",
  },
  {
    question: "Do you build responsive websites?",
    answer:
      "Yes. Every website we build is fully responsive and optimized for desktop, tablet, and mobile devices.",
  },
  {
    question: "Do you offer website maintenance?",
    answer:
      "Absolutely. We provide ongoing maintenance, updates, security improvements, and technical support after launch.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "We mainly work with React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB and other modern technologies.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can redesign outdated websites with a modern UI, improved performance, and better user experience.",
  },
];

export default function Faqs() {
  return (
    <div className="bg-base-100 text-base-content">
      <section className="container mx-auto px-6 pt-10 md:pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl hero-font md:mt-6 leading-tight" data-aos="zoom-in"
     data-aos-offset="200">
            Have
            <span className="bg-[#DDF3D6] rounded-full px-5 mx-3 text-black">
              Questions
            </span>
            ?
            <br />
            We've Got Answers.
          </h1>
          <p className="pt-3 md:pt-8 text-lg leading-8">
            Find answers to the most common questions about our services,
            workflow, pricing, and project process.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-6 pb-10 md:pb-24">
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-base-200 shadow-lg border border-base-300"
            >
              <input type="radio" name="faq" defaultChecked={index === 0} />

              <div className="collapse-title text-2xl hero-font flex items-center gap-4">
                <FaQuestionCircle className="text-primary" />
                {faq.question}
              </div>
              <div className="collapse-content">
                <p className=" leading-8">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="pb-10 md:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-neutral text-neutral-content rounded-[40px] p-7 md:p-14 text-center" data-aos="zoom-in-up"
     data-aos-offset="200">
            <FaEnvelope className="mx-auto text-primary mb-6" size={45} />
            <h2 className=" text-4xl md:text-5xl hero-font">Still Have Questions?</h2>
            <p className="pt-3 md:pt-6 text-lg opacity-80 max-w-2xl mx-auto">
              Our team is always ready to help you. Contact us today and let's
              discuss your next project.
            </p>
            <NavLink to='/contact'>
              <button className="btn btn-primary rounded-full mt-4 md:mt-10 px-8">
                Contact Us
                <FaArrowRight />
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
