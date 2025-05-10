import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

// Add custom keyframes for floating animation
const floatStyle = `
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
}
`;

const AnimatedLogo = () => {
  const location = useLocation();
  return (
    <>
      {/* Logo - top left */}
      <div className="hidden sm:flex fixed top-0 left-0 z-50 items-center p-6 sm:p-4">
        <Link to="/" className="flex items-center group">
          <div className="bg-gray-100 w-14 h-14 sm:w-10 sm:h-10 flex items-center justify-center rounded mr-3 sm:mr-2">
            <svg
              width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
              className="sm:w-6 sm:h-6"
              style={{ animation: 'wiggle 2.5s ease-in-out infinite' }}
            >
              <polyline points="10 8 18 16 10 24" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="20" y="22" width="8" height="2" rx="1" fill="#111" />
            </svg>
          </div>
          <span className="text-5xl sm:text-3xl font-extrabold text-gray-800 tracking-widest group-hover:text-sky-600 transition-colors duration-200" style={{ letterSpacing: '0.1em' }}>
            DVLPR
          </span>
        </Link>
      </div>
      {/* Navbar - top right */}
      <nav className="hidden sm:flex fixed top-0 right-0 z-50 items-center p-6 sm:p-4 space-x-8">
        {navLinks.map(link => (
          <Link
            key={link.name}
            to={link.path}
            className={`text-lg font-semibold px-3 py-1 rounded transition-colors duration-200
              ${location.pathname === link.path
                ? 'text-sky-600'
                : 'text-gray-700 hover:text-sky-600 hover:bg-sky-100'}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <style>{`
        @keyframes wiggle {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(-10deg); }
          30% { transform: rotate(8deg); }
          45% { transform: rotate(-6deg); }
          60% { transform: rotate(4deg); }
          75% { transform: rotate(-2deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </>
  );
};

export default AnimatedLogo;
