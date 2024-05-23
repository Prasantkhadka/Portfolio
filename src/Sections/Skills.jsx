import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub, FaNodeJs, FaChevronLeft, FaChevronRight} from 'react-icons/fa';

const Skills = () => {

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft -= 500
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft += 500
  }

  return (
    <section id='skills' className='flex flex-col gap-8 items-center'>
      <div className="flex relative items-center w-full gap-4 py-20 mb-10">
        <FaChevronLeft onClick={slideLeft} size={30} className='cursor-pointer hover:text-[#FF4040] duration-200'/>
        <div id='slider' className='flex relative items-center gap-16 text-8xl w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'> 
          <div className='grid gap-4 hover:scale-105 ease-in-out hover:text-[#FF4040] duration-300 cursor-pointer'>
            <FaHtml5 className=''/>
            <p className='text-2xl font-bold'>HTML</p>
          </div>
          <div className='grid gap-4 hover:scale-105 ease-in-out hover:text-[#FF4040] duration-300 cursor-pointer'>
            <FaCss3 />
            <p className='text-2xl font-bold'>CSS</p>
          </div>
          <div className='grid gap-4 hover:scale-105 ease-in-out hover:text-[#FF4040] duration-300 cursor-pointer'>
            <FaJs />
            <p className='text-2xl font-bold'>JavaScript</p>
          </div>
          <div className='grid gap-4 hover:scale-105 ease-in-out hover:text-[#FF4040] duration-300 cursor-pointer'>
            <i class="devicon-jquery-plain"></i>
            <p className='text-2xl font-bold'>jQuery</p>
          </div>
          <div className='grid gap-4 hover:scale-105 ease-in-out hover:text-[#FF4040] duration-300 cursor-pointer'>
            <FaReact />
            <p className='text-2xl font-bold'>React</p>
          </div>
          <div className='grid gap-4 hover:scale-105 ease-in-out hover:text-[#FF4040] duration-300 cursor-pointer'>
            <i class="devicon-tailwindcss-original"></i>
            <p className='text-2xl font-bold'>Tailwind CSS</p>
          </div>
          <div className='grid gap-4 hover:scale-105 ease-in-out hover:text-[#FF4040] duration-300 cursor-pointer'>
            <FaGithub />
            <p className='text-2xl font-bold'>Version Control</p>
          </div>
          <div className='grid gap-4 hover:scale-105 ease-in-out hover:text-[#FF4040] duration-300 cursor-pointer'>
            <FaNodeJs />
            <p className='text-2xl font-bold'>Node.js</p>
          </div>
        </div>
        <FaChevronRight onClick={slideRight} size={30} className='cursor-pointer hover:text-[#FF4040]'/>
        
      </div>
    </section>
    
  )
}


export default Skills
