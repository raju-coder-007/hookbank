import React from "react";
import Button from "./Button";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 sm:gap-12">
        <div className="flex flex-1 flex-col justify-center items-start">
          <h2 className="text-white font-poppins font-semibold text-[40px] xs:text-[48px] xs:leading-[76.8px] leading-[66.8px] w-ful">
            Find a better card Deal <br className="sm:block hidden" />
            in few easy steps.
          </h2>
          <p className="mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px]">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button style={"mt-10"}>Get Started</Button>
        </div>
        <div className="flex flex-1 justify-center items-center md:mt-0 mt-10 relative">
          <img src={card} alt="billing" className="w-[100%] h-[100%]" />
        </div>
      </div>
    </section>
  );
};

export default CardDeal;
