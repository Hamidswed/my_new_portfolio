import { Link } from "react-router-dom";
import Profile from "./Profile";
import SocialMedia from "./socialMedia/SocialMedia";
import { FaDownload, FaRocket } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import Pdf from "/download/CV_HamidrezaDelshad.pdf";

export function Hero() {
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
                Welcome to my portfolio
              </span>
              <HiSparkles className="dark:text-dark-secondary light:text-light-secondary animate-pulse text-xl" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">
                Crafting Digital
              </span>
              <br />
              <span className="dark:text-dark-text light:text-light-text">
                Experiences
              </span>
            </h1>
          </div>

          {/* Main description with glass effect */}
          <div className="glass rounded-2xl p-4 lg:p-6 hover-lift space-y-3">
            <p className="text-lg dark:text-dark-text light:text-light-text leading-relaxed">
              My name is <span className="dark:text-dark-primary light:text-light-primary font-semibold">Hamidreza Delshad</span>,
              a passionate <span className="dark:text-dark-secondary light:text-light-secondary font-semibold">full stack developer</span> and
              a freelance <span className="dark:text-dark-accent light:text-light-accent font-semibold">graphic designer</span> from Sweden.
            </p>
            <p className="dark:text-dark-muted light:text-light-muted leading-relaxed">
              My passion for software is coming up with concepts and turning them into
              <span className="dark:text-dark-primary light:text-light-primary"> beautiful interfaces</span>.
              When I develop something, I pay close attention to the
              <span className="dark:text-dark-secondary light:text-light-secondary"> user experience</span>,
              <span className="dark:text-dark-accent light:text-light-accent"> architecture</span>, and
              <span className="dark:text-dark-primary light:text-light-primary"> code quality</span>.
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
                  <span className="flex-shrink-0">Download CV</span>
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
