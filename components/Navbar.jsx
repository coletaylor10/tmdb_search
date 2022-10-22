import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const navBar = () => {
  return (
    <div className=" w-full h-[80px] bg-white">
      <div className=" flex justify-between p-4">
        <h1 className=" text-black">TMDB Search</h1>
        <div className=" w-[30%] mr-8">
          <form className="w-full py-4 flex" action="">
            <input className="w-full mx-4 border-black border rounded-xl px-2" type="text" placeholder="Search Keywords" name="q" />
            <button type="submit">
              <AiOutlineSearch className=" text-2xl text-black border border-black rounded-xl" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default navBar;
