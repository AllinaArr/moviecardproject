import AddMovieButton from "./AddMovieButton";
import { useState, useEffect } from "react";
import { options } from "../Utils/options";

function RandomTVShows({ addMovie }) {
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setTvShows((prevShows) => [...prevShows, ...data.results]);
      })
      .catch((err) => console.error(err));
  }, [page]);

  function handleMoreTVShows() {
    setPage((prevPage) => prevPage + 1);
  }

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
            <AddMovieButton addMovie={addMovie} movie={tvshow} />
          </div>
        ))}
      </div>
      <div className='div-more-movies'>
        <button className='more-movies-btn' onClick={handleMoreTVShows}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default RandomTVShows;
