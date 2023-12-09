import React from "react";
import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import logoImg from "./assets/logo.png";
import { Button } from "@mui/material";

export default function Adminn() {
  return (
    <div className="h-screen w-100 bg-orange-100 ">
      <nav className="bg-teal-950 w-full">
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

    
    </div>
  );
}
