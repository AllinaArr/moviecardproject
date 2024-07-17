import FilteredMovies from "../Components/FilteredMovies";
import RandomMovies from "../Components/RandomMovies";
import SearchBar from "../Components/SearchBar";
import { useState, useEffect } from "react";
import { options } from "../Utils/options";
import GendersFilter from "../Components/GendersFilter";

function Movies({
  page,
  setPage,
  searchValue,
  setSearchValue,
  addMovie,
  genres,
  setGenres,
}) {
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div id='home-container'>
        <div id='home-name'>
          <h1 id='home-bar'>Movies</h1>
        </div>
      </div>
      <div className='slide'>
        <SearchBar
          searchValue={searchValue}
          onChangeValue={setSearchValue}
          onSearch={handleSearch}
        />
        <GendersFilter genres={genres} setGenres={setGenres} />
      </div>
      <div>
        {searchValue ? (
          <FilteredMovies searchValue={searchValue} />
        ) : (
          <RandomMovies
            page={page}
            setPage={setPage}
            listOfMovies={movies}
            addMovie={addMovie}
            setMovies={setMovies}
          />
        )}
      </div>
    </div>
  );
}

export default Movies;
