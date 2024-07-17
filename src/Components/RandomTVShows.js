import HoverBtns from "../Components/Buttons/HoverBtns";
import { options } from "../Utils/options";

function RandomTVShows({
  page,
  setPage,
  addMovie,
  listOfMovies,
  setTvShows,
  hoveredMovie,
  setHoveredMovie,
  movieAdded,
  setMovieAdded,
  modal,
  setModal,
}) {
  function handleMoreMovies() {
    const nextPage = page + 1;
    fetch(
      `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${nextPage}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setTvShows((prevShows) => [...prevShows, ...data.results]);
        setPage(nextPage);
      })
      .catch((err) => console.error(err));
  }

  return (
    <HoverBtns
      page={page}
      setPage={setPage}
      listOfMovies={listOfMovies}
      addMovie={addMovie}
      hoveredMovie={hoveredMovie}
      setHoveredMovie={setHoveredMovie}
      movieAdded={movieAdded}
      setMovieAdded={setMovieAdded}
      modal={modal}
      setModal={setModal}
      handleMoreMovies={handleMoreMovies}
    />
  );
}

export default RandomTVShows;
