import React from 'react'
import logo from "../assets/Screenshot 2024-03-04 153724.png"

const Projects:React.FC= () => {
  return (
    <div id='project' className="  bg-[#242424] w-full h-[100vh] tablet:h-[170vh]  py-6">
        <div className='flex justify-center'>
       <h2 className='text-white font-bold text-5xl underline decoration-pink tracking-[4px] tablet:text-3xl '>Projects</h2>
       </div>

       <div className='flex w-full justify-center tablet:flex-col tablet:items-center' >
         <div className=' bg-[#3216bb] w-[55%] h-[500px] tablet:h-[300px] tablet:w-[80%]  flex-col flex mt-8 hover:animate-pulse '>
            <a href="https://ecommerce-int.vercel.app/">
            <div className='bg-[#f1f1f1] h-[370px]  w-[90%]  tablet:h-[220px]  tablet:mt-10 mt-16'>
              <img className=' object-contain h-[370px] tablet:h-[220px]' src={logo}/>
            </div>
            </a>
          </div>
        
            <div className='text-white mt-14 relative right-14 top-16 tablet:mt-0 tablet:top-0 tablet:right-0  tablet:text-center '>
              <h2 className=' font-bold text-3xl w-[250px] tablet:text-xl tablet:w-full tablet:relative tablet:bottom-9 '>Mr Bara Ecommerce App</h2>
              <p className='w-[300px] font-light '>FullStack ecommerce application built with React,Node js,Express js and MongoDB</p>

             <div className='mt-8  flex flex-col gap-8 tablet:mt-4 tablet:gap-6'>
             <a href="https://ecommerce-int.vercel.app/">
                <span className=' font-bold text-white  tracking-[6px] underline decoration-[#D63484] text-[20px]'>Live App</span>
              </a>

              <div>
              <a href="https://github.com/veramarach/EcommerceApp">
                <span className=' font-bold  tracking-[6px] text-white  underline decoration-[#D63484] text-[20px]'>Learn More</span>
              </a>
              </div>
             </div>
            </div>
        </div>

    </div>
  )
}

export default Projects