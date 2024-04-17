import { IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { LiaLinkedin, LiaWhatsapp, LiaTelegram } from "react-icons/lia";
import { Link } from "react-router-dom";

export default function SocialMedia() {
  const instagram = "https://instagram.com/hrddesigner";
  const linkedin = "https://www.linkedin.com/in/hamidreza-delshad/";
  const whatsapp = "https://wa.me/+46735883889";
  const telegram = "https://t.me/HamidSwd";
  const github = "https://github.com/Hamidswed";

  return (
    <div className="w-full h-10 flex items-center gap-3">
      <Link
        to={github}
        target="_blank"
        className="hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
        <IoLogoGithub size={30} color="#9e8e7f" />
      </Link>
      <Link
        to={instagram}
        target="_blank"
        className="hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
        <IoLogoInstagram size={30} color="#9e8e7f" />
      </Link>
      <Link
        to={linkedin}
        target="_blank"
        className="hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
        <LiaLinkedin size={30} color="#9e8e7f" />
      </Link>
      <Link
        to={whatsapp}
        target="_blank"
        className="hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
        <LiaWhatsapp
          size={30}
          color="#9e8e7f"
          className="hover:-translate-y-1 transition-all duration-300 ease-in-out"
        />
      </Link>
      <Link
        to={telegram}
        target="_blank"
        className="hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
        <LiaTelegram size={30} color="#9e8e7f" />
      </Link>
      <Link
        to="mailto:delshad.swdn@gmail.com"
        target="_blank"
        className="hover:-translate-y-1 transition-all duration-300 ease-in-out"
      >
        <IoMailOutline size={30} color="#9e8e7f" />
      </Link>
    </div>
  );
}
