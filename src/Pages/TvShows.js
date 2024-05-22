import SearchingBar from "../Components/SearchingBar";
import RandomTVShows from "../Components/RandomTVShows";

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
        <RandomTVShows />
      </div>
    </div>
  );
}

export default TvShows;
