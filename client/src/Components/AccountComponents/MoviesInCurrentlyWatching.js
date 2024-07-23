import RemoveMovieFromAccount from "../Buttons/RemoveMovieFromAccount";

function MoviesInCurrentlyWatching({
  listOfMovies,
  deleteMovie,
  hoveredMovie,
  setHoveredMovie,
  movieAdded,
  setMovieAdded,
  modal,
  setModal,
  addMovie,
}) {
  function handleDeletion(movieId) {
    console.log("deleted from Finished");

    fetch(`http://localhost:5555/user_account_movies/${movieId}`, {
      method: "DELETE",
    })
      .then((response) => response.ok)
      .then(() => {
        console.log(movieId);
        deleteMovie(movieId);
        setModal(true);
      })
      .catch((err) => console.log(err));
  }

  function handleCurrentlyWatching(movie) {
    console.log("Currently Watching:", movie);
  }

  function handleAddToWatched(movie) {
    console.log("clicked finished");
    // does not work properly
    // Maybe PATCH

    // fetch("http://localhost:5555/movies_progress/finished", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     user_id: 1,
    //     movie_id: movie.id,
    //     poster_path: movie.poster_path,
    //     title: movie.title,
    //     list_id: movie.id,
    //     movie: {
    //       movie_id: movie.id,
    //       movie_progress: "finished",
    //     },
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((movie) => {
    //     console.log("Adding the movie to finished");
    //     addMovie(movie);
    //     setMovieAdded(true);
    //     setModal(true);
    //     setTimeout(() => {
    //       setModal(false);
    //     }, 10000);
    //   });
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
                    onClick={() => handleCurrentlyWatching(movie)}
                  >
                    Add to List
                  </button>
                  <button
                    className='overlay-button'
                    onClick={() => handleDeletion(movie.id)}
                  >
                    Remove From List
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

export default MoviesInCurrentlyWatching;
