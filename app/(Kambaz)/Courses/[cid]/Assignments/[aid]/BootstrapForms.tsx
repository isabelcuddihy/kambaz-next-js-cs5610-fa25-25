import { Button, Col, Form, FormControl, FormLabel, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
      <FormControl 
        id="wd-name" 
        defaultValue="A1"
      />
    </div>
  );
}