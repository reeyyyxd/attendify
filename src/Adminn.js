import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import logoImg from "./assets/logo.png";

export default function Adminn() {
  return (
    <div className="h-screen w-full bg-orange-100 ">
      <nav className="bg-teal-950">
        <img className="h-12" src={logoImg} alt="logo" />
      </nav>

      <div className="w-1/3 ms-8 mt-6">
        <h1 className="text-black font-bold text-2xl">Manage Users</h1>
      </div>

      <div className="w-80 ms-8 pt-6 ">
        <input
          type="search"
          placeholder="Search here..."
          className="bg-orange-200 bg-opacity-100 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* table */}

      <table class="table-auto  mt-6 w-full ">
  <thead>
    <tr class="bg-teal-950"> 
      <th class="w-1/12">
        <input type="checkbox" class="mr-4"></input>
      </th>
      <th class="w-2/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
        Name
      </th>
      <th class="w-3/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
        ID Number
      </th>
      <th class="w-2/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
        Account
      </th>
      <th class="w-4/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
        Action
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-gray-200 hover:bg-gray-100">
      <td class="w-1/12">
        <input type="checkbox" class="ms-12"></input>
      </td>
      <td class="w-2/12 px-6 py-4 whitespace-nowrap">Firstname Lastname</td>
      <td class="w-3/12 px-6 py-4 whitespace-nowrap">1234567890</td>
      <td class="w-2/12 px-6 py-4 whitespace-nowrap">Organizer</td>
      <td class="w-4/12 px-6 py-4 whitespace-nowrap">
        <a href="#" class="text-blue-600 hover:text-blue-700">Edit</a> |
        <a href="#" class="text-red-600 hover:text-red-700">Delete</a>
      </td>
    </tr>
    <tr class="border-b border-gray-200 hover:bg-gray-100">
      <td class="w-1/12">
        <input type="checkbox" class="ms-12"></input>
      </td>
      <td class="w-2/12 px-6 py-4 whitespace-nowrap">Firstname Lastname</td>
      <td class="w-3/12 px-6 py-4 whitespace-nowrap">9876543210</td>
      <td class="w-2/12 px-6 py-4 whitespace-nowrap">Student</td>
      <td class="w-4/12 px-6 py-4 whitespace-nowrap">
        <a href="#" class="text-blue-600 hover:text-blue-700">Edit</a> |
        <a href="#" class="text-red-600 hover:text-red-700">Delete</a>
      </td>
    </tr>
  </tbody>
</table>
      
    </div>
  );
}
