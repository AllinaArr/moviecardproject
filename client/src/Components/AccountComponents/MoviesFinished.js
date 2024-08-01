import SubmitAReview from "../Buttons/SubmitAReview";

function MoviesFinished({
  listOfMovies,
  deleteMovie,
  hoveredMovie,
  setHoveredMovie,
  movieAdded,
  setMovieAdded,
  modal,
  setModal,
}) {
  /**
   *
   * @param {*} index
   * maybe I don't need to delete from "Finished movies"
   * However, I may change a status -> think about it later
   */

  // function handleDeletion(movieId) {
  //   console.log("deleted from Finished");

  //   fetch(`http://localhost:5555/user_account_movies/${movieId}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.ok)
  //     .then(() => {
  //       console.log(movieId);
  //       deleteMovie(movieId);
  //       setModal(true);
  //     })
  //     .catch((err) => console.log(err));
  // }

  // function handleAddToWatched(movie) {
  //   console.log("Add to Watched:", movie);
  // }

  // function handleCurrentlyWatching(movie) {
  //   console.log("Currently Watching:", movie);
  // }

  function handleSubmitReview(movie) {
    console.log("Clicked Add Review is Handled");
    setModal(true);
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
                    onClick={() => handleSubmitReview(movie)}
                  >
                    Add Review
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* {modal && <SubmitAReview modal={modal} setModal={setModal} />} */}
    </div>
  );
}

export default MoviesFinished;
