// Footer.jsx
// The website footer containing the company logo, description, social icons,
// and multiple lists of navigation links grouped by category.

import React from "react";
import Flex from "../components/Flex"; // Flexbox layout component
import Container from "../components/Container"; // Container for consistent width
import SocialIcons from "../components/SocialIcons"; // Social media icon buttons

// Logo image
import pageLogo from "../assets/navLogo.png";

const Footer = () => {
  return (
    <>
      {/* Container to center and constrain footer content */}
      <Container>
        {/* Flex container for horizontal layout of footer columns */}
        <Flex className="mt-32.5 !items-start">
          {/* Logo, description, and social media icons */}
          <div>
            <img src={pageLogo} alt="pacific corp logo" />
            <p className="text-[16px] leading-7 w-[263px] mt-4">
              Build a modern and creative website with cropland
            </p>
            <SocialIcons />
          </div>

          {/* Product navigation links */}
          <ul>
            <li className="footer-head">Product</li>
            <li className="footer-list mt-7.75">Landing page</li>
            <li className="footer-list">Features</li>
            <li className="footer-list">Documentation</li>
            <li className="footer-list">Referral Program</li>
            <li className="footer-list">Pricing</li>
          </ul>

          {/* Services navigation links */}
          <ul>
            <li className="footer-head">Services</li>
            <li className="footer-list mt-7.75">Documentation</li>
            <li className="footer-list">Design</li>
            <li className="footer-list">Themes</li>
            <li className="footer-list">Illustration</li>
            <li className="footer-list">UI Kit</li>
          </ul>

          {/* Company navigation links */}
          <ul>
            <li className="footer-head">Company</li>
            <li className="footer-list mt-7.75">About</li>
            <li className="footer-list">Terms</li>
            <li className="footer-list">Privacy Policy</li>
            <li className="footer-list">Careers</li>
            <li className="footer-list"></li>{" "}
            {/* Empty list item, consider removing */}
          </ul>

          {/* More navigation links */}
          <ul>
            <li className="footer-head">More</li>
            <li className="footer-list mt-7.75">Documentation</li>
            <li className="footer-list">License</li>
            <li className="footer-list">Changelog</li>
          </ul>
        </Flex>
      </Container>
    </>
  );
};

export default Footer;
