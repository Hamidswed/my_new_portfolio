import { Hero } from "../components/hero/Hero";
import { Testimonials } from "../components/testimonials/Testimonials";
import { useEffect, useState } from "react";
import { Loading } from "../components/loading/Loading";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Wait for the window load event to ensure all resources are loaded
    window.addEventListener('load', () => {
      setIsLoading(false);
      setIsVisible(true);
    });

    // If window is already loaded, hide loading immediately
    if (document.readyState === 'complete') {
      setIsLoading(false);
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener('load', () => {
        setIsLoading(false);
        setIsVisible(true);
      });
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={`flex-1 flex flex-col transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Hero />
      <Testimonials />
      
      {/* Additional decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-dark-primary/10 to-dark-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-dark-accent/10 to-dark-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
}
