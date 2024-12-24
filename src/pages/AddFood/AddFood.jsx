import { useContext, useState } from "react";
import { AuthContext } from "../../providers/Context";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import allFoods from "../../assets/allFoods.png";
import axios from "axios";

const AddFood = () => {

    const { user } = useContext(AuthContext);

  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();


const handleAddFood = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodData = {
        name: form.food_name.value,
        imageUrl: form.food_image_url.value,
        category: form.food_category.value,
        quantity: form.quantity.value,
        price: parseFloat(form.price.value),
        addedBy: {
            name: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL
        },
        origin: form.food_origin.value,
        description: form.description.value,
        purchase_count: 0,
    };

    console.log(foodData);

    try {
        await axios.post(`https://eleven-lab-server.vercel.app/add-food`, foodData);
        form.reset();
        toast.success("You have Food Added Successfully");
        // todo Navigate to my foods later
        // navigate("/");
      } catch (err) {
        toast.error(err.message);
      }
};

return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
        <div
                style={{ backgroundImage: `url(${allFoods})` }}
                className="bg-center bg-cover object-cover text-center mb-8 h-32 rounded-lg"
              >
                <div className="h-full flex flex-col items-center justify-center bg-black bg-opacity-20">
                  <h2 className="text-4xl font-bold text-white">Add Food</h2>
                  <div className="w-24 h-1 mx-auto bg-green-500 mt-3"></div>
                </div>
              </div>
        <form onSubmit={handleAddFood}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:px-0 lg:px-10">
                <div>
                    <label className="text-gray-700" htmlFor="food_name">
                        Food Name
                    </label>
                    <input
                        id="food_name"
                        name="food_name"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                </div>
                <div>
                    <label className="text-gray-700" htmlFor="food_image_url">
                        Food Image URL
                    </label>
                    <input
                        id="food_image_url"
                        name="food_image_url"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                </div>
                <div>
                    <label className="text-gray-700" htmlFor="food_category">
                        Food Category
                    </label>
                    <input
                        id="food_category"
                        name="food_category"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                </div>
                <div>
                    <label className="text-gray-700" htmlFor="quantity">
                        Quantity
                    </label>
                    <input
                        id="quantity"
                        name="quantity"
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                </div>
                <div>
                    <label className="text-gray-700" htmlFor="price">
                        Price
                    </label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                </div>
                <div>
                    <label className="text-gray-700" htmlFor="added_by_name">
                        Added By (Name)
                    </label>
                    <input
                        id="added_by_name"
                        name="added_by_name"
                        type="text"
                        defaultValue={user?.displayName}
                        disabled={true}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                </div>
                <div>
                    <label className="text-gray-700" htmlFor="added_by_email">
                        Added By (Email)
                    </label>
                    <input
                        id="added_by_email"
                        name="added_by_email"
                        type="email"
                        defaultValue={user?.email}
                        disabled={true}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                </div>
                <div>
                    <label className="text-gray-700" htmlFor="food_origin">
                        Food Origin (Country)
                    </label>
                    <input
                        id="food_origin"
                        name="food_origin"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-4 md:px-0 lg:px-10 ">
                <label className="text-gray-700" htmlFor="description">
                    Description
                </label>
                <textarea
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                    name="description"
                    id="description"
                ></textarea>
            </div>
            <div className="flex justify-center mt-6 l ">
                <button className="md:w-60 w-full disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Add Food
                </button>
            </div>
        </form>
    </div>
  );
};

export default AddFood;