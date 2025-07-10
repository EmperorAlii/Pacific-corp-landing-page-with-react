// CustomerReview.jsx
// A testimonial section showcasing a customer's image alongside their review and verification badge.

import React from "react";
import Container from "../components/Container"; // Wrapper to constrain width and center content

// Assets
import Customer from "../assets/danielAnderson.png"; // Customer photo
import leftIcon from "../assets/quoteLeft.png"; // Decorative left quote icon
import verifiedIcon from "../assets/verified.svg"; // Verified customer badge icon

const CustomerReview = () => {
  return (
    <>
      {/* Container with top margin and relative positioning for overlay */}
      <Container className="mt-32.5 relative">
        {/* Customer image */}
        <img src={Customer} alt="Picture of Daniel Anderson" />

        {/* Review box positioned absolutely over the image */}
        <div className="absolute left-[45px] top-[50px] h-[492px] w-[447px] bg-white z-10 pr-9 pl-14 pt-12 pb-12 rounded-2xl">
          {/* Decorative left quote icon */}
          <img src={leftIcon} alt="quote left icon" />

          {/* Customer testimonial text */}
          <p className="font-semibold text-2xl pt-5 pb-7.5">
            This platform is one of the best companies I have dealt with in
            Indonesia. They’re always happy to help, and i wouldn’t hesitate to
            recommend them.
          </p>

          {/* Customer name */}
          <h3 className="text-[#343434] font-bold text-xl pb-2.5">
            Daniel Anderson
          </h3>

          {/* Verified customer label with icon */}
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
