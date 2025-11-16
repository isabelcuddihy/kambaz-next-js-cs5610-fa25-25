"use client"
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPencilFill, BsPlus, BsTrash3Fill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
import * as client from "../../client";
import { useEffect } from "react";
export default function Assignments() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();

      const onUpdateAssignment = async (assignment: any) => {
      await client.updateAssignment(assignment);
      const newAssignments = assignments.map((a: any) => a._id === assignment._id ? assignment : a );
      dispatch(setAssignments(newAssignments));
    };
  
     const onRemoveAssignment = async (assignmentId: string) => {
      await client.deleteAssignment(assignmentId);
       if (window.confirm("Are you sure you want to remove this assignment?")) {
    onRemoveAssignment(assignmentId);
  }
    };
  
     const onCreateAssignmentForCourse = async (title: string) => {
      if (!cid) return;
      const newAssignment = { title: title, course: cid };
      const assignment = await client.createAssignmentForCourse(cid as string, newAssignment);
      dispatch(setAssignments([...assignments, assignment]));
    };
  
   const fetchAssignments = async () => {
      const assignments = await client.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(assignments));
    };
    useEffect(() => {
      fetchAssignments();
    }, []);
  const router = useRouter();
  const courseAssignments = assignments.filter(
  (assignment: any) => assignment.course === cid
);

  return (
    <div id="wd-assignments">
      {/* Search and Buttons */}
      <div className="mb-4">
        <div className="position-relative d-inline-block me-2" style={{ width: "300px" }}>
          <FaSearch className="position-absolute" style={{ top: "12px", left: "10px" }} />
          <input 
            className="form-control ps-5" 
            placeholder="Search for Assignments"
            id="wd-search-assignment"
          />
        </div>
        {currentUser?.role === 'FACULTY' && (
        <><Button variant="secondary" size="lg" className="me-2 float-end" id="wd-add-assignment-group">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group
          </Button><Button
            variant="danger"
            size="lg"
            className="me-2 float-end"
            id="wd-add-assignment"
            onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}
          >
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Assignment
            </Button></>
        )}
      </div>
        
      <br /><br />

      {/* Assignments List */}
      
      <ListGroup className="rounded-0" id="wd-assignment-list">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <div>
              <span className="me-3">40% of Total</span>
              <BsPlus className="fs-4" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          <ListGroup className="rounded-0">
             {courseAssignments.map((assignment: any) => (
            <ListGroupItem key={assignment._id} className="p-3 ps-1">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-start">
                  <BsGripVertical className="me-2 fs-3" />
                  <div>
                    {currentUser?.role === 'FACULTY' && (
        <>
                    <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link text-dark fw-bold text-decoration-none">
                      {assignment.title}
                    </Link>
                    </>)}
                   <div className="text-muted small">
  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> {assignment.availableFromDate || "May 6 at 12:00am"}
</div>
<div className="text-muted small">
  <strong>Due</strong> {assignment.dueDate || "May 13 at 11:59pm"} | {assignment.points || 100} pts
</div>
                  </div>
                </div>
                
                <div>
                  {currentUser?.role === 'FACULTY' && (
                  <>
                  <BsPencilFill 
    className="text-primary me-2 mb-1"
    style={{ cursor: "pointer" }}
    onClick={() => router.push(`/Courses/${cid}/Assignments/${assignment._id}`)}
  />
  <BsTrash3Fill 
    className="text-danger me-2 mb-1"
    style={{ cursor: "pointer" }}
    onClick={() => {
      if (window.confirm("Are you sure you want to remove this assignment?")) {
        dispatch(deleteAssignment(assignment._id));
      }
    }}
  />
  </>
  )}
  <GreenCheckmark />
  <IoEllipsisVertical className="fs-4" />
</div>
              </div>
            </ListGroupItem>))}

             </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}