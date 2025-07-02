import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Flex from "./Flex";

const InsuranceCard = ({ children, title, description }) => {
  return (
    <>
      <Flex className="flex-col !justify-center  w-[280px] h-[377px] transition-transform duration-300 hover:-translate-y-20">
        <div>{children}</div>
        <h3 className="font-bold text-2xl text-[#313131] pt-7.5">{title}</h3>
        <p className="text-center text-[16px] pt-5">{description}</p>
        <h5 className="flex gap-2 justify-center items-center pt-2">
          Learn more <FaArrowRight />
        </h5>
      </Flex>
    </>
  );
};

export default InsuranceCard;
