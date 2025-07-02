import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import InsuranceCard from "../components/Card";
import homeIcon from "../assets/homeIcon.png";
import lifeIcon from "../assets/lifeIcon.png";
import carIcon from "../assets/carIcon.png";

const Insurances = () => {
  return (
    <>
      <Container className="mt-37.5">
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
