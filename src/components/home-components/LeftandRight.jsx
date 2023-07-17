import React from "react";
import Left from "./Left";
import Right from "./Right";

const LeftAndRight = () => {
  return (
    <div className=" flex flex-col md:flex-row lg:flex-row gap-[2%] w-[87%] mx-auto my-5">
      <div className="  md:w-[68%] lg:w-[68%] ">
        <Left />
      </div>
      <div className=" md:w-[30%] lg:w-[30%]">
        <Right />
      </div>
    </div>
  );
};

export default LeftAndRight;
