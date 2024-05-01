import aboutImage from "../Assets/jonasbild.jpg";

const About = () => {
  return (
    <>
      <div className=" relative">
        <div className="absolute top-0 left-0  bg-Background/40 rounded-full"></div>

        <img
          className=" object-cover w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full z-20"
          src={aboutImage}
          alt="about image"
        />
      </div>
      <div className=" flex flex-col gap-8 items-start lg:flex-row lg:justify-between w-full">
        <div className="lg:w-1/3">
          <h1 className=" text-Accent">So... Who Am I?</h1>
          <p className=" text-TextVariant">
            I´m a cheerful guy who loves food, tech, and gaming. I´m passionate
            about this path and enjoy discovering new methods and features to
            improve my work. With 10 years of experience in retail, I´m
            well-versed in teamwork and small team management.
          </p>
        </div>
        <div className="lg:w-1/3">
          <h1 className=" text-Accent">Education</h1>
          <p className=" text-TextVariant">
            Currently, I´m studying UI/UX design at Chas Academy, where we´re
            covering UI/UX alongside the basics of frontend development. I´m
            passionate about this path and enjoy discovering new methods and
            features to improve my work.
          </p>
        </div>
        <div className="lg:w-1/3">
          <h1 className=" text-Accent">Skills</h1>
          <p className=" text-TextVariant">
            During my studies, I´ve learned about user research, market
            research, and usability testing, focusing on understanding the
            project´s objectives how, why and what. I´ve also improved my skills
            in advanced prototyping and building design systems using Figma,
            along with creating visual identities and wireframes/user flows.
            Additionally, I´ve gained knowledge in basic frontend development
            with HTML, CSS, JavaScript, React, and CSS frameworks like Tailwind.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
