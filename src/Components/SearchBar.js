// function SearchBar({ searchValue, onChangeValue, onSearch }) {
//   const handleSubmit = (e) => {
//     console.log("Searching ... I am here");
//     e.preventDefault();
//     onSearch();
//   };
//   return (
//     <div className='search-divider'>
//       <form id='search-form' onSubmit={handleSubmit}>
//         <div className='container'>
//           <input
//             id='search-input'
//             type='text'
//             value={searchValue}
//             placeholder='Search for ...'
//             onChange={(e) => onChangeValue(e.target.value)}
//           />
//           <button type='submit' className='container-button'>
//             Search
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default SearchBar;
import React from "react";
import { TextField, Button, Box } from "@mui/material";

function SearchBar({ searchValue, onChangeValue, onSearch }) {
  const handleSubmit = (e) => {
    console.log("Searching ... I am here");
    e.preventDefault();
    onSearch();
  };

  return (
    <Box className='search-divider' component='div'>
      <form id='search-form' onSubmit={handleSubmit}>
        <Box className='container'>
          <TextField
            id='search-input'
            type='text'
            value={searchValue}
            placeholder='Search for ...'
            onChange={(e) => onChangeValue(e.target.value)}
            variant='outlined'
            size='small'
          />
          <Button type='submit' className='container-button'>
            Search
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default SearchBar;
