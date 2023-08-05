import React from 'react'
import MoviesItem from '../components/MoviesItem'

const ScrollMovies = () => {
  return (
    <div>
        <div className="overflow-y-scroll max-h-[80vh] grid grid-rows-8">
          <div>
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
            <div>
              <MoviesItem UID={7} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ScrollMovies