import React from 'react'
import {useTypewriter} from 'react-simple-typewriter';
import cv from "../assets/Copy of Emmanuel-Amarachi Resume frontend (2).pdf"
import { FaArrowDown } from "react-icons/fa6";

const Hero :React.FC= () => {
const [text]= useTypewriter({
  words:["Product Designer", "Virtual Assistant", "Web Developer"],
  loop:Infinity,
  onLoopDone: () => {
    console.log(`loop completed after 5 runs!`)
  }
})
  
 
  return (
    <div id='home' className='h-[100vh] tablet:h-full w-full  tablet:flex tablet:items-center tablet:justify-center  tablet:bg-[#242424] tablet:bg-hidden'>
    <div className='  bg-cover   h-[100vh]  tablet:bg-hidden  '>
       
    <div className=' w-full  tablet:w-full   tablet:items-center tablet:justify-center  flex   flex-col px-20  py-72 '>
    
    <h1 className=' tablet:text-center flex-col font-extrabold  delay-75 gap-3 tablet:relative tablet:w-[350px]  
           text-7xl tablet:text-3xl  text-white flex tablet:animation:none  text-transparent'>
           <span> Hello,i am vera </span>
            <span className='tablet:text-2xl tablet:bg-gradient-to-tr from-pink-500 via-lime-300 to-violet-500 tablet:bg-clip-text tablet:text-transparent '>
            i'm a {text}
            </span>  
        </h1>
      
        
      
        <a href={cv}
        // download=""
        >
          <div className='flex tablet:relative mt-10 '>
            <div  className="border-white border-double w-[140px] h-[50px] p-6 border-4 text-white flex gap-2 items-center animate-slide-in  hover:border-fuchsia-600">Resume
               <FaArrowDown />
             </div>
        </div>
        </a>
       
       </div>  
       
       
    </div>
    </div>
  )
}

export default Hero