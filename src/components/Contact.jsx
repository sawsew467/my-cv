import React from "react";

function Contact() {
  return (
    <>
      <div className="flex" id="contact">
        <div className="container max-w-[960px] mx-auto flex flex-col sm:pb-20 pb-10 lg:px-0 sm:px-4 px-2">
          <div className="sm:mb-20 mb-10">
            <span className="text-4xl font-[300] relative after:absolute after:z-[-1] after:w-1/2 after:h-3 after:bg-primary after:left-0 after:bottom-2 hover:after:w-full after:transition-all">
              Contact
            </span>
          </div>
          <div className="flex sm:flex-row flex-col justify-between sm:gap-0 gap-2">
            <div className="sm:w-[48%] w-full p-8 bg-[#121e27] text-primary drop-shadow-xl flex flex-col items-center">
              <i className="fa-solid fa-phone text-xl"></i>
              <p className="text-xl font-[500]">Talk to me!</p>
              <a className="tracking-widest" href="tel:+84828828497">
                +84 828 828 497
              </a>
              <p className="text-md text-center mt-2 text-slate-300">
                Interested in my services? Just pick up the phone and talk about
                our bussiness!
              </p>
            </div>
            <div className="sm:w-[48%] w-full p-8 bg-[#121e27] text-primary drop-shadow-xl flex flex-col items-center">
              <i className="fa-solid fa-envelope text-xl"></i>
              <p className="text-xl font-[500]">Mail to me!</p>
              <a
                className="tracking-widest"
                href="mailto:thangtvb.dev@gmail.com"
              >
                Thangtvb.dev@gmail.com
              </a>

              <p className="text-md text-center mt-2 text-slate-300">
                If you want to work with me, email is the best way that we can
                contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
