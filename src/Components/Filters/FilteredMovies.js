import "../../index.css";
import { useEffect, useState } from "react";
import { options } from "../../Utils/options";
import HoverBtns from "../Buttons/HoverBtns";

function FilteredMovies({
  searchValue,
  hoveredMovie,
  setHoveredMovie,
  movieAdded,
  setMovieAdded,
  modal,
  setModal,
  addMovie,
}) {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    if (searchValue) {
      const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        searchValue
      )}`;

      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          setFilteredMovies(data.results);
        });
    }
  }, [searchValue]);

  return (
    <HoverBtns
      hoveredMovie={hoveredMovie}
      setHoveredMovie={setHoveredMovie}
      movieAdded={movieAdded}
      setMovieAdded={setMovieAdded}
      modal={modal}
      setModal={setModal}
      listOfMovies={filteredMovies}
      addMovie={addMovie}
    />
  );
}

export default FilteredMovies;
