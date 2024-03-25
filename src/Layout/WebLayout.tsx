import React from 'react'
import Header from '../Static/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Static/Footer'
import Particlesbg from '../Components/Particlesbg'


const WebLayout :React.FC= () => {
  return (
    <div className='w-screen h-full tablet:overflow-hidden tablet:z-10'>
      <Particlesbg/>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default WebLayout