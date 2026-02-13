import "./index.css"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import About from "./Pages/About/About.jsx"
import Project from "./Pages/Project/Project.jsx"
import Healify from "./Pages/Healify/Healify.jsx";
import Blog from "./Pages/Blog-PeTIK/Blog-PeTIK.jsx";
import Nusago from "./Pages/nusaGo/nusaGo.jsx";
import Error from "./Pages/Error/Error.jsx";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/healify" element={<Healify />} />
          <Route path="/project/nusago" element={<Nusago />} />
          <Route path="/project/blog-petik" element={<Blog />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
          <Footer/>
      </Router>
  )
}

export default App
