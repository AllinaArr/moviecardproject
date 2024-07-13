import React from "react";
import { TextField, Button, Box } from "@mui/material";

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
          <Button type='submit' className='search-btn'>
            Search
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default SearchBar;
