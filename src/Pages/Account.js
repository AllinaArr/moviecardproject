import SummaryOfAddedMovies from "../Components/SummaryOfAddedMovies";
import { useEffect } from "react";
import UpcomingMovies from "../Components/UpcomingMovies";

function Account() {
  //create a GET REQUEST from db.json
  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((movies) => console.log(movies));
  });

  return (
    <div>
      <div id='home-container'>
        <div id='home-name'>
          <h1>Account</h1>
        </div>
        <SummaryOfAddedMovies />
      </div>
      <div>Show me all movies from my DB</div>

      {/* <UpcomingMovies /> */}
    </div>
  );
}

export default Account;
