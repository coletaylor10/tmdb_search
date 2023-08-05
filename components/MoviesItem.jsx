import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MoviesItem = ({ UID }) => {
  const [id, setID] = useState("616820");
  const [title, setTitle] = useState("moviename");
  const [movieImg, setmovieImg] = useState(
    "https://image.tmdb.org/t/p/w185/3uDwqxbr0j34rJVJMOW6o8Upw5W.jpg"
  );
  const [rating, setRating] = useState(5);
  const [summary, setSummary] = useState("Undefined");

  let apiKey = "1e14fdee0ea09ca708c0b3a27257ede2";
  let startUrl = "https://api.themoviedb.org/3/";

  async function popular() {
    let url =
      "https://api.themoviedb.org/3/movie/popular?api_key=1e14fdee0ea09ca708c0b3a27257ede2&language=en-US&page=1";
    const response = await fetch(url);
    const data = await response.json();
    setID(data.results[UID].id);
    setSummary(data.results[UID].overview);
  }

  useEffect(() => {
    async function findMovieDetails() {
      let url = "".concat(startUrl, "movie/", id, "?api_key=", apiKey);
      // console.log(url)
      const response = await fetch(url);
      const data = await response.json();
      setTitle(data.title);
      setmovieImg(
        "".concat(`https://image.tmdb.org/t/p/w185`, data.poster_path)
      );
      let roundedRating = data.vote_average.toFixed(2);
      setRating(roundedRating);
    }
    popular();
    findMovieDetails();
  });

  return (
    <div>
      <Link href={`/movie/${id}`}>
        <div className=" flex mb-10 py-2 cursor-pointer ">
          <Image
            className="grayscale"
            src={movieImg}
            height={278}
            width={185}
            alt="/"
          />
          <div className=" flex flex-col px-4">
          <p className="font-bold text-xl">{title}</p>
          <p className=" max-w-lg text-lg">{summary}</p>
          <p>{rating} / 10</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoviesItem;
