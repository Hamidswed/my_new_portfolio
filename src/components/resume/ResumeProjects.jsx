import { useTranslation } from "react-i18next";

export default function ResumeProjects() {
  const { t } = useTranslation();
  const projects = [
    {
      title: t("resume.kajutanTitle"),
      desc: t("resume.kajutanDesc"),
      tech: t("resume.kajutanTech"),
    },
    {
      title: t("resume.blogTitle"),
      desc: t("resume.blogDesc"),
      tech: t("resume.blogTech"),
    },
    {
      title: t("resume.jobTitle"),
      desc: t("resume.jobDesc"),
      tech: t("resume.jobTech"),
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
        {t("resume.projects")}
      </h2>
      <div className="space-y-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {proj.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{proj.desc}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              <strong>{t("resume.tech")}:</strong> {proj.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
