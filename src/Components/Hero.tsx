import React from 'react'
import cv from "../assets/Emmanuel _Resume_10 (2).pdf"
import { MdWavingHand } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";

const Hero :React.FC= () => {
  return (
    <div id='home' className=' h-[100vh] tablet:p-24 tablet:h-full w-full  tablet:flex tablet:items-center tablet:justify-center  tablet:bg-[#242424] tablet:bg-hidden'>
    <div className='  bg-hero-image bg-cover   h-[100vh]  tablet:bg-hidden   '>
       
    <div className=' p-56   tablet:w-full   tablet:items-center tablet:justify-center tablet:flex-col '>
    <h2 className=' font-extrabold tablet:relative tablet:w-[350px]  text-6xl tablet:text-5xl  bg-gradient-to-r  from-blue-300 via-pink-400 to-indigo-300 flex tablet:animation:none  text-transparent bg-clip-text  animate-slide-down '>
            Hello,i'm Vera
            <MdWavingHand className='tablet:hidden animate-waving-hand  fill-pink-300 text-6xl font-bold  ml-2 ' />
        </h2>
       
      
        <h2 className='tablet:relative  tablet:text-5xl font-extrabold text-6xl  animate-slide-in  bg-gradient-to-r from-blue-300 via-pink-400  to-fuchsia-600 text-transparent bg-clip-text  '>I'm a full stack web developer</h2>
        <a href={cv}
        download=""
        >
          <div className='flex my-8 tablet:relative '>
        <div  className="border-pink-300  border-double w-[140px] h-[50px] p-6 border-4 text-pink-300 flex gap-2 items-center animate-slide-in hover:border-fuchsia-600">Resume
        <FaArrowDown />
        </div>
        </div></a>
    
       
       </div>  
       
    </div>
    </div>
  )
}

export default Hero