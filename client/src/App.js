import "./index.css";
import PATHS from "./Utils/paths";
import HeaderOne from "./Components/HeaderOne";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import TvShows from "./Pages/TvShows";
import Movies from "./Pages/Movies";
import Login from "./Pages/Login";
import { options } from "./Utils/options";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [movieAdded, setMovieAdded] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("WE GET ALL MOVIES FROM OPEN API");
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Router>
      <Layout
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        movies={movies}
        setMovies={setMovies}
        page={page}
        setPage={setPage}
        genres={genres}
        setGenres={setGenres}
        hoveredMovie={hoveredMovie}
        setHoveredMovie={setHoveredMovie}
        movieAdded={movieAdded}
        setMovieAdded={setMovieAdded}
        modal={modal}
        setModal={setModal}
      />
    </Router>
  );
}

function Layout(props) {
  const location = useLocation();
  // const isLoginPage = location.pathname === PATHS.LOGIN_APP;
  const isAuthPage = location.pathname === PATHS.LOGIN_APP;

  return (
    <>
      <div className={isAuthPage ? "auth-page" : "body-info"}>
        {!isAuthPage ? (
          <>
            <HeaderOne />
            <Routes>
              <Route
                path='/'
                element={<Navigate to={PATHS.LOGIN_APP} replace />}
              />
              <Route path={PATHS.HOME} element={<Home {...props} />} />
              <Route
                path={PATHS.ACCOUNT_APP}
                element={<Account {...props} />}
              />
              <Route
                path={PATHS.TVSHOWS_APP}
                element={<TvShows {...props} />}
              />
              <Route path={PATHS.MOVIES_APP} element={<Movies {...props} />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path={PATHS.LOGIN_APP} element={<Login />} />
            {/* <Route path={PATHS.SIGNUP} element={<SignUp />} /> */}
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
