import Layout from "../../Components/Layout/Layout";

function Healify () {
  return (
    <div className="py-18 px-25 dot-cursor min-h-screen">
      <Layout/>
        <h1 className="font-mono font-bold text-2xl mt-18 text-[#161616]">Healify</h1>
        <p className="font-mono text-gray-500 mt-2">Healify is a digital hospital built to make healthcare more accessible, comfortable, and human centered. No more long waits or crowded clinics just fast, reliable care from trusted professionals, available anytime, anywhere.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-2xl transition-shadow duration-500 dot-cursor-footer border border-[#cacaca] w-200 h-120">
          <img src="/prjk-1.png" alt="Project C" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Healify;
