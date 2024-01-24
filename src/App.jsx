import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";
import { WebProjects } from "./pages/WebProjects";
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler=(open)=>{
    setIsOpen(open)
  }

  console.log(isOpen);
  return (
    <div className="container xl:max-w-screen-xl py-3 px-5 h-screen">
      <Navbar isOpen={isOpen} openHandler={openHandler}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/web" element={<WebProjects />} />
      </Routes>
    </div>
  );
}

export default App;
