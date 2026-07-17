import React from "react";

export default function Offer() {
  return (
    <section className="px-6 lg:container mx-auto mt-48 mb-20">
      <div className="flex items-center relative">
        <h1
          className="text-3xl md:text-6xl lg:text-8xl hero-font pb-10"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          What We{" "}
          <span className="bg-[#DDF3D6] dark:text-black px-5 rounded-full">
            can
          </span>
          <br /> offer you!
        </h1>
        <img
          data-aos="fade-down"
          data-aos-offset="200"
          className="w-[200px] md:w-[500px] lg:w-[864px] absolute right-[-60px] bottom-9"
          src="/backimage1.png"
          alt="background image"
        />
      </div>
      <div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title flex gap-2 md:gap-32 lg:gap-60">
            <p className="text-[13px] md:text-xl lg:text-3xl">
              Office of multiple <br /> interest content
            </p>
            <h2 className="font-semibold hero-font text-xl md:text-4xl lg:text-6xl">
              Colaborative & partnership
            </h2>
          </div>
          <div className="collapse-content text-[10px] md:text-[18px]">
            We create engaging content and build strong partnerships that help
            your business reach more people, strengthen your brand, and achieve
            sustainable growth.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title flex gap-2 md:gap-20 lg:gap-40">
            <p className="text-[13px] md:text-xl lg:text-3xl">
              The hanger US Air force <br /> digital experimental
            </p>
            <h2 className="font-semibold hero-font text-xl md:text-4xl lg:text-6xl">
              We talk about our weight
            </h2>
          </div>
          <div className="collapse-content text-[10px] md:text-[18px]">
            We help businesses grow through innovative digital solutions,
            creative experimentation, and strong collaborative partnerships.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title flex gap-2 md:gap-28 lg:gap-52">
            <p className="text-[13px] md:text-xl  lg:text-3xl">
              Delta faucet content, <br />
              social, digital
            </p>
            <h2 className="font-semibold hero-font text-xl md:text-4xl lg:text-6xl">
              Piloting digital confidence
            </h2>
          </div>
          <div className="collapse-content text-[10px] md:text-[18px]">
            We create engaging content, social media strategies, and digital
            experiences that strengthen your brand, build customer trust, and
            drive long-term business growth.
          </div>
        </div>
      </div>
    </section>
  );
}
