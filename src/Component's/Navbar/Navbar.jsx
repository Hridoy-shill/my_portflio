import React, { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaRegTimesCircle,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-scroll";
import myImg from "../../assets/mainImg.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-3 md:p-4 md:sticky md:top-0">
      <div className="flex justify-between">
        <div className="md:mx-auto flex flex-col items-center">
          <img
            className="rounded-full md:w-44 w-14 h-14 md:h-44 object-cover object-top border-4 border-teal-500 duration-500"
            src={myImg}
            title="Hridoy Shill"
            alt="Hridoy Shill"
          />
          <p className="text-teal-500 font-bold text-2xl mt-2 text-center">
            Hridoy Shill
          </p>
        </div>

        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          <span className="text-white">
            {isMenuOpen === true ? (
              <></>
            ) : (
              <FaBars className="w-6 h-6 text-teal-500"></FaBars>
            )}
          </span>
        </div>
      </div>
      <ul
        className={`lg:static p-2 bg-black absolute flex flex-row-reverse justify-between px-5 duration-500 ${
          isMenuOpen ? "top-0 right-0 w-full" : "-top-96 right-0 w-full"
        }`}
      >
        <div className="relative left-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white md:hidden"
          >
            <span className="text-white">
              {isMenuOpen === true ? (
                <FaRegTimesCircle className="w-8 h-8"></FaRegTimesCircle>
              ) : (
                <></>
              )}
            </span>
          </button>
        </div>

        <nav className="md:text-center mx-auto space-y-5 mt-6">
          <li>
            <Link
              to="home"
              smooth={true}
              offset={0}
              duration={400}
              className="text-white text-lg hover:bg-teal-500 hover:px-[15px] hover:py-[5px] hover:text-black hover:font-semibold hover:rounded hover:text-bold duration-500 cursor-pointer hover:text-xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="aboutMe"
              smooth={true}
              offset={0}
              duration={400}
              className="text-white text-lg hover:bg-teal-500 hover:px-[15px] hover:py-[5px] hover:text-black hover:font-semibold hover:rounded hover:text-bold duration-500 cursor-pointer hover:text-xl"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="myService"
              smooth={true}
              offset={0}
              duration={400}
              className="text-white text-lg hover:bg-teal-500 hover:px-[15px] hover:py-[5px] hover:text-black hover:font-semibold hover:rounded hover:text-bold duration-500 cursor-pointer hover:text-xl"
            >
              My Service's
            </Link>
          </li>
          <li>
            <Link
              to="mySkills"
              smooth={true}
              offset={0}
              duration={400}
              className="text-white text-lg hover:bg-teal-500 hover:px-[15px] hover:py-[5px] hover:text-black hover:font-semibold hover:rounded hover:text-bold duration-500 cursor-pointer hover:text-xl"
            >
              My Skill's
            </Link>
          </li>
          <li>
            <Link
              to="myProject"
              smooth={true}
              offset={0}
              duration={400}
              className="text-white text-lg hover:bg-teal-500 hover:px-[15px] hover:py-[5px] hover:text-black hover:font-semibold hover:rounded hover:text-bold duration-500 cursor-pointer hover:text-xl"
            >
              My Project's
            </Link>
          </li>
          <li>
            <Link
              to="ContactMe"
              smooth={true}
              offset={0}
              duration={400}
              className="text-white text-lg hover:bg-teal-500 hover:px-[15px] hover:py-[5px] hover:text-black hover:font-semibold hover:rounded hover:text-bold duration-500 cursor-pointer hover:text-xl"
            >
              Contact Me
            </Link>
          </li>
        </nav>
      </ul>
      <div className="flex md:justify-center md:space-x-5 space-x-3 md:mt-10 mt-3">
        <a href="https://www.facebook.com/HridoyShillrohan/">
          <FaFacebook className="w-6 h-6 text-gray-400 hover:text-teal-500  duration-200"></FaFacebook>
        </a>
        <a href="https://github.com/Hridoy-shill">
          <FaGithub className="w-6 h-6 text-gray-400 hover:text-teal-500  duration-200"></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/hridoy-shill-453a0422b/">
          <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-teal-500  duration-200"></FaLinkedin>
        </a>
        <a href="/">
          <FaTwitter className="w-6 h-6 text-gray-400 hover:text-teal-500  duration-200"></FaTwitter>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
