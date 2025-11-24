"use client"
import { useState, useEffect } from "react";
import PeopleDetails from "./Details";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable({ users = [], fetchUsers }: { users?: any[]; fetchUsers: () => void; }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);
  return (
    <div id="wd-people-table">
         {showDetails && (
       <PeopleDetails
         uid={showUserId}
         onClose={() => {
           setShowDetails(false);
           fetchUsers();
         }}/>
     )}
      <table className="table table-striped">
        <tbody>
          {users
        .map((user) => (
          <tr key={user._id}>
            <td className="wd-full-name text-nowrap">
              <span className="text-decoration-none"
                 onClick={() => {
                   setShowDetails(true);
                   setShowUserId(user._id);
                 }} >
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </span>
            </td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>);}