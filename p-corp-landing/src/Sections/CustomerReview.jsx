import React from "react";
import Container from "../components/Container";
import Customer from "../assets/danielAnderson.png";
import leftIcon from "../assets/quoteLeft.png";
import verifiedIcon from "../assets/Verified.svg";

const CustomerReview = () => {
  return (
    <>
      <Container className="mt-32.5 relative">
        <img src={Customer} alt="Picture of Daniel Anderson" />
        <div className="absolute left-[45px] top-[50px] h-[492px] w-[447px] bg-white z-10 pr-9 pl-14 pt-12 pb-12 rounded-2xl">
          <img src={leftIcon} alt="quote left icon" />
          <p className="font-semibold text-2xl pt-5 pb-7.5">
            This platform is one of the best companies I have dealt with in
            Indonesia. They’re always happy to help, and i wouldn’t hesitate to
            recommend them.
          </p>
          <h3 className="text-[#343434] font-bold text-xl pb-2.5">
            Daniel Anderson
          </h3>
          <h6 className="flex gap-1 italic text-[16px] text-[#676767]">
            <img src={verifiedIcon} alt="verifiedIcon" className="w-5 h-5" />
            Verified Customer
          </h6>
        </div>
      </Container>
    </>
  );
};

export default CustomerReview;
