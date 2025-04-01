import React, { useContext } from "react";



const FilterByColor = () => {
  
  

  return (
    <section className="flex flex-col justify-center sm:justify-start lg:flex-col px-4">
      <h4 className="mt-6 text-[20px] font-bold">Filter by Color</h4>
     <div className="sm:flex sm:flex-col sm:items-start sm:justify-start sm:w-50">
      <div className="inline-flex items-center w-full justify-between">
           <div className="flex">
            <input
              type="radio"
              className="ml-3"
              id="freelance"
              name="white"
              value="white"
            />
            {/* </label> */}
            <label
              className="flex items-center p-2 rounded-full font-light text-gray-700 cursor-pointer select-none"
              htmlFor="freelance"
            >
              white
            </label>
          </div>
          <span className="border-2 flex items-center justify-center px-2 rounded-2xl">
            10
          </span>
        </div>

        <div className="inline-flex items-center w-full justify-between">
          <div className="flex">
            <input
              type="radio"
              className="ml-3 checked:bg-red-700"
              id="fulltime"
              name="black"
              value="black"
            />
            {/* </label> */}
            <label
              className="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
              htmlFor="fulltime"
            >
              Black
            </label>
          </div>
          <span className="border-2 flex items-center justify-center px-2  rounded-2xl">
            10
          </span>
        </div>
        <div className="inline-flex items-center w-full justify-between">
          <div className="flex">
            <input
              type="radio"
              className="ml-3"
              id="internship"
              name="grey"
              value="grey"
            />
            {/* </label> */}
            <label
              className="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
              htmlFor="internship"
            >
              Grey
            </label>
          </div>
          <span className="border-2 flex items-center justify-center px-2  rounded-2xl">
            10
          </span>
        </div>

        <div className="inline-flex items-center w-full justify-between">
          <div className="flex">
            <input
              type="radio"
              className="ml-3"
              id="parttime"
              name="brown"
              value="brown"
            />
            {/* </label> */}
            <label
              className="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
              htmlFor="parttime"
            >
              Brown
            </label>
          </div>
          <span className="border-2 flex items-center justify-center px-2  rounded-2xl">
            10
          </span>
        </div>

        <div className="inline-flex items-center w-full justify-between">
          <div className="flex">
            <input
              type="radio"
              className="ml-3"
              id="remote"
              name="blue"
              value="blue"
            />
            {/* </label> */}
            <label
              className="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
              htmlFor="remote"
            >
              Blue
            </label>
          </div>
          <span className="border-2 flex items-center justify-center px-2  rounded-2xl">
            10
          </span>
        </div>

        <div className="inline-flex items-center w-full justify-between">
          <div className="flex">
            <input
              type="radio"
              className="ml-3 accent-green-400"
              id="temporary"
              name="green"
              value="green"
            />
            {/* </label> */}
            <label
              className="flex items-center p-2  rounded-full font-light text-gray-700 cursor-pointer select-none"
              htmlFor="temporary"
            >
              Green
            </label>
          </div>
          <span className="border-2 flex items-center justify-center px-2  rounded-2xl">
            10
          </span>
        </div>

      </div>
    </section>
  );
};

export default FilterByColor;
