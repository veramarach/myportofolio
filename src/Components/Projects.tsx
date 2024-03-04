import React from 'react'

const Projects:React.FC= () => {
  return (
    <div id='project' className="bg-[#242424] w-full h-[100vh]  py-8">
        <div className='flex justify-center'>
       <h2 className='text-white font-bold text-5xl absolute mt-2 '>Projects</h2>
        <div className='w-[150px] h-[25px] bg-[#D63484]   mt-8 ml-20'></div>
       </div>

       
       <div className='flex w-full justify-center' >
         
         
         <div className=' bg-[#3216bb] w-[55%] h-[500px] flex-col flex mt-16 hover:animate-pulse '>
            <a href="https://ecommerce-int.vercel.app/">
            <div className='bg-[#f1f1f1] h-[370px] w-[90%] mt-16'></div>
            </a>
          </div>
         
         

            <div className='text-white mt-14 relative right-14 top-16'>
              <h2 className=' font-bold text-3xl w-[250px]'>Mr Bara Ecommerce App</h2>
              <p className='w-[300px] font-light'>FullStack ecommerce application built with React,Node js,Express js and MongoDB</p>

             <div className='mt-8  flex flex-col gap-8'>
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