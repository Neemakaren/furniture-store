import React, {useContext} from "react";
import { CartContext } from "../context/cartContext";
import Modal from "./Modal";

const Sort = ({ filteredProducts }) => {
  const { productModal, viewModalHandler } =
    useContext(CartContext);

 
  return (
    <aside className="container mx-auto bg-white font-sans relative">
      {productModal && <Modal />}
      <div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="px-4 py-6 rounded-[10px] border-2"
              >
                <img src={product?.image_path} alt={product.name} className="text-[.7em]"/>
                <div className="flex items-center justify-between">
                  <h2 className="capitalize text-[14px] font-bold">
                    {product?.name}
                  </h2>
                  <p className="font-bold text-[18px]">${product?.price}</p>
                </div>

               
                <div className="flex space-x-1 text-[10px]">
                  <p className="rounded-full px-[5px] border bg-white">
                    {product?.category}
                  </p>
                  <p className="rounded-full px-[5px] border bg-white">
                    {product?.wood_type}
                  </p>
                </div>
                <p>
                  <span className="font-semibold">Available finish:</span>{" "}
                  {product?.finish}
                </p>
                <p className="capitalize mb-4">
                  <span className="font-semibold">Available Color(s):</span>{" "}
                  {product.color.join(", ")}{" "}
                </p>

                <span
                  className="cursor-pointer bg-[#947458] text-center text-white rounded-none text-[15px] px-2 mt-4"
                  onClick={() => viewModalHandler(product)}
                >
                  view product
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div>No Match found</div>
        )}
      </div>
    </aside>
  );
};

export default Sort;
