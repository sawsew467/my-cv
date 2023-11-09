import React from "react";
// import cv from "@/assets/CV_TranVanBaoThang.pdf";
import Image from "next/image";

function About() {
  return (
    <>
      <div className="flex" id="about">
        <div className="container max-w-[960px] w-full mx-auto flex flex-col ms:pt-20 pt-10 lg:px-0 sm:px-4 px-2">
          <div className="sm:mb-20 mb-10">
            <span className="text-4xl font-[300] relative after:absolute after:z-[-1] after:w-1/2 after:h-3 after:bg-primary after:left-0 after:bottom-2 hover:after:w-full after:transition-all">
              About
            </span>
          </div>
          <div className="flex sm:flex-row flex-col w-full items-center">
            <div className="sm:w-[30%] w-2/3 rounded-xl sm:mb-0 mb-10">
              <Image
                alt=""
                className="rounded-3xl"
                src={require("../assets/imgaes/avt.jpeg")}
              ></Image>
            </div>
            <div className="flex flex-col sm:w-[70%] w-full sm:pl-8 ml-0">
              <div className="flex flex-wrap sm:justify-start justify-center gap-2 sm:w-10/12 w-full mb-8">
                <span className="text-lg bg-[#121e27] text-white py-1 px-4 hover:text-primary transition-all cursor-default">
                  HTML
                </span>
                <span className="text-lg bg-[#121e27] text-white py-1 px-4 hover:text-primary transition-all cursor-default">
                  CSS
                </span>
                <span className="text-lg bg-[#121e27] text-white py-1 px-4 hover:text-primary transition-all cursor-default">
                  Javascript
                </span>
                <span className="text-lg bg-[#121e27] text-white py-1 px-4 hover:text-primary transition-all cursor-default">
                  ReactJS
                </span>
                <span className="text-lg bg-[#121e27] text-white py-1 px-4 hover:text-primary transition-all cursor-default">
                  SCSS
                </span>
                <span className="text-lg bg-[#121e27] text-white py-1 px-4 hover:text-primary transition-all cursor-default">
                  Tailwindcss
                </span>
                <span className="text-lg bg-[#121e27] text-white py-1 px-4 hover:text-primary transition-all cursor-default">
                  GSAP
                </span>
                <span className="text-lg bg-[#121e27] text-white py-1 px-4 hover:text-primary transition-all cursor-default">
                  Responsive
                </span>
                <span className="text-lg bg-[#121e27] text-white py-1 px-4 hover:text-primary transition-all cursor-default">
                  Git
                </span>
                <span className="text-lg bg-[#121e27] text-white py-1 px-4 hover:text-primary transition-all cursor-default">
                  Redux
                </span>
                <span className="text-lg bg-[#121e27] text-white py-1 px-4 hover:text-primary transition-all cursor-default">
                  Figma/Photoshop
                </span>
              </div>
              <p className="text-lg sm:text-start text-center">
                Hi, my name is Tran Van Bao Thang - David Tran. I&apos;m a
                third year student at FPT University, Da Nang, Viet Nam. Having more than 1
                year of experience with many real projects, I promise to give
                you the best web design. I provide web design services, convert
                the design to code. If my services are suitable for you, please
                contact me!
              </p>
              <div className="mt-8 w-40 h-12 relative mx-auto sm:mx-0">
                <a
                  className="w-full h-full text-lg text-white hover-text-primary bg-primary text-center leading-[3rem] relative block translate-x-[-10px] translate-y-[-10px] hover:translate-x-0 hover:translate-y-0 transition-all"
                  // href={cv}
                  download
                >
                  Download CV
                </a>
                <div className="w-full h-full absolute top-0 left-0 border-2 z-[-1] border-[#121e27]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
