import SummaryOfAddedMovies from "../Components/SummaryOfAddedMovies";
import { useEffect, useState } from "react";
import AccordionAccount from "../Components/Buttons/AccordionAccount";

function Account({
  deleteMovie,
  hoveredMovie,
  setHoveredMovie,
  movieAdded,
  setMovieAdded,
  modal,
  setModal,
  addMovie,
}) {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5555/user_account_movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(movies);

        setMovies(data);
        setCount(data.length);
      });
  }, []);

  const inListMovie = movies.filter(
    (movie) => movie.movie.movie_progress === "in list"
  );

  const movieInProgress = movies.filter(
    (movie) => movie.movie.movie_progress === "currently watching"
  );

  const movieFinished = movies.filter(
    (movie) => movie.movie.movie_progress === "finished"
  );

  function updatedMovieProgress(movieId, newProgress) {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.movie_id === movieId
          ? { ...movie, movie: { ...movie.movie, movie_progress: newProgress } }
          : movie
      )
    );
  }

  return (
    <div>
      <div id='account-container'>
        <div id='home-name'>
          <h1>Account</h1>
        </div>
        <SummaryOfAddedMovies count={count} />
      </div>
      <AccordionAccount
        deleteMovie={(movieId) => {
          setMovies((prevMovies) =>
            prevMovies.filter((movie) => movie.id !== movieId)
          );
          deleteMovie(movieId);
        }}
        hoveredMovie={hoveredMovie}
        setHoveredMovie={setHoveredMovie}
        movieAdded={movieAdded}
        setMovieAdded={setMovieAdded}
        modal={modal}
        setModal={setModal}
        movieInList={inListMovie}
        movieCurrently={movieInProgress}
        movieFinished={movieFinished}
        addMovie={addMovie}
        updatedMovieProgress={updatedMovieProgress}
      />
    </div>
  );
}

export default Account;
