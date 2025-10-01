"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AccountNavigation() {
    const pathname = usePathname();
 return (
   <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
     <Link href="Signin"
     className={` border-1 ${
          pathname.includes("Signin") ? "text-black" : "text-danger"
        }`}
     style={pathname.includes("Signin") ? { borderLeft: "10px solid black", padding: "5px" } : {}}> Signin </Link> <br/>
     <Link href="Signup"
      className={` border-1 ${
          pathname.includes("Signup") ? "text-black" : "text-danger"
        }`}
     style={pathname.includes("Signup") ? { borderLeft: "10px solid black", padding: "5px" } : {}}> Signup </Link><br/>
     <Link href="Profile"
      className={` border-1 ${
          pathname.includes("Profile") ? "text-black" : "text-danger"
        }`}
     style={pathname.includes("Profile") ? { borderLeft: "10px solid black", padding: "5px" } : {}}
> Profile </Link> <br />
   </div>
);}
