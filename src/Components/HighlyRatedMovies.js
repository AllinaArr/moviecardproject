import { useState, useEffect } from "react";
import { options } from "../Utils/options";
import "../index.css";

function HighlyRatedMovies() {
  const [highlyRated, setHighlyRated] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setHighlyRated(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id='parent-grid-container'>
      <div className='grid-container'>
        {highlyRated.map((movie) => (
          <div className='movie-container' key={movie.id}>
            <div className='divForImg'>
              <img
                id='grid-image'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
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

export default HighlyRatedMovies;
