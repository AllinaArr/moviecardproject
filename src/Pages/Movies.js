import FilteredMovies from "../Components/FilteredMovies";
import RandomMovies from "../Components/RandomMovies";
import SearchBar from "../Components/SearchBar";

function Movies({ searchValue, setSearchValue, addMovie }) {
  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };

  return (
    <div>
      <div>
        <div id='home-container'>
          <div id='home-name'>
            <h1>Movies</h1>
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
          <RandomMovies addMovie={addMovie} />
        )}
      </div>
    </div>
  );
}

export default Movies;
