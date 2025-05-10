import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaWordpress, FaPhp, FaSass, FaBootstrap, FaGitAlt, FaFigma, FaCode, FaMobileAlt, FaPalette, FaServer, FaSearch, FaCogs, FaPaintBrush, FaBug, FaQuidditch, FaGithub, FaPlayCircle } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";
import ProfileSvg from '../assets/profile.svg';
import MessagesSvg from '../assets/messages.svg';
import DashboardSvg from '../assets/dashboard.svg';

const projects = [
  {
    title: 'Portfolio Webpage',
    description: 'A personal portfolio website built with HTML, CSS, and JavaScript to showcase projects and skills.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    github: '#',
    image: ProfileSvg,
  },
  {
    title: 'Real-Time Chat App',
    description: 'A real-time chat application using React for the frontend, Node.js for the backend, and MongoDB for data storage.',
    tech: ['React', 'Node.js', 'MongoDB'],
    live: '#',
    github: '#',
    image: MessagesSvg,
  },
  {
    title: 'Dashboard Page',
    description: 'A dynamic dashboard built with JavaScript, Node.js, and MySQL for data management and analytics.',
    tech: ['JavaScript', 'Node.js', 'MySQL'],
    live: '#',
    github: '#',
    image: DashboardSvg,
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } },
};

const Portfolio = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <section
        className="min-h-screen flex flex-col justify-center items-center px-6 py-16 relative bg-white"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cfd8dc' fill-opacity='0.3'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='18' cy='18' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      >
        <h1 className="text-5xl font-extrabold text-sky-600 mb-12">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="bg-gray-50 rounded-2xl shadow flex flex-col items-center justify-between min-h-[340px] p-8 transition-transform duration-300 hover:scale-105"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              {/* Project Image/SVG */}
              <div className="flex items-center justify-center mb-6">
                <img src={project.image} alt={project.title} className="w-28 h-28 object-contain animate-float transition-transform duration-300 group-hover:scale-110 group-hover:animate-wiggle" />
              </div>
              {/* Project Name */}
              <h3 className="text-xl font-bold text-sky-500 text-center mb-4">{project.title}</h3>
              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.tech.map((tag) => (
                  <span key={tag} className="bg-sky-100 text-sky-600 px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
                ))}
              </div>
              {/* Description */}
              <p className="text-gray-500 text-center text-sm mb-4">{project.description}</p>
              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-auto">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-sky-200 text-sky-500 hover:bg-sky-100 hover:text-sky-700 transition text-xl">
                  <FaPlayCircle />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-sky-200 text-sky-500 hover:bg-sky-100 hover:text-sky-700 transition text-xl">
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Services Section */}
        <section className="w-full flex flex-col items-center py-20">
          <h2 className="text-5xl font-extrabold text-sky-600 mb-4">Services</h2>
          <p className="text-lg text-gray-500 mb-12 text-center max-w-2xl">These are some of the services I offer. Reach out to me if I can help you with any!</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-6xl">
            {[
              { icon: FaCode, label: "Web Development" },
              { icon: FaQuidditch, label: "UI Implementation" },
              { icon: FaServer, label: "API\nintegration" },
              { icon: SiSelenium, label: "Test\nAutomation" },
              { icon: FaCogs, label: "Tech Support & Maintenance" },
            ].map((service, idx) => (
              <motion.div
                key={service.label}
                className="bg-gray-50 rounded-2xl shadow flex flex-col items-center p-8 transition-transform cursor-pointer hover:scale-105 min-w-[160px]"
                whileHover={{ scale: 1.08 }}
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-4"
                >
                  {service.icon && <service.icon size={48} className="text-sky-500" />}
                </motion.div>
                <span className="text-lg font-semibold mt-2 text-center text-sky-500" style={{whiteSpace: 'pre-line'}}>{service.label}</span>
              </motion.div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Portfolio;
