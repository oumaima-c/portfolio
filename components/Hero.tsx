import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Grid from "@/components/Grid";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative min-h-screen z-10 bg-black-100">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        {/* Changed fill from purple to blue */}
        {/* Change both Spotlight fills from "blue" to your teal */}
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#00b5c8"
        />
        <Spotlight 
          className="left-80 top-28 h-[80vh] w-[50vw]" 
          fill="#00b5c8" 
        />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex flex-col items-center justify-center gap-3 mb-4"></div>
            <img
              src="/weadvancelogo.png"
              alt="WeAdvance"
              className="w-55 h-32 object-contain"
            />
          </div>

          <TextGenerateEffect
            words="Transforming Visions into  Digital Excellence"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            WeAdvance is a digital agency empowering businesses across Africa. Through cutting-edge software development, captivating video editing, and strategic social media management.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Hero;