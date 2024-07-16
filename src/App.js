import "./index.css";
import PATHS from "./Utils/paths";
import HeaderOne from "./Components/HeaderOne";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import TvShows from "./Pages/TvShows";
import Movies from "./Pages/Movies";
import Login from "./Pages/Login";
import { useEffect, useState } from "react";
import { options } from "./Utils/options";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  // const [highlyRated, setHighlyRated] = useState([]);

  const addMovie = (newMovie) => {
    console.log("I am handling to add movie");
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const deleteMovie = (movieId) => {
    setMovies((prevMovies) =>
      prevMovies.filter((movie) => movie.id !== movieId)
    );
    console.log("prevMovie ID");
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("WE GET ALL DATA");
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='body-info'>
      <Router>
        <HeaderOne />
        <Routes>
          <Route
            path={PATHS.HOME}
            element={
              <Home
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                movies={movies}
                addMovie={addMovie}
                page={page}
                setPage={setPage}
                setMovies={setMovies}
              />
            }
          />
          <Route
            path={PATHS.ACCOUNT_APP}
            element={<Account deleteMovie={deleteMovie} />}
          />
          <Route
            path={PATHS.TVSHOWS_APP}
            element={
              <TvShows
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                addMovie={addMovie}
                page={page}
                setPage={setPage}
              />
            }
          />
          <Route
            path={PATHS.MOVIES_APP}
            element={
              <Movies
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                addMovie={addMovie}
                page={page}
                setPage={setPage}
              />
            }
          />
          <Route path={PATHS.LOGIN_APP} element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
