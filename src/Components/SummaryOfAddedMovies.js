import "../index.css";

function SummaryOfAddedMovies() {
  //useState to update span

  return (
    <div id='sumOfMovies'>
      <h2 id='headerOfSum'>
        You added
        <span> 0 </span> movies to your watchlist
      </h2>
    </div>
  );
}

export default SummaryOfAddedMovies;
