import RemoveMovieFromAccount from "../Buttons/SubmitAReview";

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
  updatedMovieProgress,
}) {
  function handleDeletion(movieId) {
    console.log("handle Deletion: deleted from Account");

    fetch(`http://localhost:5555/user_account_movies/${movieId}`, {
      method: "DELETE",
    })
      .then((response) => response.ok)
      .then(() => {
        console.log(movieId);
        deleteMovie(movieId);
        // setModal(true);
      })
      .catch((err) => console.log(err));
  }

  function handleInList(movie) {
    fetch(`http://localhost:5555/movies_progress/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie_id: movie.movie_id,
        movie_progress: "in list",
      }),
    })
      .then((response) => response.json())
      .then((updatedMovie) => {
        console.log(updatedMovie);
        updatedMovieProgress(movie.movie_id, "in list");
      })
      .catch((err) => console.log(err));
  }

  function handleAddToWatched(movie) {
    fetch(`http://localhost:5555/movies_progress/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie_id: movie.movie_id,
        movie_progress: "finished",
      }),
    })
      .then((response) => response.json())
      .then((updatedMovie) => {
        console.log(updatedMovie);
        updatedMovieProgress(movie.movie_id, "finished");
      })
      .catch((err) => console.log(err));
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
                    onClick={() => handleInList(movie)}
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
                    Watched
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* {modal && <RemoveMovieFromAccount modal={modal} setModal={setModal} />} */}
    </div>
  );
}

export default MoviesInCurrentlyWatching;
