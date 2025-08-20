/* eslint-disable react/prop-types */
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex flex-col z-20 mt-4 lg:flex-row lg:justify-between lg:items-center mb-6 lg:mb-8 animate-slide-down">
      <div className="flex flex-col animate-slide-left mb-6 lg:mb-0 relative">
        <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl flex flex-col group cursor-default space-y-2 sm:space-y-0">
          <span className="elegant-name-text">
            Hamidreza
          </span>
          <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl -mt-2 lg:-mt-3 elegant-name-text">
            Delshad
          </span>
        </div>
        <div className="mt-2 lg:mt-1">
          <p className="font-['Poppins'] dark:text-dark-muted light:text-light-muted text-sm lg:text-base xl:text-lg font-light tracking-wide">
            <span className="inline-block dark:hover:text-dark-text light:hover:text-light-text transition-all duration-300 cursor-default relative">
              Fullstack Developer
              <span className="absolute bottom-0 left-0 w-0 h-0.5 dark:bg-dark-primary light:bg-light-primary transition-all duration-300 hover:w-full"></span>
            </span>
            <span className="hidden sm:inline mx-3 dark:text-dark-primary/50 light:text-light-primary/50 font-thin">|</span>
            <br className="sm:hidden" /> 
            <span className="inline-block dark:hover:text-dark-text light:hover:text-light-text transition-all duration-300 cursor-default relative">
              Graphic Designer
              <span className="absolute bottom-0 left-0 w-0 h-0.5 dark:bg-dark-secondary light:bg-light-secondary transition-all duration-300 hover:w-full"></span>
            </span>
          </p>
        </div>
      </div>
      <div className="animate-slide-right">
        <ul className="dark:text-dark-text light:text-light-text sm:text-xl flex gap-x-6 sm:gap-x-10 items-center">
          <li className="flex items-center gap-x-2 group">
            <span
              className={`${
                path === "/"
                  ? "visible transition-all duration-500 opacity-100 scale-100"
                  : "invisible transition-all duration-500 opacity-0 scale-0"
              }`}
            >
              <ArrowRightCircleIcon className="w-4 h-4 dark:text-dark-primary light:text-light-primary transition-all duration-300 animate-pulse" />
            </span>
            <Link
              to="/"
              className="relative dark:hover:text-dark-primary light:hover:text-light-primary transition-all duration-300 hover:scale-110 group-hover:translate-x-1"
            >
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 bg-gradient-to-r from-dark-primary to-dark-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg -m-2"></span>
            </Link>
          </li>
          <li className="group">
            <div className="flex items-center gap-x-2">
              <span
                className={`${
                  path === "/projects"
                    ? "visible transition-all duration-500 opacity-100 scale-100"
                    : "invisible transition-all duration-500 opacity-0 scale-0"
                }`}
              >
                <ArrowRightCircleIcon className="w-4 h-4 dark:text-dark-primary light:text-light-primary animate-pulse" />
              </span>
              <Link
                to="/projects"
                className="relative dark:hover:text-dark-primary light:hover:text-light-primary transition-all duration-300 hover:scale-110 group-hover:translate-x-1"
              >
                <span className="relative z-10">Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-dark-primary to-dark-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg -m-2"></span>
              </Link>
            </div>
          </li>
          <li className="group">
            <div className="flex items-center gap-x-2">
              <span
                className={`${
                  path === "/contact"
                    ? "visible transition-all duration-500 opacity-100 scale-100"
                    : "invisible transition-all duration-500 opacity-0 scale-0"
                }`}
              >
                <ArrowRightCircleIcon className="w-4 h-4 dark:text-dark-primary light:text-light-primary animate-pulse" />
              </span>
              <Link
                to="/contact"
                className="relative dark:hover:text-dark-primary light:hover:text-light-primary transition-all duration-300 hover:scale-110 group-hover:translate-x-1"
              >
                <span className="relative z-10">Contact</span>
                <span className="absolute inset-0 bg-gradient-to-r from-dark-primary to-dark-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg -m-2"></span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
