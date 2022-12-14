import React from "react";
import SearchItem from "./SearchItem";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavBar = ({ data }) => {
  const [value, setValue] = useState();

  const router = useRouter();
  const keywordSearch = (event) => {
    event.preventDefault();
    console.log("ENTER");

    router.push(`/search/${value}`);
  };

  return (
    <div className="bg-[#121212] mb-8">
      <div className=" mx-auto flex items-center justify-around max-w-3xl text-white font-mono text-2xl ">
        <div>
          <Link href={"/"}>TMDB</Link>
        </div>
        <form className="" onSubmit={keywordSearch}>
          <input
            className=" border-none outline-none caret-black px-2 text-black"
            value={value}
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
            type="text"
            placeholder="Search Keywords"
          />
        </form>
        <div>
          <Link href="/FAQ">FAQ</Link>
        </div>
        {/* Hamburger menu */}
        {/* breakpoint */}
        {/* sign In */}
      </div>
    </div>
  );
};

export default NavBar;
