/* eslint-disable react/prop-types */
import { memo } from "react";
import { IoLogoGithub } from "react-icons/io";
import { HiExternalLink, HiEye } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function WebItemComponent({ item }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";

  return (
    <div className="group relative glass rounded-2xl p-6 transition-all duration-500 ease-out hover-lift hover:scale-105 border border-dark-border/50 hover:border-dark-primary/50 overflow-hidden h-full flex flex-col">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-primary/5 via-dark-secondary/5 to-dark-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

      {/* Image container */}
      <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={`${t("projects.screenshotOf", "Screenshot of")} ${typeof item.title === "object" ? item.title[lang] : item.title} ${t("projects.project", "project")}`}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Hover preview button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300" aria-hidden="true">
          <div className="bg-dark-primary/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <HiEye className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 flex-1">
        <div className="flex-1 flex flex-col">
          <h2 className="font-bold dark:text-dark-text light:text-light-text mb-3 text-lg dark:group-hover:text-dark-primary light:group-hover:text-light-primary transition-colors duration-300 line-clamp-2">
            {typeof item.title === "object" ? item.title[lang] : item.title}
          </h2>
          <p className="text-sm dark:text-dark-muted light:text-light-muted leading-relaxed dark:group-hover:text-dark-text light:group-hover:text-light-text transition-colors duration-300 flex-1 line-clamp-3">
            {typeof item.description === "object"
              ? item.description[lang]
              : item.description}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-dark-border/30 mt-auto">
          {/* GitHub button */}
          <Link
            to={item.github}
            target="_blank"
            className="flex items-center justify-center w-12 h-12 rounded-xl bg-dark-card hover:bg-gray-700 text-dark-muted hover:text-white transition-all duration-300 hover:scale-110 group/btn"
            title={t("projects.viewSource")} // ✅
          >
            <IoLogoGithub size={20} className="group-hover/btn:animate-pulse" />
          </Link>

          {/* Live demo button */}
          <Link
            to={item.link || "#"}
            target={item.link ? "_blank" : "_self"}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
              item.link
                ? "neon-button text-dark-primary border-dark-primary hover:text-white hover:shadow-lg hover:shadow-dark-primary/25"
                : "bg-dark-card/50 text-dark-muted cursor-not-allowed border border-dark-border/30"
            }`}
            onClick={!item.link ? (e) => e.preventDefault() : undefined}
          >
            {item.link ? (
              <>
                <HiExternalLink size={16} aria-hidden="true" />
                <span>{t("projects.liveDemo")}</span>
              </>
            ) : (
              <span className="text-xs">{t("projects.notDeployed")}</span>
            )}
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-dark-accent rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-dark-secondary rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
    </div>
  );
}

export const WebItem = memo(WebItemComponent);
