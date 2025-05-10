import { FaGraduationCap, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaWordpress, FaPhp, FaSass, FaBootstrap, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiSass, SiBootstrap, SiFigma } from "react-icons/si";
import { motion } from 'framer-motion';

// Education Card Component
const EducationCard = ({ year, title, description }) => {
  return (
    <div className="flex items-start gap-4 relative">
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 p-3 rounded-full">
          <FaGraduationCap className="text-sky-500 text-2xl" />
        </div>
        <div className="w-px bg-gray-300 flex-1 mt-2"></div>
      </div>
      <div>
        <div className="bg-gray-200 px-4 py-1 rounded-full inline-block text-gray-700 font-semibold mb-2">
          {year}
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

// Skills Data
const skills = [
  { icon: <FaHtml5 size={60} />, name: "HTML" },
  { icon: <FaCss3Alt size={60} />, name: "CSS" },
  { icon: <FaJs size={60} />, name: "JavaScript" },
  { icon: <FaReact size={60} />, name: "React" },
  { icon: <SiSass size={60} />, name: "Sass" },
  { icon: <SiBootstrap size={60} />, name: "Bootstrap" },
  { icon: <FaNodeJs size={60} />, name: "Node.js" },
  { icon: <SiFigma size={60} />, name: "Figma" },
  { icon: <FaJava size={60} />, name: "Java" },
];

const About = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center px-6 py-16 bg-white"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cfd8dc' fill-opacity='0.3'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='18' cy='18' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Introduction Section */}
      <section className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mb-2 gap-8">
        {/* Left: Name and Title */}
        <div className="flex-1 flex flex-col justify-center items-start min-w-[320px] p-2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-sky-600 mb-6 leading-tight">Hi, I'm Ablet<br />Web Developer</h1>
          <h2 className="text-2xl md:text-2xl text-gray-500 font-semibold mb-2">Front End Developer / JavaScript Fan </h2>
        </div>
        {/* Right: Summary */}
        <div className="flex-1 flex flex-col justify-center min-w-[320px] p-2">
          <p className="text-lg md:text-xl text-gray-700 mb-6">Passionate and motivated frontend developer with a sharp eye for clean UI and user experience.</p>
          <p className="text-lg md:text-xl text-gray-700">Naturally curious, solution-oriented, and highly focused when it comes to delivering meaningful results. I enjoy turning ideas into responsive and dynamic web applications.</p>
        </div>
      </section>

      {/* Skills & Experience Section */}
      <section className="w-full flex flex-col items-center py-20 mt-0">
        <p className="text-gray-400 text-lg mb-2 text-center tracking-wide">A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</p>
        <h2 className="text-5xl font-extrabold text-center mb-6 text-gray-900">Skills & Experience</h2>
        <p className="text-xl text-center max-w-3xl mb-4 text-gray-700">The main area of expertise is front end development (client side of the web).</p>
        <p className="text-lg text-center max-w-4xl mb-4 text-gray-700">HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mt-8">
          {[{
            icon: <FaJs size={60} className="mb-2 text-yellow-400" />, label: "JavaScript"
          }, {
            icon: <FaReact size={60} className="mb-2 text-sky-500" />, label: "React"
          }, {
            icon: <FaNodeJs size={60} className="mb-2 text-green-600" />, label: "Node"
          }, {
            icon: <FaWordpress size={60} className="mb-2 text-blue-800" />, label: "WordPress"
          }, {
            icon: <FaSass size={60} className="mb-2 text-pink-400" />, label: "SASS"
          }, {
            icon: <FaCss3Alt size={60} className="mb-2 text-blue-500" />, label: "CSS3"
          }, {
            icon: <FaBootstrap size={60} className="mb-2 text-purple-600" />, label: "Bootstrap"
          }, {
            icon: <FaHtml5 size={60} className="mb-2 text-orange-500" />, label: "HTML5"
          }, {
            icon: <FaGitAlt size={60} className="mb-2 text-orange-600" />, label: "Git"
          }, {
            icon: <span className="mb-2 text-gray-700 text-6xl font-bold">VS</span>, label: "Visual Studio"
          }, {
            icon: <FaFigma size={60} className="mb-2 text-violet-500" />, label: "Figma"
          }, {
            icon: <FaJava size={60} className="mb-2 text-red-600" />, label: "Java"
          }].map((item, idx) => (
            <div className="flex flex-col items-center" key={item.label}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
              >
                {item.icon}
              </motion.div>
              <span className="text-gray-800">{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
