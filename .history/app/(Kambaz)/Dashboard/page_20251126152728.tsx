"use client"
import Link from "next/link";
import Image from "next/image";
import * as client from "../Courses/client";
import { useState, useEffect } from "react";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { enrollToCourse, unenrollFromCourse, setEnrollments } from "./reducer";
import { addNewCourse, updateCourse, deleteCourse, setCourses } from "../Courses/reducer";
export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [course, setCourse] = useState<any>({
    _id: uuidv4(), name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });
   const fetchCourses = async () => {
    try {
       if (showAllCourses) {
      courses = await client.fetchAllCourses();  
    } else {
      courses = await client.findMyCourses();  
    }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!currentUser) {
    return;
  }
    fetchCourses();
    fetchEnrollments();
  }, [currentUser, showAllCourses]);


const fetchEnrollments = async () => {
  try {
    const allEnrollments = await client.findAllEnrollments();
    dispatch(setEnrollments(allEnrollments));
  } catch (error) {
    console.error(error);
  }
};

const isEnrolled = (courseId: string) => {
  if (!currentUser) return false;
  return enrollments.some(
    (enrollment: any) => 
      enrollment.user === currentUser._id && 
      enrollment.course === courseId
  );
};
  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([ ...courses, newCourse ]));
  };
  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course: any) => course._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses
      .map((c:any) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));};


    return (
      
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> 

<hr />
{currentUser?.role === 'FACULTY' && ( <>
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={onAddNewCourse} > Add </button>
      <button className="btn btn-warning float-end me-2"
                onClick={onUpdateCourse} id="wd-update-course-click">
          Update </button> 
          </h5>
          <FormControl value={course.name} className="mb-2"onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl as="textarea" value={course.description} rows={3} onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
 <hr />
  </>
)}
          <Button 
  variant="primary" 
  className="float-end me-2"
  onClick={() => setShowAllCourses(!showAllCourses)}
>
  {showAllCourses ? "My Courses" : "All Courses"} 
</Button>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
         {courses

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
  onClick={async (event) => {
    event.preventDefault();
     await client.unenrollFromCourse(currentUser._id, course._id);
    await fetchEnrollments(); 

  }}
>
  Unenroll
</Button>
  ) : (
    <Button 
  variant="success" 
  className="float-end"
  onClick={async (event) => {
    event.preventDefault();
     await client.enrollIntoCourse(currentUser._id, course._id);
    await fetchEnrollments(); 

  }}
>
  Enroll
</Button>
  )
)}

{!showAllCourses && currentUser?.role === 'FACULTY' && (
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
                onDeleteCourse(course._id);
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

