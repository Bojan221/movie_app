import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieService from '../service/MovieService';
function SingleMoviePage() {

  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    MovieService.getMovieById(id)
    .then(res =>{
      setMovie(res.data)
       console.log(res.data)
    })
    .catch(err => console.log(err))
  }, [id])

  return (
    <div>
      {movie? (
        <div>
          <h1>{movie.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="thumbnail" />
          <p>{movie.overview}</p>
        </div>
      ) : (
        <p className='text-black'>Loading...</p>
      )}
    </div>
  )
}

export default SingleMoviePage
