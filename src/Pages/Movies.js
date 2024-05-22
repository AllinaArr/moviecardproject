import SearchingBar from "../Components/SearchingBar";
import HighlyRatedMovies from "../Components/HighlyRatedMovies";

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
        <HighlyRatedMovies />
      </div>
    </div>
  );
}

export default Movies;
