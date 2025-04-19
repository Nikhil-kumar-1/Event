import React from 'react'
import Hero from '../Hero/Hero'
import Services from '../Service/Service'
import About from '../About/About'
import Video from '../Video/Video'

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Video />
      <Services/>
    </div>
  )
}

export default Home
