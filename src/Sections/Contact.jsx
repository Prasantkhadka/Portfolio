import { FaArrowAltCircleRight, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { HiOutlineMail } from 'react-icons/hi';


const Contact = () => {
  return (
    // Contact Section
    <section id="contact" className="flex flex-col justify-center items-center bg-gray-100 w-full min-h-screen max-container p-4">
      <h1 className="font-bold font-montserrat text-2xl">GET IN TOUCH</h1>
    <div className="flex justify-center items-center xl:flex-row flex-col">
      <div className="flex relative flex-col padding leading-6 gap-2 xl:w-1/2 w-full">
        <h1 className="text-2xl font-bold py-2">Contact Me</h1>
        <h2 className="text-lg font-bold items-center py-4">
          Let's Work Together
        </h2>
        <p className="text-slate-gray">
          I am always open to new opportunities and collaborations. If you are interested working with me or just want to say hi, feel free to reach out to me. I will get back to you as soon as possible.
        </p>
        <div className="flex text-slate-gray mt-8 gap-2 justify-start items-center">
          <FaArrowAltCircleRight />
          <p>Prashantkhadka.work@gmail.com</p>
        </div>
        <div className='flex pt-4 gap-4'>
          <a href='https:/www.linkedin.com/in/prashant-khadka-91013627b/' target='_blank' className='text-xl text-blue-500 '>
            <FaLinkedin size={30} className='duration-300 hover:text-blue-600 hover:text-4xl hover:scale-125' />
          </a>
          <a href='https:/www.linkedin.com/in/prashant-khadka-91013627b/' target='_blank' className='text-xl text-slate-gray'>
            <HiOutlineMail size={30} className='duration-300 hover:text-slate-600 hover:text-4xl hover:scale-125' />
          </a>
          <a href='https://www.instagram.com/prasant_khadka/?hl=en' target='_blank' className='text-xl text-coral'>
            <FaInstagram size={30} className='duration-300 hover:text-red-500 hover:text-4xl hover:scale-125' />
          </a>
          <a href='https://github.com/Prasantkhadka' target='_blank' className='text-xl text-black'>
            <FaGithub size={30} className='duration-300 hover:text-4xl hover:scale-125' />
          </a>
        </div>
      </div>
      <div className="relative flex justify-center items-center xl:w-1/2 w-full">
        <form action="https://getform.io/f/zazkzjdb" method="POST" className="flex flex-col max-w-[600px] w-full">
          <input type="text" placeholder="Name" name='name' className="p-2 border-2 border-gray-400 rounded-md" />
          <input type="email" placeholder="Email" name='email' className="p-2 my-4 border-2 border-gray-400 rounded-md" />
          <textarea name="message" rows="10" placeholder="Message" className="p-2 border-2 border-gray-400 rounded-md"></textarea>
          <button className="mt-2 px-4 py-3 border-2 text-lg font-bold rounded-lg bg-primary text-gray-100 hover:bg-white hover:text-primary hover:border-primary duration-300">Send Message</button>
        </form>
      </div>  
    </div>

    </section>
    
  )
}

export default Contact
