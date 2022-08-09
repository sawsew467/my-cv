import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full bg-[#121e27]">
        <div className="max-w-[960px] mx-auto sm:py-20 py-10 flex sm:flex-row flex-col justify-between lg:px-0 sm:px-4 px-2">
          <div className="flex flex-col sm:w-1/3 w-full sm:m">
            <span className="text-white font-[500] text-xl">Thangtvb.dev</span>
            <p className="text-slate-300 text-sm sm:mt-2 mt-1 sm:max-w-[12rem]">
              © 2022, Built and designed by ThangTVB
            </p>
          </div>
          <div className="flex sm:flex-row sm:w-2/3 w-full sm:justify-end sm:gap-40">
            <div className="flex flex-col sm:w-1/5 w-full sm:mt-0 mt-2">
              <span className="text-slate-300 font-[500] text-xl">Links</span>
              <a href="#about" className="text-primary font-[700] sm:mt-2">
                About
              </a>
              <a href="#projects" className="text-primary font-[700]">
                Projects
              </a>
              <a href="#contact" className="text-primary font-[700]">
                Contact
              </a>
            </div>
            <div className="flex flex-col sm:w-1/5 w-full sm:mt-0 mt-2">
              <span className="text-slate-300 font-[500] text-xl">
                Get in touch
              </span>
              <a
                target="_blank"
                href="https://github.com/sawsew467"
                className="text-primary font-[700]"
              >
                Github
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/SawSew467/"
                className="text-primary font-[700]"
              >
                Facebook
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/b%E1%BA%A3o-th%E1%BA%AFng-tr%E1%BA%A7n-v%C4%83n-274330243/"
                className="text-primary font-[700]"
              >
                Linkedin
              </a>
              <a
                target="_blank"
                href="mailto:thangtvb.dev@gmail.com"
                className="text-primary font-[700]"
              >
                Gmail
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
