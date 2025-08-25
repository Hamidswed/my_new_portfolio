import { useTranslation } from "react-i18next";

export default function ResumeSkills() {
  const { t } = useTranslation();
  return (
    <section className="mb-10 animate-fade-in [animation-delay:120ms]">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
        {t("resume.skills")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
            {t("resume.languages")}
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>{t("resume.english")}</li>
            <li>{t("resume.swedish")}</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
            {t("resume.frontend")}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {t("resume.frontendText")}
          </p>
        </div>
        <div>
          <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
            {t("resume.backend")}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {t("resume.backendText")}
          </p>
        </div>
        <div>
          <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
            {t("resume.database")}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {t("resume.databaseText")}
          </p>
        </div>
        <div>
          <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
            {t("resume.design")}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {t("resume.designText")}
          </p>
        </div>
      </div>
    </section>
  );
}
