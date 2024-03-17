import React,{useState} from 'react'
 import { Link} from "react-scroll"
 import { MdClose, MdMenu} from "react-icons/md"


const Header:React.FC = () => {
  const [showMenu, setshowMenu] = useState(false)
  const HandleMenu = (e:any)=>{
    setshowMenu(!showMenu)
    e?.stopPropagation()
    
  }



  return (
    <div className='w-full bg-[#313131]  h-[70px] flex justify-end fixed z-10'>
        <div className=' tablet:hidden flex gap-[40px] mt-5 text-[18px] font-bold text-white cursor-pointer mr-40   '>

            <Link offset={-70}
            duration={2000}
            activeClass ="active"
            smooth = {true}
            to ="home">
            <nav className=' text-white hover:text-[#D63484]'>Home</nav>
            </Link>

            <Link offset={-70}
            duration={1000}
            activeClass ="active"
            smooth = {true}
            to ="about"
           >
            <nav className='text-white hover:text-[#D63484]' >About</nav>
            </Link>

            <Link offset={-70}
            duration={1000}
            activeClass ="active"
            smooth = {true}
            to ="project">
            <nav className=' text-white hover:text-[#D63484] '>Project</nav>
            </Link>

            <Link offset={-70}
            duration={1000}
            activeClass ="active"
            smooth = {true}
            to ="contact">
            <nav className=' text-white hover:text-[#D63484] '>Contact</nav>
            </Link>

        </div>

        <div className='   lg:hidden xl:hidden tablet:block text-5xl  transition-colors duration-300 ease-in ' onClick={HandleMenu}>
        <MdMenu />
        </div>

        <div className={`fixed bg-black top-0 tablet:overflow-hidden bottom-0 px-10 pt-5 transition-all duration-700 ease-in  text-white  ${showMenu ? ' left-0 w-full': ' left-full w-full'} `}>
        
          <div className='justify-center flex text-4xl tablet:3xl font-bold transition-all duration-300 ease-in ' onClick={HandleMenu}>
             <MdClose />
             </div>

          
            <div className=' text-center tablet:text-base  font-bold space-y-9 pt-5 flex flex-col m-2 gap-2'>
          <Link offset={-70}
            duration={900}
            activeClass ="active"
            smooth = {true}
            to ="home">
            <nav className=' text-white hover:text-[#D63484]'>Home</nav>
            </Link>

            <Link offset={-70}
            duration={900}
            activeClass ="active"
            smooth = {true}
            to ="about"
           >
            <nav className='text-white hover:text-[#D63484]' >About</nav>
            </Link>

            <Link offset={-70}
            duration={900}
            activeClass ="active"
            smooth = {true}
            to ="project">
            <nav className=' text-white hover:text-[#D63484] '>Project</nav>
            </Link>

            <Link offset={-70}
            duration={1000}
            activeClass ="active"
            smooth = {true}
            to ="contact">
            <nav className=' text-white hover:text-[#D63484] '>Contact</nav>
            </Link>
            </div>
          
        </div>

    </div>
  )
}

export default Header