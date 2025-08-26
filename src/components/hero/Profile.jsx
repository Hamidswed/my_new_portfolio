import { useState, useRef, useEffect, memo } from "react";
import OptimizedImage from "../common/OptimizedImage";
import ImgSm from "../../assets/hamid-sm.webp";
import ImgMd from "../../assets/hamid-md.webp";
import ImgLg from "../../assets/hamid-lg.webp";

const Profile = memo(function Profile() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return (
    <div className="relative group animate-float w-full max-w-sm mx-auto lg:max-w-md xl:max-w-lg">
      {/* Background glow effects */}
      <div className="absolute -inset-6 bg-gradient-to-r from-dark-primary via-dark-secondary to-dark-accent opacity-20 blur-2xl animate-pulse rounded-3xl"></div>
      <div className="absolute -inset-3 bg-gradient-to-br from-dark-primary/30 to-dark-accent/30 blur-xl rounded-3xl animate-glow"></div>

      {/* Main image container */}
      <div className="relative glass rounded-3xl overflow-hidden border border-dark-border/30 group-hover:border-dark-primary/50 transition-all duration-500">
        {/* Profile image with lazy loading and responsive sizes */}
        <div ref={imgRef} className="relative">
          {/* Loading placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-dark-card/50 to-dark-bg/50 animate-pulse rounded-lg flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-dark-primary/30 border-t-dark-primary rounded-full animate-spin"></div>
            </div>
          )}

          {/* Optimized responsive image */}
          <OptimizedImage
            src={ImgSm}
            srcSet={`${ImgSm} 400w, ${ImgMd} 768w, ${ImgLg} 1024w`}
            sizes="(max-width: 768px) 400px, (max-width: 1024px) 768px, 1024px"
            alt="Hamidreza Delshad - Full Stack Developer"
            className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-700 ease-out"
            onLoad={handleImageLoad}
            loading="eager"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12"></div>

        {/* Professional badge */}
        <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium dark:text-dark-text light:text-light-text">
              Available
            </span>
          </div>
        </div>

        {/* Bottom info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <h3 className="text-lg font-bold dark:text-dark-text light:text-light-text mb-1">
            Hamidreza Delshad
          </h3>
          <p className="text-sm dark:text-dark-muted light:text-light-muted">
            Full Stack Developer & Designer
          </p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-1 h-1 dark:bg-dark-accent light:bg-light-accent rounded-full animate-pulse"></div>
            <span className="text-xs dark:text-dark-muted light:text-light-muted">
              Sweden
            </span>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-dark-primary/30 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-dark-secondary/30 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/2 -right-6 w-4 h-4 bg-dark-accent/30 rounded-full animate-ping opacity-60"></div>

      {/* Hover tooltip */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="dark:bg-dark-card light:bg-light-card dark:text-dark-text light:text-light-text text-sm px-4 py-2 rounded-full shadow-lg dark:border-dark-border/30 light:border-light-border/30 border">
          Click to view full profile ✨
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent dark:border-b-dark-card light:border-b-light-card"></div>
        </div>
      </div>
    </div>
  );
});

export default Profile;
