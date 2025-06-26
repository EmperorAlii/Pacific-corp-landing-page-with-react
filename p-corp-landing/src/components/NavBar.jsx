import React from "react";
import navLogo from "../assets/navLogo.png";
import navVector from "../assets/navVector.png";
import Button from "./Button";
import Flex from "./Flex";
import Container from "./Container";

const NavBar = () => {
  return (
    <>
      <div className="relative">
        <img src={navVector} alt="navVector" className="absolute -z-10" />
        <Container className="mt-4 absolute left-1/2 transform -translate-x-1/2">
          <Flex>
            <div>
              <img src={navLogo} alt="navLogo" />
            </div>
            <ul>
              <Flex className="gap-6 text-[16px]">
                <li>Home</li>
                <li>Pages</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </Flex>
            </ul>
            <div>
              <Button className="px-[25px] py-[10px] font-bold text-lg hover:scale-110  duration-500">
                Call Now
              </Button>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default NavBar;
