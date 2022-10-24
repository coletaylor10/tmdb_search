import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchItem from "./SearchItem";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [keyword, setKeyword] = useState("");
  function getSearch(val) {
      setKeyword(val.target.value);
    
    
  }

  return (
    <div className=" w-full h-[80px] bg-white z-20">
      <div className=" flex justify-between p-4">
        <h1 className=" text-black">TMDB Search</h1>
        <div className=" w-[30%] mr-8">
          <form className="w-full py-4 flex"  action="" >
            <input
              className="w-full mx-4 border-black border rounded-xl px-2 text-black"
              type="text"
              placeholder="Search Keywords"
              onChange={getSearch}
            />
          </form>
          <div className={`cursor-pointer  ${keyword === undefined || keyword === '' ? `hidden` : '' }`}>
            <SearchItem  UID={0} keyword={keyword} />
            <SearchItem  UID={1} keyword={keyword} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
