import AddMovieButton from "./AddMovieButton";
import "../index.css";
import { useState, useEffect } from "react";
import { options } from "../Utils/options";

function RandomMovies({ addMovie }) {
  const [highlyRated, setHighlyRated] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setHighlyRated((prevMovies) => [...prevMovies, ...data.results]);
      })
      .catch((err) => console.error(err));
  }, [page]);

  function handlePageMovies() {
    setPage((prevPage) => prevPage + 1);
  }

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
            <AddMovieButton addMovie={addMovie} movie={movie} />
          </div>
        ))}
      </div>
      <div className='div-more-movies'>
        <button className='more-movies-btn' onClick={handlePageMovies}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default RandomMovies;
