import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./assets/logo.png";

export default function Login() {
  return (
    <div className="h-screen w-full bg-orange-100 ">
      <nav className="bg-teal-950">
        <img className="h-12" src={logoImg} alt="logo" />
      </nav>

      <div className="bg-orange-50 my-52 max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg">
        <form className="">
          <h2 className="text-3xl dark:text-black font-bold text-center">
            Sign In
          </h2>

          <input
            type="text"
            placeholder="User Name"
            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mt-4 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="w-full p-3 mt-4 bg-teal-950 text-white rounded-md"
          >
            Log In
          </button>

          <a href="#" className="text-black hover:underline">
            Forgot Password?
          </a>
        </form>
      </div>

      <Link to="/register" className="text-black hover:underline">
        Register
      </Link>
    </div>
  );
}
