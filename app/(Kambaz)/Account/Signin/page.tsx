import Link from "next/link";
export default function Signin() {
 return (
  <div id="wd-signin-screen">
  <h3>Sign in</h3>
  <input id="wd-username" placeholder="username" className="mb-2 w-50"/><br/>
  <input id="wd-password" placeholder="password" className="mb-2 w-50" type="password" /> <br />
  <Link id="wd-signin-btn" href="/Account/Profile" className="btn btn-primary w-50 mb-2"> Sign in </Link> <br />
  <Link id="wd-signup-link" href="/Account/Signup" > Sign up </Link>
</div>
);}

