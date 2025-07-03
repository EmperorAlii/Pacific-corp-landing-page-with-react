import React from "react";
import ReviewCard from "../components/ReviewCard";
import customerOne from "../assets/customerOne.png";
import customerTwo from "../assets/customerTwo.png";
import customerThree from "../assets/customerThree.png";
import Container from "../components/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`custom-arrow next-arrow ${className}`} onClick={onClick}>
      <GrNext />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`custom-arrow prev-arrow ${className}`} onClick={onClick}>
      <GrPrevious />
    </div>
  );
}
const Reviews = () => {
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
      <Container>
        <Slider {...settings}>
          <ReviewCard customerImage={customerOne} />
          <ReviewCard customerImage={customerTwo} />
          <ReviewCard customerImage={customerThree} />
        </Slider>
      </Container>
    </>
  );
};

export default Reviews;
