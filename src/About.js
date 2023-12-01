import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import logoImg from "./assets/logo.png";
import pic from "./assets/Ellipse 17.png";
import pic2 from "./assets/Ellipse 18.png";
import pic3 from "./assets/Ellipse 19.png";

export default function About() {
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
          <h1 className="text-3xl font-bold mb-6">About us</h1>
          <p className="text-center text-lg font-semibold">
            Attendify is a Web Application that makes <br />
            Submitting Attendance during school activities <br />
            easy and hassle free.
          </p>
        </div>

        <div className="px-8 flex flex-row  space-x-40  max-w-max m-auto">
          
          <div className="">
           
            <img className="dabatos" src={pic} alt="pic1 " />

            <div className="text-center">
              <p className="font-bold">Angelo Dabatos</p>
              <p>“No Pain No Gain”</p>
            </div>
          </div>

          <div className="sd">
            <img className="mimi" src={pic2} alt="pic2" />
            <div className="text-center">
              <p className="font-bold">Ronna Mie Nabua</p>
              <p>“Gwenchana”</p>
            </div>
          </div>

          <div className="df">
            <img className="novero" src={pic3} alt="pic3" />
            <div className="text-center">
              <p className="font-bold">Rey Anthony M. Novero</p>
              <p>"If there's a will, there's a way"</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
