import React,{useState} from 'react'
 import { Link} from "react-scroll"
 import { MdClose, MdMenu} from "react-icons/md"


const Header:React.FC = () => {
  const [showMenu, setshowMenu] = useState(false)
  const [navbar, setnavbar] = useState(false)

  const HandleMenu = (e:any)=>{
    setshowMenu(!showMenu)
    e?.stopPropagation()
    
  }
  
  const changeBackground = () => {
    if(window.scrollY >= 70)
    {
      setnavbar(true)
    }else{
       setnavbar(false)
    }
  }
 
  window.addEventListener("scroll", changeBackground)

  return (
    <div className={` ${navbar ? "bg-black":"bg-transparent"} w-full h-[70px] flex justify-between fixed z-10 tablet:px-8 px-20`}>
      <h1>LOGO</h1>
        <div className=' tablet:hidden flex gap-10 mt-5 text-[18px] font-bold text-white cursor-pointer    '>

            <Link offset={-70}
            duration={2000}
            activeClass ="active"
            smooth = {true}
            to ="home">
            <nav className=' text-white hover:text-pink-400'>Home</nav>
            </Link>

            <Link offset={-70}
            duration={1000}
            activeClass ="active"
            smooth = {true}
            to ="about"
           >
            <nav className='text-white hover:text-pink-400' >About</nav>
            </Link>

            <Link offset={-70}
            duration={1000}
            activeClass ="active"
            smooth = {true}
            to ="project">
            <nav className=' text-white hover:text-pink-400 '>Project</nav>
            </Link>

            <Link offset={-70}
            duration={1000}
            activeClass ="active"
            smooth = {true}
            to ="contact">
            <nav className=' text-white hover:text-pink-400 '>Contact</nav>
            </Link>

        </div>

        <div className='text-white   lg:hidden xl:hidden tablet:block text-5xl  transition-colors duration-300 ease-in ' onClick={HandleMenu}>
        <MdMenu />
        </div>

    <div className={`fixed top-0 tablet:overflow-hidden bottom-0  pt-5 transition-all duration-700 ease-in  text-white  ${showMenu ? ' left-0 w-full': ' left-full w-full'} `}>
        
             <div className='justify-center flex text-4xl tablet:3xl  font-bold transition-all duration-300 ease-in ' onClick={HandleMenu}>
                <MdClose />
             </div>

          
            <div className=' text-center tablet:text-base  font-bold space-y-9 pt-5 flex flex-col bg-purple-300 ml-2'>
          <Link offset={-70}
            duration={900}
            activeClass ="active"
            smooth = {true}
            to ="home">
            <nav className=' text-white hover:text-pink-400'>Home</nav>
            </Link>

            <Link offset={-70}
            duration={900}
            activeClass ="active"
            smooth = {true}
            to ="about"
           >
            <nav className='text-white hover:text-pink-400' >About</nav>
            </Link>

            <Link offset={-70}
            duration={900}
            activeClass ="active"
            smooth = {true}
            to ="project">
            <nav className=' text-white hover:text-pink-400 '>Project</nav>
            </Link>

            <Link offset={-70}
            duration={1000}
            activeClass ="active"
            smooth = {true}
            to ="contact">
            <nav className=' text-white hover:text-pink-400 '>Contact</nav>
            </Link>
            </div>
          
        </div>

    </div>
  )
}

export default Header