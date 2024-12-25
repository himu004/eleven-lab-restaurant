import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Context";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import purchaseAnimationData from "../../assets/lottie/purchase.json";
import Lottie from "react-lottie";
import allFoods from "../../assets/allFoods.png";
import LoadingSpinner from "../../components/LoadingSpinner";

const FoodPurchase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [foodDetails, setFoodDetails] = useState({});

  const { user } = useContext(AuthContext);

  const { id } = useParams();

  const { theme } = useContext(AuthContext);

  const navigate = useNavigate();

  const handlePurchaseFood = async (e) => {
    e.preventDefault();
    const form = e.target;

    const purchaseData = {
      foodId: foodDetails?._id,
      foodName: form.food_name.value,
      price: parseFloat(form.price.value),
      quantity: parseInt(form.quantity.value),
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      buyingDate: Date.now(),
    };

    if (foodDetails.addedBy?.email === user?.email)
      return toast.error("You Can't Buy Your Own Food");

    try {
      await axios.post(
        `https://eleven-lab-retaurant-backend.vercel.app/food-purchase`,
        purchaseData
      );
      form.reset();
      toast.success("Purchase successful!");
      navigate("/all-foods");
    } catch (err) {
      toast.error(err.response.data.message);
      console.log();
    }
  };

  useEffect(() => {
    fetchFoodData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchFoodData = async () => {
    const { data } = await axios.get(
      `https://eleven-lab-retaurant-backend.vercel.app/food/${id}`
    );
    setFoodDetails(data);
    setIsLoading(false);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: purchaseAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="container mx-auto space-y-10 py-10">
      <div
        style={{ backgroundImage: `url(${allFoods})` }}
        className="bg-center bg-cover object-cover text-center mb-8 h-32 rounded-lg"
      >
        <div className="h-full flex flex-col items-center justify-center bg-black bg-opacity-20">
          <h2 className="text-4xl font-bold text-white">Update/Edit Food</h2>
          <div className="w-32 h-1 mx-auto bg-green-500 mt-3"></div>
        </div>
      </div>
      <div className="container px-6 py-5 mx-auto min-h-[calc(100vh-306px)] md:flex justify-between">
        <div className="hidden lg:block lg:w-1/2 pt-20 flex-1">
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <form className="flex-1" onSubmit={handlePurchaseFood}>
            <div className=" md:px-0 lg:px-10 space-y-3">
              <div>
                <label className="text-gray-500" htmlFor="food_name">
                  Food Name
                </label>
                <input
                  id="food_name"
                  name="food_name"
                  type="text"
                  defaultValue={foodDetails.name}
                  className={`block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${
                    theme === "dark" ? "bg-gray-800" : "bg-white"
                  }`}
                />
              </div>
              <div>
                <label className="text-gray-500" htmlFor="price">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  defaultValue={foodDetails.price}
                  className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                />
              </div>
              <div>
                <label className="text-gray-500" htmlFor="quantity">
                  Available Quantity : {foodDetails.quantity}
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  placeholder="Enter Quantity"
                  required
                  className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                />
              </div>
              <div>
                <label className="text-gray-500" htmlFor="buyer_name">
                  Buyer Name
                </label>
                <input
                  id="buyer_name"
                  name="buyer_name"
                  type="text"
                  defaultValue={user?.displayName}
                  disabled={true}
                  className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                />
              </div>
              <div>
                <label className="text-gray-500" htmlFor="buyer_email">
                  Buyer Email
                </label>
                <input
                  id="buyer_email"
                  name="buyer_email"
                  type="email"
                  defaultValue={user?.email}
                  disabled={true}
                  className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                />
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button
                className={`md:w-9/12 w-full btn ${
                  foodDetails.quantity <= 0 || foodDetails.quantity < parseInt(document.getElementById('quantity')?.value || 0)
                    ? "btn-disabled"
                    : "btn-neutral btn-outline"
                }`}
                disabled={foodDetails.quantity <= 0 || foodDetails.quantity < parseInt(document.getElementById('quantity')?.value || 0)}
              >
                Purchase Food
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FoodPurchase;
