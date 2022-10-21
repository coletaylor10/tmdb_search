import React from "react";
import Image from "next/image";
import MoviesItem from "./MoviesItem";
import axios from "axios";


const Movies = () => {
  const apiKey = "1e14fdee0ea09ca708c0b3a27257ede2"
  let startUrl = "https://api.themoviedv.org/3/"
  axios.get(`https://api.themoviedb.org/3/movie/616820?api_key=1e14fdee0ea09ca708c0b3a27257ede2`).then(response =>{
    console.log(response.data)
  });
  
  
  

  return (
    <div className="w-full">
      <div className=" bg-pink-300 max-w-[1860px] mx-auto px-2 pt-4 pb-16">
        <h2 className=" text-6xl tracking-widest uppercase text-white">
          Movies
        </h2>
        <div className=' className=" flex grid grid-cols-4 gap-8 py-8'>
            <div>
            <img className=" bg-black" src={`https://image.tmdb.org/t/p/w500/aTovumsNlDjof7YVoU5nW2RHaYn.jpg`} />
            <p>Movie Name</p>
            <p>4/5</p>
            </div>
            <div>
            <Image className=" bg-black" src="/" height="300px" width="300px" />
            <p>Movie Name</p>
            <p>4/5</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
