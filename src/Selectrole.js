import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import logoImg from "./assets/logo.png";
import { PiUserListFill } from "react-icons/pi";
import { PiStudentFill } from "react-icons/pi";

export default function Selectrole() {
  return (
    <div style={{ backgroundColor: "#ffeed6" }} className="w-full">
      <nav className="bg-teal-950">
        <img className="h-12" src={logoImg} alt="logo" />
        <a href="/login" className="text-white ml-4 absolute top-5 right-28 h-16 w-16">Sign In</a>
        
      </nav>

      <div className="h-screen w-full bg-orange-100 ">

        <div className="bg-orange-50 my-52 max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg">
          <form className="">
            <h2 className="text-3xl dark:text-black font-bold text-center">
              Select Role
            </h2>
            <br />

            <div className="bg-neutral-200 my-0 mx-auto max-h-fit  p-8 px-8 rounded-lg">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <PiUserListFill size={110} />
              </div>
              <h4 className="text-lg dark:text-black font-bold text-center">
                Organizer
              </h4>
              
            </div>

            

            <br />
            <br />

            <div className="bg-neutral-200 my-0 mx-auto  max-h-fit  p-8 px-8 rounded-lg">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PiStudentFill size={120} />
            </div>
            <h4 className="text-lg dark:text-black font-bold text-center">
              Student
            </h4>
            </div>
            
            <br/>


            
            
          </form>
        </div>
      </div>
    </div>
  );
}
