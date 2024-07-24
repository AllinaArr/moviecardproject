import "../index.css";

function SummaryOfAddedMovies({ count }) {
  //useState to update span

  return (
    <div id='sumOfMovies'>
      <h2 id='headerOfSum'>
        You have
        <span> {count} </span> movies in your account
      </h2>
    </div>
  );
}

export default SummaryOfAddedMovies;
