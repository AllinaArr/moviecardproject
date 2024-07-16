import { useState } from "react";
import "../index.css";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

function AddMovieButton({ addMovie, movie }) {
  const [modal, setModal] = useState(false);
  const [movieAdded, setMovieAdded] = useState(false);

  function handleClick() {
    console.log("clicked");

    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: movie.id.toString(),
        poster_path: movie.poster_path,
        title: movie.title,
        original_name: movie.original_name,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        addMovie(data);
        setMovieAdded(true);
        setModal(true);

        setTimeout(() => {
          setModal(false);
        }, 10000);
      });
  }

  function toggleModal() {
    console.log("I checked a toggleModal");
    setModal(!modal);
  }
  return (
    <div className='divForBut'>
      {movieAdded ? (
        <DeleteIcon className='overlay-button' />
      ) : (
        <AddIcon className='overlay-button' onClick={handleClick} />
      )}

      <Dialog open={modal} onClose={toggleModal}>
        <DialogTitle>Notification</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {movieAdded && "You added this movie to your watchlist"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleModal} color='primary' className='close-modal'>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddMovieButton;
