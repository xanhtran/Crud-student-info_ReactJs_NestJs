import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";



export default function StudentForm(props) {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={props.handleClickOpen}>
        Add Student
      </Button>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          id="form-dialog-title"
          style={{ display: "flex", alignItems: "center" }}
        >
          Create Student <AddIcon />
        </DialogTitle>

        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Name"
            type="text"
            value={props.newStudentData.name}
            onChange={props.onChangeAddStudentHandler}
            autoComplete="off"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            value={props.newStudentData.description}
            onChange={props.onChangeAddStudentHandler}
            autoComplete="off"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="text"
            value={props.newStudentData.email}
            onChange={props.onChangeAddStudentHandler}
            autoComplete="off"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone"
            type="text"
            value={props.newStudentData.phone}
            onChange={props.onChangeAddStudentHandler}
            autoComplete="off"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.addStudent} color="secondary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
