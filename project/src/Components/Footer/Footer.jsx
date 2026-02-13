function Footer() {
  return (
    <footer className="py-6 border-t border-gray-300 text-center bg-[#161616] dot-cursor-footer h-35">
      <p className="text-sm text-gray-500 font-mono mt-3">
        © {new Date().getFullYear()} Ahmad Alwan Portofolio's. All rights reserved
      </p>
      <div className="flex justify-center gap-6 mt-3">
        <a href="https://github.com/ahmadalwan2" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#f9f9f9] transition-colors font-mono">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/ahmaddalwann/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#f9f9f9] transition-colors font-mono">
          LinkedIn
        </a>
        <a href="mailto:ahmdalwandsgn@gmail.com" target="_blank" className="text-gray-500 hover:text-[#f9f9f9] transition-colors font-mono">
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
