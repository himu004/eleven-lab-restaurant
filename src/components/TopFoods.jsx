import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TopFoodCard from "./TopFoodCard";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

const TopFoods = ({ theme }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    fetchJobData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchJobData = async () => {
    const { data } = await axios.get(
      `https://eleven-lab-retaurant-backend.vercel.app/top-foods`
    );
    setTopFoods(data);
    setIsLoading(false);
    // console.log(data);
  };

  return (
    <div className="mt-10">
      <div className="container mx-auto text-center">
        <h1
          className={`text-3xl ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Our Top Foods
        </h1>
        <p
          className={`text-gray-500 mt-5 text-lg max-w-xl mx-auto ${
            theme === "dark" ? "text-white" : "text-black"
          } `}
        >
          Food is a universal language of culture and comfort, with every region
          boasting its signature dishes.
        </p>
      </div>

      {isLoading ? <LoadingSpinner /> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:px-16 border">
        {
          topFoods.map((food) => (
            <TopFoodCard key={food._id} food={food} />
          ))
        }
      </div>}

      <Link to="/all-foods" className="mt-10 flex justify-center py-5">
        <button
          className={`btn px-10 text-white ${
            theme === "dark"
              ? "btn-error hover:btn-success hover:text-white"
              : "btn-success  hover:btn-error hover:text-white"
          }`}
        >
          All Foods
        </button>
      </Link>
    </div>
  );
};

export default TopFoods;
