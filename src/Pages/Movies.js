import SearchingBar from "../Components/SearchingBar";
import RandomMovies from "../Components/RandomMovies";

function Movies() {
  return (
    <div>
      <div>
        <div id='home-container'>
          <div id='home-name'>
            <h1>Movies</h1>
          </div>
          <SearchingBar />
        </div>
        <RandomMovies />
      </div>
    </div>
  );
}

export default Movies;
