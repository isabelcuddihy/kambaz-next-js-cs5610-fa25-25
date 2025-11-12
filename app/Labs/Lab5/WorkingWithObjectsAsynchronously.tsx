"use client";
import React, { useEffect, useState } from "react";
import * as client from "./client";
import { FormControl } from 'react-bootstrap';
export default function WorkingWithObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<any>({});
  const fetchAssignment = async () => {
    const assignment = await client.fetchAssignment();
    setAssignment(assignment);
  };
  const updateTitle = async (title: string) => 
    { const updatedAssignment = await client.updateTitle(title); 
      setAssignment(updatedAssignment); 
    };
  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <FormControl value={assignment.id} className="mb-2"
        onChange={(e) => setAssignment({ ...assignment, id: e.target.value }) } /> ID
      <FormControl value={assignment.title} className="mb-2"
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value }) } /> Title
      <FormControl as="textarea" rows={6} value={assignment.description} className="mb-2"
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value }) }/> Description
      <FormControl type="date" className="mb-2" value={assignment.due}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
        <FormControl value={assignment.score} className="mb-2"
        onChange={(e) => setAssignment({ ...assignment, score: e.target.value }) } /> Score
      <div className="form-check form-switch mb-4 me-2">
        <input className="form-check-input mb-2" type="checkbox" id="wd-completed"
               checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked }) } />
        <label className="form-check-label" htmlFor="wd-completed"> Completed </label>
        <br />
<button className="btn btn-success" onClick={() => updateTitle(assignment.title)} > Update Title </button>
      
      </div>
       <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}