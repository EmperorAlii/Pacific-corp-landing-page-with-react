import React from "react";
import Flex from "./Flex";

//Images
import star from "../assets/ratingStar.png";
import verifiedIcon from "../assets/verified.svg";

const ReviewCard = ({ customerImage }) => {
  return (
    <>
      <div className="w-full max-w-[369px] h-[342px] rounded-[10px] pl-14 mt-12 mx-auto">
        <Flex className="flex-col items-start pt-13">
          <img src={star} alt="ratingStar" className="pb-5" />
          <p className="pb-8 leading-8 text-[16px]">
            I received great customer service from the specialists who helped
            me. I would recommend to anyone who wants quality.
          </p>

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
