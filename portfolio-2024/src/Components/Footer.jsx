import logo from "../Assets/jonasbild chat.png";

const Footer = () => {
  return (
    <>
      {" "}
      <div className=" max-w-[1120px] w-full pb-20 pt-40 flex z-10 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-Accent text-3xl">Let´s talk</h2>

          <a href="mailto:jonas@bergmar.com" className=" text-Primary text-xl">
            jonas@bergmar.com
          </a>
          <a
            href="https://www.linkedin.com/in/jonas-bergmar"
            className="text-Primary text-xl"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 w-24 h-24 bg-Background/20 rounded-full"></div>
          <img
            className="w-24 h-24 rounded-full"
            src={logo}
            alt="profilePicture"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
