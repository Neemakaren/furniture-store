import { useState } from 'react'
import CategoryNav from '../components/CategoryNav'
import SideNav from '../components/SideNav'
import Sort from '../components/Sort'
import { line, chevDown, support, Return, payment, card2, ellipse1, ellipse2, ellipse3 } from '../assets/images'
import FeaturedProducts from '../components/FeaturedProducts'
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
// import DynamicFilter from '../components/DynamicFilter'


const AllCategories = ({
  data,
  categoryData,
  typeData,
  colorData,
  finishData,
  priceData,
  filteredProducts,
  resetFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <CategoryNav />
      <div className="flex container mx-auto justify-between">
        <div className="hidden lg:block">
          <h5 className="font-bold">Categories</h5>
        </div>

        <h5 className="left-0 text-3xl font-bold">
          Filters ({filteredProducts.length})
        </h5>
        <div className="flex">
          <p className="flex items-center justify-center font-medium gap-2 py-2 px-6 border-2 border-[#947458]">
            Sort By Latest <img src={chevDown} alt="" />
          </p>
        </div>
      </div>
      <div className=" flex container mx-auto">
        <div className="">
          <div className=" ">
            {" "}
            <SideNav
              categoryData={categoryData}
              typeData={typeData}
              priceData={priceData}
              colorData={colorData}
              finishData={finishData}
              resetFilters={resetFilters}
              filteredProducts={filteredProducts}
            />
          </div>
        </div>

        <div className="w-full lg:w-3/4">
          <Sort data={data} filteredProducts={filteredProducts} />
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