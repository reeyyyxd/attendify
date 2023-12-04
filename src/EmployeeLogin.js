import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import logoImg from "./assets/logo.png";

export default function Login() {
  return (
    <div style={{ backgroundColor: "#ffeed6" }} className="w-full h-screen">
      <nav className="bg-teal-950">
        <img className="h-12" src={logoImg} alt="logo" />
        <a
          href="/register"
          className="text-white ml-4 absolute top-5 right-28 h-16 w-16"
        >
          Sign up
        </a>
      </nav>

      <div className="bg-orange-50 my-52 max-w-[500px]  mx-auto  p-8 px-8 rounded-lg">
        <form className="">
          <h2 className="text-3xl dark:text-black font-bold text-center">
            Sign In
          </h2>
          <br />

          <TextField
            id="outlined-basic"
            label="ID Number"
            variant="outlined"
            type="text"
            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
          />
          <br />
          <br />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="w-full p-3 mt-4 bg-teal-950 text-white rounded-md"
          >
            Log In
          </button>
          <br />
          <br />

          <button className="text-black hover:underline" onClick={() => {}}>
            Forgot Password?
          </button>
          <br />

          <Link to="/register" className="text-black hover:underline">
            <span style={{ textDecoration: "underline" }}>
              No account yet? Register
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}
