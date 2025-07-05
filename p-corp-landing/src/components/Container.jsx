// Container.jsx
// A wrapper component to constrain content width and center it horizontally.
// Useful for applying consistent padding and layout structure across sections.

import React from "react";

// Accepts children (inner content) and className (custom styles)
const Container = ({ children, className }) => {
  return (
    // Combines custom styles with fixed width and auto horizontal margin
    <div className={`${className} container w-[1170px] mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
