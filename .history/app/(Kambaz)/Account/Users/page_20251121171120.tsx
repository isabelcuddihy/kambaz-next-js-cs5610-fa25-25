"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import * as client from "../client";
import PeopleTable from "../../Courses/[cid]/People/Table";
import { set } from "mongoose";
import { Modal, FormControl, Button } from "react-bootstrap";
import { addModule } from "../../Courses/[cid]/Modules/reducer";

export default function Users() {
 const [users, setUsers] = useState<any[]>([]);
   const [role, setRole] = useState("");
   const [name, setName] = useState("");
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [section, setSection] = useState("S101");
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
      section,
      role,
    });
    setUsers([...users, user]);
    setShowCreateModal(false);
    setFirstName("");
    setLastName("");
    setUsername("");
    setPassword("");
    setEmail("");
    setRole("STUDENT");
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
      <input value={name} onChange={(e) =>filterUsersByName(e.target.value)}
              className="form-control float-start w-25 " type = "text" placeholder="Search by name">
        
      </input>
      <button onClick{() => setShowCreateModal(true)} className="btn btn-primary float-end wd-create-user" >
<Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{dialogTitle}</Modal.Title>
   </Modal.Header>
   <Modal.Body>
    <FormControl value={firstName}
     onChange={(e) => { setFirstName(e.target.value); }} />
     <FormControl value={lastName}
     onChange={(e) => { setLastName(e.target.value); }} />
     <FormControl value={username}
     onChange={(e) => { setUsername(e.target.value); }} />
     <FormControl value={password}
     onChange={(e) => { setPassword(e.target.value); }} />
     <FormControl value={email}
     onChange={(e) => { setEmail(e.target.value); }} />
      <select value={role} onChange={(e) =>setRole(e.target.value)}
              className="form-select float-start w-25 wd-select-role" >
        <option value="">All Roles</option>    <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option> <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
   </Modal.Body>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="primary"
     onClick={() => {
      addModule();
      handleClose();
     }} > Create User </Button>
   </Modal.Footer>
  </Modal>
        Create User
      </button>
      <br /><br />
     <PeopleTable users={users} fetchUsers={fetchUsers} />
   </div>
);}
