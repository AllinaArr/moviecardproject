import FilteredMovies from "../Components/Filters/FilteredMovies";
import React from "react";
import SearchBar from "../Components/SearchBar";
import UpcomingMovies from "../Components/UpcomingMovies";
import GendersFilter from "../Components/Filters/GendersFilter";

function Home({
  page,
  setPage,
  searchValue,
  setSearchValue,
  movies,
  addMovie,
  setMovies,
  genres,
  setGenres,
  hoveredMovie,
  setHoveredMovie,
  movieAdded,
  setMovieAdded,
  modal,
  setModal,
}) {
  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };

  const addMovieIfNotExists = (movie) => {
    setMovies((prevMovie) => {
      const movieExist = prevMovie.some((m) => m.id === movie.id);
      if (!movieExist) {
        return [...prevMovie, movie];
      }
      return prevMovie;
    });
  };
  return (
    <div>
      <div id='home-container'>
        <div id='home-name'>
          <h1 id='home-bar'>Home</h1>
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
          <UpcomingMovies
            page={page}
            setPage={setPage}
            listOfMovies={movies}
            addMovie={addMovieIfNotExists}
            setHighlyRated={setMovies}
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

export default Home;
