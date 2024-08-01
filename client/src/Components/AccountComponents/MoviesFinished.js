import SubmitAReview from "../Buttons/SubmitAReview";
import { useState } from "react";

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
  const [selectedMovie, setSelectedMovie] = useState();

  function handleSubmitReview(movie) {
    console.log("Clicked Add Review is Handled");
    setSelectedMovie(movie);
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

      {modal && (
        <SubmitAReview
          modal={modal}
          setModal={setModal}
          movie={selectedMovie}
        />
      )}
    </div>
  );
}

export default MoviesFinished;
