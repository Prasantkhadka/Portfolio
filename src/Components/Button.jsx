

const Button = ({ label }) => {
  return (
    <>
      <button className="flex justify-center items-center px-7 py-4 border-2 font-montserrat text-lg font-bold leading-none rounded-full bg-white border-[#FF4040] text-[#FF4040] hover:bg-[#FF4040] hover:text-white transition-slide duration-300">
      {label}
      </button>
    </>
    
  )
}

export default Button
