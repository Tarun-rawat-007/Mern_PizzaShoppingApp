// import React from 'react'
import About from '../widgets/About'
import Hero from '../widgets/Hero'
import Navbar from '../widgets/Navbar'

const Header = () => {
  return (
    <> 
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <div className='alert alert-info text-center'>
    
    <h3>Pizza App Dashboard</h3>
    </div>
   
    </>
   
  )
}

export default Header