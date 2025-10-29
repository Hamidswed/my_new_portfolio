import { useTranslation } from "react-i18next";

export default function ResumeExperience() {
  const { t, i18n } = useTranslation();
  const isHejri = i18n.language === "fa";

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
      period: `${isHejri ? "1403/05" : "08/2024"} – ${isHejri ? "1403/08" : "11/2024"}`,
      duties: [
        t("resume.hantverksDuty1"),
        t("resume.hantverksDuty2"),
        t("resume.hantverksDuty3"),
      ],
    },
    {
      role: t("resume.swedconRole"),
      company: t("resume.swedconCompany"),
      period: `${isHejri ? "1401/05" : "08/2022"} – ${isHejri ? "1403/04" : "07/2024"}`,
      duties: [t("resume.swedconDuty1"), t("resume.swedconDuty2")],
    },
    {
      role: t("resume.integrifyRole"),
      company: t("resume.integrifyCompany"),
      period: `${isHejri ? "1401/08" : "11/2022"} – ${isHejri ? "1401/12" : "03/2023"}`,
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
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
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
