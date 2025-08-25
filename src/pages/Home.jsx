import { Hero } from "../components/hero/Hero";
import { Testimonials } from "../components/testimonials/Testimonials";
import { withPageLoader } from "../components/loading/withPageLoader";

function HomeInner() {
  return (
    <div
      className={`flex-1 py-8 lg:py-16 flex flex-col transition-all duration-1000`}
    >
      <Hero />
      <Testimonials />
      {/* Additional decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-dark-primary/10 to-dark-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-dark-accent/10 to-dark-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
}

export const Home = withPageLoader(HomeInner);
