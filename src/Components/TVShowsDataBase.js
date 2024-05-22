import { useState, useEffect } from "react";
import { options } from "../Utils/options";

function TVShowsDataBase() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setTvShows(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id='parent-grid-container'>
      <div className='grid-container'>
        {tvShows.map((tvshow) => (
          <div className='movie-container' key={tvshow.id}>
            <div className='divForImg'>
              <img
                id='grid-image'
                src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
                alt={tvshow.original_title}
              />
            </div>
            <div className='divForBut'>
              <button className='overlay-button'>Add to my watchlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TVShowsDataBase;
