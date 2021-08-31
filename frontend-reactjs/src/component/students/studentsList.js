import Student from "./student";

export default function StudentsList({ students }) {
  return students.map((student) => <Student key={student.id} student={student} />);
}
