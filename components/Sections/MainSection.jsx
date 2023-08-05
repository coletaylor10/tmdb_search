//Libraries, packages etc
import React, { useEffect, useState } from "react";

//components
import Slideshow from "../Slideshow";
import FeaturedMovies from "../FeaturedMovies";
import ScrollMovies from "../ScrollMovies";

const MainSection = () => {
  const [images, setImages] = useState([
    "https://image.tmdb.org/t/p/w1280/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg",
    "https://image.tmdb.org/t/p/w1280/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg",
    "https://image.tmdb.org/t/p/w1280/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg",
    "https://image.tmdb.org/t/p/w1280/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg",
  ]);

  return (
    <div className=" flex outline max-h-[80vh] w-full">
      <div className=" flex justify-around w-full">
        <div className="flex flex-col w-[50%]">
          <h2 className="flex py-6 italic">Movie of the Year</h2>
          <Slideshow images={images} />
        </div>
        <div className="w-[50%]">
        <ScrollMovies />
        </div>
        {/*<FeaturedMovies />*/}
      </div>
    </div>
  );
};

export default MainSection;
