import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Button from "./Button";
import bannerImage from "../assets/bannerImage.png";

const Banner = () => {
  return (
    <>
      <div className="relative w-full">
        <img
          src={bannerImage}
          alt="Banner"
          className="absolute top-10 right-0 z-10"
        />
        <Container className="pt-[130px]">
          <Flex>
            <div>
              <h1 className="font-bold text-[70px] w-[680px] leading-[1.2] text-[#313131]">
                We Are Ready To Make Your New Life Happier.
              </h1>
              <p className="pt-10 pb-8 leading-9 w-[500px]">
                We work with several leading insurance companies to secure
                insurance coverages tailored to meet your needs.
              </p>
              <Button className="py-2 px-7">Get a Consultation</Button>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
