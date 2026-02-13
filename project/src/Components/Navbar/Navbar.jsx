import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="mt-4 flex gap-3 font-mono">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "font-bold" : "font-normal"}>Home
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "font-bold" : "font-normal"}
        >
          About
        </NavLink>
        <NavLink 
          to="/project" 
          className={({ isActive }) => isActive ? "font-bold" : "font-normal"}
        >
          Project
        </NavLink>
        <a 
          href="/cv.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="font-normal"
        >
          CV
        </a>
      </div>
    </div>
  );
}

export default Navbar;
