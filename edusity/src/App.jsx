import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import VideoPlayer from './components/videoPlayer/VideoPlayer'

const App = () => {
  const [player, setPlayer] = useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle ='our program' title='What We Offer'/>
        <Programs/>
        <About setPlayerState={setPlayer}/>
        <Title subTitle ='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subTitle ='Testimonials' title='What Students Says'/>
        <Testimonials/>
        <Title subTitle ='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={player} setPlayState={setPlayer}/>
    </div>
  )
}

export default App
