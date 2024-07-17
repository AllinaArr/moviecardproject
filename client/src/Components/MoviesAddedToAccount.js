import RemoveMovieFromAccount from "./Buttons/RemoveMovieFromAccount";

function MoviesAddedToAccount({
  listOfMovies,
  deleteMovie,
  hoveredMovie,
  setHoveredMovie,
  movieAdded,
  setMovieAdded,
  modal,
  setModal,
}) {
  function handleDeletion(movieId) {
    console.log("deleted from Account");

    fetch(`http://localhost:3000/movies/${movieId}`, {
      method: "DELETE",
    })
      .then((response) => response.ok)
      .then(() => {
        deleteMovie(movieId);
        setModal(true); // Set modal to true after deletion
      })
      .catch((err) => console.log(err));
  }

  function handleAddToWatched(movie) {
    console.log("Add to Watched:", movie);
  }

  function handleCurrentlyWatching(movie) {
    console.log("Currently Watching:", movie);
  }

  function handleMouseOver(index) {
    setHoveredMovie(index);
  }

  function handleMouseOut() {
    setHoveredMovie(null);
  }

  return (
    <div id='parent-grid-container'>
      <div className='grid-container'>
        {listOfMovies.map((movie, index) => (
          <div
            className='movie-container'
            key={index}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            <div className='divForImg'>
              <img
                id='grid-image'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className={hoveredMovie === index ? "blurred" : ""}
              />
              {hoveredMovie === index && (
                <div className='button-overlay'>
                  <button
                    className='overlay-button'
                    onClick={() => handleDeletion(movie.id)}
                  >
                    Remove From List
                  </button>
                  <button
                    className='overlay-button'
                    onClick={() => handleCurrentlyWatching(movie)}
                  >
                    Currently Watching
                  </button>
                  <button
                    className='overlay-button'
                    onClick={() => handleAddToWatched(movie)}
                  >
                    Add to Watched
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {modal && <RemoveMovieFromAccount modal={modal} setModal={setModal} />}
    </div>
  );
}

export default MoviesAddedToAccount;
