import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/login")}
        className="bg-[blue] w-[7rem] p2 rounded"
      >
        Login
      </button>
      <button
        onClick={() => navigate("/register")}
        className="bg-[blue] w-[7rem] p2 rounded"
      >
        Register
      </button>
    </div>
  );
};

export default Navbar;
