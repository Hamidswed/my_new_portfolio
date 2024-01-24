/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function WebItem({ item }) {
  return (
    <div className="p-4 border border-stone-500 flex flex-col gap-y-3 md:w-[49%] lg:w-[24%]">
      <div>
        <img src={item.image} alt={item.title} />
      </div>
      <div className="md:min-h-44">
        <h2 className="font-bold text-stone-400 mb-2">{item.title}</h2>
        <p className="text-sm text-stone-300">{item.description}</p>
      </div>
      <button className="p-2 bg-stone-500 hover:bg-stone-600 hover:text-stone-300 hover:transition-all duration-500">
        <Link to={item.link} target="_blank">
          View site
        </Link>
      </button>
    </div>
  );
}
