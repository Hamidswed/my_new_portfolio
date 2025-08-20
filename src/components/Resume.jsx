
const Resume = () => {
  return (
    <div className="py-8 px-6 md:px-12 max-w-4xl mx-auto lg:py-16">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
          Hamidreza Delshad
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Full Stack Developer (React.js, Node.js)
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
          <span>📍 Umeå, Sweden</span>
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
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
          Career Profile
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          As a Front-end and Full Stack Developer, I bring a strong blend of technical expertise and creative problem-solving skills. I have successfully developed responsive websites across diverse industries, focusing on creating intuitive and user-friendly interfaces. I thrive in cross-functional team environments and am committed to delivering innovative digital solutions for clients. I hold a bachelor’s degree in computer science.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Languages</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>English (Advanced)</li>
              <li>Swedish (Intermediate)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Frontend</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              TypeScript, JavaScript, HTML, CSS, React.js, Next.js, Redux Toolkit, React Query, Tailwind CSS, SCSS, Material UI, Mantine, Ant Design
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Backend</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Node.js, Express.js | Familiar: Python, C#, Java
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Database & DevOps</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              MongoDB, Docker, AWS, Netlify, Bash
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Design Tools</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Figma, Adobe Photoshop, Illustrator, InDesign, Adobe XD
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
          Work Experience
        </h2>
        <div className="space-y-6">
          {[
            {
              role: "Frontend Developer – Signum Framework",
              company: "PegaheAftab, Tehran (Remote)",
              period: "02/2025 – Present",
              duties: [
                "Designing components based on the Signum framework syntax.",
                "Developing user interfaces, including custom tables, toolbars, and modules.",
                "Implementing state management and data handling using React and TypeScript.",
                "Collaborating with backend team to integrate APIs.",
                "Conducting code reviews and participating in agile processes."
              ]
            },
            {
              role: "Frontend Developer",
              company: "Hantverkshjälpen AB, Stockholm (Remote)",
              period: "08/2024 – 11/2024",
              duties: [
                "Built Time Flow — a time management tool using Next.js and TypeScript.",
                "Created dynamic forms with React Hook Form and responsive layouts.",
                "Used Jira for task coordination and collaborated with backend/UI teams."
              ]
            },
            {
              role: "FullStack Developer (Trainee)",
              company: "Integrify Academy, Helsinki (Remote)",
              period: "11/2022 – 03/2023",
              duties: [
                "Implemented 7+ websites with responsive, mobile-first design.",
                "Assessed UI/UX feasibility in Figma and collaborated via GitHub & Slack."
              ]
            },
            {
              role: "Frontend Developer (Intern)",
              company: "Swedcon 18 AB, Växjö (Remote)",
              period: "08/2022 – 11/2022",
              duties: [
                "Worked on an online doctor appointment service using React, Next.js, Mantine.",
                "Improved project performance and maintained branding standards."
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
          Key Projects
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Kajutan Restaurant Website",
              desc: "Full-stack developer for a restaurant site with admin CRUD, search, and comment system.",
              tech: "React, Node.js, Express, MongoDB, Tailwind CSS, JWT"
            },
            {
              title: "Blog App with Admin Panel",
              desc: "Next.js frontend with admin panel, user auth, search, comments, and moderation.",
              tech: "Next.js, Node.js, Express, MongoDB, JWT, React Query"
            },
            {
              title: "Job Portal Website",
              desc: "Platform for job seekers and employers with role-based access and application management.",
              tech: "React, Node.js, Express, MongoDB, React Query"
            }
          ].map((proj, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{proj.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{proj.desc}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                <strong>Tech:</strong> {proj.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-700">
          Education
        </h2>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-white">Master of Bioinformatics</h3>
          <p className="text-gray-600 dark:text-gray-400">University of Skövde, Sweden (2022–2023)</p>
          <h3 className="font-semibold text-gray-800 dark:text-white mt-3">Bachelor of Science in Computer Science</h3>
          <p className="text-gray-600 dark:text-gray-400">Payam Noor University, Iran (2004–2009)</p>
        </div>
      </section>

      {/* Download Button */}
      <div className="text-center mt-12">
        <a
          href="/CV_HamidrezaDelshad_2025.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          📥 Download CV (PDF)
        </a>
      </div>
    </div>
  );
};

export default Resume;