import React from "react";
import Flex from "./Flex";

const SectionHeader = ({ label, title, description }) => {
  return (
    <>
      <Flex className="flex-col mt-[309px]">
        <h4 className="font-bold text-[16px] w-[262px] text-[#89D32A] border-b border-dashed border-gray-400 pb-2.5 text-center">
          {label}
        </h4>
        <h2 className="font-bold text-[40px] pt-7.5 pb-5 text-[#313131]">
          {title}
        </h2>
        <p className="text-[16px] text-[#313131] w-[602px] text-center">
          {description}
        </p>
      </Flex>
    </>
  );
};

export default SectionHeader;
