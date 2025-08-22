// pages/Resume.jsx
import { useEffect, useState } from 'react';
import { withPageLoader } from './loading/withPageLoader';
import { useTranslation } from 'react-i18next'; 

const Resume = () => {
  const { t } = useTranslation(); 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // تاخیر کوتاه برای ایجاد افکت ظاهرشدن
    const id = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className={`py-8 px-6 md:px-12 max-w-4xl mx-auto lg:py-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
      {/* Header */}
      <header className="text-center mb-12 animate-slide-down">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Hamidreza Delshad
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          {t('resume.role')}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
          <span>📍 {t('common.location')}</span>
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

      {/* Career Profile */}
      <section className="mb-10 animate-fade-in">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
          {t('resume.profile')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {t('resume.profileText')}
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10 animate-fade-in [animation-delay:120ms]">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
          {t('resume.skills')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">{t('resume.languages')}</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>{t('resume.english')}</li>
              <li>{t('resume.swedish')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">{t('resume.frontend')}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {t('resume.frontendText')}
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">{t('resume.backend')}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {t('resume.backendText')}
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">{t('resume.database')}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {t('resume.databaseText')}
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">{t('resume.design')}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {t('resume.designText')}
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-10 animate-fade-in [animation-delay:240ms]">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
          {t('resume.experience')}
        </h2>
        <div className="space-y-6">
          {[
            {
              role: t('resume.signumRole'),
              company: t('resume.signumCompany'),
              period: "02/2025 – Present",
              duties: [
                t('resume.signumDuty1'),
                t('resume.signumDuty2'),
                t('resume.signumDuty3'),
                t('resume.signumDuty4'),
                t('resume.signumDuty5')
              ]
            },
            {
              role: t('resume.hantverksRole'),
              company: t('resume.hantverksCompany'),
              period: "08/2024 – 11/2024",
              duties: [
                t('resume.hantverksDuty1'),
                t('resume.hantverksDuty2'),
                t('resume.hantverksDuty3')
              ]
            },
            {
              role: t('resume.integrifyRole'),
              company: t('resume.integrifyCompany'),
              period: "11/2022 – 03/2023",
              duties: [
                t('resume.integrifyDuty1'),
                t('resume.integrifyDuty2')
              ]
            },
            {
              role: t('resume.swedconRole'),
              company: t('resume.swedconCompany'),
              period: "08/2022 – 11/2022",
              duties: [
                t('resume.swedconDuty1'),
                t('resume.swedconDuty2')
              ]
            }
          ].map((job, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{job.role}</h3>
              <p className="text-gray-600 dark:text-gray-400">{job.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">{job.period}</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                {job.duties.map((duty, i) => (
                  <li key={i}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key Projects */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
          {t('resume.projects')}
        </h2>
        <div className="space-y-6">
          {[
            {
              title: t('resume.kajutanTitle'),
              desc: t('resume.kajutanDesc'),
              tech: t('resume.kajutanTech')
            },
            {
              title: t('resume.blogTitle'),
              desc: t('resume.blogDesc'),
              tech: t('resume.blogTech')
            },
            {
              title: t('resume.jobTitle'),
              desc: t('resume.jobDesc'),
              tech: t('resume.jobTech')
            }
          ].map((proj, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{proj.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{proj.desc}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                <strong>{t('resume.tech')}:</strong> {proj.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="animate-fade-in [animation-delay:360ms]">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
          {t('resume.education')}
        </h2>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-white">{t('resume.master')}</h3>
          <p className="text-gray-600 dark:text-gray-400">{t('resume.masterDesc')}</p>
          <h3 className="font-semibold text-gray-800 dark:text-white mt-3">{t('resume.bachelor')}</h3>
          <p className="text-gray-600 dark:text-gray-400">{t('resume.bachelorDesc')}</p>
        </div>
      </section>

      {/* Download Button */}
      <div className="text-center mt-12 animate-slide-up">
        <a
          href="/CV_HamidrezaDelshad_2025.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          📥 {t('common.downloadCV')}
        </a>
      </div>
    </div>
  );
};

export default withPageLoader(Resume);