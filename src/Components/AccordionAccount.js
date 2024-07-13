import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoviesAddedToAccount from "./MoviesAddedToAccount";

const AccordionAccount = ({ movies, deleteMovie }) => {
  return (
    <div className='flex'>
      <Accordion style={{ backgroundColor: "var(--body-secondary)" }}>
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
            }}
          >
            <MoviesAddedToAccount
              listOfMovies={movies}
              deleteMovie={deleteMovie}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: "var(--body-secondary)" }}>
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
