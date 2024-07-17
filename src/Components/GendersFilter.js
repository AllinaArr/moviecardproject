import { useEffect } from "react";
import { options } from "../Utils/options";

function GendersFilter({ genres, setGenres }) {
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, options)
      .then((response) => response.json())
      .then((data) => {
        console.log("WE GET ALL GENRES");
        setGenres(data.genres);
      })
      .catch((err) => console.error(err));
  }, [setGenres]);

  return (
    <div>
      {genres.map((genre, index) => (
        <button className='genre-btn' key={index}>
          {genre.name}
        </button>
      ))}
    </div>
  );
}

export default GendersFilter;
