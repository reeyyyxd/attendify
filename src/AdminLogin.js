import React from "react";
import TextField from "@mui/material/TextField";
import logoImg from "./assets/logo.png";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    if (!username.toLowerCase().includes("admin")) {
      console.error("Access denied. Only admin users are allowed.");
      return;
    }

    const loginAdmin = { username, password };
    // to be continue, more secure
    // Convert the loginAdmin object to query parameters
    const queryParams = new URLSearchParams(loginAdmin).toString();

    fetch(`http://localhost:8080/user/seeAllUsers?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log("Logged in as admin");
        navigate("/admin");
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  return (
    <div style={{ backgroundColor: "#ffeed6" }} className="w-full h-screen">
      <nav className="bg-teal-950">
        <img className="h-12" src={logoImg} alt="logo" />
      </nav>

      <div className="bg-orange-50 my-52 max-w-[500px]  mx-auto  p-8 px-8 rounded-lg">
        <form className="">
          <h2 className="text-3xl dark:text-black font-bold text-center">
            Admin Log In
          </h2>
          <br />

          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            type="text"
            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full p-3 mt-4 bg-teal-950 text-white rounded-md"
            onClick={handleClick}
          >
            Log In
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}
