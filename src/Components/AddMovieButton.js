function AddMovieButton({ addMovie, movie }) {
  function handleClick() {
    console.log("clicked");

    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
      }),
    })
      .then((response) => response.json())
      .then((data) => addMovie(data));
  }

  return (
    <div className='divForBut'>
      <button className='overlay-button' onClick={handleClick}>
        Add to my watchlist
      </button>
    </div>
  );
}

export default AddMovieButton;
