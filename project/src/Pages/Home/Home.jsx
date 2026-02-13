import { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Layout from "../../Components/Layout/Layout.jsx";

function Home() {
  useEffect(() => {
    gsap.to(".marquee-track", {
      x: "-100%",       
      duration: 60,     
      repeat: -1,       
      ease: "linear"    
    });
  }, []);

  return (
    <div className="py-18 px-25 dot-cursor">
      <Layout />

      <h1 className="font-mono font-bold mt-18 text-[#161616] text-2xl">Preview My Projects</h1>
      <p className="font-mono text-gray-500 text-sm mt-3 mb-2">Click the card to full page</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
        <Link to="/project/healify">    
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-2xl transition-shadow duration-500 custom-cursor border border-[#cacaca]">
          <img src="/prjk-1.png" alt="Project C" className="w-full h-full object-cover" />
        </div>
         </Link>
        <Link to="/project/nusago">        
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-2xl transition-shadow duration-500 custom-cursor border border-[#cacaca]">
          <img src="/prjk-2.png" alt="Project C" className="w-full h-full object-cover" />
        </div>
        </Link>
        <Link to="/project/blog-petik">        
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-2xl transition-shadow duration-500 custom-cursor border border-[#cacaca]">
          <img src="/prjk-3.png" alt="Project C" className="w-full h-full object-cover" />
        </div>
        </Link>
        <span className="flex justify-between text-sm">
        <p className="font-mono text-[#161616]">Healify</p>
        <p className="font-mono text-gray-500">Dummy Project</p>
        </span>
        <span className="flex justify-between text-sm">
        <p className="font-mono text-[#161616]">nusaGo</p>
        <p className="font-mono text-gray-500">Dummy Project</p>
        </span>
        <span className="flex justify-between text-sm">
        <p className="font-mono text-[#161616]">PeTIK Blog</p>
        <p className="font-mono text-gray-500">Dummy Project</p>
        </span>                 
      </div>


      <div className="mt-18">
        <h1 className="font-mono font-bold text-[#161616]">Education</h1>
        <hr className="mt-4 text-gray-300" />
        <div className="flex justify-between">
          <span>
          <p className="font-mono mt-5 text-[#161616]">PeTIK Depok</p>
          <p className="font-mono mt-2 text-gray-500 text-sm">Web Development</p>
          </span>
          <p className="font-mono mt-5">2025-2026</p>
        </div>
        <hr className="mt-4 text-gray-300" />
        <div className="flex justify-between">
          <span className="inline-block">
          <p className="font-mono mt-5 text-[#161616]">Pondok IT</p>
          <p className="font-mono mt-2 text-sm text-gray-500">Multimedia</p>
          </span>
          <p className="font-mono mt-5">2024-2025</p>
        </div>
        <hr className="mt-4 text-gray-300" />
      </div>
      <div className="mt-18">
        <h1 className="font-mono font-bold text-[#161616]">Experience</h1>
        <hr className="mt-4 text-gray-300" />
        <div className="flex justify-between">
          <span>
          <p className="font-mono mt-5 text-[#161616]">Healify - PeTIK</p>
          <p className="font-mono mt-2 text-gray-500 text-sm">Successfully created a health service website using HTML and CSS, <br />delivering a clean interface and accessible health check features.</p>
          </span>
          <p className="font-mono mt-5">October 2025</p>
        </div>
        <hr className="mt-4 text-gray-300" />
        <div className="flex justify-between">
          <span className="inline-block">
          <p className="font-mono mt-5 text-[#161616]">NusaGo - PeTIK</p>
          <p className="font-mono mt-2 text-sm text-gray-500">Successfully created a tourism discovery website showcasing Indonesia’s destinations, <br />developed with Bootstrap, ReactStrap, and React JS.</p>
          </span>
          <p className="font-mono mt-5">January 2026</p>
        </div>
        <hr className="mt-4 text-gray-300" />
        <div className="flex justify-between">
          <span className="inline-block">
          <p className="font-mono mt-5 text-[#161616]">PeTIK Blog - PeTIK</p>
          <p className="font-mono mt-2 text-sm text-gray-500"> Successfully created multiple web initiatives under PeTIK, combining design, development,<br /> branding, and API management, all leveraging React JS as the core framework.</p>
          </span>
          <p className="font-mono mt-5">February 2026</p>
        </div>
        <hr className="mt-4 text-gray-300" />        
      </div>      

        <div className="mt-18">
        <h1 className="font-mono font-bold text-[#161616]">Skills</h1>
        <hr className="mt-4 text-gray-300" />
        <p className="font-mono text-gray-500 mt-4">I have skills in HTML5, JavaScript, React, Tailwind CSS, and Bootstrap for frontend development. I also have basic knowledge of Node.js, MySQL, and MongoDB, and I am still learning backend to strengthen my overall web development ability.</p>
      </div>

      <div className="relative overflow-hidden w-full mt-18">
        <div className="flex marquee-track">
          <img src="/logos.png" alt="logos" className="mx-5 h-12" />
          <img src="/logos.png" alt="logos" className="mx-5 h-12" />
          <img src="/logos.png" alt="logos" className="mx-5 h-12" />
          <img src="/logos.png" alt="logos" className="mx-5 h-12" />
          <img src="/logos.png" alt="logos" className="mx-5 h-12" />
          <img src="/logos.png" alt="logos" className="mx-5 h-12" />
          <img src="/logos.png" alt="logos" className="mx-5 h-12" />
          <img src="/logos.png" alt="logos" className="mx-5 h-12" />
          <img src="/logos.png" alt="logos" className="mx-5 h-12" />
          <img src="/logos.png" alt="logos" className="mx-5 h-12" />
          <img src="/logos.png" alt="logos" className="mx-5 h-12" />          
        </div>
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}

export default Home;
