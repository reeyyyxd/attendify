import React, { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import logoImg from "./assets/logo.png";

import axios from "axios";
import { MdOutlineSystemSecurityUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function AdminVerification() {
  const [users, setUsers] = useState([]);
  const [students, setStudents] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:8080/user/seeAllUsers")
      .then((response) => response.json())
      .then((data) => setUsers(data));

    fetch("http://localhost:8080/student/getAllStudents")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  const deleteUser = async (id) => {
    await axios.delete('http://localhost:8080/user/${id}')
    loadUsers()
}

  return (
    <div className="h-screen w-full bg-orange-100">
      <nav className="bg-teal-950">
        <img className="h-12" src={logoImg} alt="logo" />
      </nav>

      <div className="w-1/3 ms-8 mt-6">
        <h1 className="text-black font-bold text-2xl">Hello, Admin</h1>
      </div>

      <div className="flex items-center ms-8 pt-6 space-x-4">
        <div className="flex-grow">
          <input
            type="search"
            placeholder="Search here..."
            className="bg-orange-200 bg-opacity-100 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="w-1/6">
          <Button variant="contained" sx={{ ml: "auto", bgcolor: "#F0E68C" }}>
            <Link to="/admineve" className="text-blue-600 hover:text-blue-700">
              Event
            </Link>
          </Button>
        </div>

        <div className="w-1/6">
          <Button variant="contained" sx={{ ml: "auto", bgcolor: "#F0E68C" }}>
            <Link
              to="/verification"
              className="text-blue-600 hover:text-blue-700"
            >
              Verification
            </Link>
          </Button>
        </div>

        <div className="w-1/6">
          <Button variant="contained" sx={{ ml: "auto", bgcolor: "#F0E68C" }}>
            {/* Logout Link */}
            <Link to="/login" className="text-blue-600 hover:text-blue-700">
              Logout
            </Link>
          </Button>
        </div>
      </div>

      {/* Users table */}
      <Paper elevation={3} className="mt-6 p-4">
        <h2 className="text-black font-bold text-2xl mb-4">Users</h2>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>ID Number</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Is Student</TableCell>
                <TableCell>Is Employee</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.idNumber}</TableCell>
                  <TableCell>{user.firstname}</TableCell>
                  <TableCell>{user.lastname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.isStudent}</TableCell>
                  <TableCell>{user.isEmployee}</TableCell>
                  <TableCell>
                    <div className="flex">
                      <Link to={`/role/${user.id}`} className="mr-4 text-lime-400  hover:text-lime-800" >
                        <MdOutlineSystemSecurityUpdate size={25} />
                      </Link>

                  <Link onClick={()=>deleteuser(user)} to={`/lock/${student.id}`}>
                  Delete
                </Link>
                
                </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Privileges table */}
      <Paper elevation={3} className="mt-6 p-4">
        <h2 className="text-black font-bold text-2xl mb-4">Privileges</h2>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>ID Number</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Is SSG</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.idNumber}</TableCell>
                  <TableCell>{student.firstname}</TableCell>
                  <TableCell>{student.lastname}</TableCell>
                  <TableCell>{student.isSSG}</TableCell>{" "}
                  {/* Correct field name */}
                  <TableCell>
                    <Link to={`/unlock/${student.id}`}>
                      <MdOutlineSystemSecurityUpdate />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
