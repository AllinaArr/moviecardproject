import FilteredMovies from "../Components/FilteredMovies";
import React from "react";
import SearchBar from "../Components/SearchBar";
import UpcomingMovies from "../Components/UpcomingMovies";
import GendersFilter from "../Components/GendersFilter";

function Home({
  page,
  setPage,
  searchValue,
  setSearchValue,
  movies,
  addMovie,
  setMovies,
}) {
  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };

  return (
    <div>
      <div id='home-container'>
        <div id='home-name'>
          <h1 id='home-bar'>Home</h1>
          <GendersFilter />
        </div>
        <GendersFilter />

        <SearchBar
          searchValue={searchValue}
          onChangeValue={setSearchValue}
          onSearch={handleSearch}
        />
      </div>
      <div>
        {searchValue ? (
          <FilteredMovies searchValue={searchValue} />
        ) : (
          <UpcomingMovies
            page={page}
            setPage={setPage}
            listOfMovies={movies}
            addMovie={addMovie}
            setHighlyRated={setMovies}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
