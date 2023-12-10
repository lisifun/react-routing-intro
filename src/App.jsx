// App.jsx

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AbputPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import HomePageWithNavigate from "./pages/HomePageWithNavigate";
import projectsData from "./projects-data.json";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/" element={<HomePageWithNavigate />}></Route> */}
        <Route path="/about" element={<AboutPage />}></Route>
        <Route
          path="/projects"
          element={<ProjectsPage projects={projectsData} />}
        ></Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}
export default App;
