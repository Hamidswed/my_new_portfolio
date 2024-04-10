/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function WebItem({ item }) {
  return (
    <div
      className={`relative h-60 max-w-48 bg-darkColor rounded-full overflow-hidden`}
    >
      <div className="h-1/2 w-full">
        <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
      </div>
      <div className="absolute top-28 px-4 w-full z-10 py-4 flex flex-col items-center gap-y-4">
        <h2 className="font-bold text-backColor mb-2">{item.title}</h2>
        <button className="py-1 bg-lightRed w-20 rounded-full">
          <Link to={item.link} target="_blank">
            View site
          </Link>
        </button>
      </div>
      {/* <div
        className={`bg-darkColor h-[25vh] absolute top-28 w-full opacity-45`}
      ></div> */}
    </div>
  );
}
