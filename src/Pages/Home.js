import SearchingBar from "../Components/SearchingBar";
import React from "react";
import "../Components/appDesign.css";
import SummaryOfAddedMovies from "../Components/SummaryOfAddedMovies";

function Home() {
  return (
    <div>
      <div id='home-container'>
        <div id='home-name'>
          <h1>Home</h1>
        </div>
        <SearchingBar />
      </div>
      <SummaryOfAddedMovies />
    </div>
  );
}

export default Home;
