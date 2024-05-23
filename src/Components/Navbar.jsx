
import { HiOutlineMail } from 'react-icons/hi';
import logo from '../assets/icons/logo2.png';
import { navLinks } from '../constants';
import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  }

  return (
    <header className='padding-x py-4 absolute z-30 w-full bg-[#FF4040]'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/" className='z-20'>
          <h1 className='text-xl text-white font-bold font-montserrat hover:text-black duration-200'>Prashant Khadka</h1>
        </a>
        <ul className={`flex-1 flex justify-end items-center text-white gap-16 max-lg:hidden`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat font-semibold leading-normal text-lg hover:text-black duration-300'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* hamburger */}
        <div onClick={toggleNavbar} className='lg:hidden z-20'>
          {!isOpen ? <FaBars className='hover:text-black duration-300 cursor-pointer' /> : <FaTimes className='hover:text-black duration-300 cursor-pointer' />}
        </div>
        {/* Mobile Menu */}
        <ul className={!isOpen ? 'hidden' : 'lg:hidden bg-white text-black absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
          {navLinks.map((item) => (
            <li key={item.label} className='py-6 text-4xl '>
              <a href={item.href} className='font-montserrat font-bold text-lg hover:text-[#FF4040] duration-200 cursor-pointer' onClick={closeNavbar}>
                {item.label}
              </a>
            </li>
          ))}
          <div className='flex fixed top-[35%] left-[5%]'>
            <ul>
              <li>
                <a href='https:/www.linkedin.com/in/prashant-khadka-91013627b/' target='_blank' className='text-xl text-blue-500 '>
                  <FaLinkedin size={30} className='duration-300 hover:text-blue-600 hover:text-4xl hover:scale-125 mb-2' />
                </a>
                <a href='https:/www.linkedin.com/in/prashant-khadka-91013627b/' target='_blank' className='text-xl text-slate-gray'>
                  <HiOutlineMail size={30} className='duration-300 hover:text-slate-600 hover:text-4xl hover:scale-125 mb-2' />
                </a>
                <a href='https://www.instagram.com/prasant_khadka/?hl=en' target='_blank' className='text-xl text-coral'>
                  <FaInstagram size={30} className='duration-300 hover:text-red-500 hover:text-4xl hover:scale-125 mb-2' />
                </a>
                <a href='https://github.com/Prasantkhadka' target='_blank' className='text-xl text-black'>
                  <FaGithub size={30} className='duration-300 hover:text-4xl hover:scale-125' />
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
