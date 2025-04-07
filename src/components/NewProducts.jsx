import React from "react";
import { card2, ellipse1, ellipse2, ellipse3 } from "../assets/images";

const NewProducts = () => {
  return (
    <section className="bg-[#F8F9FA] font-sans container mx-auto">
      <div>
        <h1 className="font-bold text-[30px] lg:text-[40px] text-center my-6">
          New Products
        </h1>
        {/* <ul className="flex items-center justify-center gap-[20px] md:gap-[50px] lg:gap-[68px] text-[18px]">
          <li>All</li>
          <li>Chairs</li>
          <li>Tables</li>
          <li>ArmChairs</li>
          <li>Sofas</li>
          <li>Decor</li>
        </ul> */}
      </div>

      <div className="grid items-center gap-5 my-6 grid-cols-2 md:grid-cols-3">
        <div className="my-2">
          <img src={card2} alt="" className="w-full p-4" />
          <div className="px-4 py-2">
            <div className="flex items-center justify-between">
              <p className="font-bold text-[18px]">Modern Armchair</p>

              <div className="flex right-0 gap-2">
                <img src={ellipse1} alt="" />
                <img src={ellipse2} alt="" />
                <img src={ellipse3} alt="" />
              </div>
            </div>
            <span className="text-[16px]">$230</span>
          </div>
        </div>

        <div className="">
          <img src={card2} alt="" className="w-full p-4" />
          <div className="px-4 py-2">
            <div className="flex items-center justify-between">
              <p className="font-bold text-[18px]">Modern Armchair</p>

              <div className="flex right-0 gap-2">
                <img src={ellipse1} alt="" />
                <img src={ellipse2} alt="" />
                <img src={ellipse3} alt="" />
              </div>
            </div>
            <span className="text-[16px]">$230</span>
          </div>
        </div>

        <div className="">
          <img src={card2} alt="" className="w-full p-4" />
          <div className="px-4 py-2">
            <div className="flex items-center justify-between">
              <p className="font-bold text-[18px]">Modern Armchair</p>

              <div className="flex right-0 gap-2 ">
                <img src={ellipse1} alt="" />
                <img src={ellipse2} alt="" />
                <img src={ellipse3} alt="" />
              </div>
            </div>
            <span className="text-[16px]">$230</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
