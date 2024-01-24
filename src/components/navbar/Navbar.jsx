/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export function Navbar({ isOpen, openHandler }) {
  return (
    <div className="flex flex-col z-10 mt-4">
      <div className="flex flex-col">
        <div className="font-['zeyada'] text-5xl text-stone-300 flex flex-col -gap-y-4 md:text-7xl">
          <span>Hamidreza</span>
          <span className="text-7xl -mt-2 md:text-9xl">Delshad</span>
        </div>
        <p className="text-stone-400 -mt-4 md:-mt-6 md:text-lg">
          Fullstack Developer
          <br className="md:hidden" /> & Graphic Designer
        </p>
      </div>
      <div className="mt-8">
        <ul className="text-stone-300 text-sm flex flex-col gap-y-2">
          <li>
            <Link
              to="/"
              className="hover:text-amber-400 transition-all duration-200"
              onClick={() => openHandler(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#"
              onClick={() => openHandler(!isOpen)}
              className="hover:text-amber-400 transition-all duration-200"
            >
              Projects
            </a>
            <div
              className={`flex flex-col text-xs mt-1 pl-1 gap-y-1 transition-all duration-500 ${
                isOpen ? "" : "hidden"
              }`}
            >
              <Link
                to="/projects/web"
                className="hover:text-amber-400 transition-all duration-200"
                onClick={() => openHandler(false)}
              >
                Web
              </Link>
              <a
                href="#"
                className="hover:text-amber-400 transition-all duration-200"
                onClick={() => openHandler(false)}
              >
                Graphic
              </a>
            </div>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-amber-400 transition-all duration-200"
              onClick={() => openHandler(false)}
            >
              Info
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
