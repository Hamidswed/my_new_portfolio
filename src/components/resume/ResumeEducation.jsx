import { useTranslation } from "react-i18next";

export default function ResumeEducation() {
  const { t } = useTranslation();
  return (
    <section className="animate-fade-in [animation-delay:360ms]">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
        {t("resume.education")}
      </h2>
      <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-800 dark:text-white">
          {t("resume.master")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {t("resume.masterDesc")}
        </p>
        <h3 className="font-semibold text-gray-800 dark:text-white mt-3">
          {t("resume.bachelor")}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {t("resume.bachelorDesc")}
        </p>
      </div>
    </section>
  );
}
