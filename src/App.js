import "./index.css";
import PATHS from "./Utils/paths";
import HeaderOne from "./Components/HeaderOne";

function App() {
  return (
    <div className='body-info'>
      <HeaderOne />

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
    </div>
  );
}

export default App;
