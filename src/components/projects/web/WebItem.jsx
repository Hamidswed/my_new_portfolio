/* eslint-disable react/prop-types */
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
        <button className="py-1 bg-lightRed w-20 rounded-full self-end">
          <Link to={item.link} target="_blank">
            Open
          </Link>
        </button>
      </div>
    </div>
  );
}
