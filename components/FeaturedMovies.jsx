//Librarys, packages etc
import React from 'react'

//Components
import TvItem from "./TvItem";

const FeaturedMovies = () => {
  return (
    <div>
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
  )
}

export default FeaturedMovies