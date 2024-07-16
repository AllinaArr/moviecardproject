import "../index.css";
import AddMovieButton from "./AddMovieButton";
import { options } from "../Utils/options";

function UpcomingMovies({
  page,
  setHighlyRated,
  setPage,
  listOfMovies,
  addMovie,
}) {
  function handleMoreMovies() {
    const nextPage = page + 1;
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${nextPage}`,
      options
    )
      .then((response) => response.json())
      .then((dataNextPage) => {
        setHighlyRated((prevMovies) => [
          ...prevMovies,
          ...dataNextPage.results,
        ]);
        setPage(nextPage);
        console.log("Page", nextPage);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div id='parent-grid-container'>
      <div className='grid-container'>
        {listOfMovies.map((movie, index) => (
          <div className='movie-container' key={index}>
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
        <button className='more-movies-btn' onClick={handleMoreMovies}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default UpcomingMovies;
