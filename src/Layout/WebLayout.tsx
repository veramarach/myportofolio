import React from 'react'
import Header from '../Static/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Static/Footer'


const WebLayout :React.FC= () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default WebLayout