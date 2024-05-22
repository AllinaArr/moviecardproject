import SearchingBar from "../Components/SearchingBar";
import React from "react";
import "../index.css";
import SummaryOfAddedMovies from "../Components/SummaryOfAddedMovies";
import ImagesPlace from "../Components/ImagesPlace";

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
      <ImagesPlace />
    </div>
  );
}

export default Home;
