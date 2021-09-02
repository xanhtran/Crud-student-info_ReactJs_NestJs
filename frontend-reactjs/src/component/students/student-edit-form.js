import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";

import { getStudent } from "../../hooks/students";

export default function EditForm(props) {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        async function fetchDataStudent() {
            const id = props.match.params.id;
            const res = getStudent(id);
           
            res.then((res) => {
                setStudents(res.data);
              });
        }

        fetchDataStudent();
            

    })
    return (
        <div>
      <Button variant="contained" color="primary" onClick={props.handleClickOpen}>
        Edit Student
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
          Edit Student <AddIcon />
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
          <Button  color="primary">
            Cancel
          </Button>
          <Button color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    );

}