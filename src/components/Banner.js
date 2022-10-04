import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Banner() {
  let leftRef = useRef(null);
  let rightRef = useRef(null);
  let textLeftRef = useRef(null);
  let textRightRef = useRef(null);
  useEffect(() => {
    gsap.to(leftRef, {
      duration: 1,
      ease: "ease-in",
      opacity: 1,
      left: 0,
    });
    gsap.to(rightRef, {
      duration: 1,
      ease: "ease-in",
      opacity: 1,
      right: 0,
    });
    gsap.to(textRightRef, {
      duration: 1,
      ease: "ease-in",
      opacity: 1,
      right: 0,
      delay: 2,
    });
    gsap.to(textLeftRef, {
      duration: 1,
      ease: "ease-in",
      opacity: 1,
      right: 0,
      delay: 2,
    });
  }, []);
  return (
    <>
      <div className="flex mt-14 border-b-2 lg:px-0 sm:px-4 px-2">
        <div className="w-[960px] mx-auto flex items-center">
          <div
            className="w-1/2 flex flex-col justify-end items-start relative left-[-100%]"
            ref={(el) => {
              leftRef = el;
            }}
          >
            <div className="w-full">
              <div
                ref={(el) => {
                  textLeftRef = el;
                }}
                className="opacity-0 absolute left-0 w-full h-full flex sm:justify-center mt-20 sm:mt-0 items-start flex-col mix-blend-difference"
              >
                <span className="sm:text-4xl text-xl font-[300] relative after:absolute after:z-[-1] after:w-1/2 after:h-3 after:bg-primary after:left-0 after:bottom-2 hover:after:w-full after:transition-all">{`Designer`}</span>
                <p className="sm:text-md text-sm text-slate-500 mt-2 w-[60%] mb-2 ">
                  UI/UX Designer with passion for designing beautiful and
                  functional user experiences
                </p>
              </div>
              <img
                className="ml-auto"
                src={require("../assets/imgaes/1 2.png")}
              ></img>
            </div>
          </div>
          <div
            className="w-1/2 flex flex-col justify-center items-end relative right-[-100%]"
            ref={(el) => {
              rightRef = el;
            }}
          >
            <div className="w-full">
              <div
                ref={(el) => {
                  textRightRef = el;
                }}
                className="opacity-0 absolute left-0 w-full h-full flex sm:justify-center mt-20 sm:mt-0 items-end flex-col"
              >
                <span className="sm:text-4xl text-xl z-10 font-[300] relative after:absolute after:z-[-1] after:w-1/2 after:h-3 after:bg-primary after:right-0 after:bottom-2 hover:after:w-full after:transition-all">{`<Developer>`}</span>
                <p className="sm:text-md text-sm text-slate-500 mt-2 text-end w-[60%] mb-2">
                  Front-end developer who focus on writing clean, elegent and
                  effectciant code
                </p>
              </div>
              <img
                className="top-0 left-0 z-0 "
                src={require("../assets/imgaes/1 3.png")}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
