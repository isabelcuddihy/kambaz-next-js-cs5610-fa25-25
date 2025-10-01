"use client"
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline, IoFileTray, IoFileTrayStacked, IoFileTrayStackedOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import { CiAlignCenterH } from "react-icons/ci";
import { BiBook, BiBookOpen, BiCalendarAlt, BiCalendarEvent, BiFolderOpen } from "react-icons/bi";
import { MdMarkEmailUnread } from "react-icons/md";
import { LuFileStack } from "react-icons/lu";
import { TbFileStack } from "react-icons/tb";
import { BsCalendar, BsCalendar2Date, BsCalendar3, BsGear } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import { usePathname } from "next/navigation";
export default function KambazNavigation() {
  const pathname = usePathname();
 return (
  <div>
   <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 120 }}
              id="wd-kambaz-navigation">
     <ListGroupItem className="bg-black border-0 text-center" as="a"
              target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
       <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
     </ListGroupItem>
     <ListGroupItem className="border-0 bg-black text-center">
       <Link href="/Account" id="wd-account-link" className="text-white text-decoration-none">
         <FaRegCircleUser className="fs-1 text-white" />
         <br />
         Account
       </Link>
     </ListGroupItem>
     <ListGroupItem className={`${
          pathname.includes("Dashboard") ?  "border-0 bg-white text-center": "border-0 bg-black text-center"}
       `}>
       <Link href="/Dashboard" id="wd-dashboard-link" className={`${
          pathname.includes("Dashboard")?  "text-danger text-decoration-none": "text-white text-decoration-none"
        }
       `}>
         <AiOutlineDashboard className="fs-1 text-danger"/>
         <br />
         Dashboard
       </Link>
       </ListGroupItem>
      <ListGroupItem className={`${
          pathname.includes("Courses") ?  "border-0 bg-white text-center": "border-0 bg-black text-center"}
       `}>
       <Link href="/Courses/1234" id="wd-course-link" className={`${
          pathname.includes("Courses")?  "text-danger text-decoration-none": "text-white text-decoration-none"
        }
       `}>
         <BiBook className="fs-1 text-danger" />
         <br />
         Courses
       </Link>
     </ListGroupItem>
      <ListGroupItem className={`${
          pathname.includes("Calendar") ?  "border-0 bg-white text-center": "border-0 bg-black text-center"}
       `}>
       <Link href="/Calendar" id="wd-calendar-link" className={`${
          pathname.includes("Calendar")?  "text-danger text-decoration-none": "text-white text-decoration-none"
        }
       `}>
         <BsCalendar3 className="fs-1 text-danger" />
         <br />
         Calendar
       </Link>
     </ListGroupItem>
<ListGroupItem className={`${
          pathname.includes("Inbox") ?  "border-0 bg-white text-center": "border-0 bg-black text-center"}
       `}>
       <Link href="/Inbox" id="wd-inbox-link" className={`${
          pathname.includes("Inbox")?  "text-danger text-decoration-none": "text-white text-decoration-none"
        }
       `}>
         <IoFileTray className="fs-1 text-danger" />
         <br />
         Inbox
       </Link>
     </ListGroupItem>
      <ListGroupItem className={`${
          pathname.includes("Labs") ?  "border-0 bg-white text-center": "border-0 bg-black text-center"}
       `}>
       <Link href="/Labs" id="wd-labs-link" className={`${
          pathname.includes("Labs")?  "text-danger text-decoration-none": "text-white text-decoration-none"
        }
       `}>
         <BsGear className="fs-1 text-danger" />
         <br />
         Labs
       </Link>
     </ListGroupItem>
   </ListGroup>
   </div>
);}

