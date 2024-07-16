import FilteredMovies from "../Components/FilteredMovies";
import RandomTVShows from "../Components/RandomTVShows";
import SearchBar from "../Components/SearchBar";
import { useState, useEffect } from "react";
import { options } from "../Utils/options";

function TvShows({ page, setPage, searchValue, setSearchValue, addMovie }) {
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
      <div>
        <div id='home-container'>
          <div id='home-name'>
            <h1>TV Shows</h1>
          </div>
          <SearchBar
            searchValue={searchValue}
            onChangeValue={setSearchValue}
            onSearch={handleSearch}
          />
        </div>
        {searchValue ? (
          <FilteredMovies searchValue={searchValue} />
        ) : (
          <RandomTVShows
            page={page}
            setPage={setPage}
            listOfMovies={tvShows}
            addMovie={addMovie}
            setTvShows={setTvShows}
          />
        )}
      </div>
    </div>
  );
}

export default TvShows;
