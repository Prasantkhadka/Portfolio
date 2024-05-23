
const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-r from-cyan-500 to-primary  min-h-screen w-full">
      <div className="max-container flex flex-col pt-12 items-center justify-center">
        <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 padding-x py-10">
          <div className="flex relative hover:scale-105 ease-in-out duration-300 shadow-current shadow-2xl">
            <a href="/" className="flex relative w-full">
              <img src="./src/Assets/images/background.avif"  alt="background" className="object-cover w-full h-auto rounded-lg" />
              <h1 className="absolute inset-0 flex items-center justify-center text-slate-600 text-2xl z-10">Coming Soon...</h1>
              
            </a>
             
          </div>
          <div className="flex relative hover:scale-105 ease-in-out duration-300 shadow-current shadow-2xl">
            <a href="/" className="flex relative w-full">
              <img src="./src/Assets/images/background.avif"  alt="background" className="object-cover w-full h-auto rounded-lg" />
              <h1 className="absolute inset-0 flex items-center justify-center text-slate-600 text-2xl z-10">Coming Soon...</h1>
            </a>  
          </div>
          <div className="flex relative hover:scale-105 ease-in-out duration-300 shadow-current shadow-2xl">
            <a href="/" className="flex relative w-full">
              <img src="./src/Assets/images/background.avif"  alt="background" className="object-cover w-full h-auto rounded-lg" />
              <h1 className="absolute inset-0 flex items-center justify-center text-slate-600 text-2xl z-10">Coming Soon...</h1>
            </a>  
          </div>
          <div className="flex relative hover:scale-105 ease-in-out duration-300 shadow-current shadow-2xl">
            <a href="/" className="flex relative w-full">
              <img src="./src/Assets/images/background.avif"  alt="background" className="object-cover w-full h-auto rounded-lg" />
              <h1 className="absolute inset-0 flex items-center justify-center text-slate-600 text-2xl z-10">Coming Soon...</h1>
            </a>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

