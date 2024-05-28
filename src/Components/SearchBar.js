function SearchBar({ searchValue, onChangeValue, onSearch }) {
  const handleSubmit = (e) => {
    console.log("Searching ... I am here");
    e.preventDefault();
    onSearch();
  };
  return (
    <div className='search-divider'>
      <form id='search-form' onSubmit={handleSubmit}>
        <div className='container'>
          <input
            id='search-input'
            type='text'
            value={searchValue}
            placeholder='Search for ...'
            onChange={(e) => onChangeValue(e.target.value)}
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
