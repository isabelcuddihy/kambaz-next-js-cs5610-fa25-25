import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" id="wd-username" className="mb-2 w-50"/><br/>
      <input placeholder="password" type="password" id="wd-password" className="mb-2 w-50"/><br/>
      <input placeholder="verify password"
             type="password" className="wd-password-verify" /><br/>
      <Link  href="Profile" className="btn btn-primary w-50 mb-2"> Sign up </Link><br />
      <Link  href="Signin" > Sign in </Link>
    </div>
);}
