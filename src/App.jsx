import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import AllCategories from './pages/AllCategories'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

function App() {
  const [Vacancy, setVacancy] = useState()


  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setVacancy(prevVacancy => {
      return {
        ...prevVacancy,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }
  

  return (
    <>
      {/* <Home /> */}
      {/* <AllCategories handleChange={handleChange}/> */}
      {/* <AboutUs /> */}
      <ContactUs />
    </>
  )
}

export default App

// https://www.figma.com/design/jYf9aahDftBzhzC3OZ1dsE/Untitled?node-id=5-333&t=ceulio02NOxJ4a5y-0

// https://www.figma.com/design/Pwxz6BcLc2qZTrLIztFRcz/Furniture-Store-Figma-Template-(Community)?node-id=1-61&t=SVmeLLgsfCNeuiYQ-0
