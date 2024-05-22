import "../index.css";

function SearchingBar() {
  return (
    <form id='search-form'>
      <div className='container'>
        <input id='search-input' type='text' placeholder='Enter a name' />
        <button className='container-button'>Search</button>
      </div>
    </form>
  );
}

export default SearchingBar;
