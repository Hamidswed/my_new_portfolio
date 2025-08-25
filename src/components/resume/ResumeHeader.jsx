import { useTranslation } from "react-i18next";

export default function ResumeHeader() {
  const { t } = useTranslation();
  return (
    <header className="text-center mb-12 animate-slide-down">
      <h1 className="text-4xl md:text-5xl pb-3 font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
        {t("resume.name")}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
        {t("resume.role")}
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
        <span>📍 {t("common.location")}</span>
        <span>|</span>
        <span>📧 delshad.swdn@gmail.com</span>
        <span>|</span>
        <a
          href="https://hdelshad.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-500"
        >
          hdelshad.com
        </a>
        <span>|</span>
        <a
          href="https://github.com/Hamidswed"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-500"
        >
          GitHub
        </a>
        <span>|</span>
        <a
          href="https://www.linkedin.com/in/hamidreza-delshad/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-500"
        >
          LinkedIn
        </a>
      </div>
    </header>
  );
}
