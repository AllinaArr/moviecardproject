import React from "react";
import "../index.css";
import { options } from "../Utils/options";
import HoverBtns from "./HoverBtns";

function UpcomingMovies({
  page,
  setHighlyRated,
  setPage,
  listOfMovies,
  addMovie,
  hoveredMovie,
  setHoveredMovie,
  movieAdded,
  setMovieAdded,
  modal,
  setModal,
}) {
  function handleMoreMovies() {
    const nextPage = page + 1;
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${nextPage}`,
      options
    )
      .then((response) => response.json())
      .then((dataNextPage) => {
        setHighlyRated((prevMovies) => [
          ...prevMovies,
          ...dataNextPage.results,
        ]);
        setPage(nextPage);
        console.log("Page", nextPage);
      })
      .catch((err) => console.error(err));
  }

  return (
    <HoverBtns
      page={page}
      setPage={setPage}
      listOfMovies={listOfMovies}
      addMovie={addMovie}
      hoveredMovie={hoveredMovie}
      setHoveredMovie={setHoveredMovie}
      movieAdded={movieAdded}
      setMovieAdded={setMovieAdded}
      modal={modal}
      setModal={setModal}
      handleMoreMovies={handleMoreMovies}
    />
  );
}

export default UpcomingMovies;
