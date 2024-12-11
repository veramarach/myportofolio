import React from 'react'
import pics from "../assets/image00015.jpg"
import a from "../assets/html logo.jpg"
import b from "../assets/react logo.png"
import c from "../assets/express_logo-removebg-preview.png"
import d from "../assets/javascript logo.png"
import e from "../assets/css_logo-removebg-preview.png"
import f from "../assets/mongodb_logo-removebg-preview.png"
import g from "../assets/git_logo-removebg-preview.png"
import h from "../assets/tailwind.png"
import i from "../assets/node_js_logo-removebg-preview.png"
import j from "../assets/product design ui.png"
import k from "../assets/google-workspace3.png"

const About:React.FC = () => {

    const Skills = [
        {
            "image":a,
            "text":"HTML5"
        },
         {
            "image":b,
            "text":"REACT"
        },
        {
            "image":c,
            "text":"EXPRESS"
        },
        {
            "image":d,
            "text":"JAVASCRIPT"
        },
        {
            "image":e,
            "text":"CSS"
        },
        {
            "image":f,
            "text":"MONGODB"
        },
        {
            "image":g,
            "text":"GITHUB"
        },
        {
            "image":h,
            "text":"TAILWIND"
        },
        {
            "image":i,
            "text":"NODEJS"
        },
        {
            "image":j,
            "text":"UI/UX"
        },
        {
            "image":k,
            "text":"GOOGLE"
        },

    ]
  return (
    <div id='about' className=' px-20  py-12 h-[100vh] tablet:relative tablet:bg-transparent tablet:h-full bg-[#242424]   tablet:py-0  tablet:flex  tablet:flex-col tablet:items-center  '>
       <div className='flex justify-center tablet:flex-col ' >
       <h2 className='text-white font-bold text-5xl underline decoration-pink-400 tracking-[4px] tablet:text-3xl text-deco '>About</h2>
       </div >
        <div className=' tablet:mt-6 mt-12 tablet:flex-col py-10 flex   '>
        <div className='flex gap-20' >
           <div className='tablet:flex tablet:items-center tablet:justify-center'>
           <div className=' mb-6 p-1  w-[300px] h-[300px] tablet:h-[200px]  tablet:w-[200px]  bg-gradient-to-tr from-purple-500 to-green-600  rounded-full '>
                    <div className="rounded-full  p-[0.6px] mt-[0.4px] tablet:h-[190px] tablet:w-[190px] w-[290px]  h-[290px] dark:bg-white ">
                        <img className=' object-fit rounded-full  w-full tablet:h-[190px] tablet:w-[190px] pb-2' src={pics}/>
                    </div>
                </div>
                <p className='w-[450px] font-semibold text-[13px]  text-white tablet:text-center tablet:w-full tablet:text-[10px] tablet:p-2'>Fully Committed to the philosophy of life-long learning.I'm a Mern stack developer with a deep passion for javascript,React and all things web
                    development.The unique combination of creativity,logic,technology and never running out of new things to discover
                    drives my excitement and passion for web development.Right now you can find me hacking away primarily with Tailwind,Typscript,redux,HTML and CSS related.
                </p> 
           </div>
                
                <div className='flex flex-wrap gap-2'>
                {Skills?.map((props, i) => (
                    <div key={i} className='flex justify-center items-center'>
                        
                       
                    <div className='bg-gradient-to-r from-purple-300 to bg-green-600  rounded-md p-[0.8px]'>
                    <div className=' bg-black flex  p-6 w-[150px] items-center rounded-md  h-[100px] ' >
                          <span className=' text-[10px] text-white font-bold'> {props.text}</span>
                          <img  src={props.image} className='w-full object-contain h-10'/>
                       </div>
                    </div>
                    </div>
                ))}
                </div>
            {/* </div>
            
           
           <div className='tablet:mt-10 tablet:w-full flex gap-10 justify-center animate-fade-down animate-delay-1000 animate-ease-linear'>
           <div>
               <div className='flex gap-4 flex-col mt-12  '>
               <div className=' bg-gradient-to-r from-purple-500 to-green-600 tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px]  p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6  tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex  '>
                        <img src={logo1}  className=' object-contain w-full h-[50px] tablet:absolute  tablet:h-[20px]  tablet:w-full'/>
                        <span className='tablet:text-[6px] tablet:relative tablet:bottom-2  text-yellow-50'>HTML</span>
                    </div>
               </div>

               <div className=' bg-gradient-to-r from-purple-500 to-green-600 p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px]  rounded-md'>
                    <div className=' bg-black p-6 tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex '>
                        <img src={logo2} className=' object-contain tablet:absolute  tablet:h-[20px] tablet:w-full  h-[50px]'/>
                        <span className=' text-[10px] tablet:mt-2 tablet:relative tablet:bottom-4 text-yellow-50'>REACT</span>
                    </div>
               </div>

               <div className=' bg-gradient-to-r from-purple-500 to-green-600 p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px]  rounded-md'>
                    <div className=' bg-black p-6 tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col    rounded-md flex '>
                       
                       <img src={logo3} className='object-contain tablet:absolute  tablet:h-[20px] tablet:w-full  h-[50px] '/>
                        <span className='tablet:text-[6px] tablet:mt-2 tablet:relative tablet:bottom-4 text-yellow-50'>EXPRESS.JS</span>
                       
                    </div>
               </div>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
            <div className=' bg-gradient-to-r from-purple-500 to-green-600 p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6  tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex gap-4  items-center'>
                        <img src={logo4} className="  h-[50px] object-contain tablet:absolute  tablet:h-[20px] tablet:w-[20px]"/>
                        <span className='tablet:text-[6px] tablet:mt-2 tablet:relative tablet:bottom-4 text-yellow-50'>JAVASCRIPT</span>
                    </div>
               </div> 

               <div className=' bg-gradient-to-r from-purple-500 to-green-600 p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex items-center gap-5 '>
                        <img src={logo5} className=' object-contain h-[50px] w-[50px]  tablet:absolute  tablet:h-[20px] tablet:w-[20px] '/>
                        <span className='tablet:text-[6px] tablet:mt-2 tablet:relative tablet:bottom-4  text-yellow-50'>CSS</span>
                    </div>
               </div>
               <div className=' bg-gradient-to-r from-purple-500 to-green-600 p-[0.8px]  tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex items-center'>
                        <img src={logo6} className='w-[60px] object-contain tablet:absolute  tablet:h-[20px] tablet:w-[20px]  h-[50px]'/>
                        <span className='tablet:text-[6px] tablet:relative tablet:bottom-2 text-yellow-50'>MONGODB</span>
                    </div>
               </div>
               <div className=' bg-gradient-to-r from-purple-500 to-green-600 p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex items-center gap-2'>
                        <img src={logo7} className='h-[50px] ml-2 tablet:absolute  tablet:h-[20px] tablet:w-[20px]'/>
                        <span className='tablet:text-[6px]  tablet:relative tablet:bottom-3 text-yellow-50'>GIT</span>  
                    </div>
               </div>
            </div>

            <div className='flex flex-col gap-4 mt-10'>
            <div className=' bg-gradient-to-r from-purple-500 to-green-600 p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6  tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex items-center'>
                        <img src={logo8} className='h-[50px] tablet:absolute  tablet:h-[20px] tablet:w-[20px] '/>
                        <span className='tablet:text-[6px] tablet:mt-2 tablet:relative tablet:bottom-5 text-yellow-50'>TAILWIND</span>
                    </div>
               </div>
               <div className=' bg-gradient-to-r from-purple-500 to-green-600 p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md flex items-center'>
                        <img src={logo9} className='h-[50px] tablet:absolute  tablet:h-[20px] tablet:w-[20px] '/>
                        <span className='tablet:text-[6px] tablet:mt-2 tablet:relative tablet:bottom-4 text-yellow-50'>NODE.JS</span>
                    </div>
               </div>
               <div className=' bg-gradient-to-r from-purple-500 to-green-600 p-[0.8px] tablet:w-[50px] tablet:h-[50px] tablet:p-[0.8px] rounded-md'>
                    <div className=' bg-black p-6 flex items-center  tablet:w-full tablet:h-[5px]  tablet:items-center tablet:p-6 tablet:flex-col  rounded-md '>
                        <img src={logo10} className='h-[50px] tablet:absolute  tablet:h-[20px] tablet:w-[20px]'/>
                        <span className='tablet:text-[5px]  tablet:mt-2  tablet:relative tablet:bottom-4 text-yellow-50 '>PRODUCTDESIGN</span>
                    </div>
               </div>
            </div> */}
           </div>
        </div>

    </div>
  )
}

export default About