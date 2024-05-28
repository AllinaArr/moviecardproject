import FilteredMovies from "../Components/FilteredMovies";
import React from "react";
import SearchBar from "../Components/SearchBar";
import UpcomingMovies from "../Components/UpcomingMovies";

function Home({ searchValue, setSearchValue, movies, addMovie }) {
  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };

  return (
    <div>
      <div id='home-container'>
        <div id='home-name'>
          <h1>Home</h1>
        </div>
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
          <UpcomingMovies listOfMovies={movies} addMovie={addMovie} />
        )}
      </div>
    </div>
  );
}

export default Home;
