"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import * as client from "../client";
import PeopleTable from "../../Courses/[cid]/People/Table";

export default function Users() {
 const [users, setUsers] = useState<any[]>([]);
   const [role, setRole] = useState("");
   const [name, setName] = useState("");
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [showCreateModal, setShowCreateModal] = useState(false);
  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };
   const createUser = async () => {
    const user = await client.createUser({
      firstName,
      lastName, 
      username,
      password,
      email,
      section: "S101",
      role,
    });
    setUsers([...users, user]);
  };


 const { uid } = useParams();
 const fetchUsers = async () => {
   const users = await client.findAllUsers();
   setUsers(users);
 };
 useEffect(() => {
   fetchUsers();
 }, [uid]);
 return (
   <div>
     <h3>Users</h3>
     <select value={role} onChange={(e) =>filterUsersByRole(e.target.value)}
              className="form-select float-start w-25 wd-select-role" >
        <option value="">All Roles</option>    <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option> <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <input value={role} onChange={(e) =>filterUsersByName(e.target.value)}
              className="form-control float-start w-25 " type = "text" placeholder="Search by name">
        
      </input>
      <button onClick={createUser} className="btn btn-primary float-end wd-create-user" >

        Create User
      </button>
      <br /><br />
     <PeopleTable users={users} fetchUsers={fetchUsers} />
   </div>
);}
