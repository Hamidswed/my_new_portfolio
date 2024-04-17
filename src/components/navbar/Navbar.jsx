/* eslint-disable react/prop-types */
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex flex-col z-10 mt-4 md:flex-row md:justify-center md:items-center md:gap-36 md:mb-16 mb-8">
      <div className="flex flex-col">
        <div className="font-['zeyada'] text-5xl text-darkColor flex flex-col -gap-y-4 md:text-7xl">
          <span>Hamidreza</span>
          <span className="text-7xl -mt-2 md:text-9xl">Delshad</span>
        </div>
        <p className="text-creamColor -mt-4 md:-mt-6 md:text-lg">
          Fullstack Developer
          <br className="md:hidden" /> & Graphic Designer
        </p>
      </div>
      <div className="mt-8">
        <ul className="text-darkColor flex flex-col gap-y-2 sm:text-xl md:flex-row md:gap-x-4">
          <li className="flex items-center gap-x-1">
            <span
              className={`${
                path === "/"
                  ? "visible transition-all duration-300 opacity-100"
                  : "invisible transition-all duration-300 opacity-0"
              }`}
            >
              <ArrowRightCircleIcon className="w-3 h-3 text-lightRed transition-all duration-300" />
            </span>
            <Link
              to="/"
              className="hover:text-lightRed hover:transition-all hover:duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center gap-x-1">
              <span
                className={`${
                  path === "/projects"
                    ? "visible transition-all duration-300 opacity-100"
                    : "invisible transition-all duration-300 opacity-0"
                }`}
              >
                <ArrowRightCircleIcon className="w-3 h-3 text-lightRed" />
              </span>
              <Link
                to="/projects"
                className="hover:text-lightRed hover:transition-all hover:duration-300"
              >
                Projects
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
