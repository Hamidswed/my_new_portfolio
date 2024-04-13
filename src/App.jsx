import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import { WebProjects } from "./pages/WebProjects";
import Info from "./components/info/Info";

function App() {
  return (
    <div className="container mx-auto xl:max-w-screen-xl pt-3 px-5 pb-24">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<WebProjects />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
