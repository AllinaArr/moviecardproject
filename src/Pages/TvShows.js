import SearchingBar from "../Components/SearchingBar";
import TVShowsDataBase from "../Components/TVShowsDataBase";

function TvShows() {
  return (
    <div>
      <div>
        <div id='home-container'>
          <div id='home-name'>
            <h1>TV Shows</h1>
          </div>
          <SearchingBar />
        </div>
        <TVShowsDataBase />
      </div>
    </div>
  );
}

export default TvShows;
