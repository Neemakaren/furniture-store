import React, { useContext } from "react";
import { card } from "../assets/images";
import { CartContext } from "../context/cartContext";

const Categories = () => {
  const { data } = useContext(CartContext);

  return (
    <section className="container mx-auto font-sans my-10 ">
      <div className="flex justify-between items-center px-2 my-9">
        <h1 className="font-bold text-[30px] lg:text-[40px]">
          Shop by Categories
        </h1>
        <button className="px-10 py-2 text-[14px] border-[1px] border-black rounded-sm font-medium">
          View All
        </button>
      </div>

      <div className="grid items-center gap-2 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
        {data.slice(0, 4).map((item) => (
          <div key={item.id}>
            <img src={item.image_path} alt="" className="w-full" />
            <div>
              <p className="font-medium text-2xl">{item.Category}</p>
              <p className="text-[16px]">
                Discount Price: <span className="font-bold text-red-500 text-[1.2em]">$ {item.discount_price.toFixed(2)}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
