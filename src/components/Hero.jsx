import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex flex-1 justify-center items-start flex-col xl:px-0 sm:px-16 px-6  ">
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
            <span className="text-white">20%</span> Discount for
            <span className="text-white"> 1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins flex-1 text-white font-semibold text-[52px] ss:text-[68px] ss:leading-[100.8px] leading-[75px]">
            The Next <br />
            <span className="text-gradient">Generation</span>
          </h1>

          <div className="ss:flex  mr-0 md:mr-4 hidden md:block">
            <GetStarted />
          </div>
        </div>
        <h1 className="text-white font-poppins font-semibold text-[52px] ss:text-[68px] ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className=" mt-5 max-w-[470px] text-dimWhite">
          Our team of experts uses a methodology to identity the credit cards
          most likely to fit yours needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center my-10 md:my-0 relative">
        <img
          src={robot}
          alt="robotic"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute pink__gradient w-[40%] h-[35%] top-0 z-0"></div>
        <div className="absolute white__gradient w-[80%] h-[80%] bottom-40 rounded-full z-[1]"></div>
        <div className="absolute blue__gradient w-[50%] h-[50%] right-20 bottom-20 z-0"></div>
      </div>
      <div className="md:hidden flex justify-center items-center">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
