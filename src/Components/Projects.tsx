import React from 'react'
import logo from "../assets/Screenshot 2024-03-04 153724.png"
import logo2 from "../assets/Screenshot 2024-11-22 192005.png"
import logo3 from "../assets/Screenshot 2024-11-24 000730.png"
import logo4 from "../assets/Screenshot 2024-11-23 235722.png"


const Projects:React.FC= () => {
  return (
    <div id='project' className="  bg-project bg-fixed bg-cover bg-no-repeat tablet:relative tablet:bg-transparent bg-[#3a3a3a] w-full px-20  py-14 tablet:h-full tablet:py-20 ">
   
        <div className='flex justify-center'>

       <h2 className='text-white font-bold text-5xl underline decoration-pink-400 tracking-[4px] tablet:text-3xl '>Projects</h2>
       </div>

       <div className='flex   justify-center flex-wrap gap-3 w-full '>
         
           <div>
           <a href="https://ecommerce-int.vercel.app/">
            <div className='bg-[#f1f1f1] p-2 h-[300px] hover:animate-pulse rounded-md w-[400px] tablet:h-[220px]  tablet:mt-10 mt-16'>
           
              <img className=' object-contain h-[300px] tablet:h-[220px]' src={logo}/>
              </div>
            </a>
        
            
           </div>

           <div>
           <a href="https://abdsalaam.com/">
            <div className='bg-[#f1f1f1] p-2 h-[300px] hover:animate-pulse rounded-md w-[400px] tablet:h-[220px]  tablet:mt-10 mt-16'>
          
              <img className=' object-contain h-[300px] tablet:h-[220px]' src={logo2}/>
              </div>
            </a>
        
              
           </div>

           <div>
           <a href="https://www.figma.com/proto/ni5AD9FyutS47alJujvzvX/JOB-LISTING-PORTAL?node-id=4-2&node-type=canvas&t=huhOa5K5Ww6Hms4o-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
            <div className='bg-[#f1f1f1] p-2 h-[300px] hover:animate-pulse rounded-md w-[400px] tablet:h-[220px]  tablet:mt-10 mt-16'>
      
              <img className=' object-contain h-[300px] tablet:h-[220px]' src={logo3}/>
              </div>
            </a>  
           </div>
            
           
           <a href="https://www.figma.com/proto/vi8BAm9EySWGKn9lXBmCSa/Untitled?node-id=3-31&node-type=canvas&t=UMpowk7CdeE05req-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
            <div className='bg-[#f1f1f1] p-2 h-[300px] hover:animate-pulse rounded-md w-[400px] tablet:h-[220px]  tablet:mt-10 mt-16'>
      
              <img className=' object-contain h-[300px] tablet:h-[220px]' src={logo4}/>
              </div>
            </a>  
           
            
            </div>
        

    </div>
  )
}

export default Projects