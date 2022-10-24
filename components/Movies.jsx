import React, { useEffect, useState } from "react";
import Image from "next/image";
import MoviesItem from "./MoviesItem";
import axios from "axios";

const Movies = () => {

  return (
    <div className=" mt-64 w-full ">
      <div className=" max-w-[1860px] mx-auto px-2 pt-4 pb-16">
        <h2 className=" text-3xl tracking-widest uppercase text-white">
          Popular Movies
        </h2>
        <div className=" w-full flex justify-between py-8 px-8">
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
        </div>
      </div>
    </div>
  );
};

export default Movies;
