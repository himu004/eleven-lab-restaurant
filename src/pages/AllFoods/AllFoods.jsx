import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import allFoods from "../../assets/allFoods.png";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
      <div
        style={{ backgroundImage: `url(${allFoods})` }}
        className="bg-center bg-cover object-cover text-center mb-8 h-32 rounded-lg"
      >
        <div className="h-full flex flex-col items-center justify-center bg-black bg-opacity-20">
          <h2 className="text-4xl font-bold text-white">All Foods</h2>
          <div className="w-24 h-1 mx-auto bg-green-500 mt-3"></div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          {/* Search Bar */}
          <form>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Search for foods"
                aria-label="Enter Job Title"
              />

              <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Search
              </button>
            </div>
          </form>
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
              <h2 className="card-title">Foods Name</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <div className="badge badge-outline badge-error">Sold: 100</div>
              </div>
            </div>
            <Link to="/food-details" className="m-5">
              <button className="btn btn-neutral btn-outline w-full ">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFoods;
