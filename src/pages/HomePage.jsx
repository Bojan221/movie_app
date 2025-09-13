import React, { useEffect, useState } from 'react'
import MovieService from '../service/movieService'

function HomePage() {

    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {
        MovieService.getAllMovies()
        .then(res => {
            setAllMovies(res.data.results)
            console.log(res);
        }
        )
        .catch(err => console.log(err))
    },[])

  return (
    <div>
      {allMovies.map((movie) => (
        <div key={movie.id}>
            <p>{movie.title}</p>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        </div>
      ))}
    </div>
  )
}

export default HomePage
