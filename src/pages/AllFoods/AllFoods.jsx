import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import allFoods from "../../assets/allFoods.png";
import AllFoodsCard from "./AllFoodsCard";
import LoadingSpinner from "../../components/LoadingSpinner";

const AllFoods = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const searchValue = e.target.search.value;
    setSearchTerm(searchValue);
    try {
        const { data } = await axios.get(
            `https://eleven-lab-retaurant-backend.vercel.app/search?search=${searchValue}`
        );
        setFoods(data);
    } catch (error) {
        console.error('Search error:', error);
    } finally {
        setIsLoading(false);
    }
};

  useEffect(() => {
    fetchJobData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchJobData = async () => {
    const { data } = await axios.get(
      `https://eleven-lab-retaurant-backend.vercel.app/all-foods`
    );
    setFoods(data);
    setIsLoading(false);
    // console.log(data);
  };

  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
      <div
        style={{ backgroundImage: `url(${allFoods})` }}
        className="bg-center bg-cover object-cover text-center mb-8 h-32 rounded-lg"
      >
        <div className="h-full flex flex-col items-center justify-center bg-black bg-opacity-20 rounded-lg">
          <h2 className="text-4xl font-bold text-white">All Foods</h2>
          <div className="w-24 h-1 mx-auto bg-green-500 mt-3"></div>
        </div>
      </div>
      <div>
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Search for foods"
              />

              <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Search
              </button>
            </div>
          </form>
        </div>
        {/* All Foods Card */}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {foods.map((food) => (
              <AllFoodsCard key={food._id} food={food} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllFoods;
