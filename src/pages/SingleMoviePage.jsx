import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieService from "../service/MovieService";
import { IoIosCalendar, IoMdStopwatch } from "react-icons/io";
import LoadingComponent from "../components/LoadingComponent"
function SingleMoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    MovieService.getMovieById(id)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => console.log(err));

    MovieService.getMovieCredits(id)
      .then((res) => {
        setCast(res.data.cast);
      })
      .catch((err) => console.log(err));

    MovieService.getMovieVideos(id)
      .then((res) => {
        setVideos(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="bg-mainBlue">
      {movie ? (
        <div className="flex flex-col gap-[40px]">
          <div className="flex justify-between  px-[20px] py-[10px] gap-[50px] w-[95%] mx-auto">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="thumbnail"
              />
            </div>
            <div className="flex flex-col justify-between gap-[40px]">
              <div className="flex flex-col">
                <h1 className="text-[40px] font-medium tracking-wide text-[#ffffff]">
                  {movie.title}
                </h1>
                <div className="flex items-center gap-[30px]">
                  <div className="flex items-center gap-2">
                    {movie.genres.map((genre) => (
                      <p
                        className="underline text-blue-800 cursor-pointer"
                        key={genre.id}
                      >
                        {genre.name}
                      </p>
                    ))}
                  </div>
                  <div className="flex items-center gap-[3px]">
                    <IoMdStopwatch fill="white" />
                    <p className="text-white">{movie.runtime} min</p>
                  </div>
                  <div className="flex items-center gap-[3px]">
                    <IoIosCalendar fill="white" />
                    <p className="text-white">{movie.release_date}</p>
                  </div>
                </div>
                <div className="py-[10px]">
                  <button className="bg-mainYellow py-[10px] px-[20px] text-white rounded-[25px]">
                    Dodaj u omiljeno
                  </button>
                </div>
              </div>
              <p className="text-[20px] text-slate-400">{movie.overview}</p>
              <div className="flex gap-[10px] flex-wrap">
                {cast.map((actor, index) => {
                  return (
                    <span className="text-slate-300" key={index}>
                      {actor.name} {index < cast.length - 1 && ","}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-[50px]"> 
                   {videos.length > 0 && <iframe
                    className="w-[80%] h-[650px] object-cover"
                      src={`https://www.youtube.com/embed/${videos[0].key}`}
                      title="YouTube video player"
                      allowFullScreen>
                    </iframe>}
            </div>
        </div>
      ) : (
        <div className="flex justify-center pt-[50px]"><LoadingComponent/></div>
      )}
    </div>
  );
}

export default SingleMoviePage;
