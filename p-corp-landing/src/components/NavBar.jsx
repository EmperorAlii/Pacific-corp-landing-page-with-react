import React from "react";
import navLogo from "../assets/navLogo.png";
import Button from "./Button";
import Flex from "./Flex";
import Container from "../Container";

const NavBar = () => {
  return (
    <>
      <Container>
        <Flex>
          <div>
            {" "}
            <img src={navLogo} alt="navLogo" />
          </div>
          <ul>
            <Flex className="gap-6">
              <li>Home</li>
              <li>Pages</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </Flex>
          </ul>
          <div>
            <Button>Call Now</Button>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
