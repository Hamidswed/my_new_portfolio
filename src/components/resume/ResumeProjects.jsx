import { useTranslation } from "react-i18next";

export default function ResumeProjects() {
  const { t } = useTranslation();
  const projects = [
    {
      title: t("resume.erpTitle"),
      desc: t("resume.erpDesc"),
      tech: t("resume.erpTech"),
    },
    {
      title: t("resume.timeflowTitle"),
      desc: t("resume.timeflowDesc"),
      tech: t("resume.timeflowTech"),
    },
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
      <h2 className="mb-4 border-b border-gray-300 pb-2 text-2xl font-semibold text-gray-800 dark:border-gray-700 dark:text-white">
        {t("resume.projects")}
      </h2>
      <div className="space-y-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {proj.title}
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{proj.desc}</p>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              <strong>{t("resume.tech")}:</strong> {proj.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
