import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import { WebProjects } from "./pages/WebProjects";
import { Contact } from "./pages/Contact";
import { ThemeToggle } from "./components/ThemeToggle";
// import { useEffect } from "react";
import { withPageLoader } from "./components/loading/withPageLoader";
import Resume from "./components/Resume";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import AdminLogin from "./pages/AdminLogin";
import AdminChat from "./pages/AdminChat";
import { ChatBox } from "./components/chatBox/ChatBox";

// Floating particles component
// const FloatingParticles = () => {
//   useEffect(() => {
//     const createParticle = () => {
//       const particle = document.createElement('div');
//       particle.className = 'particle';
//       particle.style.left = Math.random() * 100 + '%';
//       particle.style.animationDelay = Math.random() * 6 + 's';
//       particle.style.animationDuration = (Math.random() * 4 + 6) + 's';

//       const particles = document.querySelector('.particles');
//       if (particles) {
//         particles.appendChild(particle);

//         setTimeout(() => {
//           particle.remove();
//         }, 10000);
//       }
//     };

//     const interval = setInterval(createParticle, 300);

//     return () => clearInterval(interval);
//   }, []);

//   return <div className="particles"></div>;
// };

// eslint-disable-next-line react/prop-types
function RequireAdmin({ children }) {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
  if (!token) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
}

const ResumePage = withPageLoader(Resume);

function App() {
  // Theme initialization is now handled by ThemeToggle component
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  const isAdminPage = pathname.startsWith("/admin-");

  const isRTL = i18n.language === "fa";

  return (
    <div className="min-h-screen animated-bg overflow-x-hidden">
      {/* <FloatingParticles /> */}
      <div
        className={`fixed z-50 flex items-center gap-4 top-6 ${isRTL || isAdminPage ? "left-6" : "right-6"}`}
      >
        {!isAdminPage && <LanguageSwitcher />}
        <ThemeToggle />
      </div>
      {!isAdminPage && <ChatBox />}
      <div className="container mx-auto max-w-6xl pt-2 px-4 sm:px-6 lg:px-8 pb-8 relative z-10 min-h-screen flex flex-col">
        <div className="animate-fade-in">
          {!isAdminPage && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<WebProjects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route
              path="/admin-chat"
              element={
                <RequireAdmin>
                  <AdminChat />
                </RequireAdmin>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
