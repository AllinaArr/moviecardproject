import "../index.css";
import AddMovieButton from "./AddMovieButton";

function UpcomingMovies({ listOfMovies, addMovie }) {
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
