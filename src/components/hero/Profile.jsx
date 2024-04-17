import Img from "../../assets/hamid.png";


export default function Profile() {
 
  return (
    <div className="h-48 relative w-36 overflow-y-hidden rounded-full cursor-pointer">
      <div className="rounded-full w-36 h-36 bg-lightRed absolute bottom-0">
        <img
          src={Img}
          alt="img"
          className="-translate-y-5 hover:-translate-y-9 hover:drop-shadow-2xl hover:saturate-200 hover:brightness-100 hover:hue-rotate-180 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
