// src/components/testimonials/Testimonials.jsx
import { useState, useEffect, memo } from "react";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";
import axios from "axios";
import { useTranslation } from "react-i18next"; // ✅ ایمپورت

function TestimonialsComponent() {
  const { t } = useTranslation(); // ✅ استفاده از ترجمه
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/testimonials.json");
        setTestimonialsData(res.data);
      } catch (error) {
        console.error("Error fetching ", error);
        setTestimonialsData([
          {
            id: 1,
            name: "John Doe",
            position: "Developer",
            company: "Tech Corp",
            image: "https://via.placeholder.com/150",
            text: "Great developer and team player with excellent skills in full-stack development.",
            rating: 5,
            linkedinUrl: "#",
          },
        ]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || testimonialsData.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
      setExpanded(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialsData.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    setExpanded(false);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
    setExpanded(false);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setExpanded(false);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonialsData[currentIndex];
  const isLongText = currentTestimonial?.text?.split(" ").length > 50;

  return (
    <section className="py-16 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-12 animate-slide-down">
        <div className="flex items-center justify-center gap-2 mb-4">
          <HiSparkles className="dark:text-dark-accent light:text-light-accent animate-pulse text-2xl" />
          <h2 className="text-3xl md:text-4xl pb-3 font-bold gradient-text">
            {t("testimonials.title")}
          </h2>
          <HiSparkles className="dark:text-dark-primary light:text-light-primary animate-pulse text-2xl" />
        </div>
        <p className="dark:text-dark-muted light:text-light-muted max-w-2xl mx-auto">
          {t("testimonials.subtitle")}
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative max-w-4xl mx-auto">
        {currentTestimonial ? (
          <div
            className="glass rounded-3xl p-8 lg:p-12 hover-lift relative overflow-hidden"
            style={{ minHeight: "520px" }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-dark-primary/10 to-dark-secondary/10 rounded-full blur-3xl"></div>

            {/* Quote marks */}
            <div className="absolute top-6 left-6 text-6xl dark:text-dark-primary/20 light:text-light-primary/20 font-serif">
              &ldquo;
            </div>
            <div className="absolute bottom-6 right-6 text-6xl dark:text-dark-primary/20 light:text-light-primary/20 font-serif">
              &rdquo;
            </div>

            {/* Main Content */}
            <div className="flex flex-col h-full justify-between text-center">
              <div>
                {/* Profile Image */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <img
                    src={
                      currentTestimonial.image ||
                      "https://via.placeholder.com/80"
                    }
                    alt={currentTestimonial.name}
                    className="w-full h-full rounded-full object-cover border-4 dark:border-dark-primary/30 light:border-light-primary/30"
                  />
                  <a
                    href={currentTestimonial.linkedinUrl?.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote
                  className="text-sm lg:text-lg dark:text-dark-text light:text-light-text leading-relaxed mb-4 max-w-3xl mx-auto transition-all duration-300"
                  style={{
                    maxHeight: expanded ? "none" : "120px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: expanded ? "unset" : 5,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {currentTestimonial.text}
                </blockquote>

                {/* Read More / Less Button */}
                {isLongText && (
                  <div className="text-center mb-6">
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="text-sm font-medium dark:text-dark-primary light:text-light-primary hover:underline focus:outline-none"
                    >
                      {expanded
                        ? t("testimonials.showLess")
                        : t("testimonials.readMore")}
                    </button>
                  </div>
                )}
              </div>

              {/* Author Info */}
              <div className="space-y-1 mt-4">
                <h4 className="font-semibold text-lg dark:text-dark-text light:text-light-text">
                  {currentTestimonial.name}
                </h4>
                <p className="dark:text-dark-muted light:text-light-muted">
                  {currentTestimonial.position}
                </p>
                {currentTestimonial.company && (
                  <p className="text-sm dark:text-dark-primary light:text-light-primary font-medium">
                    {currentTestimonial.company}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center dark:text-dark-muted light:text-light-muted">
            {t("testimonials.loading")}
          </p>
        )}

        {/* Navigation Arrows */}
        {testimonialsData.length > 1 && (
          <>
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center dark:text-dark-text light:text-light-text hover:scale-110 transition-all duration-300 hover-lift"
              aria-label={t("testimonials.prev")}
            >
              <HiChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center dark:text-dark-text light:text-light-text hover:scale-110 transition-all duration-300 hover-lift"
              aria-label={t("testimonials.next")}
            >
              <HiChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {testimonialsData.length > 1 && (
          <div className="flex justify-center mt-8 gap-2">
            {testimonialsData.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => goToTestimonial(testimonial.id - 1)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  testimonial.id - 1 === currentIndex
                    ? "dark:bg-dark-primary light:bg-light-primary scale-125"
                    : "dark:bg-dark-muted/30 light:bg-light-muted/30 hover:scale-110"
                }`}
                aria-label={t("testimonials.goTo", { id: testimonial.id })}
              />
            ))}
          </div>
        )}

        {/* Auto-play indicator */}
        {testimonialsData.length > 1 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs dark:text-dark-muted light:text-light-muted hover:text-dark-primary transition-colors duration-300"
            >
              {isAutoPlaying ? t("testimonials.pause") : t("testimonials.play")}{" "}
              {t("testimonials.autoScroll")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export const Testimonials = memo(TestimonialsComponent);
