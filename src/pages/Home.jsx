import React from 'react'
import {
  Navbar, 
  Hero, 
  Categories, 
  NewProducts, 
  Grid, 
  Affordable, 
  BestSellers, 
  Reviews, 
  Footer} 
  from '../components/index'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Categories />
        <NewProducts />
        <Grid />
        <Affordable />
        <BestSellers />
        <Reviews />
        <Footer />
    </>
  )
}

export default Home