// SectionHeader.jsx
// A reusable section header component displaying a label, title, and description.
// Typically used to introduce different sections on a page.

import React from "react";
import Flex from "./Flex"; // Flexbox layout component for vertical alignment

// Props:
// - label: small uppercase or highlighted text above the title (e.g., "FEATURES")
// - title: main heading text of the section
// - description: brief paragraph describing the section content
const SectionHeader = ({ label, title, description }) => {
  return (
    <>
      {/* Flex container stacked vertically with large top margin */}
      <Flex className="flex-col mt-[309px]">
        {/* Label with green color and dashed underline */}
        <h4 className="font-bold text-[16px] w-[262px] text-[#89D32A] border-b border-dashed border-gray-400 pb-2.5 text-center">
          {label}
        </h4>

        {/* Main section title */}
        <h2 className="font-bold text-[40px] pt-7.5 pb-5 text-[#313131]">
          {title}
        </h2>

        {/* Description paragraph centered below the title */}
        <p className="text-[16px] text-[#313131] w-[602px] text-center">
          {description}
        </p>
      </Flex>
    </>
  );
};

export default SectionHeader;
