import Aos from "aos";
import React from "react";

function ProjectItem(props) {
  const info = props.info;
  Aos.init();
  return (
    <>
        <div className="flex sm:flex-row flex-col justify-between w-full mb-14">
          <div className="flex flex-col sm:w-3/5 w-full">
            <span className="text-[3rem] font-[400]">{info.title}</span>
            <div className="flex flex-wrap gap-2 w-10/12 mb-8">
              {info.tech.map((item, index) => (
                <span
                  key={index}
                  className="text-lg bg-[#121e27] text-white py-1 px-4 hover:text-primary transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="my-4 w-40 h-12 relative sm:ml-0 ml-[10px]">
              <a
                className="w-full h-full text-lg text-white hover-text-primary bg-primary text-center leading-[3rem] relative block translate-x-[-10px] translate-y-[-10px] hover:translate-x-0 hover:translate-y-0 transition-all"
                href={info.link}
                download
              >
                View project
              </a>
              <div className="w-full h-full absolute top-0 left-0 border-2 z-[-1] border-[#121e27]"></div>
            </div>
            <p className="text-lg w-11/12 pt-4">{info.desc}</p>
          </div>
          <a href={info.link} className="sm:w-2/5 w-full h-60 ">
            <div className="rounded-xl relative hover:translate-y-[-20px] transition-all hover:drop-shadow-2xl">
              <img
                className="w-full h-60 object-cover rounded-xl mt-8 sm:mt-0"
                src={require("../assets/imgaes/" + info.img + ".png")}
              ></img>
              <div className="absolute left-0 top-0 w-full h-full bg-black rounded-xl opacity-0 hover:opacity-20"></div>
            </div>
          </a>
        </div>
    </>
  );
}

export default ProjectItem;
