import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const AboutButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/about"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center text-sky-500 text-lg font-semibold cursor-pointer transition-all duration-1000"
    >
      About me
      <span className="ml-2 transition-transform duration-1000">
        {hovered ? (
          <FaChevronDown className="text-sky-500" />
        ) : (
          <FaChevronRight className="text-sky-500" />
        )}
      </span>
    </Link>
  );
};

export default AboutButton;
