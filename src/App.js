import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import IndexStudent from "./indexStudent";
import Adminn from "./Adminn";
import Adminevents from "./Adminevents";
import AdminVerification from "./AdminVerification";


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
 
      </Routes>
    </Router>
  );
}
