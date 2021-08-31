import Box from "@material-ui/core/Box";
import { Container, IconButton } from "@material-ui/core";

import { useStudents } from "../hooks/students";
import { useEffect } from "react";
import StudentsList from "../component/students/studentsList";



export default function Main() {
 
  const { getStudents, students, error } = useStudents();

  useEffect(() => {
    try {
      getStudents();
    } catch (error) {
      console.log(error);
    }
  }, [getStudents]);

  return (
    <Container display="flex" alignItems="center">
      <Box display="flex" justifyContent="space-evenly">
        <div>
          <h1>Students Management</h1>
         
        </div>
      
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center">
        {/* {error && <Error error={error} />} */}
       
        {students.length !== 0 ? (
          <StudentsList students={students} />
        ) : (
          <p
            style={{ fontSize: "1.4rem", fontWeight: 800, color: "cadetblue" }}
          >
            No students found
          </p>
        )}
      </Box>
    </Container>
  );
}
