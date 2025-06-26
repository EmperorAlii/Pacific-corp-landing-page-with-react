import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Button from "./Button";
import bannerImage from "../assets/bannerImage.png";

const Banner = () => {
  return (
    <>
      <Container className="relative">
        <Flex className="pt-[200px]">
          <div>
            <h1 className="font-bold text-[70px] w-[680px] h-[270px]">
              We Are Ready To Make Your New Life Happier.
            </h1>
            <p className="pt-12.5 pb-8 leading-9 w-[500px]">
              We work with several leading insurance companies to secure
              insurance coverages tailored to meet your needs.
            </p>
            <Button className="py-2 px-7">Get a Consultation</Button>
          </div>

          <div className="absolute top-37.5 right-0 ">
            <img src={bannerImage} alt="Banner Image" />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Banner;
