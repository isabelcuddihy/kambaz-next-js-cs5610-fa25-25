import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
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
        <Button variant="secondary" size="lg" className="me-2 float-end" id="wd-add-assignment-group">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group
        </Button>
        <Button variant="danger" size="lg" className="me-2 float-end" id="wd-add-assignment">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Button>
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
            <ListGroupItem className="p-3 ps-1">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-start">
                  <BsGripVertical className="me-2 fs-3" />
                  <div>
                    <a href="/Courses/1234/Assignments/123" className="wd-assignment-link text-dark fw-bold text-decoration-none">
                      A1 - ENV + HTML
                    </a>
                    <div className="text-muted small">
                      <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am
                    </div>
                    <div className="text-muted small">
                      <strong>Due</strong> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <div>
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem className="p-3 ps-1">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-start">
                  <BsGripVertical className="me-2 fs-3" />
                  <div>
                    <a href="/Courses/1234/Assignments/234" className="wd-assignment-link text-dark fw-bold text-decoration-none">
                      A2 - CSS + Bootstrap
                    </a>
                    <div className="text-muted small">
                      <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am
                    </div>
                    <div className="text-muted small">
                      <strong>Due</strong> May 20 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <div>
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem className="p-3 ps-1">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-start">
                  <BsGripVertical className="me-2 fs-3" />
                  <div>
                    <a href="/Courses/1234/Assignments/345" className="wd-assignment-link text-dark fw-bold text-decoration-none">
                      A3 - JavaScript + React
                    </a>
                    <div className="text-muted small">
                      <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am
                    </div>
                    <div className="text-muted small">
                      <strong>Due</strong> May 27 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <div>
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}