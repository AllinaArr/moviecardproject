import "../../index.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

function SubmitAReview({ modal, setModal }) {
  function toggleModal() {
    console.log("I checked a toggleModal");
    setModal(!modal);
  }
  return (
    <div className='divForBut'>
      <Dialog open={modal} onClose={toggleModal}>
        <DialogTitle>Notification</DialogTitle>
        <DialogContent>
          <DialogContentText>Submit a Review</DialogContentText>
          {/* <DialogContentText>Submit a Review</DialogContentText> */}
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

export default SubmitAReview;
