import Aos from "aos";
import React from "react";
import PROJECT_DATA from "../data/PROJECT_DATA";
import ProjectItem from "./ProjectItem";

function Projects() {
  Aos.init();
  return (
    <>
      <div className="flex" id="projects">
        <div className="container max-w-[960px] mx-auto flex flex-col sm:pt-20 pt-10 lg:px-0 sm:px-4 px-2">
          <div className="sm:mb-14 mb-10">
            <span
              className="text-4xl font-[300] relative after:absolute after:z-[-1] after:w-1/2 after:h-3 after:bg-primary after:left-0 after:bottom-2 hover:after:w-full after:transition-all"
            >
              Projects
            </span>
          </div>
          <div className="flex flex-col">
            {PROJECT_DATA.map((item, index) => (
              <ProjectItem key={index} info={item}></ProjectItem>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
