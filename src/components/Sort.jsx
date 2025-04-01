import React from "react";

const Sort = ({data}) => {
  
 
  return (
    <section className="container mx-auto bg-white font-sans relative">
      <div className="grid items-center gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, 20).map((item, id) => (
          <div key={id} className="">
            <img src={item.image_path} alt="" className="w-full" />
            <div className="flex items-center justify-center flex-col mt-2">
              <p className="font-bold text-[1.2em] text-center">{item.name}</p>
              <span className="text-[16px]">{item.stock}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sort;
