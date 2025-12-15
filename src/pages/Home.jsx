import React from 'react'
import Navbar from "../components/layout/Navbar";
import Main from "../components/layout/Main";
import Footer from "../components/layout/Footer";
const Home = () => {
  return (
    <div className='h-screen'>
        <Navbar/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Home