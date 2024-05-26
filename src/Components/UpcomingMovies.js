import "../index.css";
import AddMovieButton from "./AddMovieButton";
import { useState } from "react";

function UpcomingMovies({ listOfMovies }) {
  const [movies, setMovies] = useState([]);

  const addMovie = (newMovie) => {
    console.log("I am handling t add movie");
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <div id='parent-grid-container'>
      <div className='grid-container'>
        {listOfMovies.map((movie) => (
          <div className='movie-container' key={movie.id}>
            <div className='divForImg'>
              <img
                id='grid-image'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
            <AddMovieButton addMovie={addMovie} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingMovies;
