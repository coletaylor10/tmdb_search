import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Image from 'next/image'
import MoviesItem from './MoviesItem'

const Movieinfo = () => {
    const router = useRouter();
    const [movieID, setMovieID] = useState();
    const [title, setTitle] = useState("moviename");
    const [movieImg, setmovieImg] = useState(
        "https://image.tmdb.org/t/p/w185/3uDwqxbr0j34rJVJMOW6o8Upw5W.jpg"
      );
    const [rating, setRating] = useState(5);
    useEffect(() =>{
        setMovieID(router.query.id);
        async function searchID() {
            let apiKey = "1e14fdee0ea09ca708c0b3a27257ede2";
            let url = "".concat('https://api.themoviedb.org/3/tv/',movieID,"?api_key=",apiKey);
            const response = await fetch(url);
            const data = await response.json();
            setTitle(data.title);
            setmovieImg(
                "".concat(`https://image.tmdb.org/t/p/w185`, data.poster_path)
              );
            try{
                let roundedRating = data.vote_average.toFixed(2);
                setRating(roundedRating);
            }catch(e){

            };
            
            
            console.log(data);
          }
          searchID();
        
        
        
    
    
      },);


  return (
    <div>
        <div className="">
        <Image
          className=" bg-black"
          src={movieImg}
          height={278}
          width={185}
          alt="/"
        />
        <p>{title}</p>
        <p>{rating} / 10</p>
      </div>
    </div>
    
  )
}

export default Movieinfo