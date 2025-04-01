import React from "react";
import { hero, img1, img2, img3, img4 } from "../assets/images";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <img src={hero} className="w-[100%] h-[100%] object-cover aspect-auto" />
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 mx-auto container items-center justify-center">
        <div className="px-6 py-4">
          <span className="text-white px-3">Furniture</span>
          <h1 className="text-white text-[50px] md:text-[50px] lg:text-[70px] font-sans font-bold leading-tight">
            Where Traditional Meets Modern
          </h1>
          <p className="text-white opacity-70 mt-4 font-sans font-medium mb-10 lg:mb-20">
            Mi tristique est nunc sapien orci tortor ac. Suspendisse leo et
            cursus <br /> pharetra tellus tincidunt.
          </p>

          <div className="flex items-start justify-start text-white gap-4 lg:mt-2">
            <button className="bg-[#947458] px-10 py-3 text-[14px] rounded-sm">
              shop now
            </button>
            <button className="px-10 py-3 text-[14px] border-[1px] border-white rounded-sm">
              learn more
            </button>
          </div>
        </div>

        <div className="grid px-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 lg:py-5 object-cover md:-mt-2">
          <img
            src={img1}
            alt=""
            className="rounded-lg object-cover w-full md:h-full"
          />
          <img
            src={img2}
            alt=""
            className="rounded-lg object-cover w-full md:h-full"
          />
          <img
            src={img3}
            alt=""
            className="rounded-lg object-cover w-full md:h-full"
          />
          <img
            src={img4}
            alt=""
            className="rounded-lg object-cover w-full  md:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
