import callApi from "../services/api";

const getStudents = async () => {
  const result = await callApi("http://localhost:3000/students", "get", "");
  return result;
};

const getStudent = async (id) => {
  const result = await callApi("http://localhost:3000/students", "get", id);
  return result;
};


const postStudent = async (data) => {
  const result = await callApi("http://localhost:3000/students", "post", data);
  return result;
};
const deleteStudent = async (id) => {
  const student = await callApi("http://localhost:3000/students", "post", id);
  return student;
};
export { getStudents, postStudent, getStudent };
