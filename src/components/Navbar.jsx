import { useContext, useState } from 'react'
import Search from './Search'
import { logo, one, two, three } from '../assets/images'
import { Link, NavLink } from 'react-router'
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import React from 'react';
import { CartContext } from '../context/cartContext';
import Cart from './Cart';

const Navbar = () => {
  const { cartModal, toggle, cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };


  return (
    <nav>
      <p className="bg-[#947458] text-center text-white rounded-none text-[12px]">
        This weekend Sale 20% off on all products
      </p>
      <Search />

      <div className="bg-white px-4 md:px-0">
        <div className="flex justify-between items-center container mx-auto py-6">
          <div className="flex">
            <img src={logo} alt="" />
            {/* <p>Furniture Store</p> */}
          </div>

          <ul className="hidden md:flex gap-6 text-[18px] cursor-pointer">
            <NavLink to="/" className="active:text-[#947458]">
              Home
            </NavLink>
            <NavLink to="categories">Shop</NavLink>
            <NavLink to="aboutus">About Us</NavLink>
            <NavLink to="contactus">Contact Us</NavLink>
          </ul>

          <button
            className="flex flex-row items-center right-0 z-10 font-bold justify-center text-2xl cursor-pointer transition-all duration-0.3 linear md:hidden lg:hidden text-black"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
          </button>

          <div className="hidden md:flex gap-4">
            <img src={one} alt="" className="h-4 w-4 text-gray-400" />
            <img src={two} alt="" className="h-4 w-4 text-gray-400" />
            {!cartModal && (
              <button
                onClick={toggle}
                className="flex items-center justify-center"
              >
                <img src={three} alt="" className="h-4 w-4 text-gray-400" />
                <span className='text-[.8em]'>({cartItems.length})</span>
              </button>
            )}
          </div>
        </div>

        <Cart />

        <div
          onClick={handleCloseNavbar}
          className={`${
            isOpen ? "flex" : "hidden"
          } cursor-pointer w-2/4 lg:hidden flex-col fixed right-0 h-screen items-start z-10 text-[1em] space-y-6 text-black bg-gray-100`}
        >
          <ul className=" w-full flex flex-col space-y-6 mt-6 pb-4 px-4 py-4 items-start font-bold uppercase bg-gray-100">
            <Link to="/">Home</Link>
            <Link to="categories">Shop</Link>
            <Link to="aboutus">About us</Link>
            <Link to="contactus">Contact Us</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar


