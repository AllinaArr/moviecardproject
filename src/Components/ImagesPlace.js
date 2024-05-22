import { useEffect, useState } from "react";

function ImagesPlace() {
  const imgPlace = document.querySelector(".grid-container");
  let valueSpan = 0;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDdkZTBlMGY4ZGZjZmM0ODRhYjIzZjk3OGFlYmM3OSIsInN1YiI6IjY2NGNiY2QzOThmNWZjNWJiNTU1MzBhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sFJvo3zcsYMRMFGJKNkpUUJXYS1tdwvJ7zFWLlf8ZpY",
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

  function handleDatabase(movie) {
    return (
      <div className='movie-container' key='{movie.id}'>
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
        {/* <p>{movie.original_title}</p> */}
      </div>
    );
  }

  return (
    <div className='grid-container'>
      {movies.map((movie) => handleDatabase(movie))}
    </div>
  );
}

export default ImagesPlace;
