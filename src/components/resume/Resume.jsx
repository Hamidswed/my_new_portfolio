import { useEffect, useState } from "react";
import ResumeHeader from "./ResumeHeader";
import ResumeProfile from "./ResumeProfile";
import ResumeSkills from "./ResumeSkills";
import ResumeExperience from "./ResumeExperience";
import ResumeProjects from "./ResumeProjects";
import ResumeEducation from "./ResumeEducation";

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      className={`py-8 px-6 md:px-12 max-w-4xl mx-auto lg:py-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <ResumeHeader />
      <ResumeProfile />
      <ResumeSkills />
      <ResumeExperience />
      <ResumeProjects />
      <ResumeEducation />

      <div className="text-center mt-12 animate-slide-up">
        <a
          href="/CV_HamidrezaDelshad_2025.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          📥 Download CV
        </a>
      </div>
    </div>
  );
}
