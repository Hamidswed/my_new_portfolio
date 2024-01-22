import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="container xl:max-w-screen-xl py-3 px-4">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
