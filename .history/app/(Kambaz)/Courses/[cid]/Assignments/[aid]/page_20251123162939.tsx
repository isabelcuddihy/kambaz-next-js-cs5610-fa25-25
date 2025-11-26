"use client"
import { Button, Col, Form, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "../reducer";
import * as client from "../../../client";
import { useState, useEffect } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  
  const existingAssignment = assignments.find((a: any) => a._id === aid);
  
  // Use default info for assignment
  const [assignment, setAssignment] = useState({
    title: "A1",
    description: `The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

- Your full name and section
- Links to each of the lab assignments
- Link to the Kambaz application
- Links to all relevant source code repositories

The Kambaz application should include a link to navigate back to the landing 
page.`,
    points: 100,
    dueDate: "2024-05-13T23:59",
    availableFromDate: "2024-05-06T00:00",
    availableUntilDate: "2024-05-20T23:59",
  });
  useEffect(() => {
  if (existingAssignment) {
    setAssignment({
      title: existingAssignment.title || "",
      description: existingAssignment.description || "",
      points: existingAssignment.points || 100,
      dueDate: existingAssignment.dueDate || "",
      availableFromDate: existingAssignment.availableFromDate || "",
      availableUntilDate: existingAssignment.availableUntilDate || "",
    });
  }
},[existingAssignment,  aid]);
const handleSave = async () => {
  if (aid === "new") {
    // Creating a new assignment
    const newAssignment = await client.createAssignmentForCourse(cid as string, assignment);
    dispatch(addAssignment(newAssignment));
  } else {
    // Updating existing assignment
    await client.updateAssignment(cid as string, { ...assignment, _id:  aid });
    dispatch(updateAssignment({ ...assignment, _id:  aid }));
  }
  router.push(`/Courses/${cid}/Assignments`);
};

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };
  return (
    <div id="wd-assignments-editor" className="p-4">
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
      <FormControl 
        id="wd-name" 
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
 <br />
      
      <FormControl 
        as="textarea"
        id="wd-description"
        rows={10}
        value={assignment.description}
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
      />
  <br/>
  <Row className="mb-3">
        <FormLabel htmlFor="wd-points" column sm={3}>
          Points
        </FormLabel>
        <Col sm={9}>
          <FormControl 
            id="wd-points" 
            value={assignment.points}
        onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value )})}
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <FormLabel htmlFor="wd-group" column sm={3}>
          Assignment Group
        </FormLabel>
        <Col sm={9}>
          <FormSelect id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </FormSelect>
        </Col>
      </Row>

      <Row className="mb-3">
        <FormLabel htmlFor="wd-display-grade-as" column sm={3}>
          Display Grade as
        </FormLabel>
        <Col sm={9}>
          <FormSelect id="wd-display-grade-as">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
            <option value="Pass/Fail">Pass/Fail</option>
            <option value="LetterGrade">Letter Grade</option>
          </FormSelect>
        </Col>
      </Row>

     <Row className="mb-3">
  <FormLabel htmlFor="wd-submission-type" column sm={3}>
    Submission Type
  </FormLabel>
  <Col sm={9}>
    <div className="border rounded p-3">
      <FormSelect id="wd-submission-type" className="mb-3">
        <option value="Online">Online</option>
        <option value="In-Person">In-Person</option>
        <option value="Email">Email</option>
      </FormSelect>

      <div>
        <strong>Online Entry Options</strong>
        <div className="mt-2">
          <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
          <Form.Check type="checkbox" id="wd-website-url" label="Website URL"  defaultChecked />
          <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
          <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
          <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
        </div>
      </div>
    </div>
  </Col>
</Row>
<Row className="mb-3">
  <FormLabel column sm={3}>
    Assign
  </FormLabel>
  <Col sm={9}>
    <div className="border rounded p-3">
      <FormLabel htmlFor="wd-assign-to">Assign to</FormLabel>
      <FormControl 
        id="wd-assign-to" 
        defaultValue="Everyone"
        className="mb-3"
      />
      
      <FormLabel htmlFor="wd-due-date">Due</FormLabel>
      <FormControl 
        type="datetime-local"
        id="wd-due-date" 
        className="mb-3"
        value={assignment.dueDate}
        onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
      />
      
      <Row>
        <Col>
          <FormLabel htmlFor="wd-available-from">Available from</FormLabel>
          <FormControl 
            type="datetime-local"
            id="wd-available-from" 
            value={assignment.availableFromDate}
        onChange={(e) => setAssignment({ ...assignment, availableFromDate: e.target.value })}
          />
        </Col>
        <Col>
          <FormLabel htmlFor="wd-available-until">Until</FormLabel>
          <FormControl 
            type="datetime-local"
            id="wd-available-until" 
            value={assignment.availableUntilDate}
        onChange={(e) => setAssignment({ ...assignment, availableUntilDate: e.target.value })}
          />
        </Col>
      </Row>
      </div>
</Col>
</Row>


<div className="d-flex justify-content-end gap-2">
  <Button variant="secondary" size="lg" onClick={handleCancel}>
  Cancel
</Button>
<Button variant="danger" size="lg" onClick={handleSave}>
  Save
</Button>
</div>
    </div>
  );
}