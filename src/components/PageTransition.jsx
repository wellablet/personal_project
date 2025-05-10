import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const getPageIndex = (path) => {
  const pages = ["/", "/about", "/portfolio", "/contact"];
  return pages.indexOf(path);
};

const PageTransition = ({ children }) => {
  const location = useLocation();
  const currentPageIndex = getPageIndex(location.pathname);

  const pageVariants = {
    initial: (direction) => ({
      opacity: 0,
      y: direction > 0 ? 100 : -100,
    }),
    in: {
      opacity: 1,
      y: 0,
    },
    out: (direction) => ({
      opacity: 0,
      y: direction > 0 ? -100 : 100,
    }),
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.8,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full h-full"
      custom={currentPageIndex}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 