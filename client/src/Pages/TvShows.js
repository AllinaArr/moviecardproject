import FilteredMovies from "../Components/Filters/FilteredMovies";
import RandomTVShows from "../Components/RandomTVShows";
import SearchBar from "../Components/SearchBar";
import { useState, useEffect } from "react";
import { options } from "../Utils/options";
import GendersFilter from "../Components/Filters/GendersFilter";

function TvShows({
  page,
  setPage,
  searchValue,
  setSearchValue,
  addMovie,
  genres,
  setGenres,
  hoveredMovie,
  setHoveredMovie,
  movieAdded,
  setMovieAdded,
  modal,
  setModal,
}) {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setTvShows(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };

  return (
    <div>
      <div id='home-container'>
        <div id='home-name'>
          <h1 id='home-bar'>TV Shows</h1>
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
          <FilteredMovies
            searchValue={searchValue}
            hoveredMovie={hoveredMovie}
            setHoveredMovie={setHoveredMovie}
            movieAdded={movieAdded}
            setMovieAdded={setMovieAdded}
            modal={modal}
            setModal={setModal}
            addMovie={addMovie}
          />
        ) : (
          <RandomTVShows
            page={page}
            setPage={setPage}
            listOfMovies={tvShows}
            addMovie={addMovie}
            setTvShows={setTvShows}
            hoveredMovie={hoveredMovie}
            setHoveredMovie={setHoveredMovie}
            movieAdded={movieAdded}
            setMovieAdded={setMovieAdded}
            modal={modal}
            setModal={setModal}
          />
        )}
      </div>
    </div>
  );
}

export default TvShows;
