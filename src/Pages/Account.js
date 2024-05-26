import SummaryOfAddedMovies from "../Components/SummaryOfAddedMovies";
import { useEffect, useState } from "react";
import UpcomingMovies from "../Components/UpcomingMovies";
import MoviesAddedToAccount from "../Components/MoviesAddedToAccount";

function Account() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(movies);
        setMovies(data);
      });
  }, []);

  return (
    <div>
      <div id='home-container'>
        <div id='home-name'>
          <h1>Account</h1>
        </div>
        <SummaryOfAddedMovies />
      </div>
      <MoviesAddedToAccount listOfMovies={movies} />
    </div>
  );
}

export default Account;
