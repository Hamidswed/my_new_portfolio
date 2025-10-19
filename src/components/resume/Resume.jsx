import { useEffect, useState } from "react";
import ResumeHeader from "./ResumeHeader";
import ResumeProfile from "./ResumeProfile";
import ResumeSkills from "./ResumeSkills";
import ResumeExperience from "./ResumeExperience";
import ResumeProjects from "./ResumeProjects";
import ResumeEducation from "./ResumeEducation";
import DownloadButton from "../common/DownloadButton";

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

      <div className="flex justify-center mt-12 animate-slide-up">
        <DownloadButton variant="neon" fullWidth/>
      </div>
    </div>
  );
}
