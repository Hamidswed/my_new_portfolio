// src/components/hero/Hero.jsx
import { Link } from "react-router-dom";
import Profile from "./Profile";
import SocialMedia from "./socialMedia/SocialMedia";
import { FaDownload, FaRocket } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import Pdf from "/download/CV_HamidrezaDelshad.pdf";
import { useTranslation } from 'react-i18next'; // ✅ ایمپورت

export function Hero() {
  const { t } = useTranslation(); // ✅ استفاده از ترجمه

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="hero-grid min-h-[calc(100vh-200px)] py-4 lg:py-8">
        {/* Content Section */}
        <div className="order-1 lg:order-1 animate-slide-left space-y-6 lg:space-y-8">
          {/* Animated greeting */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center gap-2 flex-wrap">
              <HiSparkles className="dark:text-dark-accent light:text-light-accent animate-pulse text-xl" />
              <span className="dark:text-dark-muted light:text-light-muted text-sm uppercase tracking-wider font-medium">
                {t('hero.greeting')} {/* ✅ */}
              </span>
              <HiSparkles className="dark:text-dark-secondary light:text-light-secondary animate-pulse text-xl" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">
                {t('hero.title1')} {/* ✅ */}
              </span>
              <br />
              <span className="dark:text-dark-text light:text-light-text">
                {t('hero.title2')} {/* ✅ */}
              </span>
            </h1>
          </div>

          {/* Main description with glass effect */}
          <div className="glass rounded-2xl p-4 lg:p-6 hover-lift space-y-3">
            <p className="text-lg dark:text-dark-text light:text-light-text leading-relaxed">
              {t('hero.description1.part1')} {/* ✅ */}
              <span className="dark:text-dark-primary light:text-light-primary font-semibold">
                {t('hero.name')}
              </span>
              {t('hero.description1.part2')}
              <span className="dark:text-dark-secondary light:text-light-secondary font-semibold">
                {t('hero.role.dev')}
              </span>
              {t('hero.description1.part3')}
              <span className="dark:text-dark-accent light:text-light-accent font-semibold">
                {t('hero.role.designer')}
              </span>
              {t('hero.description1.part4')}
            </p>
            <p className="dark:text-dark-muted light:text-light-muted leading-relaxed">
              {t('hero.description2.part1')}
              <span className="dark:text-dark-primary light:text-light-primary">
                {t('hero.highlight.interfaces')}
              </span>
              {t('hero.description2.part2')}
              <span className="dark:text-dark-secondary light:text-light-secondary">
                {t('hero.highlight.experience')}
              </span>
              {t('hero.description2.part3')}
              <span className="dark:text-dark-accent light:text-light-accent">
                {t('hero.highlight.architecture')}
              </span>
              {t('hero.description2.part4')}
              <span className="dark:text-dark-primary light:text-light-primary">
                {t('hero.highlight.code')}
              </span>
              {t('hero.description2.part5')}
            </p>
          </div>

          {/* Action buttons and social media */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="animate-slide-up order-2 sm:order-1">
              <SocialMedia />
            </div>

            <div className="order-1 sm:order-2">
              <Link to={Pdf} target="_blank" download="CV_HamidrezaDelshad">
                <button className="neon-button flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 hover-lift group whitespace-nowrap">
                  <FaDownload className="animate-bounce group-hover:animate-pulse transition-all duration-300 flex-shrink-0" />
                  <span className="flex-shrink-0">{t('common.downloadCV')}</span> {/* ✅ */}
                  <FaRocket className="opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse flex-shrink-0" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="order-2 lg:order-2 animate-slide-right">
          <Profile />
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-dark-primary/10 to-dark-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-dark-accent/10 to-dark-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
}