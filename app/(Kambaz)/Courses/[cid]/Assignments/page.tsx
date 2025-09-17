export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input placeholder="Search for Assignments"
               id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button> </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a href="/Courses/1234/Assignments/123"
               className="wd-assignment-link" >
              A1 - ENV + HTML
            </a> <br/>
            Multiple Modules | Available Soon <br/>
            Due Jan 1 2000 at 12:00 AM | 100 points
            </li>
          <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/234"
               className="wd-assignment-link" >
              A2 - HTML + CSS
            </a> 
            <br/>
            CSS Challenge | Available Jan 1 12:01 AM <br/>
            Due Jan 1 2000 at 12:02 AM | 10 points
          </li>
          <li className="wd-assignment-list-item">
          <a href="/Courses/1234/Assignments/345"
               className="wd-assignment-link" >
              A3 - CSS + Javascript
            </a> 
            <br/>
            Javascript 101 | Available Jan 1 12:05 AM <br/>
            Due Jan 1 2000 at 12:30 AM | 60 points
            </li>
        </ul>
      </div>
  );}
  