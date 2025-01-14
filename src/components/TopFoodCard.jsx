import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../providers/Context";

const TopFoodCard = ({ food }) => {
  const {
    _id,
    name,
    imageUrl,
    origin,
    price,
    purchase_count,
  } = food || {};

  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div
        className={`w-full border  rounded-lg shadow-md" ${
          theme === "dark"
            ? "bg-gray-700 border-gray-500"
            : "bg-white border-gray-200"
        }`}
      >
        <img
          className="p-3 h-[300px] w-full rounded-md object-fit"
          src={imageUrl}
          alt="Food"
        />

        <div className="px-5 pb-5">
          <h5
            className={`text-xl font-semibold tracking-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {name}
          </h5>

          <div className="flex flex-col gap-3 mt-2.5 mb-5">
            <p className="badge badge-error">Sold: {purchase_count}</p>
            <p className="badge badge-success badge-outline">
              Country Of Origin: {origin}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span
              className={`text-3xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              ${price}
            </span>
            <Link to={`/food/${_id}`}>
              <button className="btn btn-neutral btn-outline font-medium rounded-lg text-lg px-16  text-center ">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFoodCard;
