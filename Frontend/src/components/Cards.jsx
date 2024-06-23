import React from "react";

const Cards = ({ item }) => {
  console.log(item);
  return (
    <>
      <div>
        <div className="card w-90 bg-base-100 shadow-xl mt-5 mb-5 p-2 mx-3 hover:scale-105 duration-200 dark:bg-slate-900 dark-text-white dark:border">
          <figure>
            <img
              src={item.imgUrl}
              alt=""
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
             {item.Name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.Title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline px-2 py-2 ">${item.price}</div>
              <div className="badge badge-outline  hover:bg-pink-500 hover:text-white px-3 py-3 cursor-pointer">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
