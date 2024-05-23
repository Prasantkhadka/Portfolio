import Button from "../Components/Button"

const Hero = () => {
  return (
    <section id='home' className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full padding-x pt-28">
        <h1 className="text-2xl font-montserrat font-bold">Hi I'm</h1>
        <h1 className="font-EBGaramond text-[68px] max-sm:text-4xl font-bold xl:bg-white xl:whitespace-nowrap relative z-10 pr-6">
          <span className="text-[#FF4040]">Prashant</span> Khadka 
        </h1>
        <h2 className="font-montserrat font-bold text-2xl">Web <span className="text-[#FF4040]">Developer</span></h2>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-2 mb-10 ">Ready to embark on a creative adventure? Dive into my portfolio and let's build something extraordinary together!</p>
        <div className="flex flex-row gap-4">
          <Button label="Hire Me" />
          <Button label="View My Portfolio" />
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-20">
        <div className="relative z-10">
          <img src="src/assets/images/ProfilePicture.JPG" height={500} width={400} className="rounded-full object-contain" />
        </div>
      </div>
      
    </section>
  )
}

export default Hero
