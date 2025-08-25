import { memo } from "react";
import { useTranslation } from "react-i18next";
import { IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { LiaLinkedin, LiaWhatsapp, LiaTelegram } from "react-icons/lia";
import { Link } from "react-router-dom";

function SocialMediaComponent() {
  const { t } = useTranslation();
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Hamidswed",
      icon: IoLogoGithub,
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-900/20",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/hrddesigner",
      icon: IoLogoInstagram,
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-500/20",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hamidreza-delshad/",
      icon: LiaLinkedin,
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-500/20",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+46735883889",
      icon: LiaWhatsapp,
      color: "hover:text-green-500",
      bgColor: "hover:bg-green-500/20",
    },
    {
      name: "Telegram",
      url: "https://t.me/HamidSwd",
      icon: LiaTelegram,
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-400/20",
    },
    {
      name: "Email",
      url: "mailto:delshad.swdn@gmail.com",
      icon: IoMailOutline,
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-500/20",
    },
  ];

  return (
    <div className="flex items-center gap-2">
      <span className="text-dark-muted text-sm mr-2 animate-pulse">
        {t("hero.connect")}
      </span>
      <div className="flex items-center gap-1">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <Link
              key={social.name}
              to={social.url}
              target="_blank"
              className={`
                relative group p-2 rounded-xl transition-all duration-300 ease-out
                hover:-translate-y-2 hover:scale-110 text-dark-muted ${social.color} ${social.bgColor}
                animate-slide-up
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
              title={social.name}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-dark-primary/0 to-dark-secondary/0 group-hover:from-dark-primary/20 group-hover:to-dark-secondary/20 transition-all duration-300"></div>

              {/* Icon */}
              <IconComponent
                size={24}
                className="relative z-10 transition-all duration-300 group-hover:drop-shadow-lg"
              />

              {/* Hover tooltip */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark-card text-dark-text text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                {social.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-dark-card"></div>
              </div>

              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-ping bg-current transition-opacity duration-300"></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default memo(SocialMediaComponent);
