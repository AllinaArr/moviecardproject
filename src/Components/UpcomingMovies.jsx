import React, { useState } from "react";
import "../index.css";
import { options } from "../Utils/options";
import AddMovieButton from "./AddMovieButton";

function UpcomingMovies({
  page,
  setHighlyRated,
  setPage,
  listOfMovies,
  addMovie,
}) {
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [movieAdded, setMovieAdded] = useState(false);
  const [modal, setModal] = useState(false);

  function handleMoreMovies() {
    const nextPage = page + 1;
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${nextPage}`,
      options
    )
      .then((response) => response.json())
      .then((dataNextPage) => {
        setHighlyRated((prevMovies) => [
          ...prevMovies,
          ...dataNextPage.results,
        ]);
        setPage(nextPage);
        console.log("Page", nextPage);
      })
      .catch((err) => console.error(err));
  }

  function handleMouseOver(index) {
    setHoveredMovie(index);
  }

  function handleMouseOut() {
    setHoveredMovie(null);
  }

  function handleAddToList(movie) {
    console.log("clicked");

    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: movie.id.toString(),
        poster_path: movie.poster_path,
        title: movie.title,
        original_name: movie.original_name,
      }),
    })
      .then((response) => response.json())
      .then((movie) => {
        addMovie(movie);
        setMovieAdded(true);
        setModal(true);
        setTimeout(() => {
          setModal(false);
        }, 10000);
      });
  }

  function handleCurrentlyWatching(movie) {
    console.log("Currently Watching:", movie);
  }

  function handleAddToWatched(movie) {
    console.log("Add to Watched:", movie);
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
                  >
                    Add to List
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
      <div className='div-more-movies'>
        <button className='more-movies-btn' onClick={handleMoreMovies}>
          Load More
        </button>
      </div>
      {modal && <AddMovieButton modal={modal} setModal={setModal} />}
    </div>
  );
}

export default UpcomingMovies;
