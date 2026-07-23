import React from 'react'
import Hero from '../component/Hero'
import SearchByCategory from '../component/SearchByCategory'
import Products from '../component/Products'
import AboutUs from '../component/AboutUs'
import ContactUs from '../component/ContactUs'

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