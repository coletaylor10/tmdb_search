import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchItem from "./SearchItem";
import { useState, useEffect } from "react";


const NavBar = ({ data }) => {
  return (
    <div>
      <div className=" w-full bg-white ">
        <div className="px-[40px] py-[40px] ">
          <a
            href="/"
            className=" text-white font-bold text-8xl bg-red-500 px-16"
          >
            TMDB
          </a>
        </div>
      </div>
      <div className=" w-full bg-red-500 flex justify-between items-center py-2 mb-8">
        <div className="w-[40%]">
          <ul className="flex justify-between ml-16 text-2xl font-bold">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href="">TV Series</a>
            </li>
            <li>
              <a href="/FAQ">FAQ</a>
            </li>
          </ul>
        </div>
        <div className=" w-[50%] flex justify-around ">
          <form className=" w-full" action="">
            <input
              className=" w-full marker:border text-black py-2 px-2"
              type="text"
              placeholder="Search Keywords"
            />
          </form>
          <ul className="  w-[40%] flex pl-16 py-2 ">
            <li className=" pr-8 cursor-not-allowed  ">Login</li>
            <li className=" cursor-not-allowed">Sign Up</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
