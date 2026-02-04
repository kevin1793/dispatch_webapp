import React from "react";
import { logout } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export default function Navbar({ onToggleSidebar }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Hamburger for mobile */}
        <button
          className="text-gray-800 md:hidden focus:outline-none"
          onClick={onToggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div className="text-xl font-bold text-gray-800">Dispatch Admin</div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 hidden sm:block">Admin</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
