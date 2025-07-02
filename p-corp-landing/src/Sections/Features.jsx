import React from "react";
import FeatureCard from "../components/Card";
import Flex from "../components/Flex";
import Container from "../components/Container";

// Icons
import UnBiasedIcon from "../assets/unBiasedIcon.png";
import PricesIcon from "../assets/pricesIcon.png";
import TickIcon from "../assets/tickIcon.png";
import ServiceIcon from "../assets/serviceIcon.png";
import FingerIcon from "../assets/FingerIcon.png";

const Features = () => {
  return (
    <>
      <Container>
        {/* First row of features */}
        <Flex>
          <FeatureCard
            title="We’re unbiased"
            description="Our online tools help you decide what product is best for you. We’re here to insurance plan you choose."
            showLearnMore={false}
          >
            <img src={UnBiasedIcon} alt="unBiasedIcon" />
          </FeatureCard>

          <FeatureCard
            title="We have the best prices"
            description="Our insurance plans offers are priced the same everywhere else. We just make them easier for you to find."
            showLearnMore={false}
          >
            <img src={PricesIcon} alt="PricesIcon" />
          </FeatureCard>

          <FeatureCard
            title="We’re your insurance advocate"
            description="We will deal with the insurance companies for you, even after you’ve bought your plan."
            showLearnMore={false}
          >
            <img src={TickIcon} alt="TickIcon" />
          </FeatureCard>
        </Flex>

        {/* Second row of features */}
        <Flex className="!justify-center mt-[85px]">
          <FeatureCard
            title="We’re available 24/7"
            description="We have your back 24/7 between our online chat function, email and telephone support."
            showLearnMore={false}
          >
            <img src={ServiceIcon} alt="ServiceIcon" />
          </FeatureCard>

          <FeatureCard
            title="We make insurance simple"
            description="We’re committed to making applying for insurance as simple as can be for our customers."
            showLearnMore={false}
          >
            <img src={FingerIcon} alt="FingerIcon" />
          </FeatureCard>
        </Flex>
      </Container>
    </>
  );
};

export default Features;
