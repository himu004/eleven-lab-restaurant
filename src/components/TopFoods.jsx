import React from "react";
import { Link } from "react-router-dom";

const TopFoods = ({ theme }) => {
  return (
    <div className="mt-10">
      <div className="container mx-auto text-center">
        <h1 className={`text-3xl ${theme === "dark" ? "text-white" : "text-black"}`}>Our Top Foods</h1>
        <p className={`text-gray-500 mt-5 text-lg max-w-xl mx-auto ${theme === "dark" ? "text-white" : "text-black"} `}>
          Food is a universal language of culture and comfort, with every region
          boasting its signature dishes.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <div className="card bg-base-100 shadow-md">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Foods Name
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/all-foods" className="mt-10 flex justify-center py-5" >
        <button className={`btn px-10 text-white ${theme === "dark" ? "btn-error hover:btn-success hover:text-white" : "btn-success  hover:btn-error hover:text-white"}`}>All Foods</button>
      </Link>
    </div>
  );
};

export default TopFoods;
