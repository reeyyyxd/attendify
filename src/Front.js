import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import logoImg from "./assets/logo.png";
import des from "./assets/Ellipse 20.png";
import { Button } from "@mui/material";
import log from "./assets/Rectangle 73.png"


export default function Front() {
  return (
    <div style={{ backgroundColor: "#ffeed6" }} className="w-full h-screen">
      <nav className="flex justify-between items-center bg-teal-950 p-4">
        <img className="h-20 ml-4" src={logoImg} alt="logo" />

        <div className=" ">
    
        <Button variant="contained" sx={{ ml: 2, bgcolor: "#052e2e"}}>
            <Link to="/front" className="text-white text-decoration-none">
              Home
            </Link>
          </Button>

          
          <Button variant="contained" sx={{ ml: 2, bgcolor: "#052e2e"}}>
            <Link to="/contact" className="text-white text-decoration-none">
              Contact us
            </Link>
          </Button>

          <Button variant="contained" sx={{ ml: 2, bgcolor: "#052e2e" }}>
            <Link to="/about" className="text-white text-decoration-none">
              About us
            </Link>
          </Button>

          <Button variant="contained" sx={{ ml: 2,mr: 10, bgcolor: "#CBA906" }}>
            <Link to="/login" className="text-white text-decoration-none">
              Sign in
            </Link>
          </Button>

        </div>
      </nav>

      <div className="flex justify-start w-1/2 ">
        <img src={des} alt="Ellipse 20 " className="height--ellipse" />

        <div className=" margin--header   text-left  h-52 text-6xl">
            <h1>
            Make Submitting Attendance Hassle Free
            </h1>

            <Button variant="contained" sx={{ ml: 2, bgcolor: "#052e2e"}}>
            <Link to="/register" className="text-white text-decoration-none">
              Register
            </Link>
          </Button>  
           
        </div>

        <div className="flex justify-start w-5/6 h-7">
            
             <img src={log} alt="Rectangle 73" className=" icon--pic"/>

        </div>

      </div>

    </div>
  );
}
