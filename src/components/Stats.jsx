import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section className="flex justify-center items-center flex-row flex-wrap sm:mb-20 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex justify-start items-center flex-1 flex-row m-3">
          <h4 className="text-white font-poppins font-semibold text-[30.89px] xs:text-[40.89px] xs:leading-[53.16px] leading-[43.16px] ">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
