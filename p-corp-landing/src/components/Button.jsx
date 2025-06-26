import React from "react";

const Button = ({ children, className }) => {
  return (
    <>
      <button className={`${className} bg-[#89D32A] text-white rounded-[10px]`}>
        {children}
      </button>
    </>
  );
};

export default Button;
