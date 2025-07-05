// Form.jsx
// A simple email submission form section prompting users to get insured,
// with an input field, submit button, and informative text.

import React from "react";
import Button from "../components/Button"; // Reusable styled button component

const Form = () => {
  return (
    <>
      {/* Container with dark background, fixed height, margin-top, and shadow */}
      <div className="bg-[#313131] h-[541px] mt-33 shadow-xl">
        {/* Main heading centered with white text */}
        <h2 className="text-white font-bold w-[900px] text-[40px] pt-[130px] mx-auto leading-15 text-center">
          Ready To Get Insured? Submit Your Request And Hear Back As Soon As
          Tomorrow.
        </h2>

        {/* Input and button side-by-side, centered with gap */}
        <div className=" flex gap-2.5 mt-5 justify-center">
          {/* Email input */}
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg w-[320px] bg-white text-black placeholder-gray-500"
          />

          {/* Submit button */}
          <Button className="py-[16px] px-[31px]">Get Started</Button>
        </div>

        {/* Informational text below form, semi-transparent white, centered */}
        <p className="text-[16px] !text-white/75 text-center mt-4 w-[555px] mx-auto">
          Get a response tomorrow if you submit by 9pm today. If we received
          after 9pm will get a response the following day.
        </p>
      </div>
    </>
  );
};

export default Form;
