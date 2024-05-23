import "../index.css";
import { useEffect, useState } from "react";
import { options } from "../Utils/options";

function SearchingBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();

    // Call the onSearch callback with the search value
    onSearch(searchValue);

    // Clear the search input after submitting the form
    setSearchValue("");
  };

  // const handleSearch = (event) => {
  //   event.preventDefault();

  //   const filtered = movies.filter((movie) =>
  //     movie.original_title.includes(searchValue)
  //   );

  //   setFilteredMovies(filtered);
  //   setSearchValue("");

  //   console.log(movies);
  // };

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      searchValue
    )}`;

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setFilteredMovies(data.results);
      });
  }, [searchValue]);

  return (
    <div id='img-place'>
      {filteredMovies.map((movie) => (
        <div className='movie-container' key={movie.id}>
          <div className='divForImg'>
            <img
              id='grid-image'
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>
          <div className='divForBut'>
            <button className='overlay-button'>Add to my watchlist</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchingBar;
