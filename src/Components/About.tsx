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
import logo10 from "../assets/product_design-removebg-preview.png"

const About:React.FC = () => {
  return (
    <div id='about' className='w-full h-[100vh] bg-[#242424] py-8 '>
       <div className='flex justify-center'>
       <h2 className='text-white font-bold text-5xl absolute mt-2 '>About</h2>
        <div className='w-[150px] h-[25px] bg-[#D63484]  mt-8 ml-20'></div>
       </div>
        <div className=' mt-10 flex justify-evenly w-[100%]'>
        <div >
            <div className=' mb-6 p-1  w-[300px] h-[300px]   bg-gradient-to-tr from-orange to-green  rounded-full '>
                    <div className="rounded-full p-[0.8px] mt-[0.8px]  w-[290px]  h-[290px] dark:bg-white ">
                        <img className=' object-cover rounded-full w-[290px] h-[290px] pb-2' src={pics}/>
                    </div>
                </div>
                <p className='w-[450px] font-semibold text-[13px]'>Fully Committed to the philosophy of life-long learning.I'm a full stack developer with a deep passion for javascript,React and all things web
                    development.The unique combination of creativity,logic,technology and never running out of new things to discover
                    drives my excitement and passion for web development.Right now you can find me hacking away primarily with Tailwind,Typscript,redux,HTML and CSS related.
                </p> 
               
            </div>
           
           <div className=' flex gap-10 justify-center animate-fade-down animate-delay-1000 animate-ease-linear'>
           <div>
               <div className='flex gap-4 flex-col mt-12  '>
               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 rounded-md flex  '>
                        <img src={logo1}  className=' object-contain w-full h-[50px] '/>
                        <span>HTML</span>
                    </div>
               </div>

               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 rounded-md flex '>
                        <img src={logo2} className=' object-contain w-full h-[50px]'/>
                        <span >REACT</span>
                    </div>
               </div>

               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 rounded-md flex '>
                        <img src={logo3} className='object-contain w-ful h-[50px]'/>
                        <span>EXPRESS.JS</span>
                    </div>
               </div>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
            <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 rounded-md flex gap-4  items-center'>
                        <img src={logo4} className="  h-[50px] object-contain"/>
                        <span>JAVASCRIPT</span>
                    </div>
               </div> 

               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 rounded-md flex items-center gap-5 '>
                        <img src={logo5} className=' object-contain h-[50px] w-[50px] ml-2'/>
                        <span>CSS</span>
                    </div>
               </div>
               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 rounded-md flex items-center'>
                        <img src={logo6} className='w-[60px] object-contain h-[50px]'/>
                        <span>MONGODB</span>
                    </div>
               </div>
               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 rounded-md flex items-center gap-2'>
                        <img src={logo7} className='h-[50px] ml-2 '/>
                        <span>GIT</span>
                        
                    </div>
               </div>
            </div>

            <div className='flex flex-col gap-4 mt-10'>
            <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 rounded-md flex items-center'>
                        <img src={logo8} className='h-[50px]'/>
                        <span>TAILWIND</span>
                    </div>
               </div>
               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 rounded-md flex items-center'>
                        <img src={logo9} className='h-[50px]'/>
                        <span>NODE.JS</span>
                    </div>
               </div>
               <div className=' bg-gradient-to-r from-orange to-green p-[0.8px] rounded-md'>
                    <div className=' bg-black p-3 rounded-md '>
                        <img src={logo10} className='h-[50px]'/>
                        <span>PRODUCT DESIGN</span>
                    </div>
               </div>
            </div>
           </div>


        </div>


    </div>
  )
}

export default About