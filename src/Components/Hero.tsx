import React from 'react'
import cv from "../assets/Emmanuel _Resume_10 (2).pdf"
import { MdWavingHand } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";

const Hero :React.FC= () => {
  return (
    <div id='home' className=' h-[100vh]  w-full  tablet:flex tablet:items-center tablet:justify-center   tablet:overflow-hidden tablet:bg-[#242424]'>
    <div className='  bg-hero-image bg-cover h-[100vh] tablet:bg-none  '>
       <div className=' p-56 tablet:p-20'>  
    <div className=' bg-red tablet:w-full tablet:p-10 tablet:py-14 tablet:px-12   tablet:items-center tablet:justify-center tablet:flex-col '>
    <h2 className=' font-extrabold tablet:w-[300px] text-5xl tablet:text-3xl bg-gradient-to-r from-red to-green text-transparent bg-clip-text flex animate-slide-down '>
            Hello,i'm Vera
            <MdWavingHand className='tablet:hidden animate-waving-hand fill-pink text-6xl font-bold  ml-2 ' />
        </h2>
       
      
        <h2 className=' tablet:text-3xl font-extrabold text-5xl  animate-slide-in bg-gradient-to-r from-red  to-orange text-transparent bg-clip-text  '>I'm a full stack web developer</h2>
        <a href={cv}
        download=""
        >
          <div className='flex my-8 '>
        <div  className="border-pink border-double w-[140px] h-[50px] p-6 border-4 text-pink flex gap-2 items-center animate-slide-in hover:border-[#D63484]">Resume
        <FaArrowDown />
        </div>
        </div></a>
    </div>
       
       </div>  
       
    </div>
    </div>
  )
}

export default Hero