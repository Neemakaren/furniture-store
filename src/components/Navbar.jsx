import React from 'react'
import Search from './Search'
import { logo, one, two, three } from '../assets/images'

const Navbar = () => {
  return (
    <nav>
         <p className='bg-[#947458] text-center text-white rounded-none text-[12px]'>This weekend Sale 20% off on all products</p>
         <Search />

         <div className='bg-white'>
        <div className='flex justify-between items-center container mx-auto py-6'>
          <div className='flex'>
        <img src={logo} alt="" />
        {/* <p>Furniture Store</p> */}

          </div>
        <ul className='flex gap-3 text-[16px]'>
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        <div className='flex gap-4'>
          <img src={one} alt="" className="h-4 w-4 text-gray-400"/>
          <img src={two} alt="" className="h-4 w-4 text-gray-400"/>
          <img src={three} alt="" className="h-4 w-4 text-gray-400"/>
        </div>
        </div>

         </div>
    </nav>
  )
}

export default Navbar