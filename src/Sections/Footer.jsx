import { FaArrowUpFromBracket } from "react-icons/fa6"


const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  return (
    <section className='bg-gradient-to-r from-cyan-500 to-primary w-full bottom-0 relative'>
      <button onClick={scrollToTop} className="absolute -top-8 right-20 text-2xl border-none border-primary bg-gradient-to-r from-cyan-500 to-primary text-white p-4 rounded-full hover:scale-125 ease-in-out duration-200">
        <FaArrowUpFromBracket />
      </button>
      <div className='flex flex-col justify-center items-center gap-10 padding-y text-white'>
        <h1 className='font-bold font-montserrat'>
          PRASHANT KHADKA
        </h1>
        <p>
          All rights reserved &copy; 2024 Prashant Khadka
        </p>
      </div>
    </section>

  )
}

export default Footer
