function MoviesAddedToAccount({ listOfMovies, deleteMovie }) {
  function handleDeletion(movieId) {
    console.log("deleted from Account");

    fetch(`http://localhost:3000/movies/${movieId}`, {
      method: "DELETE",
    })
      .then((response) => response.ok)
      .then(() => deleteMovie(movieId))
      .catch((err) => console.log(err));
  }

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
              <button
                className='overlay-button'
                onClick={() => handleDeletion(movie.id)}
              >
                Remove from my watchlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesAddedToAccount;
