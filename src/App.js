import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import IndexStudent from "./indexStudent";
import Adminn from "./Adminn";
import Adminevents from "./Adminevents";
import AdminVerification from "./AdminVerification";
import EventSample from "./eventSample"; 
import OrganizationHome from "./OrganizationHome";
import Selectrole from "./Selectrole";
import About from "./About";
import Contact from "./Contact";
import AdminLogin from "./AdminLogin";
import EmployeeLogin from "./EmployeeLogin";
import NoRole from "./NoRole";
import AdminRole from "./AdminRole";
import AdminUnlock from "./AdminUnlock";
import Front from "./Front";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/indexStudent" element={<IndexStudent />} />
        <Route path="/admin" element={<Adminn />} />
        <Route path="/admineve" element={<Adminevents/>} />
        <Route path="/verification" element={<AdminVerification/>} />
        <Route path="/joined" element={<EventSample/>} />
        <Route path="/orgindex" element={<OrganizationHome/>} />
        <Route path="/select" element={<Selectrole/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/employeelogin" element={<EmployeeLogin/>} />
        <Route path="/norole" element={<NoRole/>}/>
        <Route path="/role/:id" element={<AdminRole />} />
        <Route path="/unlock/:id" element={<AdminUnlock/>}/>
        <Route path="/front" element={<Front/>}/>


        
 
      </Routes>
    </Router>
  );
}
