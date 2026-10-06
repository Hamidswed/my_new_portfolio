import { useTranslation } from "react-i18next";

export default function ResumeExperience() {
  const { t, i18n } = useTranslation();
  const isHejri = i18n.language === "fa";

  const jobs = [
    {
      role: t("resume.pegahRole"),
      company: t("resume.pegahCompany"),
      period: t("resume.pegahDate"),
      duties: [
        t("resume.pegahDuty1"),
        t("resume.pegahDuty2"),
        t("resume.pegahDuty3"),
        t("resume.pegahDuty4"),
        t("resume.pegahDuty5"),
      ],
    },
    {
      role: t("resume.hantverksRole"),
      company: t("resume.hantverksCompany"),
      period: t("resume.hantverksDate"),
      duties: [
        t("resume.hantverksDuty1"),
        t("resume.hantverksDuty2"),
        t("resume.hantverksDuty3"),
      ],
    },
    {
      role: t("resume.swedconRole"),
      company: t("resume.swedconCompany"),
      period: t("resume.swedconDate"),
      duties: [t("resume.swedconDuty1"), t("resume.swedconDuty2")],
    },
    {
      role: t("resume.integrifyRole"),
      company: t("resume.integrifyCompany"),
      period: t("resume.integrifyDate"),
      duties: [t("resume.integrifyDuty1"), t("resume.integrifyDuty2")],
    },
  ];

  return (
    <section className="mb-10 animate-fade-in [animation-delay:240ms]">
      <h2 className="mb-4 border-b border-gray-300 pb-2 text-2xl font-semibold text-gray-800 dark:border-gray-700 dark:text-white">
        {t("resume.experience")}
      </h2>
      <div className="space-y-6">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              {job.role}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
            <p className="mb-3 text-sm text-gray-500 dark:text-gray-500">
              {job.period}
            </p>
            <ul className="list-outside list-disc space-y-1 ps-5 text-sm text-gray-700 dark:text-gray-300">
              {job.duties.map((duty, i) => (
                <li key={i}>{duty}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
