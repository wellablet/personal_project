import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/about", label: "About", icon: <FaUser /> },
    { path: "/portfolio", label: "Portfolio", icon: <FaBriefcase /> },
    { path: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <>
      {/* Hamburger Menü */}
      {/* Removed the FaBars hamburger icon button here to avoid duplicate hamburger icons */}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50 flex flex-col pt-10`}
      >
        {/* Çarpı İkonu */}
        <div className="w-full flex justify-end pr-6">
          <button
            onClick={toggleSidebar}
            className="text-3xl text-gray-500 hover:text-sky-500 transition-colors duration-300"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menü İtemları */}
        <div
          className={`flex flex-col items-center gap-6 mt-32 transition-all duration-1000 ease-in-out${
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          {navItems.map(({ path, label, icon }, index) => (
            <Link
              key={path}
              to={path}
              onClick={toggleSidebar}
              className="flex items-center justify-center gap-3 w-48 px-6 py-3 border-2 border-sky-400 rounded-full text-lg font-medium text-gray-700 hover:bg-sky-400 hover:text-white transition-all transform hover:scale-105 cursor-pointer"
              style={{ transitionDelay: `${index * 500}ms` }}
            >
              <span className="text-xl">{icon}</span>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Background Blur */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
        />
      )}
    </>
  );
};

export default Sidebar;
