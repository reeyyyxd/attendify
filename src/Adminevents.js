import React, { useState, useEffect } from "react";
import logoImg from "./assets/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Adminn() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch data for Events
    fetch("http://localhost:8080/event/getAllEvents")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []); // Empty dependency array means this effect runs once when the component mounts

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
          <Button variant="contained" sx={{ ml: 'auto',bgcolor: '#F0E68C' }}>
            <Link to="/admineve" className="text-blue-600 hover:text-blue-700">
              Event
            </Link>
          </Button>
        </div>

        <div className="w-1/6">
          <Button variant="contained" sx={{ ml: 'auto',bgcolor: '#F0E68C' }}>
            <Link
              to="/verification"
              className="text-blue-600 hover:text-blue-700"
            >
              Verification
            </Link>
          </Button>
        </div>

        <div className="w-1/6">
          <Button variant="contained" sx={{ ml: 'auto',bgcolor: '#F0E68C' }}>
            {/* Logout Link */}
            <Link to="/login" className="text-blue-600 hover:text-blue-700">
              Logout
            </Link>
          </Button>
        </div>
      </div>

      {/* table */}
      <table className="table-auto mt-6 w-full">
        <thead>
          <tr className="bg-teal-950">
            <th className="w-1/12">
              <input type="checkbox" className="mr-4"></input>
            </th>
            <th className="w-2/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Event Name
            </th>
            <th className="w-3/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              People Attended
            </th>
            <th className="w-2/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Organizer
            </th>
            <th className="w-4/12 px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.eventname}</td>
              <td>{event.department}</td>
              <td>{event.startdate}</td>
              <td>{event.timestart}</td>
              <td>{event.timeend}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
