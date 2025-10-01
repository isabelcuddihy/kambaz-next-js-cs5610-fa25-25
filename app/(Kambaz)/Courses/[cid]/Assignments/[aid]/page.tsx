import { Button, Col, Form, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
      <FormControl 
        id="wd-name" 
        defaultValue="A1"
      />
 <br />
      
      <FormControl 
        as="textarea"
        id="wd-description"
        rows={10}
        defaultValue={`
The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

- Your full name and section
- Links to each of the lab assignments
- Link to the Kambaz application
- Links to all relevant source code repositories

The Kambaz application should include a link to navigate back to the landing 
page.`}
      />
  <br/>
  <Row className="mb-3">
        <FormLabel htmlFor="wd-points" column sm={3}>
          Points
        </FormLabel>
        <Col sm={9}>
          <FormControl 
            id="wd-points" 
            defaultValue="100"
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
          <Form.Check type="checkbox" id="wd-website-url" label="Website URL" defaultChecked />
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
        defaultValue="2024-05-13T23:59"
        className="mb-3"
      />
      
      <Row>
        <Col>
          <FormLabel htmlFor="wd-available-from">Available from</FormLabel>
          <FormControl 
            type="datetime-local"
            id="wd-available-from" 
            defaultValue="2024-05-06T00:00"
          />
        </Col>
        <Col>
          <FormLabel htmlFor="wd-available-until">Until</FormLabel>
          <FormControl 
            type="datetime-local"
            id="wd-available-until" 
            defaultValue="2024-05-20T23:59"
          />
        </Col>
      </Row>
      </div>
</Col>
</Row>


<div className="d-flex justify-content-end gap-2">
  <Button variant="secondary" size="lg">
    Cancel
  </Button>
  <Button variant="danger" size="lg">
    Save
  </Button>
</div>
    </div>
  );
}