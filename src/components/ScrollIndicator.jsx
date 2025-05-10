import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollIndicator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const pages = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/portfolio", name: "Portfolio" },
    { path: "/contact", name: "Contact" },
  ];

  const currentPageIndex = pages.findIndex(page => page.path === location.pathname);

  const handleNextPage = () => {
    if (currentPageIndex < pages.length - 1) {
      navigate(pages[currentPageIndex + 1].path);
    } else {
      navigate(pages[0].path);
    }
  };

  const handlePageClick = (path) => {
    navigate(path);
  };

  return (
    <motion.div 
      className="fixed right-6 top-[40%] transform -translate-y-1/2 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative flex flex-col items-center">
        <div className="w-px h-64 bg-gray-300/50 relative flex flex-col items-center justify-between">
          {/* Page Numbers */}
          {pages.map((page, index) => (
            <motion.div
              key={page.path}
              onClick={() => handlePageClick(page.path)}
              className={`absolute left-1/2 transform -translate-x-1/2 text-[10px] cursor-pointer ${
                currentPageIndex === index
                  ? "text-sky-500 font-semibold"
                  : "text-gray-400"
              }`}
              style={{ top: `${index * 20}%` }}
              whileHover={{ scale: 1.2, color: "#0ea5e9" }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative">
                {`0${index}`}
                {currentPageIndex === index && (
                  <motion.div
                    className="absolute -left-2 top-1/2 w-1 h-1 bg-sky-500 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </div>
            </motion.div>
          ))}

          {/* Next Page or Back to Home */}
          <motion.div
            onClick={handleNextPage}
            className="absolute left-1/2 transform -translate-x-1/2 top-[180%] flex flex-col items-center space-y-4 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentPageIndex}
                  className="text-gray-400 text-[10px] tracking-wider hover:text-sky-500 transition-colors duration-300"
                  style={{ writingMode: "vertical-rl" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentPageIndex === pages.length - 1
                    ? "Back to Home"
                    : "Next Page"}
                </motion.span>
              </AnimatePresence>
              <motion.span 
                className="text-gray-400 text-2xl mt-2 hover:text-sky-500 transition-colors duration-300"
                animate={{ 
                  y: isHovered ? [0, -5, 0] : 0,
                  transition: { 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                {currentPageIndex === pages.length - 1 ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
