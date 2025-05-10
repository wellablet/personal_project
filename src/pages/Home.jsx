import ProgrammingSvg from "../assets/programming.svg";
import AboutButton from "../components/AboutButton";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-8 bg-white"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23cfd8dc' fill-opacity='0.3'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='18' cy='18' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      >
        {/* Left */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 md:pl-80">
          <h1 className="text-4xl md:text-6xl font-extrabold text-sky-600 leading-tight">
            Front-End Software
            <br /> Developer
          </h1>
          <p className="text-gray-600 max-w-md text-lg">
            Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.
          </p>
          <AboutButton />
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center items-center p-8">
          <img
            src={ProgrammingSvg}
            alt="Programming Illustration"
            className="w-full max-w-md animate-float"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
