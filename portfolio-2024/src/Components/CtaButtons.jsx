import { Link } from "react-router-dom"; // Import Link from React Router

const CtaButton = () => {
  return (
    <>
      <div className=" overflow-visible flex gap-4 items-center">
        <Link
          to="/projects"
          className=" bg-Accent text-Background drop-shadow-sm button inline-block py-2 px-4 rounded-xl border-[0.5px] border-Accent transition-all duration-300 hover:bg-Accent/10 hover:text-Text  hover:scale-110"
        >
          My work
        </Link>

        <Link
          to="/About"
          className=" bg-Background text-Accent drop-shadow-sm button inline-block py-2 px-4 rounded-xl border-[0.5px] border-Accent transition-all duration-300 hover:bg-Background/10 hover:text-Primary  hover:scale-110"
        >
          About me
        </Link>
      </div>
    </>
  );
};

export default CtaButton;
