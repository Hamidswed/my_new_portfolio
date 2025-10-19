// src/components/testimonials/Testimonials.jsx
import { useState, useEffect, memo } from "react";
import { HiChevronLeft, HiChevronRight, HiStar } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Placeholder from "../../assets/placeholder.svg";

function TestimonialsComponent() {
  const { t } = useTranslation(); // ✅ استفاده از ترجمه
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

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
            image: Placeholder,
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
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length,
    );
    setExpanded(false);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setExpanded(false);
    setIsAutoPlaying(false);
  };

  const handleImageError = (testimonialId) => {
    setImageErrors((prev) => ({
      ...prev,
      [testimonialId]: true,
    }));
  };

  const currentTestimonial = testimonialsData[currentIndex];
  const isLongText = currentTestimonial?.text?.split(" ").length > 50;

  return (
    <section className="animate-fade-in py-16">
      {/* Header */}
      <div className="mb-12 animate-slide-down text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <HiSparkles className="light:text-light-accent animate-pulse text-2xl dark:text-dark-accent" />
          <h2 className="gradient-text pb-3 text-3xl font-bold md:text-4xl">
            {t("testimonials.title")}
          </h2>
          <HiSparkles className="light:text-light-primary animate-pulse text-2xl dark:text-dark-primary" />
        </div>
        <p className="light:text-light-muted mx-auto max-w-2xl dark:text-dark-muted">
          {t("testimonials.subtitle")}
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative mx-auto max-w-4xl">
        {currentTestimonial ? (
          <div
            className="glass hover-lift relative overflow-hidden rounded-3xl p-8 lg:p-12"
            style={{ minHeight: "520px" }}
          >
            {/* Background decoration */}
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-dark-primary/10 to-dark-secondary/10 blur-3xl"></div>

            {/* Quote marks */}
            <div className="light:text-light-primary/20 absolute left-6 top-6 font-serif text-6xl dark:text-dark-primary/20">
              &ldquo;
            </div>
            <div className="light:text-light-primary/20 absolute bottom-6 right-6 font-serif text-6xl dark:text-dark-primary/20">
              &rdquo;
            </div>

            {/* Main Content */}
            <div className="flex h-full flex-col justify-between text-center">
              <div>
                {/* Profile Image */}
                <div className="relative mx-auto mb-6 h-20 w-20">
                  <a
                    href={currentTestimonial.linkedinUrl?.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mx-auto mb-6 block h-20 w-20"
                  >
                    <img
                      src={
                        imageErrors[currentTestimonial.id] ||
                        !currentTestimonial.image
                          ? Placeholder
                          : currentTestimonial.image
                      }
                      alt={currentTestimonial.name}
                      className="light:border-light-primary/30 h-full w-full rounded-full border-4 object-cover dark:border-dark-primary/30"
                      onError={() => handleImageError(currentTestimonial.id)}
                    />
                    <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                  </a>
                </div>

                {/* Rating */}
                <div className="mb-4 flex justify-center">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote
                  className="light:text-light-text mx-auto mb-4 max-w-3xl text-sm leading-relaxed transition-all duration-300 dark:text-dark-text lg:text-lg"
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
                  <div className="mb-6 text-center">
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="light:text-light-primary text-sm font-medium hover:underline focus:outline-none dark:text-dark-primary"
                    >
                      {expanded
                        ? t("testimonials.showLess")
                        : t("testimonials.readMore")}
                    </button>
                  </div>
                )}
              </div>

              {/* Author Info */}
              <div className="mt-4 space-y-1">
                <h4 className="light:text-light-text text-lg font-semibold dark:text-dark-text">
                  {currentTestimonial.name}
                </h4>
                <p className="light:text-light-muted dark:text-dark-muted">
                  {currentTestimonial.position}
                </p>
                {currentTestimonial.company && (
                  <p className="light:text-light-primary text-sm font-medium dark:text-dark-primary">
                    {currentTestimonial.company}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p className="light:text-light-muted text-center dark:text-dark-muted">
            {t("testimonials.loading")}
          </p>
        )}

        {/* Navigation Arrows */}
        {testimonialsData.length > 1 && (
          <>
            <button
              onClick={prevTestimonial}
              className="glass light:text-light-text hover-lift absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 dark:text-dark-text"
              aria-label={t("testimonials.prev")}
            >
              <HiChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="glass light:text-light-text hover-lift absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 dark:text-dark-text"
              aria-label={t("testimonials.next")}
            >
              <HiChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {testimonialsData.length > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {testimonialsData.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => goToTestimonial(testimonial.id - 1)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  testimonial.id - 1 === currentIndex
                    ? "light:bg-light-primary scale-125 dark:bg-dark-primary"
                    : "light:bg-light-muted/30 hover:scale-110 dark:bg-dark-muted/30"
                }`}
                aria-label={t("testimonials.goTo", { id: testimonial.id })}
              />
            ))}
          </div>
        )}

        {/* Auto-play indicator */}
        {testimonialsData.length > 1 && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="light:text-light-muted text-xs transition-colors duration-300 hover:text-dark-primary dark:text-dark-muted"
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
