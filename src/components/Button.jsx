import React from "react";

const Button = ({ children, style }) => {
  return (
    <button
      type="button"
      className={`${style} py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none `}>
      {children}
    </button>
  );
};

export default Button;
