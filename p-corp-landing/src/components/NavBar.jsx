// NavBar.jsx
// This component renders the top navigation bar with a logo, navigation links, and a call-to-action button.

import React from "react";
import navLogo from "../assets/navLogo.png"; // Logo image
import navVector from "../assets/navVector.png"; // (Unused here — possibly remove or use later)
import Button from "./Button"; // Reusable styled button
import Flex from "./Flex"; // Flexbox layout component
import Container from "./Container"; // Width-constrained wrapper

const NavBar = () => {
  return (
    <>
      {/* Container wraps the navbar content and gives horizontal margin */}
      <Container className="mt-4">
        {/* Flex for horizontal layout: logo, nav links, button */}
        <Flex>
          {/* Logo section */}
          <div>
            <img src={navLogo} alt="navLogo" />
          </div>

          {/* Navigation links */}
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

          {/* Call-to-action button */}
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
