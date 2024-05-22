import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import PATHS from "../Utils/paths";
import "../index.css";

function NavBar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  const handleClick = (path) => {
    setActivePath(path);
  };

  return (
    <nav>
      <ul className='nav-list'>
        <li className={activePath === PATHS.HOME ? "active" : ""}>
          <NavLink to={PATHS.HOME} onClick={() => handleClick(PATHS.HOME)}>
            Home
          </NavLink>
        </li>
        <li className={activePath === PATHS.ACCOUNT_APP ? "active" : ""}>
          <NavLink
            to={PATHS.ACCOUNT_APP}
            onClick={() => handleClick(PATHS.ACCOUNT_APP)}
          >
            Account
          </NavLink>
        </li>
        <li className={activePath === PATHS.TVSHOWS_APP ? "active" : ""}>
          <NavLink
            to={PATHS.TVSHOWS_APP}
            onClick={() => handleClick(PATHS.TVSHOWS_APP)}
          >
            TV Shows
          </NavLink>
        </li>
        <li className={activePath === PATHS.MOVIES_APP ? "active" : ""}>
          <NavLink
            to={PATHS.MOVIES_APP}
            onClick={() => handleClick(PATHS.MOVIES_APP)}
          >
            Movies
          </NavLink>
        </li>
        <li className={activePath === PATHS.LOGIN_APP ? "active" : ""}>
          <NavLink
            to={PATHS.LOGIN_APP}
            onClick={() => handleClick(PATHS.LOGIN_APP)}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
