
const About = () => {
  return (
    <section id="about" className="w-full flex xl:flex-row-reverse flex-col min-h-screen gap-10 max-container bg-gradient-to-r from-cyan-500 to-primary bg-cover">
      <div className="relative xl:w-3/5 flex flex-col padding-y items-top w-full padding-x">
        <h1 className="text-2xl font-montserrat py-6 font-bold text-white">ABOUT ME</h1>
        <p className="text-white-400 font-montserrat text-lg leading-8">I am a dynamic developer from the Melbourne, Victoria, fueled by an insatiable passion for crafting awe-inspiring websites. Armed with a knack for creativity and an adept ability to transform designs into seamless fully functional digital experiences. I bring a unique blend of vision and technical prowess to every project. My goal is to not only meet but exceed expectations, sculpting visually striking and intuitively responsive websites that leave a lasting impression on users. Let my skills and expertise help you in the journey of turning concepts into captivating digital realities.</p>
        <div className="grid grid-cols-2 py-8 text-white-400 text-lg"> 
          <div className="font-montserrat">  
            <h2 className="font-bold pb-1">NAME</h2>
            <p className="">Prashant Khadka</p>
          </div>
          <div className="font-montserrat">
            <h2 className="font-bold pb-1">EDUCATION</h2>
            <p>Master's of Information Technology</p>
          </div>
        </div>
        <div className="grid grid-cols-2 text-white-400">
          <div className="font-montserrat">
            <h2 className="font-bold pb-1">EMAIL</h2>
            <p>prashantkhadka.work@gmail.com</p>
          </div>
          <div className="font-montserrat">
            <h2 className="font-bold pb-1">EMPLOYMENT</h2>
            <p>Open</p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center xl:min-h-screen max-xl:py-20">
        <div className="relative z-10">
          <img src="src/assets/images/IMG_2314.JPG" height={500} width={400} className="rounded-full object-contain" />
        </div>
      </div>

    </section>
  )
}

export default About
