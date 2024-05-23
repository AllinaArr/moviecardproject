import SearchingBar from "../Components/SearchingBar";
import React from "react";
import "../index.css";
import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import UpcomingMovies from "../Components/UpcomingMovies";

function Home() {
  return (
    <div>
      <div id='home-container'>
        <div id='home-name'>
          <h1>Home</h1>
        </div>
        <SearchBar />
      </div>
      <div>
        {/* <SearchingBar /> */}
        {/* <UpcomingMovies /> */}
      </div>
    </div>
  );
}

export default Home;
