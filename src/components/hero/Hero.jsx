import { Link } from "react-router-dom";
import Profile from "./Profile";
import SocialMedia from "./socialMedia/SocialMedia";
import { FaDownload } from "react-icons/fa6";
import Pdf from "/download/CV_HamidrezaDelshad.pdf";

export function Hero() {
  return (
    <div className=" flex flex-col items-center mt-8">
      <div className=" text-darkColor w-full flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-end">
        <Profile />
        <div className="sm:flex-1 lg:max-w-[50%]">
          <p className="mb-4">
            My name is Hamidreza Delshad, a passionate full stack developer and
            a freelance graphic designer from Sweden. My passion for software is
            coming up with concepts and turning them into beautiful interfaces.
            When I develop something, I pay close attention to the user
            experience, architecture, and code quality.
          </p>
          <div className="w-full flex flex-col gap-2 min-[400px]:flex-row min-[400px]:justify-between min-[400px]:items-center">
            <div>
              <SocialMedia />
            </div>
            <Link to={Pdf} target="_blank" download="CV_HamidrezaDelshad">
              <button className="flex items-center gap-2 flex-1 transition-all duration-300 ease-in-out text-creamColor hover:text-darkColor">
                <FaDownload className="animate-pulse" />
                <span className="font-semibold">Download CV</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
