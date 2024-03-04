import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import { FaLinkedin } from "react-icons/fa";


const Contact:React.FC = () => {
  return ( 
    <div id='contact' className='bg-[#242424]   py-10 h-[70vh]'>
     
        <div className='flex justify-center'>
        
       
       <h2 className='text-white font-bold text-5xl absolute mt-2 '>Contacts</h2>
        <div className='w-[150px] h-[22px] bg-[#D63484]  mt-8 ml-20 '></div>
        
       </div>

        <div className='flex justify-evenly py-20'>
        <div>
        <h3 className='text-2xl font-bold w-[200px] bg-gradient-to-r from-red  to-green  text-transparent bg-clip-text inline-block '>Have a Question or want to work together?</h3>
        </div>
          
       <div className='flex gap-20 ' >
       
        <div className=''>
            <a href="https://wa.link/55p1g9  "><div className='flex gap-3 font-bold text-white'>
            
            {<FaPhone className='mt-1 fill-pink' />}
                <h3>PHONE</h3>    
            </div>
            <span className='text-white'>+2348161330375</span></a>
        </div>
          <div>
        <a href="mailto:edemahd@gmail.com"><div className='flex gap-3 font-bold text-white'>
        {<MdEmail className='mt-1 fill-pink' />}
         
                <h3>EMAIL</h3>    
            </div>
            <span className='text-white'>edemahd@gmail.com</span></a>
        </div>

        <div className='flex  w-full gap-10'>
            <a href="https://www.facebook.com/profile.php?id=100004742351711&mibextid=LQQJ4d">{<FaFacebookF className='fill-pink' />}</a>
          <a href="https://x.com/AmarachiVee"> { <FaSquareXTwitter className='fill-pink' />}</a>
           <a href="https://github.com/veramarach">{<FaGithub className='fill-pink'/>}</a>
           <a href="https://www.linkedin.com/in/vera-amarachi-33782b27a">{<FaLinkedin  className='fill-pink'/>}</a>
        </div>
        
       </div>
      </div>

    </div>
  )
}

export default Contact