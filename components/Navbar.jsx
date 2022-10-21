import React from 'react'

const navBar = () => {
  return (
    <div className=' w-full h-[80px] bg-white'>
        <div className=' flex justify-between p-4'>
          <h1 className=' text-black'>TMDB Search</h1>
          <input className= 'border border-white bg-black text-white w-[30%] rounded-2xl' type="search" name="Search" id=""/>

        </div>
    </div>
  )
}

export default navBar