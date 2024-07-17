import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import MoviesAddedToAccount from "./MoviesAddedToAccount";
import SummaryOfAddedMovies from "../Components/SummaryOfAddedMovies";

const AccordionAccount = ({ deleteMovie }) => {
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
  }, []);

  return (
    <div className='flex flex-col'>
      <SummaryOfAddedMovies count={count} />
      <Accordion>
        <AccordionSummary
          id='panel1-header'
          aria-controls='panel1-content'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography> My List </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Movies</Typography>
          <MoviesAddedToAccount
            listOfMovies={movies}
            deleteMovie={deleteMovie}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          id='panel1-header'
          aria-controls='panel1-content'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography> Currently watching </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Movies</Typography>
          <MoviesAddedToAccount
            listOfMovies={movies}
            deleteMovie={deleteMovie}
          />
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion>
        <AccordionSummary
          id='panel1-header'
          aria-controls='panel1-content'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography> Finished </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Movies</Typography>
          <MoviesAddedToAccount
            listOfMovies={movies}
            deleteMovie={deleteMovie}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionAccount;
