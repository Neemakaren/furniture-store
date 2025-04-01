import React, { useContext, useState } from "react";


const FilterByCategories = () => {
 

  return (
    <section className="flex flex-col w-50 justify-center font-sans sm:justify-start sm:w-80 lg:flex-col px-4">
      <h4 className="mt-6 text-[20px] font-bold">Filter by Categories</h4>
     
      <div class="inline-flex items-center w-full justify-between">
        <div className="flex">
          <input
            type="checkbox"
            className="ml-3"
            name="mirror"
            value="mirror"
            title="mirror"
          />

          <label
            class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
            htmlFor="fulltime"
          >
            Mirror
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
            name="desk"
            value="desk"
            title="desk"
          />

          <label
            class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
            htmlFor="internship"
          >
            Desk
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
            name="table"
            value="table"
            title="table"
          />

          <label
            class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
            htmlFor="parttime"
          >
            Table
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
            name="sofa"
            value="sofa"
            title="sofa"
          />

          <label
            class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
            htmlFor="remote"
          >
            Sofa
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
            id="temporary"
            name="chair"
            title="chair"
            
          />

          <label
            class="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
            htmlFor="temporary"
          >
            Chair
          </label>
        </div>
        <span className="border-2 flex items-center justify-center px-2  rounded-2xl">
          10
        </span>
      </div>
    </section>
  );
};

export default FilterByCategories;


