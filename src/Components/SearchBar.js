function SearchBar() {
  return (
    <div className='search-divider'>
      <form id='search-form'>
        <div className='container'>
          <input
            id='search-input'
            type='text'
            // value={searchValue}
            placeholder='Search for ...'
            // onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type='submit' className='container-button'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
