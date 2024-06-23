import React from "react";
import Img from "../../public/Banner.png"
export const Banner = () => {
  return (
    <>
      <div class="flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row my-2 mb-5 ">
        <div className="w-full md:w-1/2  mt-12 md:mt-32 order-2 md:order-1">
          <div class="space-y-12">
            <h1 class="text-4xl font-bold mt-4 md:mt-12">
              Hello, Welcomes here to learn something{" "}
              <span class="text-pink-500"> new everyday!!!</span>
            </h1>
            <p class="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, odit hic quod id illum sunt. natus 
              corporis  nostrum vel ducimus pariatur.
            </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          </div>
          <button className=" mt-6 btn btn-active btn-secondary">Secondary</button>
        </div>
        <div className="w-full md:w-1/2 mt-32 md:mt-25 px-2 md:pl-10 order-1 ">
        <img src={Img} alt="" />
        </div>
      </div>
    </>
  );
};
