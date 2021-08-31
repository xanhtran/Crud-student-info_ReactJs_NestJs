import { createContext, useContext, useCallback, useState } from "react";
import api from "../services/api";


const StudentsContext = createContext();

export function StudentsProvider() {

  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  
  const getStudents = useCallback(async () => {
    try {
      const res = await api.get("/students");
      if (res.status === 200) {
        setStudents(res.data);
        setError(false);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  }, []);

  // const deleteStudent = useCallback(
  //   async (id) => {
  //     try {
  //       const res = await api.delete("/students/${id}");
  //       if (res.status === 200) {
  //         const currentStudents = students;
  //         const newStudents = currentStudents.filter((task) => task.id !== id);
  //         setStudents(newStudents);
  //         setError(false);
  //       }
  //     } catch (error) {
  //       setError(error.response.data.message);
  //     }
  //   },
  //   [students]
  // );

  // const createStudent = useCallback(
  //   async (title, description) => {
  //     try {
  //       const res = await api.post("/students/", { title, description });
  //       if (res.status === 201) {
  //         const currentStudents = students;
  //         const newStudents = [...currentStudents, res.data];
  //         setStudents(newStudents);
  //         setError(false);
  //       }
  //     } catch (error) {
  //       setError(error.response.data.message);
  //     }
  //   },
  //   [students]
  // );

  return (
    <StudentsContext.Provider
      value={{
        students,
        error,
        getStudents,
        // deleteStudent,
        // createStudent,
        
      }}
    >
     
    </StudentsContext.Provider>
  );
}

export function useStudents() {
  const context = useContext(StudentsContext);
  if (!context) {
    throw new Error("useStudents must be used within a studentsProvider  ");
  }
  return context;
}
