// Button.jsx
// A reusable button component that accepts custom styles and children (button text/content).

import React from "react";

// Button receives children (content inside the button) and className (custom styling)
const Button = ({ children, className }) => {
  return (
    <>
      {/* Button element with custom classes and default styles */}
      <button
        className={`${className} bg-[#89D32A] text-white rounded-[10px] hover:scale-110 duration-500`}
      >
        {/* Render any nested content passed to the button */}
        {children}
      </button>
    </>
  );
};

export default Button;
