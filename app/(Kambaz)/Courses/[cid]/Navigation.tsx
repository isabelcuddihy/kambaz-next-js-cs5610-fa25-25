
  "use client"
import Link from "next/link";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";

export default function CourseNavigation() {
  const { cid } = useParams();
   const pathname = usePathname();
  
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link href={`/Courses/${cid}/Home`} id="wd-course-home-link"
        className={pathname.includes("Home")
  ? "list-group-item active border-0" 
  : "list-group-item text-danger border-0"}> Home </Link>
      <Link href={`/Courses/${cid}/Modules`} id="wd-course-modules-link"
         className={pathname.includes("Modules")
  ? "list-group-item active border-0" 
  : "list-group-item text-danger border-0"}> Modules </Link>
      <Link href={`/Courses/${cid}/Piazza`} id="wd-course-piazza-link"
        className={pathname.includes("Piazza")
  ? "list-group-item active border-0" 
  : "list-group-item text-danger border-0"}> Piazza </Link>
      <Link href={`/Courses/${cid}/Zoom`} id="wd-course-zoom-link"
        className={pathname.includes("Zoom")
  ? "list-group-item active border-0" 
  : "list-group-item text-danger border-0"}> Zoom </Link>
      <Link href={`/Courses/${cid}/Assignments`} id="wd-course-assignments-link"
       className={pathname.includes("Assignments")
  ? "list-group-item active border-0" 
  : "list-group-item text-danger border-0"}> Assignments </Link>
      <Link href={`/Courses/${cid}/Quizzes`} id="wd-course-quizzes-link"
        className={pathname.includes("Quizzes")
  ? "list-group-item active border-0" 
  : "list-group-item text-danger border-0"}> Quizzes </Link>
      <Link href={`/Courses/${cid}/People/Table`} id="wd-course-people-link"
        className={pathname.includes("People")
  ? "list-group-item active border-0" 
  : "list-group-item text-danger border-0"}> People </Link>
    </div>
  );
}


