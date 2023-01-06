import React from "react";
import NavBar from "../components/Navbar";

const FAQ = () => {
  return (
    <div>
      <NavBar />
      <div className=" font-bold text-4xl w-full text-center mb-8">
        <p> FAQ </p>
      </div>
      <div className=" max-w-5xl w-full text-center mx-auto ">
        <p>
          Thank you for viewing this text project. The main focus of this was to
          test my ability to use APIs and dynamic route tables. I thoroughly
          enjoyed making this site as i've learnt so many things that you can
          only really learn by digging into a project. This website uses
          Next.js, React, JS and the TMDB API. 
        </p>
      </div>
      
    </div>
  );
};

export default FAQ;
