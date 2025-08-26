/* eslint-disable react/prop-types */
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/16/solid";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "fa";
  const ArrowIcon = isRTL ? ArrowLeftCircleIcon : ArrowRightCircleIcon;

  return (
    <div className="z-20 mb-6 mt-4 flex animate-slide-down flex-col lg:mb-8 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative mb-6 flex animate-slide-left flex-col lg:mb-0">
        <div className="group flex cursor-default flex-col space-y-2 text-4xl sm:space-y-0 sm:text-5xl lg:text-6xl xl:text-7xl">
          <span className="elegant-name-text">Hamidreza</span>
          <span className="elegant-name-text -mt-2 text-5xl sm:text-7xl lg:-mt-3 lg:text-[5rem] xl:text-[5.5rem] 2xl:text-[6rem]">
            Delshad
          </span>
        </div>
        <div className="mt-2 lg:mt-1">
          <p className="light:text-light-muted text-sm font-light tracking-wide dark:text-dark-muted lg:text-base xl:text-lg">
            <span className="light:hover:text-light-text relative inline-block cursor-default transition-all duration-300 dark:hover:text-dark-text">
              {t("navbar.dev")}
              <span className="light:bg-light-primary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 hover:w-full dark:bg-dark-primary"></span>
            </span>
            <span className="light:text-light-primary/50 mx-3 hidden font-thin dark:text-dark-primary/50 sm:inline">
              |
            </span>
            <br className="sm:hidden" />
            <span className="light:hover:text-light-text relative inline-block cursor-default transition-all duration-300 dark:hover:text-dark-text">
              {t("navbar.designer")}
              <span className="light:bg-light-secondary absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 hover:w-full dark:bg-dark-secondary"></span>
            </span>
          </p>
        </div>
      </div>

      <div className="animate-slide-right">
        <ul className="light:text-light-text flex items-center gap-x-2 text-sm dark:text-dark-text sm:gap-x-10 sm:text-xl">
          {/* Home */}
          <li className="group flex items-center gap-x-2">
            <span
              className={`${
                path === "/"
                  ? "visible scale-100 opacity-100 transition-all duration-500"
                  : "invisible scale-0 opacity-0 transition-all duration-500"
              }`}
            >
              <ArrowIcon className="light:text-light-primary h-4 w-4 animate-pulse transition-all duration-300 dark:text-dark-primary" />
            </span>
            <Link
              to="/"
              className="light:hover:text-light-primary relative transition-all duration-300 hover:scale-110 group-hover:translate-x-1 dark:hover:text-dark-primary"
            >
              <span className="relative z-10">{t("nav.home")}</span>
              <span className="absolute inset-0 -m-2 rounded-lg bg-gradient-to-r from-dark-primary to-dark-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
            </Link>
          </li>

          {/* Projects */}
          <li className="group">
            <div className="flex items-center gap-x-2">
              <span
                className={`${
                  path === "/projects"
                    ? "visible scale-100 opacity-100 transition-all duration-500"
                    : "invisible scale-0 opacity-0 transition-all duration-500"
                }`}
              >
                <ArrowIcon className="light:text-light-primary h-4 w-4 animate-pulse dark:text-dark-primary" />
              </span>
              <Link
                to="/projects"
                className="light:hover:text-light-primary relative transition-all duration-300 hover:scale-110 group-hover:translate-x-1 dark:hover:text-dark-primary"
              >
                <span className="relative z-10">{t("nav.projects")}</span>
                <span className="absolute inset-0 -m-2 rounded-lg bg-gradient-to-r from-dark-primary to-dark-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
              </Link>
            </div>
          </li>

          {/* Contact */}
          <li className="group">
            <div className="flex items-center gap-x-2">
              <span
                className={`${
                  path === "/contact"
                    ? "visible scale-100 opacity-100 transition-all duration-500"
                    : "invisible scale-0 opacity-0 transition-all duration-500"
                }`}
              >
                <ArrowIcon className="light:text-light-primary h-4 w-4 animate-pulse dark:text-dark-primary" />
              </span>
              <Link
                to="/contact"
                className="light:hover:text-light-primary relative transition-all duration-300 hover:scale-110 group-hover:translate-x-1 dark:hover:text-dark-primary"
              >
                <span className="relative z-10">{t("nav.contact")}</span>
                <span className="absolute inset-0 -m-2 rounded-lg bg-gradient-to-r from-dark-primary to-dark-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
              </Link>
            </div>
          </li>

          {/* Resume */}
          <li className="group">
            <div className="flex items-center gap-x-2">
              <span
                className={`${
                  path === "/resume"
                    ? "visible scale-100 opacity-100 transition-all duration-500"
                    : "invisible scale-0 opacity-0 transition-all duration-500"
                }`}
              >
                <ArrowIcon className="light:text-light-primary h-4 w-4 animate-pulse dark:text-dark-primary" />
              </span>
              <Link
                to="/resume"
                className="light:hover:text-light-primary relative transition-all duration-300 hover:scale-110 group-hover:translate-x-1 dark:hover:text-dark-primary"
              >
                <span className="relative z-10">{t("nav.resume")}</span>
                <span className="absolute inset-0 -m-2 rounded-lg bg-gradient-to-r from-dark-primary to-dark-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
