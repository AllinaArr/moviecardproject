import { useEffect, useState } from "react";
import "../index.css";

function ImagesPlace() {
  const imgPlace = document.querySelector(".grid-container");
  let valueSpan = 0;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div id='parent-grid-container'>
      <div className='grid-container'>
        {movies.map((movie) => (
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

export default ImagesPlace;
