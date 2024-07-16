import FilteredMovies from "../Components/FilteredMovies";
import RandomTVShows from "../Components/RandomTVShows";
import SearchBar from "../Components/SearchBar";

function TvShows({ searchValue, setSearchValue, addMovie }) {
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
          <RandomTVShows addMovie={addMovie} />
        )}
      </div>
    </div>
  );
}

export default TvShows;
