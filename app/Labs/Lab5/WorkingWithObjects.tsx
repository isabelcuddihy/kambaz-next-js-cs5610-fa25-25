"use client";
import React, { useState } from "react";
import { FormControl } from "react-bootstrap";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`
   const [module, setModule] = useState({
    id: 1, name: "Intro to NodeJS",
    description: "Explore the basics of NodeJS",
    course: "WD101",
  });
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Assignment Title </a>
      <FormControl className="w-50" id="wd-assignment-title"
        value={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
       <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Assignment Title
      </a><hr/>
    
    <h4>Set Assignment Score</h4>
    <a id="wd-update-assignment-score"
         className="btn btn-success float-end"
         href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Assignment Score </a>
      <FormControl className="w-50" id="wd-assignment-score"
        value={assignment.score} onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value )})}/>
      <hr />

    <h4>Update Assignment Completion</h4>
<a id="wd-update-assignment-completion"
         className="btn btn-success float-end"
         href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Assignment Completed </a>
        <p>{assignment.completed ? "Completed" : "Not Completed"}</p>
        <label className="form-control" id="wd-assignment-completion">
        <input type="checkbox" checked={assignment.completed}
               onChange={() => setAssignment({ ...assignment, completed: !assignment.completed})} /> Completed?
          </label>
      <hr />


        <h4>Modifying Module Properties</h4>
<a id="wd-update-module-name"
        className="btn btn-danger float-end"
         href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module Name </a>
      <FormControl className="w-50" id="wd-module-name"
        value={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })}/>
      <hr />
      <h4>Retrieving Module Objects</h4>
      <a id="wd-retrieve-modules" className="btn btn-success"
         href={`${HTTP_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>
       <h4>Retrieving Module Properties</h4>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${HTTP_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr/>
      <h4>Retrieving Module Description</h4>
      <a id="wd-retrieve-module-description" className="btn btn-warning"
         href={`${HTTP_SERVER}/lab5/module/description`}>
        Get Module Description
      </a><hr/>

    </div>
);}
