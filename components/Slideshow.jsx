import React, { useState } from 'react'
import Image from 'next/image'


const Slideshow = () => {
    const [slideImage, setSlideImage] = useState("https://image.tmdb.org/t/p/w1280/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg");
    const[movieName, setMovieName] = useState("Avatar: The Way of the Water")
  return (
    <div>
        <h2 className="mb-2">Current Most Popular Movie</h2>
          <div className=" w-[720px] h-[335px] bg-white">
            <Image src={"https://image.tmdb.org/t/p/w1280/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg"}
              width={720}
              height={335}
            />
            
          </div><p className='text-xl'>{movieName}</p>
    </div>
  )
}

export default Slideshow