import Navbar from "../../Components/Navbar/Navbar.jsx";

function Error() {
  return (
    <div className="py-18 px-25 dot-cursor h-screen">
      <img
        src="/photo-porto-lg.png"
        alt="photo ini tidak support di device anda"
        className="w-28 h-28 object-cover rounded-lg"
      />
      <h1 className="mt-8 font-bold text-3xl font-mono text-[#161616]">Ahmad Alwan</h1>
      <span className="mt-1 text-gray-500 text-xl font-mono">Web Developer</span>
      <a className="w-34 mt-6 py-2 px-4 bg-[#161616] text-white rounded-lg hover:bg-[#bdbdbd] hover:text-black transition-colors duration-300 ease-in-out text-sm block font-mono cursor-pointer" href="/" rel="noopener noreferrer" >
        Back to home
      </a>
      <h1 className="mt-18 font-bold text-5xl font-mono text-[#161616]">404 Not Found</h1>
    </div>
  );
}

export default Error;
