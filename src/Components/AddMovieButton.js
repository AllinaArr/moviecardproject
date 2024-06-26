import { useState } from "react";
import "../index.css";

function AddMovieButton({ addMovie, movie }) {
  const [modal, setModal] = useState(false);
  const [movieAdded, setMovieAdded] = useState(false);

  function handleClick() {
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
      .then((data) => {
        addMovie(data);
        setMovieAdded(true);
        setModal(true);

        setTimeout(() => {
          setModal(false);
        }, 1000);
      });
  }

  function toggleModal() {
    console.log("I checked a toggleModal");
    setModal(!modal);
  }
  return (
    <div className='divForBut'>
      <button className='overlay-button' onClick={handleClick}>
        {movieAdded ? "Remove from my watchlist" : "Add to my watchlist"}
      </button>

      {modal && (
        <div className='modal'>
          <div className='overlay'>
            <div className='modal-content'>
              {movieAdded && <h2>You added this movie to your watchlist</h2>}
              <button className='close-modal' onClick={toggleModal}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddMovieButton;
