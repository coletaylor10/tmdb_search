import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Slideshow = ({ images }) => {
  const slideitems = images.map((i) => <Image className="grayscale" src={i} alt="" layout="fill" />);

  return (
    <div className="relative outline-dashed h-[80%] overflow-hidden ">
      <div className="">
        <div className="">{slideitems}</div>
        <div className=" absolute outline-dashed w-full h-full ">
          <div className="flex justify-between items-center outline-dotted w-full h-full">
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
