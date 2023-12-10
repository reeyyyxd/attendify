import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import logoImg from "./assets/logo.png";
import { Button } from "@mui/material";

export default function Contact() {
  return (
    <div style={{ backgroundColor: "#ffeed6" }} className="w-full">
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

      <div className="h-screen w-full bg-orange-100 ">

        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

          <div className="bg-orange-50 my-14 max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg">
          <form className="mt-6">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>

              <TextField
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-4 border bg-amber-100 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <TextField
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-4 border bg-amber-100 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <TextField
                type="text"
                id="message"
                name="message"
                className="w-full p-3 mt-4 border bg-amber-200 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-[#D2B48C] hover:bg-[#B8860B] text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
