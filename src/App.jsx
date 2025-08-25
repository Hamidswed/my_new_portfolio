import { Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { ChatBox } from "./components/chatBox/ChatBox";
import RequireAdmin from "./components/auth/RequireAdmin";

const AdminChat = lazy(() => import("./pages/AdminChat"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const Resume = lazy(() => import("./components/resume/Resume"));
const WebProjects = lazy(() =>
  import("./pages/WebProjects").then((m) => ({ default: m.WebProjects }))
);
const Contact = lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.Contact }))
);

function App() {
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
          <Suspense fallback={null}>
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
