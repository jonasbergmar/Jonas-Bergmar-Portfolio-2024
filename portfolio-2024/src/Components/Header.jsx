import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

const BurgerBtn = ({ handleClick, isClicked }) => {
  return (
    <div className="burgerContainer" onClick={handleClick}>
      <i
        className={`text-Accent fas fa-${isClicked ? "times" : "bars"} fa-2x`}
      ></i>
    </div>
  );
};

BurgerBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isClicked: PropTypes.bool.isRequired,
};

const NavLink = ({ to, text, activeLink, onClick }) => {
  return (
    <Link
      className={`text-Text relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-Text after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${activeLink === to ? " active font-bold text-Primary" : ""}`}
      to={to}
      onClick={() => onClick(to)}
    >
      {text}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  activeLink: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsClicked(false); // Close the link container when a link is clicked
  };

  return (
    <div className="z-20 max-w-[1120px] fixed  top-0 w-full px-8">
      <div className="flex justify-end items-center py-8">
        <div className="buttonsContainer">
          <BurgerBtn handleClick={toggleClick} isClicked={isClicked} />
        </div>
      </div>
      <div
        className={`flex-col items-end linkContainer ${isClicked ? "flex" : "hidden"}`}
      >
        <div className="linkBox bg-Background/85 rounded-xl p-2 flex flex-col gap-2">
          <NavLink
            to="/"
            text="Home"
            activeLink={activeLink}
            onClick={handleLinkClick}
          />
          <NavLink
            to="/Projects"
            text="Projects"
            activeLink={activeLink}
            onClick={handleLinkClick}
          />
          <NavLink
            to="/About"
            text="About me"
            activeLink={activeLink}
            onClick={handleLinkClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
