import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./assets/logo.png";
import TextField from '@mui/material/TextField';

export default function Register() {
  return (
    <div className="h-screen w-full bg-orange-100 ">
      <nav className="bg-teal-950">
        <img className="h-12" src={logoImg} alt="logo" />
        <a href="/login" className="text-white ml-4 absolute top-5 right-28 h-16 w-16">Sign In</a>
      </nav>

      <div className="bg-orange-50 my-16 max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg">
        <form className="">
          <h2 className="text-3xl dark:text-black font-bold text-center">
            Sign Up
          </h2>
          <br/>

          <TextField
            id="idNumber"
            label="ID Number"
            variant="outlined"
            className="w-full p-3 mt-4"
          />
            <br/>
            <br/>

          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            className="w-full p-3 mt-4"
          />
            <br/>
            <br/>

          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            className="w-full p-3 mt-4"
          />

            <br/>
            <br/>

          <TextField
            id="email"
            label="Email Address"
            variant="outlined"
            className="w-full p-3 mt-4"
          />
            <br/>
            <br/>


          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            className="w-full p-3 mt-4"
          />
            <br/>
            <br/>

          <button
            type="submit"
            className="w-full p-3 mt-4 bg-teal-950 text-white rounded-md"
          >
            Register
          </button>
          
            <br/>
            <br/>


          <Link to="/login" className="text-black hover:underline">
            Already have an account? Login here.
          </Link>
        </form>
      </div>
    </div>
  );
}
