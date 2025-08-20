import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import { WebProjects } from "./pages/WebProjects";
import { Contact } from "./pages/Contact";
import { ThemeToggle } from "./components/ThemeToggle";
// import { useEffect } from "react";
import { ChatBox } from "./components/ChatBox";
import Resume from "./components/Resume";

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

function App() {
  // Theme initialization is now handled by ThemeToggle component

  return (
    <div className="min-h-screen animated-bg overflow-x-hidden">
      {/* <FloatingParticles /> */}
      <ThemeToggle />
      <ChatBox />
      <div className="container mx-auto max-w-6xl pt-2 px-4 sm:px-6 lg:px-8 pb-8 relative z-10 min-h-screen flex flex-col">
        <div className="animate-fade-in">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<WebProjects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
