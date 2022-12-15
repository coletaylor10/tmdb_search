import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TvItem = ({ UID }) => {
  const [id, setID] = useState("119051");
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
      "https://api.themoviedb.org/3/tv/popular?api_key=1e14fdee0ea09ca708c0b3a27257ede2&language=en-US&page=1";
    const response = await fetch(url);
    const data = await response.json();
    setID(data.results[UID].id);
    setSummary(data.results[UID].overview);
  }

  useEffect(() => {
    async function findMovieDetails() {
      let url = "".concat(startUrl, "tv/", id, "?api_key=", apiKey);
      // console.log(url)
      const response = await fetch(url);
      const data = await response.json();
      setTitle(data.name);
      setmovieImg(
        "".concat(`https://image.tmdb.org/t/p/w185`, data.poster_path)
      );
      try {
        let roundedRating = data.vote_average.toFixed(2);
        setRating(roundedRating);
      } catch (e) {}
    }
    popular();
    findMovieDetails();
  });

  return (
    <div className="flex flex-col">
      <div className="px-2 py-2">
        <Link href={`/movie/${id}`}>
          <div>
            <Image
              className=" bg-black cursor-pointer"
              src={movieImg}
              height={278}
              width={185}
              alt="/"
            />
          </div>
        </Link>
      </div>
      <div className="">
        <p>{title}</p>
        <p>{rating} / 10</p>
      </div>
    </div>
  );
};

export default TvItem;
