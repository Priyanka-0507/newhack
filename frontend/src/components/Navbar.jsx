import React from "react";
import { Link } from "react-router-dom";
const Navbar = () =>{
 return (
    <nav className="bg-blue-600 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-xl font-bold">Bullet Journal</Link>
      <div className="space-x-4">
        <Link to="/login" className="text-white hover:text-blue-200">Login</Link>
        <Link to="/register" className="text-white hover:text-blue-200">Register</Link>
        <Link to="/journal" className="text-white hover:text-blue-200">Journal</Link>
      </div>
    </div>
  </nav>
 );
};
export default Navbar;