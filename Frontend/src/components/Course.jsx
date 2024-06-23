import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
const Course = () => {
  return (
    <>
      <div class="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div class=" items-center justify-center text-center mt-24">
          <h1 class="text-4xl md:text-4xl font-semibold  ">
            Welcome To Our{" "}
            <span class="text-pink-500">Professional Courses :)</span>
          </h1>

          <p class="text-center my-5 mx-5 md:mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
            obcaecati quisquam consectetur nulla earum explicabo mollitia
            corrupti deleniti dolorum a odio nam possimus facilis minima
            similique.
          </p>
          <Link to = "/">
            <button class=" bg-pink-500 px-6 py-2 text-white rounded-full hover:bg-black duration-200 hover:text-white">
              Back
            </button>
          </Link>
        </div>
        <div class=" mt-5 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
