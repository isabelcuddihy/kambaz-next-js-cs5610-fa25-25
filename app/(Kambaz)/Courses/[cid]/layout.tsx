"use client";
import { ReactNode, useEffect } from "react";
import CourseNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa6";
import { courses } from "../../Database";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";

export default function CoursesLayout({ children }: { children: ReactNode }) {
const { cid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  
  const course = courses.find((course: any) => course._id === cid);
 // Check if user is enrolled
  const isEnrolled = enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser._id && enrollment.course === cid
  );

  useEffect(() => {
    if (!isEnrolled) {
      // Not enrolled - send user to Dashboard
      router.push("/Dashboard");
    }
  }, [isEnrolled, router]);

  // Don't access if not enrolled
  if (!isEnrolled) {
    return null;
  }
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
         {course?.name}
      </h2> <hr />

  <div className="d-flex">
    <div className="d-none d-md-block">
      <CourseNavigation />
    </div>
    <div className="flex-fill">
      {children}
    </div></div>
</div>

);}

