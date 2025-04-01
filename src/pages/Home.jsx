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
  Footer
} 
from '../components/index';

const Home = () => {
  return (
    <>
        <Hero />
        <Categories />
        <NewProducts />
        <Grid />
        <Affordable />
        <BestSellers />
        <Reviews />
    </>
  )
}

export default Home