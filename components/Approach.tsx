import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Our <span className="text-purple">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Discovery & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We collaborate to map out your project's goals, target audience, 
          and key deliverables. Whether it's a software solution, a video campaign, 
          or a social media strategy, we define the roadmap tailored to drive your business forward."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-blue-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Creation & Collaboration"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once the strategy is set, our team brings it to life. From writing 
          scalable code to crafting captivating motion graphics, we maintain transparent 
          communication and keep you updated every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-900 rounded-3xl overflow-hidden"
            colors={[
              [56, 152, 236],
              [125, 211, 252],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Launch & Growth"
          icon={<AceternityIcon order="Phase 3" />}
          des="This is where your vision goes live! We deploy your software, publish 
          your campaigns, and launch your digital presence. We ensure a seamless 
          transition from development to real-world impact, empowering your growth."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};
export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        // Updated to Navy gradient
        background: "rgb(6, 11, 24)",
        backgroundColor:
          "linear-gradient(90deg, rgba(6,11,24,1) 0%, rgba(10,20,45,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        {/* Changed spinning gradient from purple to blue */}
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#67e8f9_0%,#0e7490_50%,#67e8f9_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-[#060B18] px-5 py-2 text-sky-400 backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};