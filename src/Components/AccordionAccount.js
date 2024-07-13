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
      <Accordion>
        <AccordionSummary
          id='panel1-header'
          aria-controls='panel1-content'
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography> My List </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <MoviesAddedToAccount
              listOfMovies={movies}
              deleteMovie={deleteMovie}
            />
          </Typography>
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionAccount;
