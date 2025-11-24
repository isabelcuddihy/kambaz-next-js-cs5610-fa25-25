"use client"
import { useState, useEffect } from "react";

export default function PeopleTable({ users = [], fetchUsers }: { users?: any[]; fetchUsers: () => void; }) {

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