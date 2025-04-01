import React from "react";
import { chevDown, phone, search } from "../assets/images";

const Search = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between container mx-auto my-4 space-y-4 sm:space-y-0">
      <p className="text-[12px] md:text-[16px]">
        60 Fremont Ave. Hamden, CT 06514
      </p>
      <div className="flex items-start md:items-center md:justify-center">
        <div className="flex items-center justify-center gap-2 px-4 border-2 pl-2 pr-4 py-2 bg-white">
          <span className="text-[12px] lg:text-[16px]">All Categories</span>
          <img src={chevDown} alt="" className="h-5 w-5 text-gray-400" />
        </div>

        <div className="relative border-2">
          <input
            type="text"
            className="pl-2 pr-4 py-2 border-none focus:outline-none w-96 maxx"
            placeholder="search products"
          />
          <div className="absolute inset-y-0 right-0 pl-3 pr-2 flex items-center pointer-events-none">
            <img src={search} alt="" className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="flex gap-4 items-start md:items-center md:justify-center">
        <img src={phone} alt="" className="md:h-6 lg:w-6 text-gray-400" />
        <span className="text-[12px] md:text-[16px]">(928) 630-9272</span>
      </div>
    </nav>
    // </div>
  );
};

export default Search;
