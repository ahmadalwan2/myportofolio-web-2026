import Layout from "../../Components/Layout/Layout";

function Blog () {
  return (
    <div className="py-18 px-25 dot-cursor min-h-screen text-[#161616]">
      <Layout/>
        <h1 className="font-mono font-bold text-2xl mt-18">Blog PeTIK</h1>
        <p className="font-mono text-gray-500 mt-2">PeTIK Blog is the official media of Pesantren Teknologi Informasi dan Komunikasi (PeTIK), a modern Islamic boarding school that integrates religious education with technology skills. It serves both as a communication channel and a branding tool, publishing articles and updates related to IT while presenting the institution’s vision.
        <br />
        <br />
        Professionally, PeTIK Blog plays two main roles: as an educational platform, offering content on programming, web development, mobile apps, and tech trends; and as an institutional medium, showcasing PeTIK’s identity as a school that produces graduates with dual expertise in religious knowledge and digital skills.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-2xl transition-shadow duration-500 dot-cursor-footer border border-[#cacaca] w-200 h-120">
          <img src="/prjk-3.png" alt="Project C" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Blog;
