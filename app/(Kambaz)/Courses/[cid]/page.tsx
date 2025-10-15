import { redirect } from "next/navigation";
import * as db from "../../Database";
export default async function CoursesPage({ params, }: { params: Promise<{ cid: string }>; }) {
 const { cid } = await params;
 redirect(`/Courses/${cid}/Home`);
}
