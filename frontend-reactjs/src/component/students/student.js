

import Button from "@material-ui/core/Button";

export default function Student({ student }) {

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
}
