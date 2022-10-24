import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const SearchItem = ({ UID, keyword }) => {
  const [id, setID] = useState("616820");
  const [title, setTitle] = useState("moviename");
  const [overview, setOverview] = useState("overviewtext");
  const [movieImg, setmovieImg] = useState(
    "https://image.tmdb.org/t/p/w185/3uDwqxbr0j34rJVJMOW6o8Upw5W.jpg"
  );
  const [rating, setRating] = useState(5);
  const [linktoURL, setLinkToURL] = useState("");

  let apiKey = "1e14fdee0ea09ca708c0b3a27257ede2";
  let startUrl = "https://api.themoviedb.org/3/search/";
  let searchUrl ="https://www.themoviedb.org/movie/";

  useEffect(() => {
    async function findMovieDetails() {
      if (keyword !== undefined) {
        let url = "".concat(
          startUrl,
          "movie/",
          "?api_key=",
          apiKey,
          "&query=",
          keyword
        );
        const response = await fetch(url);
        const data = await response.json();
        try {
          setID(data.results[UID].id);
          console.log(linktoURL);
          setTitle(data.results[UID].title);
          setLinkToURL("".concat(searchUrl,id))
          console.log(linktoURL)

          setmovieImg(
            "".concat(
              `https://image.tmdb.org/t/p/w92`,
              data.results[UID].poster_path
            )
          );

          setOverview(data.results[UID].overview);
        } catch (error) {
          console.log("error");
        }
      }

      //   let roundedRating = data.vote_average.toFixed(2);
      //   setRating(roundedRating);
    }
    
    findMovieDetails();
  });

  return (
    <div>
      <Link href={linktoURL}>
        <div className=" bg-gray-500 flex justify-between items-center border-b-2 ">
          <Image
            className="px-4"
            src={movieImg}
            height={138}
            width={92}
          ></Image>
          <div className="px-4">
            <p>{title}</p>

            <p className=" text-[12px] max-w-sm">{overview}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchItem;
