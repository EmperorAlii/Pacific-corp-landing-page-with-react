// Card.jsx
// A reusable card component with optional hover effect and "Learn more" link.
// Accepts custom content, title, description, and behavior flags.

import React from "react";
import { FaArrowRight } from "react-icons/fa6"; // Icon used for "Learn more"
import Flex from "./Flex"; // Reusable Flexbox layout component

const Card = ({
  children, // Any custom element passed inside the card (e.g., icon/image)
  title, // Card title text
  description, // Description text under the title
  showLearnMore = true, // Controls visibility of the "Learn more" link
  disableHover = false, // Disables hover lift effect when true
}) => {
  return (
    <>
      {/* Card container with optional hover animation */}
      <Flex
        className={`flex-col !justify-center w-[370px] h-[377px] px-[45px] shadow-xl rounded-xl transition-transform duration-300 ${
          disableHover ? "" : "hover:-translate-y-20"
        }`}
      >
        {/* Top content: usually an icon or image */}
        <div>{children}</div>

        {/* Card title */}
        <h3 className="font-bold text-2xl text-[#313131] pt-7.5 text-center">
          {title}
        </h3>

        {/* Card description text */}
        <p className="text-center text-[16px] pt-5">{description}</p>

        {/* Optional "Learn more" section */}
        {showLearnMore && (
          <h5 className="flex gap-2 justify-center items-center pt-2 font-bold text-[16px]">
            Learn more <FaArrowRight />
          </h5>
        )}
      </Flex>
    </>
  );
};

export default Card;
