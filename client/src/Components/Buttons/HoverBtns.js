import AddMovieButton from "./AddMovieButton";
import React, { useState } from "react";

function HoverBtns({
  listOfMovies,
  addMovie,
  hoveredMovie,
  setHoveredMovie,
  setMovieAdded,
  modal,
  setModal,
  handleMoreMovies,
}) {
  const [disabledButtons, setDisabledButtons] = useState({});

  function handleAddToWatched(movie) {
    console.log("clicked finished");

    fetch("http://localhost:5555/movies_progress/finished", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        movie_id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
        name: movie.name,
        list_id: movie.id,
        movie: {
          movie_id: movie.id,
          movie_progress: "finished",
        },
      }),
    })
      .then((response) => response.json())
      .then((movie) => {
        console.log("Adding the movie to finished");
        setMovieAdded(true);
        setDisabledButtons((prev) => ({
          ...prev,
          [movie.id]: { ...prev[movie.id], watched: true },
        }));
        setModal(true);
        setTimeout(() => {
          setModal(false);
        }, 10000);
      });
  }

  function handleCurrentlyWatching(movie) {
    console.log("clicked currently watching");
    fetch("http://localhost:5555/movies_progress/watching", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        movie_id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
        name: movie.name,
        list_id: movie.id,
        movie: {
          movie_id: movie.id,
          movie_progress: "currently watching",
        },
      }),
    })
      .then((response) => response.json())
      .then((movie) => {
        console.log("Adding the movie to currently watching");
        setMovieAdded(true);
        setModal(true);
        setDisabledButtons((prev) => ({
          ...prev,
          [movie.id]: { ...prev[movie.id], watching: true },
        }));
        setTimeout(() => {
          setModal(false);
        }, 10000);
      });
  }

  function handleMouseOver(index) {
    setHoveredMovie(index);
  }

  function handleMouseOut() {
    setHoveredMovie(null);
  }

  function handleAddToList(movie) {
    console.log("clicked");
    fetch("http://localhost:5555/movies_progress/in_list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        movie_id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
        name: movie.name,
        list_id: movie.id,
        movie: {
          movie_id: movie.id,
          movie_progress: "in list",
        },
      }),
    })
      .then((response) => response.json())
      .then((movie) => {
        console.log("Adding the movie");
        setMovieAdded(true);
        setModal(true);
        setDisabledButtons((prev) => ({
          ...prev,
          [movie.id]: { ...prev[movie.id], list: true },
        }));
        setTimeout(() => {
          setModal(false);
        }, 10000);
      });
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
                    onClick={() => handleAddToList(movie)}
                    disabled={disabledButtons[movie.id]?.list}
                  >
                    {disabledButtons[movie.id]?.list
                      ? "Added to cart"
                      : "Add to List"}
                  </button>
                  <button
                    className='overlay-button'
                    onClick={() => handleCurrentlyWatching(movie)}
                    disabled={disabledButtons[movie.id]?.watching}
                  >
                    {disabledButtons[movie.id]?.watching
                      ? "Added to Currently Watching"
                      : "Currently Watching"}
                  </button>
                  <button
                    className='overlay-button'
                    onClick={() => handleAddToWatched(movie)}
                    disabled={disabledButtons[movie.id]?.watched}
                  >
                    {disabledButtons[movie.id]?.watched
                      ? "Added to Finished"
                      : "Add to Finished"}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='div-more-movies'>
        <button className='more-movies-btn' onClick={handleMoreMovies}>
          Load More
        </button>
      </div>
      {modal && <AddMovieButton modal={modal} setModal={setModal} />}
    </div>
  );
}

export default HoverBtns;
