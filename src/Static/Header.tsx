import React from 'react'
 import { Link} from "react-scroll"
const Header:React.FC = () => {
  return (
    <div className='w-full bg-[#313131]  h-[70px] flex justify-end fixed z-10'>
        <div className='flex gap-[40px] mt-5 text-[18px] font-bold text-white cursor-pointer mr-40   '>

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

    </div>
  )
}

export default Header