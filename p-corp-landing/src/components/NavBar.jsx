import React from "react";
import navLogo from "../assets/navLogo.png";
import navVector from "../assets/navVector.png";
import Button from "./Button";
import Flex from "./Flex";
import Container from "./Container";

const NavBar = () => {
  return (
    <>
      <Container className="mt-4">
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
            <Button className="px-[25px] py-[10px] font-bold text-lg">
              Call Now
            </Button>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
