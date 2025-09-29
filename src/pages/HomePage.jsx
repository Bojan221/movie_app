import { useEffect, useState } from "react";
import MovieService from "../service/MovieService";
import CardComponent from "../components/CardComponent";

function HomePage() {
  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    MovieService.getAllMovies()
      .then((res) => {
        setAllMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-mainBlue pt-[40px]">
      <div className="flex flex-wrap justify-center gap-6 w-[90%] mx-auto">
        {allMovies.map((movie, index) => (
          <CardComponent movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
