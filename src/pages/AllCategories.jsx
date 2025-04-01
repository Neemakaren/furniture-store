import { useState } from 'react'
import CategoryNav from '../components/CategoryNav'
import SideNav from '../components/SideNav'
import Sort from '../components/Sort'
import { line, chevDown, support, Return, payment, card2, ellipse1, ellipse2, ellipse3 } from '../assets/images'
import FeaturedProducts from '../components/FeaturedProducts'
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import DynamicFilter from '../components/DynamicFilter'


const AllCategories = ({data}) => {
 
 
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <CategoryNav />
      <div className="flex container mx-auto justify-between">
        <div className="hidden lg:block">
          <h5>Filter by Price</h5>
          <img src={line} alt="" />
        </div>

        <h5 className="left-0">Showing 1-12 of 14results</h5>
        <div className="flex">
          <p className="flex items-center justify-center font-medium gap-2 py-2 px-6 border-2 border-[#947458]">
            Sort By Latest <img src={chevDown} alt="" />
          </p>
        </div>
      </div>
      <div className="flex container mx-auto">
        <div className="">
          <button
            className="flex flex-row items-center right-0 z-10 maxx font-bold justify-center text-[10em] cursor-pointer lg:hidden transition-all duration-0.3 linear  text-black"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
          </button>

          {/*             
          <div onClick={handleCloseNavbar}
          className={`${isOpen ? " flex " : "hidden"} cursor-pointer w-[200%] lg:hidden flex-col left-0 h-full z-10`}>
   <SideNav handleChange={handleChange}/>
          </div> */}
          <div className="">
            {" "}
            <SideNav  />
          </div>
        </div>

        <div className="w-full lg:w-3/4">
          <Sort data={data}/>
        </div>
      </div>

      <div className="bg-[#F9F9F9] grid sm:grid-cols-2 py-10 md:grid-cols-3 font-sans container mx-auto mt-10">
        <div className="flex gap-2">
          <img src={payment} alt="" />
          <div>
            <p className="font-bold text-[18px]">Secure Payments</p>
            <span className="text-[12px]">
              Feugiat mi gravida vestibulum orci ac volutpat non
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <img src={Return} alt="" />
          <div>
            <p className="font-bold text-[18px]">Return Within 14 Days</p>
            <span className="text-[12px]">
              Feugiat mi gravida vestibulum orci ac volutpat non
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <img src={support} alt="" />
          <div>
            <p className="font-bold text-[18px]">24/7 Support</p>
            <span className="text-[12px]">
              Feugiat mi gravida vestibulum orci ac volutpat non
            </span>
          </div>
        </div>
      </div>

      <FeaturedProducts />
    </>
  );
};

export default AllCategories


// https://furniture-api.fly.dev/v1/products