import React from 'react'
import cv from "../assets/Emmanuel _Resume_10 (2).pdf"


import { MdWavingHand } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";

const Hero :React.FC= () => {
  return (
    <div id='home' className=' h-[90vh] w-screen '>
    <div className='   bg-hero-image bg-cover h-[90vh] '>
       <div className=' p-56 '>  
      <h2 className=' font-extrabold text-5xl bg-gradient-to-r from-red to-green text-transparent bg-clip-text flex animate-slide-down '>
            Hello,
            <span className=''>i'm Vera</span>
            <MdWavingHand className=' animate-waving-hand fill-pink text-6xl font-bold  ml-2' />
        </h2>
       
        <h2 className=' font-extrabold text-5xl  animate-slide-in bg-gradient-to-r from-red  to-orange text-transparent bg-clip-text  '>I'm a full stack web developer</h2>
        <a href={cv}
        
        >
          <div className='flex my-8'>
        <div  className="border-pink border-double w-[140px] h-[50px] p-6 border-4 text-pink flex gap-2 items-center animate-slide-in hover:border-[#D63484]">Resume
        <FaArrowDown />
        </div>
        </div></a>
       </div>  
       
    </div>
    </div>
  )
}

export default Hero