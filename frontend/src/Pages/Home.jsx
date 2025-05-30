import React from 'react'
import Hero from '../Components/Hero'
import WhyChooseUs from '../Components/WhyChooseUs'
import Services from '../Components/Services'
import Partners from '../Components/Partners'
import Testimonials from '../Components/Testimonials'
import ContactForm from '../Components/ContactForm'
import AboutUs from '../Components/AboutUs'
import Safe from '../Components/Safe'
import Callback from '../Components/Callback'


const Home = () => {
  return (
    <div>
        <Hero />
        <WhyChooseUs />
        <Services />
        <AboutUs />
        <Safe />
        <Testimonials />
        <Partners />
        <Callback />
        <ContactForm />
    </div>
  )
}

export default Home
