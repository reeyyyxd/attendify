import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./assets/logo.png";

function Register() {
  return (
    <div className="h-screen w-full bg-orange-100 ">
          <nav className="bg-teal-950">
        <img className="h-12" src={logoImg} alt="logo" />
      </nav>

      <div className="bg-orange-50 my-52 max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg">
        <form className="">
          <h2 className="text-3xl dark:text-black font-bold text-center">
            Register
          </h2>

          <input
            type="text"
            placeholder="User Name"
            class="w-full p-3 mt-4 border border-gray-300 rounded-md"
          />

          <input
            type="password"
            placeholder="Password"
            class="w-full p-3 mt-4 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            class="w-full p-3 mt-4 bg-teal-950 text-white rounded-md"
          >
            Sign In
          </button>

          <a href="#" class="text-black hover:underline">
            Forgot Password?
          </a>
        </form>
      </div>

      <Link to="/login" className="text-black hover:underline">
        Already have an account? Login here.
      </Link>
    </div>
  );
}
export default App;
