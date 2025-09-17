export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div><label htmlFor="wd-name">Assignment Name</label></div>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <div><textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      </div>
      <table>
        <tr>
        <div><td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td></div>
          <div><td>
            <label  htmlFor="wd-group"> Assignment Group: </label><br/>
          <select id="wd-group">
   <option value="ASSIGNMENTS">Assignments</option>
   <option value="DISCUSSIONS">Discussions</option>
   <option selected value="OTHER">
       Other</option>
</select>
          </td></div>
          <div><td>
            <label  htmlFor="wd-display-grade-as"> Display Grade as: </label><br/>
          <select id="wd-display-grade-as">
   <option value="Percentage">Percentage</option>
   <option value="Out of 100 points">Out of 100 points</option>
   <option selected value="Decimal">
   Decimal</option>
</select>
          </td></div><div>
          <td>
            <label  htmlFor="wd-submission-type"> Submission Type </label><br/>
          <select id="wd-submission-type">
   <option value="Online">Online</option>
   <option value="On Paper">On Paper</option>
   <option selected value="Email">
   Email</option>
</select>
          </td></div>
          <div><td>
          <div><label>Online Entry Options</label></div>

<input type="checkbox" name="check-option" id="wd-text-entry"/>
<label htmlFor="wd-text-entry">Text Entry</label><br/>

<input type="checkbox" name="check-option" id="wd-website-url"/>
<label htmlFor="wd-website-url">Website URL</label><br/>

<input type="checkbox" name="check-option" id="wd-media-recordings"/>
<label htmlFor="wd-media-recordings">Media Recordings</label><br/>

<input type="checkbox" name="check-option" id="wd-student-annotation"/>
<label htmlFor="wd-student-annotation">Student Anotation</label><br/>
<input type="checkbox" name="check-option" id="wd-file-upload"/>
<label htmlFor="wd-file-upload">File Uploads</label>
   
          </td></div>
          <div><td>
          <label  htmlFor="wd-assign-to"> Assign To </label><br/>
            <input id="wd-assign-to" value={"Everyone"} />
          </td></div>
          <div><td>
          <label  htmlFor="wd-due-date"> Due Date </label><br/>
          <input type="date"
       defaultValue="2000-01-21"
       id="wd-due-date"/><br/>
          </td></div>
          <div><td>
          <label  htmlFor="wd-available-from"> Available From </label><br/>
          <input type="date"
       defaultValue="2000-01-21"
       id="wd-available-from"/><br/>
          </td></div>
          <div><td>
          <label  htmlFor="wd-available-until"> Available Until </label><br/>
          <input type="date"
       defaultValue="2000-01-21"
       id="wd-available-until"/><br/>
          </td></div>
          <button id="wd-save">Save</button>
          <button id="wd-cancel">Cancel</button>
        </tr>
      </table>
    </div>
);}
