import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import logoImg from "./assets/logo.png";
import pic from "./assets/Ellipse 17.png";
import pic2 from "./assets/Ellipse 18.png";
import pic3 from "./assets/Ellipse 19.png";
import { Button } from "@mui/material";

export default function About() {
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
