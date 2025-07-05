// Insurances.jsx
// Displays insurance product cards for Home, Life, and Car insurance options.

import React from "react";
import Container from "../components/Container"; // Wrapper for centered and constrained content
import Flex from "../components/Flex"; // Flexbox layout component
import InsuranceCard from "../components/Card"; // Reusable card component for each insurance type

// Icons representing each insurance type
import homeIcon from "../assets/homeIcon.png";
import lifeIcon from "../assets/lifeIcon.png";
import carIcon from "../assets/carIcon.png";

const Insurances = () => {
  return (
    <>
      {/* Container with top margin spacing */}
      <Container className="mt-37.5">
        {/* Horizontal flex layout for insurance cards */}
        <Flex>
          {/* Home Insurance Card */}
          <InsuranceCard
            title="Home Insurance"
            description="Home insurance is a type of insurance policy that provides cover for your home."
          >
            <img src={homeIcon} alt="homeIcon" />
          </InsuranceCard>

          {/* Life Insurance Card */}
          <InsuranceCard
            title="Life Insurance"
            description="Helping you bridge gaps in your health care coverage during times of transition"
          >
            <img src={lifeIcon} alt="lifeIcon" />
          </InsuranceCard>

          {/* Car Insurance Card */}
          <InsuranceCard
            title="Car Insurance"
            description="Car insurance is a type of insurance policy that provides cover for your car."
          >
            <img src={carIcon} alt="carIcon" />
          </InsuranceCard>
        </Flex>
      </Container>
    </>
  );
};

export default Insurances;
