import React, { useContext, useState } from "react";



const FilterByMaterial = () => {
  
  return (
    <section className="flex flex-col w-100 justify-center sm:justify-start sm:w-80 lg:flex-col px-4">
      <h4 className="mt-6 text-[20px] font-bold">Filter by Material</h4>
      <div className="sm:flex sm:flex-col sm:items-start sm:justify-start sm:w-50">
        <div class="inline-flex items-center w-full justify-between">
          <div className="flex">
            <input
              type="checkbox"
              className="ml-3"
              id="freelance"
              name="white"
              value="white"
             
            />

            <label
              class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
              htmlFor="freelance"
            >
              Leather
            </label>
          </div>
          <span className="border-2 flex items-center justify-center px-2  rounded-2xl">
            10
          </span>
        </div>

        <div class="inline-flex items-center w-full justify-between">
          <div className="flex">
            <input
              type="checkbox"
              className="ml-3"
              id="fulltime"
              name="black"
              value="black"
             
            />

            <label
              class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
              htmlFor="fulltime"
            >
              Marble
            </label>
          </div>
          <span className="border-2 flex items-center justify-center px-2  rounded-2xl">
            10
          </span>
        </div>

        <div class="inline-flex items-center w-full justify-between">
          <div className="flex">
            <input
              type="checkbox"
              className="ml-3"
              id="internship"
              name="grey"
              value="grey"
             
            />

            <label
              class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
              htmlFor="internship"
            >
              Metal
            </label>
          </div>
          <span className="border-2 flex items-center justify-center px-2  rounded-2xl">
            10
          </span>
        </div>

        <div class="inline-flex items-center w-full justify-between">
          <div className="flex">
            <input
              type="checkbox"
              className="ml-3"
              id="parttime"
              name="brown"
              value="brown"
              
            />

            <label
              class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
              htmlFor="parttime"
            >
              Wood
            </label>
          </div>
          <span className="border-2 flex items-center justify-center px-2  rounded-2xl">
            10
          </span>
        </div>

        <div class="inline-flex items-center w-full justify-between">
          <div className="flex">
            <input
              type="checkbox"
              className="ml-3"
              id="remote"
              name="blue"
              value="blue"
            
            />

            <label
              class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
              htmlFor="remote"
            >
              Leatherette
            </label>
          </div>
          <span className="border-2 flex items-center justify-center px-2  rounded-2xl">
            10
          </span>
        </div>
      </div>
      ;
    </section>
  );
};

export default FilterByMaterial;
