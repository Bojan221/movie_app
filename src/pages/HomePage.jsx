import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAllMoviesAction } from "../store/movieSlice";
import MovieService from "../service/MovieService";
import CardComponent from "../components/CardComponent";
import LoadingComponent from "../components/LoadingComponent";

function HomePage() {

  const dispatch = useDispatch();
  const {allMovies, isLoading} = useSelector(state => state.movieStore);


  useEffect(() => {
    MovieService.getAllMovies()
      .then((res) => {
        dispatch(saveAllMoviesAction(res.data.results));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-mainBlue pt-[40px]">
      {isLoading ? <div className="flex flex-wrap justify-center gap-6 w-[90%] mx-auto">
        {allMovies.map((movie, index) => (
          <CardComponent movie={movie} key={index} />
        ))}
      </div> : <div className="flex justify-center"><LoadingComponent/></div>}
    </div>
  );
}

export default HomePage;
