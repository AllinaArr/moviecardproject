import "../../index.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, TextField } from "@mui/material";

function SubmitAReview({ modal, setModal }) {
  function toggleModal() {
    console.log("I checked a toggleModal");
    setModal(!modal);
  }

  function handleSubmit() {}
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
