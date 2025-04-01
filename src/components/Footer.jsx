import { useState } from "react";
import { AiOutlineArrowDown, AiTwotoneDownCircle } from "react-icons/ai";
import {
  logo,
  instagram,
  facebook,
  youtube,
  twitter,
} from "../assets/images/index";
const Footer = () => {
 
  return (
    <footer className="bg-[#F6F4F2] font-sans pt-20 pb-16">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center container mx-auto">
        <h1 className="font-bold text-[18px]  lg:text-[30px]">
          Subscribe to our newsletter <br /> Don’t miss latest news & promotions
        </h1>
        <div className="flex">
          <input
            type="email"
            placeholder="enter your email"
            className="pl-2 w-72  sm:w-96 py-2 text-[14px] focus:outline-none"
          />
          <button className="px-6 lg:px-10 py-2 text-[14px] text-white bg-[#947458] rounded-sm font-medium">
            subscribe
          </button>
        </div>
      </div>

      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 pl-4 container mx-auto text-[#0E2515] my-7">
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <img src={logo} alt="" className="" />
            <span className="font-bold text-[18px]">f Store</span>
          </div>
          <div className="flex flex-col text-black gap-1 opacity-60 tracking-wider">
            <span className="text-[14px] ">
              60 Fremont Ave. Hamden, CT 06514
            </span>
            <span className="text-[14px]">Email:fStore@email.com</span>
            <span className="text-[14px]">phone:(928) 630-9272</span>
          </div>

          <div className="flex gap-2 w-full my-2">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" className="" />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <h4 className="text-[1.2em] font-bold pb-2">Shop</h4>
            <AiTwotoneDownCircle
              className="text-2xl sm:hidden md:hidden lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>
          {/* <ul className=' opacity-60' onClick={handleCloseNavbar}> */}
          <ul
            className={`${
              isOpen ? " flex " : "hidden"
            } cursor-pointer text-[1em] sm:block md:block lg:block flex-col opacity-60`}
            onClick={handleCloseNavbar}
          >
            <li>Chairs</li>
            <li>Beds</li>
            <li>Sofas</li>
            <li>Cabinets</li>
            <li>Armchairs</li>
            <li>Sale</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h4 className="text-[1.2em] font-bold pb-2">Customer service</h4>
            <AiTwotoneDownCircle
              className="text-2xl sm:hidden md:hidden lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>
          <ul
            className={`${
              isOpen ? " flex " : "hidden"
            } cursor-pointer text-[1em] sm:block md:block lg:block flex-col opacity-60`}
            onClick={handleCloseNavbar}
          >
            <li>Orders</li>
            <li>Addresses</li>
            <li>Returns</li>
            <li>Account Details</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[1.2em] font-bold pb-2">Delivery</h4>
          <ul className="text-[1em] opacity-60 ">
            <li>Orders</li>
            <li>Returns</li>
            <li>Free Delivery</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
