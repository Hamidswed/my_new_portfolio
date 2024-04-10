import { Link } from "react-router-dom";
import Image from "../../../assets/profile_s.jpg";

export default function Test() {
  return (
    <div
      className={`relative max-h-58 max-w-48 bg-cyan-400 rounded-full overflow-hidden ${
        isOpen ? "h-96 overflow-clip" : ""
      }`}
    >
      <div>
        <img src={Image} alt="" />
      </div>
      <div className="absolute top-36 px-4 w-full z-10 py-4 flex flex-col items-center gap-y-4">
        <h2 className="font-bold text-backColor mb-2">Title</h2>
        <button className="py-1 bg-lightRed w-20 rounded-full">
          <Link to="#" target="_blank">
            View site
          </Link>
        </button>
      </div>
      <div
        className={`bg-darkColor h-[25vh] absolute top-36 w-full opacity-45`}
      ></div>
    </div>
  );
}
