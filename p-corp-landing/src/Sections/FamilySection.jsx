// FamilySection.jsx
// A section showcasing family-related images alongside informational text about carbon monoxide safety.

import React from "react";
import Container from "../components/Container"; // Wrapper to center and constrain content width
import Flex from "../components/Flex"; // Flexbox layout component

// Images used in the section
import familyOne from "../assets/familyImageOne.png";
import familyTwo from "../assets/familyImageTwo.png";
import familyThree from "../assets/familyImageThree.png";

const FamilySection = () => {
  return (
    // Container with top margin for spacing from previous sections
    <Container className="mt-12">
      {/* Main flex layout aligning images and text horizontally */}
      <Flex className="items-start">
        {/* Left family image */}
        <img src={familyOne} alt="family image one" />

        {/* Center content: image + heading + description stacked vertically */}
        <Flex className="flex-col items-center gap-4 px-4">
          <img src={familyTwo} alt="family image two" />

          {/* Section heading */}
          <h2 className="font-semibold text-2xl leading-10 w-[275px] text-center">
            How to prevent and protect your family from Carbon monoxide
          </h2>

          {/* Section description */}
          <p className="text-center w-[308px] leading-[1.625rem] text-[16px]">
            We share common trends, strategies, ideas, opinions, short & long
            stories from the team behind company.
          </p>
        </Flex>

        {/* Right family image */}
        <img src={familyThree} alt="family image three" />
      </Flex>
    </Container>
  );
};

export default FamilySection;
