// Reviews.jsx
// A carousel slider displaying multiple customer review cards with custom navigation arrows.

import React from "react";
import ReviewCard from "../components/ReviewCard"; // Individual review card component
import customerOne from "../assets/customerOne.png"; // Customer images
import customerTwo from "../assets/customerTwo.png";
import customerThree from "../assets/customerThree.png";
import Container from "../components/Container"; // Wrapper component for layout

// Import styles for react-slick carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"; // Carousel slider component
import { GrPrevious, GrNext } from "react-icons/gr"; // Custom arrow icons

// Custom Next Arrow component for carousel navigation
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`custom-arrow next-arrow ${className}`} onClick={onClick}>
      <GrNext />
    </div>
  );
}

// Custom Previous Arrow component for carousel navigation
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`custom-arrow prev-arrow ${className}`} onClick={onClick}>
      <GrPrevious />
    </div>
  );
}

const Reviews = () => {
  // Slider settings including dots, infinite scroll, speed, slides to show,
  // and custom arrows for navigation
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      {/* Container to center and constrain slider */}
      <Container>
        {/* React Slick Slider with passed settings */}
        <Slider {...settings}>
          {/* Review cards with respective customer images */}
          <ReviewCard customerImage={customerOne} />
          <ReviewCard customerImage={customerTwo} />
          <ReviewCard customerImage={customerThree} />
        </Slider>
      </Container>
    </>
  );
};

export default Reviews;
