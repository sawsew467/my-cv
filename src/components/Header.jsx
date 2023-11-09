import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa6";

function Header() {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setIsShowMobileMenu(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let headerRef = useRef(null);
  useEffect(() => {
    gsap.to(headerRef, {
      duration: 1,
      ease: "ease-in",
      opacity: 1,
      top: 0,
    });
  }, []);

  return (
    <>
      <div
        className="fixed top-[-100%] right-0 left-0 h-14 bg-[#121e27] opacity-0 z-50 lg:px-0 sm:px-4 px-2"
        ref={(el) => {
          headerRef = el;
        }}
      >
        <div className="h-full max-w-[960px] mx-auto flex justify-between items-center">
          <a className="min-w-10 min-h-4 flex items-center" href="#">
            {/* <img
              alt=""
              className="w-28"
              src={require("../assets/imgaes/signature.png")}
            ></img> */}
            <Image
              alt="thangtvb"
              src={require("../assets/imgaes/signature.png")}
              width={112}
              priority={true}
            ></Image>
          </a>
          <div className="h-full sm:flex hidden justify-between items-center gap-8 text-white">
            <div className="h-full flex justify-between items-center gap-4 text-white">
              <a
                href="#"
                alt=""
                className="font-[300] text-lg hover:text-primary cursor-pointer transition-all"
              >
                About
              </a>
              <a
                href="#projects"
                alt=""
                className="font-[300] text-lg hover:text-primary cursor-pointer transition-all"
              >
                Projects
              </a>
              <a
                href="#contact"
                alt=""
                className="font-[300] text-lg hover:text-primary cursor-pointer transition-all"
              >
                Contact
              </a>
            </div>
            <div className="h-full flex justify-between items-center gap-4 text-white">
              <a
                target="_blank"
                href="https://github.com/sawsew467"
                alt=""
                className="hover:text-primary cursor-pointer transition-all text-xl"
              >
                <FaGithub></FaGithub>
                {/* <i className="fa-brands fa-github text-xl"></i> */}
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/SawSew467/"
                alt=""
                className="hover:text-primary cursor-pointer transition-all text-xl"
              >
                <FaFacebook></FaFacebook>
                {/* <i className="fa-brands fa-facebook text-xl"></i> */}
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/b%E1%BA%A3o-th%E1%BA%AFng-tr%E1%BA%A7n-v%C4%83n-274330243/"
                alt=""
                className="hover:text-primary cursor-pointer transition-all text-xl"
              >
                <FaLinkedin></FaLinkedin>

                {/* <i className="fa-brands fa-linkedin text-xl"></i> */}
              </a>
              <a
                target="_blank"
                href="mailto:thangtvb.dev@gmail.com"
                alt=""
                className="hover:text-primary cursor-pointer transition-all text-xl"
              >
                <FaEnvelope></FaEnvelope>
                {/* <i className="fa-solid fa-envelope text-xl"></i> */}
              </a>
            </div>
          </div>
          <div
            className="sm:hidden flex cursor-pointer"
            onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
          >
            <div
              className={
                isShowMobileMenu
                  ? "flex-col flex gap-2"
                  : "flex-col flex gap-2 "
              }
            >
              <div
                className={
                  isShowMobileMenu
                    ? //   && scrollPosition === 0
                      "w-[1.75rem] h-[2px] bg-white rotate-45 translate-y-[10px] transition-all duration-500"
                    : "w-[1.75rem] h-[2px] bg-white transition-all duration-500"
                }
              ></div>
              <div
                className={
                  isShowMobileMenu
                    ? //   && scrollPosition === 0
                      "w-[1.75rem] h-[2px] translate-x-[100%] transition-all duration-500 opacity-0"
                    : "w-[1.75rem] h-[2px] bg-white transition-all duration-500 opacity-100"
                }
              ></div>
              <div
                className={
                  isShowMobileMenu
                    ? //   && scrollPosition === 0
                      "w-[1.75rem] h-[2px] bg-white rotate-[135deg] translate-y-[-10px] transition-all duration-500"
                    : "w-[1.75rem] h-[2px] bg-white transition-all duration-500"
                }
              ></div>
            </div>
          </div>
          <nav
            className={
              isShowMobileMenu
                ? //   && scrollPosition === 0
                  "fixed top-0 right-0 left-0 z-50 translate-x-0 transition-all duration-500 translate-y-14"
                : "fixed top-0 right-0 left-0 z-50 translate-x-[100%] transition-all duration-500 translate-y-14"
            }
          >
            <div className="bg-[#121e27] pb-2 rounded-bl-xl rounded-br-xl drop-shadow-[8px_60px_28px_rgba(0,0,0,0.12)]">
              <a
                href="#"
                onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
              >
                <div className="text-xl text-center py-2 text-white">About</div>
              </a>
              <a
                href="#projects"
                onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
              >
                <div className="text-xl text-center py-2 text-white">
                  Projects
                </div>
              </a>
              <a
                href="#contact"
                onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
              >
                <div className="text-xl text-center py-2 text-white">
                  Contact
                </div>
              </a>
              <div className="h-full flex sm:justify-between justify-center items-center gap-4 text-white py-2">
                <a
                  target="_blank"
                  href="https://github.com/sawsew467"
                  alt=""
                  className="hover:text-primary cursor-pointer transition-all text-xl"
                >
                  <FaGithub></FaGithub>
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/SawSew467/"
                  alt=""
                  className="hover:text-primary cursor-pointer transition-all text-xl"
                >
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/b%E1%BA%A3o-th%E1%BA%AFng-tr%E1%BA%A7n-v%C4%83n-274330243/"
                  alt=""
                  className="hover:text-primary cursor-pointer transition-all text-xl"
                >
                  <FaLinkedin></FaLinkedin>
                </a>
                <a
                  target="_blank"
                  href="mailto:thangtvb.dev@gmail.com"
                  alt=""
                  className="hover:text-primary cursor-pointer transition-all text-xl"
                >
                  <FaEnvelope></FaEnvelope>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
