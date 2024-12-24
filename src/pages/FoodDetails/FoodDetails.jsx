import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

const FoodDetails = () => {
    const [isLoading, setIsLoading] = useState(true);
  const [foodDetails, setFoodDetails] = useState({});

  const { id } = useParams();
//   

  useEffect(() => {
    fetchJobData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchJobData = async () => {
    const { data } = await axios.get(
      `https://eleven-lab-retaurant-backend.vercel.app/food/${id}`
    );
    setFoodDetails(data);
    setIsLoading(false);
    // console.log(data);
  };

  return (
    <>{isLoading ? <LoadingSpinner /> : <div className="container mx-auto space-y-10 py-10">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-700">{foodDetails.name}</h2>
          <p className="text-gray-600">{foodDetails.description}</p>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p className="font-semibold">
              Category: {foodDetails.category}
            </p>
            <p className="font-semibold">
              Country Of Origin: {foodDetails.origin}
            </p>
            <p className="font-semibold badge badge-success badge-outline">
              Quantity: {foodDetails.quantity}
            </p>
            <p className="font-semibold badge badge-error">
              Sold: {foodDetails.purchase_count}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold text-success">Price: ${foodDetails.price}</p>
            <Link to='/food-purchase'>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
              Purchase Now
            </button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={foodDetails.imageUrl}
            alt={foodDetails.name}
            className="w-full h-[550px] rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>}</>
  );
};

export default FoodDetails;
