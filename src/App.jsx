import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import { WebProjects } from "./pages/WebProjects";

function App() {
  return (
    <div className="container mx-auto xl:max-w-screen-xl py-3 px-5">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/web" element={<WebProjects />} />
      </Routes>
    </div>
  );
}

export default App;
