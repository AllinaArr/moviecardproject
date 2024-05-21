function NavBar() {
  return (
    <nav>
      <ul className='nav-list'>
        <li className='active'>
          <a href='index.html' aria-current='page'>
            Home
          </a>
        </li>
        <li>
          <a href='account.html'>Account</a>
        </li>
        <li>
          <a href='tvshow.html'>TV Shows</a>
        </li>
        <li>
          <a href='movies.html'>Movies</a>
        </li>
        <li>
          <a href='signout.html'>Sign Out</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
