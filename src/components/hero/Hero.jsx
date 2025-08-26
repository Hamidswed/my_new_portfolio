// src/components/hero/Hero.jsx
import { Link } from "react-router-dom";
import Profile from "./Profile";
import SocialMedia from "./socialMedia/SocialMedia";
import { FaDownload, FaRocket } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import Pdf from "/download/CV_HamidrezaDelshad.pdf";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "fa";

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="hero-grid min-h-[calc(100vh-200px)] py-4 lg:py-8">
        {/* Profile Image Section */}
        <div className="animate-slide-right">
          <Profile />
        </div>
        {/* Content Section */}
        <div className="animate-slide-left space-y-6 lg:space-y-8">
          {/* Animated greeting */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <HiSparkles className="light:text-light-accent animate-pulse text-xl dark:text-dark-accent" />
              <span className="light:text-light-muted text-sm font-medium uppercase tracking-wider dark:text-dark-muted">
                {t("hero.greeting")}
              </span>
              <HiSparkles className="light:text-light-secondary animate-pulse text-xl dark:text-dark-secondary" />
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:${!isRTL ? "text-6xl" : "text-[3.5rem]"} font-bold leading-tight`}
            >
              <span className="gradient-text pb-3">{t("hero.title1")}</span>
              {!isRTL && <br />}
              <span className="light:text-light-text dark:text-dark-text">
                {t("hero.title2")}
              </span>
            </h1>
          </div>

          {/* Main description with glass effect */}
          <div className="glass hover-lift space-y-3 rounded-2xl p-4 lg:p-6">
            <p className="light:text-light-text text-lg leading-relaxed dark:text-dark-text">
              {t("hero.description1.part1")}
              <span className="light:text-light-primary font-semibold dark:text-dark-primary">
                {t("hero.name")}
              </span>
              {t("hero.description1.part2")}
              <span className="light:text-light-secondary font-semibold dark:text-dark-secondary">
                {t("hero.role.dev")}
              </span>
              {t("hero.description1.part3")}
              <span className="light:text-light-accent font-semibold dark:text-dark-accent">
                {t("hero.role.designer")}
              </span>
              {t("hero.description1.part4")}
            </p>
            <p className="light:text-light-muted leading-relaxed dark:text-dark-muted">
              {t("hero.description2.part1")}
              <span className="light:text-light-primary dark:text-dark-primary">
                {t("hero.highlight.interfaces")}
              </span>
              {t("hero.description2.part2")}
              <span className="light:text-light-secondary dark:text-dark-secondary">
                {t("hero.highlight.experience")}
              </span>
              {t("hero.description2.part3")}
              <span className="light:text-light-accent dark:text-dark-accent">
                {t("hero.highlight.architecture")}
              </span>
              {t("hero.description2.part4")}
              <span className="light:text-light-primary dark:text-dark-primary">
                {t("hero.highlight.code")}
              </span>
              {t("hero.description2.part5")}
            </p>
          </div>

          {/* Action buttons and social media */}
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="order-2 animate-slide-up sm:order-1">
              <SocialMedia />
            </div>

            <div className="order-1 sm:order-2 w-full flex justify-center">
              <Link to={Pdf} target="_blank" download="CV_HamidrezaDelshad" className="text-center">
                <button className="neon-button w-full hover-lift group flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-base font-semibold transition-all duration-300">
                  <FaDownload className="flex-shrink-0 animate-bounce transition-all duration-300 group-hover:animate-pulse" />
                  <span className="flex-shrink-0">
                    {t("common.downloadCV")}
                  </span>
                  <FaRocket className="flex-shrink-0 animate-pulse opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute left-10 top-20 h-32 w-32 animate-pulse rounded-full bg-gradient-to-r from-dark-primary/10 to-dark-secondary/10 blur-3xl"></div>
      <div
        className="absolute bottom-20 right-10 h-40 w-40 animate-pulse rounded-full bg-gradient-to-r from-dark-accent/10 to-dark-primary/10 blur-3xl"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
}
