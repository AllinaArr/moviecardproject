import React from "react";
import { TextField, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ searchValue, onChangeValue, onSearch }) {
  const handleSubmit = (e) => {
    console.log("Searching ... I am here");
    e.preventDefault();
    onSearch();
  };

  return (
    <Box my={4} display='flex' alignItems='center'>
      <form id='search-form' onSubmit={handleSubmit}>
        <Box className='container'>
          <TextField
            id='search-input'
            type='text'
            value={searchValue}
            placeholder='Search for ...'
            onChange={(e) => onChangeValue(e.target.value)}
            variant='outlined'
            sx={{ width: "25ch" }}
          />

          <button type='submit' className='container-button'>
            <SearchIcon />
          </button>
        </Box>
      </form>
    </Box>
  );
}

export default SearchBar;
