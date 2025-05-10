import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedLogo from "./components/Navbar";
import ScrollIndicator from "./components/ScrollIndicator";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import { useState, useEffect } from "react";

const getPageIndex = (path) => {
  const pages = ["/", "/about", "/portfolio", "/contact"];
  return pages.indexOf(path);
};

function AnimatedRoutes() {
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState(location.pathname);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const currentIndex = getPageIndex(location.pathname);
    const previousIndex = getPageIndex(previousPath);
    setDirection(currentIndex - previousIndex);
    setPreviousPath(location.pathname);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition direction={direction}>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition direction={direction}>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/portfolio"
          element={
            <PageTransition direction={direction}>
              <Portfolio />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition direction={direction}>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen relative">
        <AnimatedLogo />
        <ScrollIndicator />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
