import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";

// Images
import familyOne from "../assets/familyImageOne.png";
import familyTwo from "../assets/familyImageTwo.png";
import familyThree from "../assets/familyImageThree.png";

const FamilySection = () => {
  return (
    <Container className="mt-12">
      <Flex className="items-start">
        <img src={familyOne} alt="family image one" />

        <Flex className="flex-col items-center gap-4 px-4">
          <img src={familyTwo} alt="family image two" />
          <h2 className="font-semibold text-2xl leading-10 w-[275px] text-center">
            How to prevent and protect your family from Carbon monoxide
          </h2>
          <p className="text-center w-[308px] leading-[1.625rem] text-[16px]">
            We share common trends, strategies, ideas, opinions, short & long
            stories from the team behind company.
          </p>
        </Flex>

        <img src={familyThree} alt="family image three" />
      </Flex>
    </Container>
  );
};

export default FamilySection;
