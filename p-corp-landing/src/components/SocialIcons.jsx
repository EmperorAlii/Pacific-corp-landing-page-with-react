import React from "react";
import Flex from "./Flex";

//icons
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialIcons = () => {
  return (
    <Flex className="gap-1 mt-4 justify-start">
      {/* Google: B&W to Color switch on hover */}
      <div className="relative group w-10 h-10 bg-[#F4F5F6] rounded-full flex items-center justify-center">
        {/* B&W Icon */}
        <FaGoogle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500 group-hover:opacity-0 transition duration-300 text-xl" />

        {/* Colored Icon */}
        <FcGoogle className="opacity-0 group-hover:opacity-100 transition duration-300 text-xl" />
      </div>

      {/* Twitter */}
      <div className="w-10 h-10 bg-[#F4F5F6] rounded-full flex items-center justify-center">
        <FaTwitter className="text-gray-500 hover:text-[#1DA1F2] text-xl transition duration-300" />
      </div>

      {/* Instagram */}
      <div className="w-10 h-10 bg-[#F4F5F6] rounded-full flex items-center justify-center">
        <FaInstagram className="text-gray-500 hover:text-[#E1306C] text-xl transition duration-300" />
      </div>

      {/* LinkedIn */}
      <div className="w-10 h-10 bg-[#F4F5F6] rounded-full flex items-center justify-center">
        <FaLinkedinIn className="text-gray-500 hover:text-[#0077B5] text-xl transition duration-300" />
      </div>
    </Flex>
  );
};

export default SocialIcons;
