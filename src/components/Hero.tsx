import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/sign-up");
  };

  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#38c292] font-bold p-2">Generate your logo!</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Aura Logo Generator
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl font-bold">
            Simple logo generator for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#38c292] "
            strings={["Business.", "Gaming.", "Design."]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Boost your design experience with our logo generator.
        </p>
        <button
          onClick={handleClick}
          className="bg-[#38c292] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#023]"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
