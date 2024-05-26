import "../index.css";
import { useEffect, useState } from "react";
import { options } from "../Utils/options";
import AddMovieButton from "./AddMovieButton";

function FilteredMovies({ searchValue }) {
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
    <div id='parent-grid-container'>
      <div className='grid-container'>
        {filteredMovies.map((movie) => (
          <div className='movie-container' key={movie.id}>
            <div className='divForImg'>
              <img
                id='grid-image'
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
            <AddMovieButton />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilteredMovies;
