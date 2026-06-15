import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2x1 text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-112.5" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Named for the most challenging side of the mountain, The North Face
            has equipped explorers since 1966 to reach their dreams. Driven by
            the mantra of Never Stop Exploring™, our expeditions inspire us to
            test the outer limits of performance and possibility.
          </p>
          <p>
            In 1966, a young climber named Doug Tompkins used his savings to
            start a revolution. A humble shop in San Francisco soon became a
            cultural trading post where the Grateful Dead played live, the Beat
            Generation shared new ideas and a who’s who of American climbers
            stopped in after traversing Yosemite.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Inspired by architect and inventor R. Buckminster “Bucky” Fuller’s
            theory of sphericity, The Oval InTENTion is introduced,
            revolutionizing the A-shaped tent. The first of its kind, the tent
            incorporated maximum efficiency with minimum materials.
          </p>
        </div>
      </div>
      <div>
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-zinc-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border border-zinc-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle- free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border border-zinc-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
