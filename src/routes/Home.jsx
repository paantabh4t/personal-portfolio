import React from 'react'
import Navbar from '../components/Navbar'
import HeroHome from '../components/HeroHome'
import Footer from '../components/Footer'
import Work from "../components/Work"
import Preloader from '../components/Preloader'

const Home = () => {
  return (
    <div>
      <Preloader/>
      <Navbar/>
      <HeroHome/>
      <Work/>
      <Footer/>
    </div>

  )
}

export default Home