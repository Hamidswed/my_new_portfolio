import { useTranslation } from "react-i18next";

export default function ResumeExperience() {
  const { t } = useTranslation();
  const jobs = [
    {
      role: t("resume.signumRole"),
      company: t("resume.signumCompany"),
      period: "02/2025 – Present",
      duties: [
        t("resume.signumDuty1"),
        t("resume.signumDuty2"),
        t("resume.signumDuty3"),
        t("resume.signumDuty4"),
        t("resume.signumDuty5"),
      ],
    },
    {
      role: t("resume.hantverksRole"),
      company: t("resume.hantverksCompany"),
      period: "08/2024 – 11/2024",
      duties: [
        t("resume.hantverksDuty1"),
        t("resume.hantverksDuty2"),
        t("resume.hantverksDuty3"),
      ],
    },
    {
      role: t("resume.integrifyRole"),
      company: t("resume.integrifyCompany"),
      period: "11/2022 – 03/2023",
      duties: [t("resume.integrifyDuty1"), t("resume.integrifyDuty2")],
    },
    {
      role: t("resume.swedconRole"),
      company: t("resume.swedconCompany"),
      period: "08/2022 – 11/2022",
      duties: [t("resume.swedconDuty1"), t("resume.swedconDuty2")],
    },
  ];

  return (
    <section className="mb-10 animate-fade-in [animation-delay:240ms]">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
        {t("resume.experience")}
      </h2>
      <div className="space-y-6">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition hover:shadow-md"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              {job.role}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
              {job.period}
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
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
