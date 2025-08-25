import { useTranslation } from "react-i18next";

export default function ResumeProfile() {
  const { t } = useTranslation();
  return (
    <section className="mb-10 animate-fade-in">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
        {t("resume.profile")}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {t("resume.profileText")}
      </p>
    </section>
  );
}
