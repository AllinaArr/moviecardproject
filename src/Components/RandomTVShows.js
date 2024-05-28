import AddMovieButton from "./AddMovieButton";

function RandomTVShows({ listOfTvShows, addMovie }) {
  return (
    <div id='parent-grid-container'>
      <div className='grid-container'>
        {listOfTvShows.map((tvshow) => (
          <div className='movie-container' key={tvshow.id}>
            <div className='divForImg'>
              <img
                id='grid-image'
                src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
                alt={tvshow.original_title}
              />
            </div>
            <AddMovieButton addMovie={addMovie} movie={tvshow} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RandomTVShows;
