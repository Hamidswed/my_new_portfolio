import { useTranslation } from "react-i18next";

export default function ResumeSkills() {
  const { t } = useTranslation();
  return (
    <section className="mb-10 animate-fade-in [animation-delay:120ms]">
      <h2 className="mb-4 border-b border-gray-300 pb-2 text-2xl font-semibold text-gray-800 dark:border-gray-700 dark:text-white">
        {t("resume.skills")}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-2 font-medium text-gray-800 dark:text-gray-200">
            {t("resume.languages")}
          </h3>
          <ul className="list-inside list-disc text-gray-700 dark:text-gray-300">
            <li>{t("resume.english")}</li>
            <li>{t("resume.swedish")}</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-medium text-gray-800 dark:text-gray-200">
            {t("resume.frontend")}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {t("resume.frontendText")}
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-medium text-gray-800 dark:text-gray-200">
            {t("resume.backend")}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {t("resume.backendText")}
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-medium text-gray-800 dark:text-gray-200">
            {t("resume.aiTools")}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {t("resume.aiToolsText")}
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-medium text-gray-800 dark:text-gray-200">
            {t("resume.devops")}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {t("resume.devopsText")}
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-medium text-gray-800 dark:text-gray-200">
            {t("resume.design")}
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {t("resume.designText")}
          </p>
        </div>
      </div>
    </section>
  );
}
