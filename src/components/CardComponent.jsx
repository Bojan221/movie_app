import React from "react";
import { Link } from "react-router-dom";

function CardComponent({ movie, key }) {
  return (
    <div key={key} className="relative flex flex-col items-center w-[150px] group cursor-pointer">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="thumbnail"
      />
      <div className="absolute inset-0 flex flex-col gap-[15px] justify-center items-center 
                  bg-black bg-opacity-70 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-center text-[20px] text-white">{movie.title}</p>
        <Link to={`/movie/${movie.id}`} className="bg-mainYellow py-[10px] px-[20px] text-white rounded-[25px]">Gledaj</Link>
      </div>
    </div>
  );
}

export default CardComponent;
