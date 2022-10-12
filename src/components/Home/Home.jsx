import React from 'react'
import CarouselFadeExample from '../Carousel/Carousel'
import Footer from '../Footer/Footer'
import List from '../Lists/List'
import Navbar from '../Navbar/Navbar'
import Website from '../Webiste/Website'
import './Home.css'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Website/>
      <CarouselFadeExample/>
      <List/>
      <Footer/>

    </div>
  )
}

export default Home
