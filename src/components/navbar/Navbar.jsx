import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col z-10 mt-4">
      <div className="flex flex-col">
        <div className="font-['zeyada'] text-5xl text-gray-300 flex flex-col -gap-y-4">
          <span>Hamidreza</span>
          <span className="text-7xl -mt-2">Delshad</span>
        </div>
        <p className="text-gray-500 -mt-4">
          Fullstack Developer
          <br /> & Graphic Designer
        </p>
      </div>
      <div className="mt-8">
        <ul className="text-gray-300 text-sm flex flex-col gap-y-2">
          <li>
            <a href="#" className="hover:text-amber-400 transition-all duration-200">Home</a>
          </li>
          <li>
            <a href="#" onClick={() => setIsOpen(!isOpen)} className="hover:text-amber-400 transition-all duration-200">
              Projects
            </a>
            <div
              className={`flex flex-col text-xs mt-1 pl-1 gap-y-1 transition-all duration-500 ${
                isOpen ? "" : "hidden"
              }`}
            >
              <a href="#" className="hover:text-amber-400 transition-all duration-200">Web</a>
              <a href="#" className="hover:text-amber-400 transition-all duration-200">Graphic</a>
            </div>
          </li>
          <li>
            <a href="#" className="hover:text-amber-400 transition-all duration-200">Info</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
