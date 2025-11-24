"use client"
import { useState, useEffect } from "react";
import PeopleDetails from "./Details";
import Link from "next/link";
export default function PeopleTable({ users = [], fetchUsers }: { users?: any[]; fetchUsers: () => void; }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);
  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        ...
        <tbody>
          {users
            .filter((usr) => enrollments.some((enrollment) =>
               enrollment.user === usr._id && enrollment.course === cid))
            .map((user: any) => ( ... ))}
        </tbody>
      </table>
    </div>);}