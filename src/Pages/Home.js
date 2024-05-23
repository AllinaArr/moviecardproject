import FilteredMovies from "../Components/FilteredMovies";
import React from "react";
import "../index.css";
import { useState, useEffect } from "react";
import SearchBar from "../Components/SearchBar";
import UpcomingMovies from "../Components/UpcomingMovies";
import { options } from "../Utils/options";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("WE GET ALL DATA");
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

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
          <UpcomingMovies listOfMovies={movies} />
        )}
      </div>
    </div>
  );
}

export default Home;
