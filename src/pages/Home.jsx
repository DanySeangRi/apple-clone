import React from 'react'
import Navbar from "../components/layout/homepage/Navbar";
import Main from "../components/layout/homepage/Main";
import Footer from "../components/layout/homepage/Footer";
const Home = () => {
  return (
    <div className='min-h-screen    '>
        <Navbar />
        <Main />
        <Footer/>
    </div>
  )
}

export default Home