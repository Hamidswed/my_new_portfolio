import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy, memo } from "react";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { ChatBox } from "./components/chatBox/ChatBox";
import RequireAdmin from "./components/auth/RequireAdmin";
import { usePerformance } from "./hooks/usePerformance";

// Lazy load components with better error handling
const AdminChat = lazy(() => 
  import("./pages/AdminChat").catch(() => ({ default: () => <div>Error loading Admin Chat</div> }))
);
const AdminLogin = lazy(() => 
  import("./pages/AdminLogin").catch(() => ({ default: () => <div>Error loading Admin Login</div> }))
);
const Resume = lazy(() => 
  import("./components/resume/Resume").catch(() => ({ default: () => <div>Error loading Resume</div> }))
);
const WebProjects = lazy(() =>
  import("./pages/WebProjects")
    .then((m) => ({ default: m.WebProjects }))
    .catch(() => ({ default: () => <div>Error loading Projects</div> }))
);
const Contact = lazy(() =>
  import("./pages/Contact")
    .then((m) => ({ default: m.Contact }))
    .catch(() => ({ default: () => <div>Error loading Contact</div> }))
);

// Loading component
const LoadingSpinner = memo(() => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="w-8 h-8 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
));

function App() {
  // Performance monitoring
  usePerformance();
  
  // Theme initialization is now handled by ThemeToggle component
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  const isAdminPage = pathname.startsWith("/admin-");

  const isRTL = i18n.language === "fa";

  return (
    <div className="min-h-screen animated-bg overflow-x-hidden">
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
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<WebProjects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
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
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
