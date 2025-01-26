import React from "react";
import { Link } from "react-router-dom";

// Header Component
const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Micro Finance</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to= "/loan-categories" toclassName="hover:underline">Loan Categories</Link>
          </li>
          <li>
            <Link to="/login" className="hover:underline">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar
