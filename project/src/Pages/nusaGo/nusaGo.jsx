import Layout from "../../Components/Layout/Layout";

function Nusago () {
  return (
    <div className="py-18 px-25 dot-cursor min-h-screen">
      <Layout/>
        <h1 className="font-mono font-bold text-2xl mt-18 text-[#161616]">nusaGo</h1>
        <p className="font-mono text-gray-500 mt-2">NusaGo is a digital platform designed to help users discover and explore Indonesia’s best travel destinations. Its main focus is showcasing the natural beauty of the archipelago, from forests and mountains to exotic beaches.
        <br />
        <br />
        Professionally, NusaGo serves both as a tourism promotion medium and a practical guide for travelers. With a modern design and simple navigation, it emphasizes an easy and engaging exploration experience, supporting Indonesia’s branding as a country rich in natural wonders.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-2xl transition-shadow duration-500 dot-cursor-footer border border-[#cacaca] w-200 h-120">
          <img src="/prjk-2.png" alt="Project C" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Nusago;
