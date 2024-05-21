import "./index.css";
import PATHS from "./Utils/paths";
import HeaderOne from "./Components/HeaderOne";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import TvShows from "./Pages/TvShows";
import Movies from "./Pages/Movies";
import Login from "./Pages/Login";
import FormSearching from "./Components/FormSearching";

function App() {
  return (
    <div className='body-info'>
      <Router>
        <HeaderOne />
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.ACCOUNT_APP} element={<Account />} />
          <Route path={PATHS.TVSHOWS_APP} element={<TvShows />} />
          <Route path={PATHS.MOVIES_APP} element={<Movies />} />
          <Route path={PATHS.LOGIN_APP} element={<Login />} />
        </Routes>
      </Router>
      {/* <FormSearching /> */}
    </div>
  );
}

export default App;
