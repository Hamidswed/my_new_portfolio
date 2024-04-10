/* eslint-disable react/prop-types */
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState("home");

  return (
    <div className="flex flex-col z-10 mt-4">
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
        <ul className="text-darkColor flex flex-col gap-y-2">
          <li className="flex items-center gap-x-1">
            <span
              className={`${
                isClicked === "home"
                  ? "visible transition-all duration-500 opacity-100"
                  : "invisible transition-all duration-500 opacity-0"
              }`}
            >
              <ArrowRightCircleIcon className="w-3 h-3 text-lightRed transition-all duration-500" />
            </span>
            <Link
              to="/"
              className="hover:text-lightRed hover:transition-all hover:duration-500"
              onClick={() => {
                setIsOpen(false);
                setIsClicked("home");
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center gap-x-1">
              <span
                className={`${
                  isClicked === "projects"
                    ? "visible transition-all duration-500 opacity-100"
                    : "invisible transition-all duration-500 opacity-0"
                }`}
              >
                <ArrowRightCircleIcon className="w-3 h-3 text-lightRed" />
              </span>
              <a
                href="#"
                onClick={() => {
                  setIsOpen(!isOpen);
                  setIsClicked("projects");
                }}
                className="hover:text-lightRed hover:transition-all hover:duration-500"
              >
                Projects
              </a>
            </div>
            <div
              className={`flex flex-col text-sm mt-1 pl-1 gap-y-1 transition-all duration-500 ${
                isOpen ? "" : "hidden"
              }`}
            >
              <Link
                to="/projects/web"
                className="hover:text-lightRed hover:transition-all hover:duration-500 transition-all duration-500 translate-x-4"
                onClick={() => setIsOpen(false)}
              >
                Web
              </Link>
              <a
                href="#"
                className="hover:text-lightRed hover:transition-all hover:duration-500 translate-x-4"
                onClick={() => setIsOpen(false)}
              >
                Graphic
              </a>
            </div>
          </li>
          <li className="flex items-center gap-x-1">
            <span
              className={`${
                isClicked === "info"
                  ? "visible transition-all duration-500 opacity-100"
                  : "invisible transition-all duration-500 opacity-0"
              }`}
            >
              <ArrowRightCircleIcon className="w-3 h-3 text-lightRed" />
            </span>
            <a
              href="#"
              className="hover:text-lightRed hover:transition-all hover:duration-500"
              onClick={() => {
                setIsOpen(false);
                setIsClicked("info");
              }}
            >
              Info
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
