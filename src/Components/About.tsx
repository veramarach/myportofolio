import React from 'react'
import pics from "../assets/curly-hair-black-woman-silhouette_268803-142-removebg-preview.png"
import logo1 from "../assets/html logo.jpg"
import logo2 from "../assets/react logo.png"
import logo3 from "../assets/express_logo-removebg-preview.png"
import logo4 from "../assets/javascript logo.png"
import logo5 from "../assets/css_logo-removebg-preview.png"
import logo6 from "../assets/mongodb_logo-removebg-preview.png"
import logo7 from "../assets/git_logo-removebg-preview.png"
import logo8 from "../assets/tailwind.png"
import logo9 from "../assets/node_js_logo-removebg-preview.png"
import logo10 from "../assets/product design ui.png"

const About:React.FC = () => {
  return (
    <div id='about' className='w-full h-[100vh] tablet:h-full bg-[#242424] py-10  tablet:py-0  tablet:flex  tablet:flex-col tablet:items-center  '>
       <div className='flex justify-center tablet:flex-col' >
       <h2 className='text-white font-bold text-5xl underline decoration-pink tracking-[4px] tablet:text-3xl '>About</h2>
       </div>
        <div className='tablet:mt-6 mt-12 tablet:flex-col flex justify-evenly w-[100%]'>
        <div >
           <div className='tablet:flex tablet:items-center tablet:justify-center'>
           <div className=' mb-6 p-1  w-[300px] h-[300px] tablet:h-[200px]  tablet:w-[200px]  bg-gradient-to-tr from-orange to-green  rounded-full '>
                    <div className="rounded-full p-[0.8px] mt-[0.8px] tablet:h-[190px] tablet:w-[190px] w-[290px]  h-[290px] dark:bg-white ">
                        <img className=' object-cover rounded-full w-[290px] h-[290px] tablet:h-[190px] tablet:w-[190px] pb-2' src={pics}/>
                    </div>
                </div>
           </div>
                <p className='w-[450px] font-semibold text-[13px]  text-white tablet:text-center tablet:w-full tablet:text-[10px] tablet:p-2'>Fully Committed to the philosophy of life-long learning.I'm a full stack developer with a deep passion for javascript,React and all things web
                    development.The unique combination of creativity,logic,technology and never running out of new things to discover
                    drives my excitement and passion for web development.Right now you can find me hacking away primarily with Tailwind,Typscript,redux,HTML and CSS related.
                </p> 
            </div>
           
           <div className='tablet:mt-10 tablet:w-full flex gap-10 justify-center animate-fade-down animate-delay-1000 animate-ease-linear'>
           <div>
               <div className='flex gap-4 flex-col mt-12  '>
               <div className=' bg-gradient-to-r from-orange to-green tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px]  p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6  tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex  '>
                        <img src={logo1}  className=' object-contain w-full h-[50px] tablet:absolute  tablet:h-[20px] tablet:w-full tablet:top-14 '/>
                        <span className='tablet:text-[6px] tablet:mt-2'>HTML</span>
                    </div>
               </div>

               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px]  rounded-md'>
                    <div className=' bg-black p-6 tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex '>
                        <img src={logo2} className=' object-contain tablet:absolute  tablet:h-[20px] tablet:w-full tablet:top-32  h-[50px]'/>
                        <span className='text-[6px] tablet:mt-2'>REACT</span>
                    </div>
               </div>

               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px]  rounded-md'>
                    <div className=' bg-black p-6 tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col    rounded-md flex '>
                       
                       <img src={logo3} className='object-contain tablet:absolute  tablet:h-[20px] tablet:w-full tablet:bottom-10 h-[50px] '/>
                        <span className='tablet:text-[6px] tablet:mt-2'>EXPRESS.JS</span>
                       
                    </div>
               </div>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
            <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6  tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex gap-4  items-center'>
                        <img src={logo4} className="  h-[50px] object-contain tablet:absolute  tablet:h-[20px] tablet:w-[20px] tablet:top-2"/>
                        <span className='tablet:text-[6px] tablet:mt-2'>JAVASCRIPT</span>
                    </div>
               </div> 

               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex items-center gap-5 '>
                        <img src={logo5} className=' object-contain h-[50px] w-[50px] ml-2 tablet:absolute  tablet:h-[20px] tablet:w-[20px] tablet:top-20'/>
                        <span className='tablet:text-[6px] tablet:mt-2 '>CSS</span>
                    </div>
               </div>
               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px]  tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex items-center'>
                        <img src={logo6} className='w-[60px] object-contain tablet:absolute  tablet:h-[20px] tablet:w-[20px] tablet:top-36 h-[50px]'/>
                        <span className='tablet:text-[6px]'>MONGODB</span>
                    </div>
               </div>
               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex items-center gap-2'>
                        <img src={logo7} className='h-[50px] ml-2 tablet:absolute  tablet:h-[20px] tablet:w-[20px] tablet:bottom-5'/>
                        <span className='tablet:text-[6px] tablet:mt-2'>GIT</span>  
                    </div>
               </div>
            </div>

            <div className='flex flex-col gap-4 mt-10'>
            <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6  tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex items-center'>
                        <img src={logo8} className='h-[50px] tablet:absolute  tablet:h-[20px] tablet:w-[20px] tablet:top-12'/>
                        <span className='tablet:text-[6px] tablet:mt-2'>TAILWIND</span>
                    </div>
               </div>
               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex items-center'>
                        <img src={logo9} className='h-[50px] tablet:absolute  tablet:h-[20px] tablet:w-[20px]  tablet:top-28'/>
                        <span className='tablet:text-[6px] tablet:mt-2'>NODE.JS</span>
                    </div>
               </div>
               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 flex items-center  tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md '>
                        <img src={logo10} className='h-[50px] tablet:absolute  tablet:h-[20px] tablet:w-[20px] tablet:bottom-12 '/>
                        <span className='tablet:text-[4px]  tablet:mt-2  '>PRODUCTDESIGN</span>
                    </div>
               </div>
            </div>
           </div>
        </div>

    </div>
  )
}

export default About