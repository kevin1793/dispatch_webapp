import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, onClose }) {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded hover:bg-gray-700 ${
      isActive ? "bg-gray-700" : ""
    }`;

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 h-screen w-64 bg-gray-800 text-white p-6 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static md:flex md:flex-col`}
      >
        <h2 className="text-lg font-bold mb-6">Menu</h2>
        <nav className="flex-1 space-y-2 overflow-y-auto">
          <NavLink to="/admin/create-job" className={linkClass}>
            + Create Job
          </NavLink>
          <NavLink to="/admin-dashboard" className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/dispatchers" className={linkClass}>
            Dispatchers
          </NavLink>
          <NavLink to="/admin/contractors" className={linkClass}>
            Contractors
          </NavLink>
          <NavLink to="/admin/loads" className={linkClass}>
            Loads
          </NavLink>
          <NavLink to="/admin/reports" className={linkClass}>
            Reports
          </NavLink>
          <NavLink to="/admin/settings" className={linkClass}>
            Settings
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
