// Flex.jsx
// A reusable Flexbox layout component with default horizontal alignment.
// Applies `flex`, `justify-between`, and `items-center` by default, with optional custom styling.

import React from "react";

// Accepts children (nested elements) and className (additional Tailwind classes)
const Flex = ({ children, className }) => {
  return (
    // Combines default Flexbox layout with user-defined styles
    <div className={`${className} flex justify-between items-center`}>
      {children}
    </div>
  );
};

export default Flex;
