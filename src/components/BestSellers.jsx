import React, { useContext } from "react";
import { card1 } from "../assets/images";
import { CartContext } from "../context/cartContext";

const BestSellers = () => {
  const { data } = useContext(CartContext);
  return (
    <section className="container mx-auto my-[40px] bg-white font-sans">
      <div className="flex justify-between items-center px-2 my-9">
        <h1 className="font-bold text-[40px]">BestSellers</h1>
        <button className="px-10 py-2 text-[14px] border-[1px] border-black rounded-sm font-medium">
          View All
        </button>
      </div>

      <div className="grid items-center gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
        {data.slice(10, 14).map((item, id) => (
          <div key={id}>
            <img src={item.image_path} alt="" className="w-full" />
            <div className="flex items-center justify-center flex-col mt-2">
              <p className="font-bold text-2xl">{item.category}</p>
              <span className="text-[16px]">24products</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
