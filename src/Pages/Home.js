import SearchingBar from "../Components/SearchingBar";
import React from "react";
import "../index.css";
import SummaryOfAddedMovies from "../Components/SummaryOfAddedMovies";
import UpcomingMovies from "../Components/UpcomingMovies";

function Home() {
  return (
    <div>
      <div>
        <div id='home-container'>
          <div id='home-name'>
            <h1>Home</h1>
          </div>
          <SearchingBar />
        </div>
        <SummaryOfAddedMovies />
      </div>
      <UpcomingMovies />
    </div>
  );
}

export default Home;
