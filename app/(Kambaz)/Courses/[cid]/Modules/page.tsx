export default function Modules() {
    return (
      <div>
        <button type="button"
        id="wd-collapse-button">
  Collapse All
</button>
<button type="button"
        id="wd-view-progress-button">
  View Progress
</button>
<button type="button"
        id="wd-publish-all-button">
  Publish All
</button>
<button type="button"
        id="wd-add-module">
  + Module
</button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Web Dev Basics</li>
                  <li className="wd-content-item">Intro to HTML</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Web Dev Basics by John Smith</li>
                  <li className="wd-content-item">Chapter 1</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 3</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">CSS + Visuals</li>
                  <li className="wd-content-item">CSS and Enhancing Visuals</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  