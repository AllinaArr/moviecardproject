import "./index.css";

function App() {
  return (
    <body>
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

      <div>
        <div id='home-name'>
          <h1>Home</h1>
        </div>

        <form id='search-form'>
          <div className='container'>
            <input id='search-input' type='text' placeholder='Enter a name' />
            <button className='container-button'>Search</button>
          </div>
        </form>

        <label>Filter:</label>
        <select id='alphabet'>
          <option value='A-G'>A-G</option>
          <option value='H-N'>H-N</option>
          <option value='O-U'>O-U</option>
          <option value='V-Z'>V-Z</option>
        </select>

        <div id='sumOfMovies'>
          <h2 id='headerOfSum'>
            You added
            <span> 0 </span> movies to your watchlist
          </h2>
        </div>
        <div className='grid-container'></div>
      </div>
    </body>
  );
}

export default App;
