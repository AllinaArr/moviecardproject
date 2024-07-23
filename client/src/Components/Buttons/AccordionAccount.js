import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoviesAddedToAccount from "../AccountComponents/MoviesAddedToAccount";
import MoviesCurrentlyWatching from "../AccountComponents/MoviesInCurrentlyWatching";
import MoviesFinished from "../AccountComponents/MoviesFinished";

const AccordionAccount = ({
  deleteMovie,
  hoveredMovie,
  setHoveredMovie,
  movieAdded,
  setMovieAdded,
  modal,
  setModal,
  movieInList,
  movieCurrently,
  movieFinished,
  addMovie,
}) => {
  return (
    <div className='flex'>
      <Accordion
        style={{
          backgroundColor: "var(--body-secondary)",
          borderRadius: "10px",
          width: "80vw",
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
              listOfMovies={movieInList}
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
          width: "80vw",
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
          <Typography
            style={{
              backgroundColor: "var(--body-secondary)",
              borderRadius: "10px",
              width: "80vw",
            }}
          >
            <MoviesCurrentlyWatching
              addMovie={addMovie}
              listOfMovies={movieCurrently}
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
      </Accordion>{" "}
      <Accordion
        style={{
          backgroundColor: "var(--body-secondary)",
          borderRadius: "10px",
          width: "80vw",
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
            <MoviesFinished
              listOfMovies={movieFinished}
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
    </div>
  );
};

export default AccordionAccount;
