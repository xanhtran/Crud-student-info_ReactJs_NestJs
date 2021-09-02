import { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import StudentForm from "../component/students/student-create-form";

import {getStudents, postStudent} from "../hooks/students";



export default function Main() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  const [inputValues, setInputValues] = useState({name:'', description: '', email:'', phone: ''});


  async function fetchDataStudent() {
    const result = getStudents();
    result.then((res) => {
      setStudents(res.data);
    });
  }

  async function handleClickOpen () {
    setOpen(true);
  };

  async function handleClose () {
    setOpen(false);
  };

  const  onChangeAddStudentHandler= event => {
    const { name, value } = event.target;
    setInputValues(inputValues => ({
        ...inputValues,
        [name]: value
    }));
  };
 
  async function addStudent() {
    const data = {
      name: inputValues.name,
      description: inputValues.description,
      email: inputValues.email,
      phone: inputValues.phone,
    };
    const res = postStudent(data);
    setOpen(false);
    fetchDataStudent();
  }


  useEffect(() => {
    fetchDataStudent();
  });

  return (
    <div className="App container mt-4">
      <h2 className="font-weight-bold">Students Information</h2>
      <StudentForm 
          handleClickOpen={handleClickOpen}
          newStudentData={inputValues}
          onChangeAddStudentHandler={onChangeAddStudentHandler}
          addStudent={addStudent}
          handleClose={handleClose}
          open={open}
      />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        {students.length === 0 ? (
          <tbody>
            <tr>
              <td>
                <h3>
                  <p
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "cadetblue",
                    }}
                  >
                    No students found
                  </p>
                </h3>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
           {
             students.map((student) => {
               return (
                <tr key={student.id}>
                <td>{student._id}</td>
                <td>{student.name}</td>
                <td>{student.description}</td>
                <td>{student.email}</td>    
                <td>{student.phone}</td>
                <td>
                  <Button
                    color="success"
                    className="mr-3"
                    size="sm"
                  >
                    Edit
                  </Button>
                  <Button
                    color="danger"
                    size="sm"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
               );
                 
               
                
             })
           }
          </tbody>
        )}
      </Table>
    </div>
  );
}
