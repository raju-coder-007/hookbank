import React from "react";
import { apple, bill, google } from "../assets";

const Billing = () => {
  return (
    <section
      className="flex md:flex-row flex-col-reverse sm:py-16 py-6"
      id="product">
      <div className="grid md:grid-cols-2 grid-col-1 items-center gap-8 sm:gap-12 justify-center">
        <div className="flex-1 flex justify-center items-center  mr-0 md:mt-0 mt-10 relative">
          <img
            src={bill}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </div>
        <div class="sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col justify-center items-start w-full  md:ml-12 ml-0">
          <h2 className="font-poppins font-semibold xs:text-[48px]  text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] ">
            Easily control your <br className="sm:block hidden" /> billing &
            invoicing
          </h2>
          <p className="max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img
              src={apple}
              alt="google_play"
              className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
            />
            <img
              src={google}
              alt="google_play"
              className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
