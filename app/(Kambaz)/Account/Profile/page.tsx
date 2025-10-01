import Link from "next/link";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input defaultValue="Jane" placeholder="username" className="wd-username mb-2 w-50"/><br/>
      <input defaultValue="123"   placeholder="password" type="password"
             className="wd-password" /><br/>
      <input defaultValue="Jane" placeholder="First Name" id="wd-firstname" className="mb-2 w-50" /><br/>
      <input defaultValue="Doe" placeholder="Last Name" id="wd-lastname" className="mb-2 w-50" /><br/>
      <input defaultValue="2000-01-01" type="date" id="wd-dob"className="mb-2 w-50"  /><br/>
      <input defaultValue="jane@doe" type="email" id="wd-email" className="mb-2 w-50" /><br/>
      <select defaultValue="FACULTY" id="wd-role"className="mb-2 w-50">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </select><br/>
      <Link href="Signin" className="btn btn-danger w-50 mb-2"> Sign out </Link>
    </div>
);}
