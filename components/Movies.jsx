import React, { useEffect, useState } from "react";
import Image from "next/image";
import MoviesItem from "./MoviesItem";
import TvItem from "./TvItem";
import Slideshow from "./Slideshow";

const Movies = () => {
  return (
    <div>
      <div className="flex justify-around">
        <Slideshow />
        <div className=" mb-8">
          <h2 className=" mb-6 ">Popular Movies</h2>
          <div className=" h-[320px] overflow-y-scroll scroll max-w-4xl text-xs">
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
