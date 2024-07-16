import AddMovieButton from "./AddMovieButton";
import "../index.css";
import { options } from "../Utils/options";

function RandomMovies({ page, setPage, listOfMovies, addMovie, setMovies }) {
  function handlePageMovies() {
    const nextPage = page + 1;
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${nextPage}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies((prevPage) => [...prevPage, ...data.results]);
        setPage(nextPage);
      })
      .catch((err) => console.log(err));
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
        <button className='more-movies-btn' onClick={handlePageMovies}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default RandomMovies;
