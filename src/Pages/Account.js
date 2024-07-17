import SummaryOfAddedMovies from "../Components/SummaryOfAddedMovies";
import { useEffect, useState } from "react";
import AccordionAccount from "../Components/Buttons/AccordionAccount";

function Account({ deleteMovie }) {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(movies);

        setMovies(data);
        setCount(data.length);
      });
  }, [movies]);

  return (
    <div>
      <div id='account-container'>
        <div id='home-name'>
          <h1>Account</h1>
        </div>
        <SummaryOfAddedMovies count={count} />
      </div>
      <AccordionAccount movies={movies} deleteMovie={deleteMovie} />
    </div>
  );
}

export default Account;
