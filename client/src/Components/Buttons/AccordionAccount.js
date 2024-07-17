import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoviesAddedToAccount from "../MoviesAddedToAccount";

const AccordionAccount = ({
  movies,
  deleteMovie,
  hoveredMovie,
  setHoveredMovie,
  movieAdded,
  setMovieAdded,
  modal,
  setModal,
}) => {
  return (
    <div className='flex'>
      <Accordion
        style={{
          backgroundColor: "var(--body-secondary)",
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          id='panel1-header'
          aria-controls='panel1-content'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography> My List </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              backgroundColor: "var(--body-secondary)",
              borderRadius: "10px",
            }}
          >
            <MoviesAddedToAccount
              listOfMovies={movies}
              deleteMovie={deleteMovie}
              hoveredMovie={hoveredMovie}
              setHoveredMovie={setHoveredMovie}
              movieAdded={movieAdded}
              setMovieAdded={setMovieAdded}
              modal={modal}
              setModal={setModal}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          backgroundColor: "var(--body-secondary)",
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          id='panel1-header'
          aria-controls='panel1-content'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            style={{
              backgroundColor: "var(--body-secondary)",
              borderRadius: "10px",
            }}
          >
            {" "}
            Currently watching{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='myListStyle'>Movies</Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion
        style={{
          backgroundColor: "var(--body-secondary)",
          borderRadius: "10px",
        }}
      >
        <AccordionSummary
          id='panel1-header'
          aria-controls='panel1-content'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            style={{
              backgroundColor: "var(--body-secondary)",
            }}
          >
            {" "}
            Finished{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            style={{
              backgroundColor: "var(--body-secondary)",
              borderRadius: "10px",
            }}
          >
            Movies
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionAccount;
