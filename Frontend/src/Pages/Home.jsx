import React from 'react'
import Hero from '../component/Hero'
import SearchByCategory from '../component/SearchByCategory'
import Products from '../component/Products'
import AboutUs from '../Component/AboutUs'
import ContactUs from '../Component/ContactUs'

const Home = () => {
  return (
    <div>
        
        <Hero/>
        <SearchByCategory/>
        <Products/>
        <AboutUs/>
        <ContactUs/>
    </div>
  )
}

export default Home