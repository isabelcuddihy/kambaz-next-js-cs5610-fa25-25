"use client"
import Link from "next/link";
import Image from "next/image";
import * as db from "../Database";
import { useState } from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { enrollToCourse, unenrollFromCourse } from "./reducer";
import { addNewCourse, updateCourse, deleteCourse } from "../Courses/reducer";
export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: uuidv4(), name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });
  const [showAllCourses, setShowAllCourses] = useState(false);
const isEnrolled = (courseId: string) => {
  return enrollments.some(
    (enrollment: any) => 
      enrollment.user === currentUser._id && 
      enrollment.course === courseId
  );
};
    return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 

<hr />
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => dispatch(addNewCourse(course))} > Add </button>
      <button className="btn btn-warning float-end me-2"
                onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">
          Update </button>
          <Button 
  variant="primary" 
  className="float-end me-2"
  onClick={() => setShowAllCourses(!showAllCourses)}
>
  {showAllCourses ? "Show Enrolled Courses" : "Enrollments"}
</Button>
      </h5><br />
      <FormControl value={course.name} className="mb-2"onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl as="textarea" value={course.description} rows={3} onChange={(e) => setCourse({ ...course, description: e.target.value }) } /><hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
  .filter((course: any) => {
    if (showAllCourses) {
      return true; // Show all courses
    }
    // Show only enrolled courses
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id &&
        enrollment.course === course._id
    );
  })

  .map((course :any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <CardImg src="/images/reactjs.jpeg" variant="top" width="100%" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </CardTitle>
                    <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </CardText>
                   <Button variant="primary"> Go </Button>

{showAllCourses && (
  isEnrolled(course._id) ? (
    <Button 
      variant="danger" 
      className="float-end"
      onClick={(event) => {
        event.preventDefault();
        dispatch(unenrollFromCourse({ 
          userId: currentUser._id, 
          courseId: course._id 
        }));
      }}
    >
      Unenroll
    </Button>
  ) : (
    <Button 
      variant="success" 
      className="float-end"
      onClick={(event) => {
        event.preventDefault();
        dispatch(enrollToCourse({ 
          userId: currentUser._id, 
          courseId: course._id 
        }));
      }}
    >
      Enroll
    </Button>
  )
)}

{!showAllCourses && (
  <>
  <button
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                } }
                className="btn btn-warning me-2 float-end"
                id="wd-edit-course-click"
              >
                Edit
              </button><button onClick={(event) => {
                event.preventDefault();
                dispatch(deleteCourse(course._id));
              } } className="btn btn-danger me-2 float-end"
                id="wd-delete-course-click">
                  Delete
                </button></>
)}
            
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>);}