import "../index.css";
import { options } from "../Utils/options";
import HoverBtns from "./HoverBtns";

function RandomMovies({
  page,
  setPage,
  listOfMovies,
  addMovie,
  setMovies,
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
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${nextPage}`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies((prevPage) => [...prevPage, ...data.results]);
        setPage(nextPage);
      })
      .catch((err) => console.log(err));
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

export default RandomMovies;
