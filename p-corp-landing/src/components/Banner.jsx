// Banner.jsx
// This component displays the homepage banner section with a heading, description,
// call-to-action button, and a decorative image.

import React from "react";
import Container from "./Container"; // Wrapper for consistent horizontal padding
import Flex from "./Flex"; // Reusable Flexbox layout component
import Button from "./Button"; // Reusable button component
import bannerImage from "../assets/bannerImage.png"; // Banner decorative image

const Banner = () => {
  return (
    <>
      {/* Wrapper div for full width and positioning the image */}
      <div className="relative w-full">
        {/* Decorative banner image positioned absolutely to the top-right */}
        <img
          src={bannerImage}
          alt="Banner"
          className="absolute top-10 right-0 z-10"
        />

        {/* Main content container with top padding */}
        <Container className="pt-[130px]">
          <Flex>
            <div>
              {/* Main banner heading */}
              <h1 className="font-bold text-[70px] w-[680px] leading-[1.2] text-[#313131]">
                We Are Ready To Make Your New Life Happier.
              </h1>

              {/* Supporting description paragraph */}
              <p className="pt-10 pb-8 leading-9 w-[500px]">
                We work with several leading insurance companies to secure
                insurance coverages tailored to meet your needs.
              </p>

              {/* Call-to-action button */}
              <Button className="py-2 px-7">Get a Consultation</Button>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
