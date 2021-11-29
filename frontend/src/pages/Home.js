import '../App.css'
import Hero from '../components/Hero'
import React, {useEffect} from 'react'
import CarouselSection from '../components/CarouselSection'

const Home = () => {
  useEffect(() =>{
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
     <Hero></Hero>
     <CarouselSection></CarouselSection> 
    </>
  )
}

export default Home
