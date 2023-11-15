import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./assets/logo.png";

function IndexStudent() {
  return (
    <div className="h-screen w-full bg-orange-100 ">
      {/* ... your existing code ... */}
      <Link to="/login" className="text-black hover:underline">
        Go to Login
      </Link>
      <Link to="/register" className="text-black hover:underline">
        Go to Register
      </Link>
    </div>
  );
}
export default App;