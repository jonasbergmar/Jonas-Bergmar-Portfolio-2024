import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types"; // Import PropTypes

gsap.registerPlugin(useGSAP);

const Hero = ({ display, display2 }) => {
  useGSAP(() => {
    gsap.from(".box", {
      x: -1000,
      stagger: 0.9, // 0.1 seconds between   when each ".box" element starts animating
    });
  });
  gsap.to(".box", {
    y: 0,
  });

  return (
    <>
      <div className="flex flex-row justify-start pb-1 md:w-[600px] lg:w-[800px]">
        <div>
          <h1 className="box text-Accent text-5xl md:text-6xl lg:text-8xl">
            Hello!
          </h1>
          <h2 className="box text-Primary text-4xl md:text-5xl lg:text-7xl">
            My Name Is Jonas. <br />A UI/UX Designer <br />
            From Stockholm, Sweden.
          </h2>
        </div>
      </div>
    </>
  );
};

// Define PropTypes for Hero component
Hero.propTypes = {
  display: PropTypes.string.isRequired, // Display prop should be a string and is required
  display2: PropTypes.string.isRequired, // Display2 prop should be a string and is required
};

export default Hero;
