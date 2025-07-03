import React from "react";
import Button from "../components/Button";

const Form = () => {
  return (
    <>
      <div className="bg-[#313131] h-[541px] mt-33 ">
        <h2 className="text-white font-bold w-[900px] text-[40px] pt-[130px] mx-auto leading-15 text-center">
          Ready To Get Insured? Submit Your Request And Hear Back As Soon As
          Tomorrow.
        </h2>

        <div className=" flex gap-2.5 mt-5 justify-center">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg w-[320px] bg-white text-black placeholder-gray-500"
          />

          <Button className="py-[16px] px-[31px]">Get Started</Button>
        </div>

        <p className="text-[24px] text-white text-center mt-4 w-[850px] mx-auto">
          Get a response tomorrow if you submit by 9pm today. If we received
          after 9pm will get a response the following day.
        </p>
      </div>
    </>
  );
};

export default Form;
