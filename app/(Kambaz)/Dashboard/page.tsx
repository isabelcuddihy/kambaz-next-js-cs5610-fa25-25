import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (6)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpeg" alt="React JS" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpeg" alt="React JS" width={200} height={150} />
            <div>
              <h5> CS2345 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer Part 2
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpeg" alt="React JS" width={200} height={150} />
            <div>
              <h5> CS3456 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer Part 3
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpeg" alt="React JS" width={200} height={150} />
            <div>
              <h5> CS4567 React JS and Beyond </h5>
              <p className="wd-dashboard-course-title">
                Even More Software Development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpeg" alt="React JS" width={200} height={150} />
            <div>
              <h5> CS5678 React JS and Beyond </h5>
              <p className="wd-dashboard-course-title">
                Even More Software Development Part 2
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <img src="/images/reactjs.jpeg" alt="React JS" width={200} height={150} />
            <div>
              <h5> CS5678 React JS and Beyond </h5>
              <p className="wd-dashboard-course-title">
                Even More Software Development Part 3
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
      <div id="wd-dashboard">
 <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
 <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
 <div id="wd-dashboard-courses">
  <Row xs={1} md={5} className="g-4">
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link href="/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <CardImg variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      <CardBody>
       <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
       <CardText  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack software developer</CardText>
       <Button variant="primary">Go</Button>
      </CardBody>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> ... Another course ... </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}> ... Another course ... </Col>
  </Row>
</div></div>

    </div>
    
);}