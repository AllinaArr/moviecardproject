import AddMovieButton from "./AddMovieButton";

import { options } from "../Utils/options";

function RandomTVShows({ page, setPage, addMovie, listOfMovies, setTvShows }) {
  function handleMoreTVShows() {
    const nextPage = page + 1;
    fetch(
      `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${nextPage}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setTvShows((prevShows) => [...prevShows, ...data.results]);
        setPage(nextPage);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div id='parent-grid-container'>
      <div className='grid-container'>
        {listOfMovies.map((tvshow, index) => (
          <div className='movie-container' key={index}>
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
