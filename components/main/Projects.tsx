import React from "react";
import ProjectCard from "../sub/ProjectCard";
import shoesCenter from "@/public/shoes.png";
import Dreamz from "@/public/dreamz.png";
import Bankist from "@/public/bankist.png";
import World from "@/public/world.png";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-wrap justify-center sm:flex-row gap-10 px-10">
        <ProjectCard
          src={shoesCenter}
          link="https://shoes-center.vercel.app/"
          title="Shoes Center"
          description="It allows their customers to order various shoes like Jordan, sneakers, and Running shoes in various styles, sizes, and brands."
        />
        <ProjectCard
          src={Dreamz}
          title="Dreamz"
          link="https://dreamz-house.vercel.app/"
          description="This website enables users to easily find and purchase their dream homes and apartments by filtering based on their prices."
        />
        <ProjectCard
          src={Bankist}
          title="Bankist Application"
          link="https://bankist-app-amir.netlify.app/"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src={World}
          title="Worlwide Application"
          link="https://worldwisev1.netlify.app/#/"
          description="Travel tracking app called Worldwide. It allows users to track their travels around the world. The app keeps track of the cities a user has visited."
        />
        <ProjectCard
          src={Bankist}
          title="Bankist"
          link="https://bankist-app-amir.netlify.app/"
          description="Bankist is a sleek online banking application designed for minimalists who crave simplicity and efficiency in their financial management. Just log in with the username (js) and the PIN (1111) to get a feel for how it all works."
        />
      </div>
    </div>
  );
};

export default Projects;
