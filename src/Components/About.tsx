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
    <div id='about' className=' px-20 tablet:justify-center  tablet:px-0 py-12 h-[100vh] tablet:relative tablet:bg-transparent tablet:h-full bg-[#242424]   tablet:py-0  tablet:flex   tablet:flex-col tablet:items-center  '>
    
       <div className='flex justify-center tablet:flex-col ' >
       <h2 className='text-white font-bold text-5xl underline decoration-pink-400 tracking-[4px] tablet:text-3xl text-deco '>About</h2>
       </div >
        <div className=' tablet:mt-6  mt-12 tablet:flex-col py-10 flex   '>
        <div className='tablet:flex-col  flex gap-20' >
           <div className='tablet:flex-col tablet:items-center tablet:justify-center'>
           <div className=' mb-6 p-1 tablet:mx-auto  w-[300px] h-[300px] tablet:h-[200px]  tablet:w-[200px]  bg-gradient-to-tr from-purple-500 to-green-600  rounded-full '>
                    <div className="rounded-full  p-[0.6px] mt-[0.4px] tablet:h-[190px] tablet:w-[190px] w-[290px]  h-[290px] dark:bg-white ">
                        <img className=' object-fit rounded-full  w-full tablet:h-[190px] tablet:w-[190px] pb-2' src={pics}/>
                    </div>
                </div>
                <p className='w-[450px] font-semibold text-[13px]  text-white tablet:text-center tablet:w-full  tablet:p-2'>Fully Committed to the philosophy of life-long learning.I'm an ALX certified Virtual assistant and a  Mern stack developer with a deep passion for carrying out administrative task and javascript,React and all things web
                    development.The unique combination of creativity,logic,technology and never running out of new things to discover
                    drives my excitement and passion for web development.Right now you can find me hacking away primarily with Tailwind,Typscript,redux,HTML and CSS related.
                </p> 
           </div>
                
                <div className='flex flex-wrap gap-2 tablet:items-center tablet:justify-center'>
                {Skills?.map((props, i) => (
                    <div key={i} className='flex justify-center items-center'>
                        
                       
                    <div className='bg-gradient-to-r from-purple-300 to bg-green-600  rounded-md p-[0.8px]'>
                    <div className=' bg-black flex tablet:w-[250px]  p-6 w-[150px] items-center rounded-md  h-[100px] ' >
                          <span className=' text-[10px] text-white font-bold'> {props.text}</span>
                          <img  src={props.image} className='w-full object-contain h-10'/>
                       </div>
                    </div>
                    </div>
                ))}
        
           </div>
        </div>
        </div>

    </div>
  )
}

export default About