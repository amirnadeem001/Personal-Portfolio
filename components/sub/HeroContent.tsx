"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import myImage from "@/public/AMIR.png";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex lg:flex-row flex-col items-center justify-center px-10 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
          <h1 className="Welcome-text sm:text-xl text-lg">
            Hi, I&apos;m Amir Nadeem
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 lg:text-6xl text-4xl  font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Frontend{" "}
            </span>
            Web Developer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="lg:text-lg text-base text-gray-400 my-5 max-w-[600px]"
        >
          Building Your Idea Through My Development Skills, front-end web
          development, specializing in React JS, Next JS, Tailwind CSS, HTML5 &
          CSS3. With a strong foundation in these technologies, I aim to create
          responsive and user-friendly web interfaces, leveraging my skills to
          contribute to innovative projects.
        </motion.p>
        <motion.a
          href="mailto:amirnadeemryk1987@gmail.com"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Let&apos;s Connect!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image src={myImage} alt="work icons" height={650} width={650} />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
