/* eslint-disable react/prop-types */
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

export function WebItem({ item }) {
  return (
    <div className="relative p-4 border border-creamColor transition-all duration-300 ease-in-out hover:rounded-2xl hover:shadow-lg hover:scale-105 hover:border-lightRed hover:bg-darkColor">
      <div className="max-h-[50%] w-full">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="top-28 px-2 w-full min-h-[240px] py-4 flex flex-col justify-between gap-y-4">
        <div>
          <h2 className="font-bold text-creamColor mb-3">{item.title}</h2>
          <p className="text-sm text-creamColor h-full">{item.description}</p>
        </div>
        <div className="flex justify-between items-center">
          <button className="flex-1">
            <Link to={item.github} target="_blank">
              <IoLogoGithub
                size={30}
                // color="#9e8e7f"
                className="hover:scale-125 text-creamColor hover:text-backColor transition-all duration-300 ease-in-out"
              />
            </Link>
          </button>

          <button
            disabled={!item.link}
            className={`py-1 w-20 rounded-full flex-1 transition-all duration-500 ease-in-out ${
              item.link ? "bg-lightRed hover:bg-backColor" : "bg-gray-400"
            }`}
          >
            {item.link ? (
              <Link to={item.link} target="_blank">
                Open
              </Link>
            ) : (
              <span className="text-sm font-bold text-gray-300">
                Not deplyed
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
