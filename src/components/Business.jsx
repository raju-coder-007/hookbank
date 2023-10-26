import React from "react";
import { features } from "../constants";
import Button from "./Button";
console.log(features);

const FeaturedCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}>
    <div className="bg-dimBlue w-[64px] height-[64px] rounded-full flex justify-center items-center">
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className="flex md:flex flex-col sm:py-16 py-6 ">
      <div className="grid grid-cols-1 items-center gap-8 sm:gap-20 lg:grid-cols-2">
        <div className=" flex flex-1 flex-col justify-center items-start">
          <h2 className="text-white font-poppins font-semibold text-[40px] xs:text-[48px] xs:leading-[76.8px] leading-[66.8px] w-full">
            You do the business, <br className="sm:block hidden" /> we’ll handle
            the money.
          </h2>
          <p className="mt-5 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <Button style={"mt-10"}>Get Started</Button>
        </div>

        <div className="flex-1 flex  justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 flex-col relative">
          {features.map((feature, index) => (
            <FeaturedCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
