import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import logoImg from "./assets/logo.png";

export default function Contact() {
  return (
    <div style={{ backgroundColor: "#ffeed6" }} className="w-full">
      <nav className="bg-teal-950">
        <img className="h-12" src={logoImg} alt="logo" />
        <a
          href="/"
          className="text-white ml-4 absolute top-5 right-1/4 h-16 w-16"
        >
          Home
        </a>
        <a
          href="/contact"
          className="text-white ml-4 absolute top-5 right-80 h-16 w-16"
        >
          Contac&nbsp;us
        </a>
        <a
          href="/about"
          className="text-white ml-4 absolute top-5 right-56 h-16 w-16"
        >
          About&nbsp;us
        </a>
        <a
          href="/"
          className="text-white ml-4 absolute top-5 right-36 h-16 w-16"
        >
          Logout
        </a>
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
