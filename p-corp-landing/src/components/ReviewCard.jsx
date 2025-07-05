// ReviewCard.jsx
// A testimonial/review card displaying customer feedback, star rating, and verification badge.

import React from "react";
import Flex from "./Flex"; // Reusable Flexbox layout component

// Images
import star from "../assets/ratingStar.png"; // Star rating graphic
import verifiedIcon from "../assets/verified.svg"; // Verified customer icon

// Props:
// - customerImage: profile image of the reviewer
const ReviewCard = ({ customerImage }) => {
  return (
    <>
      {/* Card container with fixed width and padding */}
      <div className="w-full max-w-[369px] h-[342px] rounded-[10px] pl-14 mt-12 mx-auto">
        {/* Outer vertical flex layout for content */}
        <Flex className="flex-col items-start pt-13">
          {/* Rating star image */}
          <img src={star} alt="ratingStar" className="pb-5" />

          {/* Customer feedback */}
          <p className="pb-8 leading-8 text-[16px]">
            I received great customer service from the specialists who helped
            me. I would recommend to anyone who wants quality.
          </p>

          {/* Customer info section: image, name, and verification */}
          <Flex className="gap-5">
            <img
              src={customerImage}
              alt="customerImage"
              className="h-10 w-10"
            />
            <div>
              <h3 className="font-semibold text-[20px]">Viola Manisa</h3>
              <Flex>
                <img src={verifiedIcon} alt="verified" className="w-4 h-4" />
                <h6 className="text-sm italic gap-1">Verified Customer</h6>
              </Flex>
            </div>
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default ReviewCard;
