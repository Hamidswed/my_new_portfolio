// src/components/common/DownloadButton.jsx
import { Link } from "react-router-dom";
import { FaDownload, FaRocket } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import SWCV from "/download/CV_HamidrezaDelshad_SW.pdf";
import IRCV from "/download/CV_HamidrezaDelshad_IR.pdf";

export default function DownloadButton({
  variant = "neon",
  size = "default",
  className = "",
  showIcons = true,
  fullWidth = false,
}) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";

  // Base styles for different variants
  const variants = {
    neon: "neon-button hover-lift group flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-base font-semibold transition-all duration-300",
    simple:
      "inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300",
    glass:
      "glass hover-lift group flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-base font-semibold transition-all duration-300",
  };

  // Size variations
  const sizes = {
    small: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const buttonClasses = `${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  return (
    <Link
      to={isRTL ? IRCV : SWCV}
      target="_blank"
      download={`CV_HamidrezaDelshad_${isRTL ? "IR" : "SW"}`}
      className={fullWidth ? "w-full text-center" : "text-center"}
    >
      <button className={buttonClasses}>
        {showIcons && variant === "neon" && (
          <FaDownload className="flex-shrink-0 animate-bounce transition-all duration-300 group-hover:animate-pulse" />
        )}
        {showIcons && variant === "simple" && "📥 "}
        <span className="flex-shrink-0">{t("common.downloadCV")}</span>
        {showIcons && variant === "neon" && (
          <FaRocket className="flex-shrink-0 animate-pulse opacity-0 transition-all duration-300 group-hover:opacity-100" />
        )}
      </button>
    </Link>
  );
}
