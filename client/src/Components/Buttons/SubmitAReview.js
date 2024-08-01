import "../../index.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

function SubmitAReview({ modal, setModal, movie }) {
  const [review, setReview] = useState("");
  const [score, setScore] = useState("");

  function toggleModal() {
    console.log("I checked a toggleModal");
    setModal(!modal);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5555/user_account_movies/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie: {
          movie_id: movie.id,
          movie_progress: "finished",
        },
        movie_id: movie.id,
        movie_progress: "finished",
        review: review,
        review_score: Number(score),
        user_id: 1,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toggleModal();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className='divForBut'>
      <Dialog open={modal} onClose={toggleModal}>
        <DialogTitle>Review</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin='dense'
            id='name'
            label='Your review'
            fullWidth
            variant='standard'
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin='dense'
            id='name'
            label='Your score'
            fullWidth
            type='number'
            variant='standard'
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleModal} color='primary' className='close-modal'>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color='primary'
            className='close-modal'
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SubmitAReview;
