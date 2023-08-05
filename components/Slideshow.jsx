import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Slideshow = ({ images }) => {
  const slideitems = images.map((i) => <img src={i} alt="" />);

  return (
    <div className="relative outline-dashed overflow-hidden">
      <div className="flex items-center">
        <div className=" flex h-full grayscale">{slideitems}</div>
        <div className=" absolute w-full h-full">
          <div className=" flex justify-between items-center w-full h-full">
            <div className=" flex justify-center items-center bg-black aspect-square w-12 rounded-full mx-2">
              <FaArrowLeft />
            </div>
            <div className=" flex justify-center items-center bg-black aspect-square w-12 rounded-full mx-2">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
