import React, { useEffect, useState } from "react";
import Image from "next/image";
import MoviesItem from "./MoviesItem";
import axios from "axios";
import TvItem from "./TvItem";

const Movies = () => {
  return (
    <div>
      <div className="flex justify-around">
        <div className="flex-col">
          <h2 className="mb-2">SlideShow</h2>
          <div className=" w-[720px] h-[335px] bg-white"></div>
        </div>
        <div className=" mb-8">
          <h2 className=" mb-6 ">Popular Movies</h2>
          <div className=" h-[320px] overflow-y-scroll scroll max-w-2xl text-xs">
            <div>
              <MoviesItem UID={0} />
            </div>
            <div>
              <MoviesItem UID={1} />
            </div>
            <div>
              <MoviesItem UID={2} />
            </div>
            <div>
              <MoviesItem UID={3} />
            </div>
            <div>
              <MoviesItem UID={4} />
            </div>
            <div>
              <MoviesItem UID={5} />
            </div>
            <div>
              <MoviesItem UID={6} />
            </div>
            <div>
              <MoviesItem UID={7} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around mx-auto">
        <div>
          <TvItem UID={0} />
        </div>
        <div>
          <TvItem UID={1} />
        </div>
        <div>
          <TvItem UID={2} />
        </div>
        <div>
          <TvItem UID={3} />
        </div>
        <div>
          <TvItem UID={4} />
        </div>
        <div>
          <TvItem UID={5} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
