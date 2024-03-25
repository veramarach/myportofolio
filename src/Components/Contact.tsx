import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";


const Contact:React.FC = () => {
  return ( 
    <div id='contact' className='  bg-[#242424]  tablet:h-full tablet:absolute  tablet:py-16   py-16 h-[80vh]'>
        <div className='flex justify-center '>
       <h2 className='text-white font-bold text-5xl tablet:text-3xl underline decoration-pink-400 tracking-[4px] '>Contacts</h2>
       </div>

        <div className='flex justify-evenly py-20 tablet:flex-col tablet:py-10 tablet:px-6'>
        <div>
        <h3 className='text-2xl font-bold w-[200px] bg-gradient-to-tr from-pink-500 via-lime-300 to-violet-500 bg-clip-text text-transparent   '>Have a Question or want to work together?</h3>
        </div>
          
       <div className='flex gap-20 tablet:flex-col tablet:gap-6 tablet:py-10 ' >
       
        <div className=''>
            <a href="https://wa.link/55p1g9  "><div className='flex gap-3 font-bold text-white'>
            
            {<FaPhone className='mt-1 fill-pink-400' />}
                <h3>PHONE</h3>    
            </div>
            <span className='text-white'>+2348161330375</span></a>
        </div>
          <div>
        <a href="mailto:edemahd@gmail.com"><div className='flex gap-3 font-bold text-white'>
        {<MdEmail className='mt-1 fill-pink-400' />}
         
                <h3>EMAIL</h3>    
            </div>
            <span className='text-white'>edemahd@gmail.com</span></a>
        </div>

        <div className='flex  w-full gap-10'>
            <a href="https://www.facebook.com/profile.php?id=100004742351711&mibextid=LQQJ4d">{<FaFacebookF className='fill-pink-400' />}</a>
          <a href="https://x.com/AmarachiVee"> { <FaSquareXTwitter className='fill-pink-400' />}</a>
           <a href="https://github.com/veramarach">{<FaGithub className='fill-pink-400'/>}</a>
           <a href="https://www.linkedin.com/in/vera-amarachi-33782b27a">{<FaLinkedin  className='fill-pink-400'/>}</a>
        </div>
        
       </div>
      </div>

    </div>
  )
}

export default Contact