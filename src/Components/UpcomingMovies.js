import "../index.css";

function UpcomingMovies({ listOfMovies }) {
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
            <div className='divForBut'>
              <button className='overlay-button'>Add to my watchlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingMovies;
