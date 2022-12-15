import React, { useState } from 'react'
import Image from 'next/image'


const Slideshow = () => {
    const [slideImage, setSlideImage] = useState("https://image.tmdb.org/t/p/w1280/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg");
    
  return (
    <div>
        <h2 className="mb-2">Trending</h2>
          <div className=" w-[720px] h-[335px] bg-white ">
            <Image src={"https://image.tmdb.org/t/p/w500/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg"}
              width={720}
              height={335}
            />
          </div>
    </div>
  )
}

export default Slideshow