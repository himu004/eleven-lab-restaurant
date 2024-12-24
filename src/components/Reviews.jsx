import React from "react";
import { FaStar } from "react-icons/fa";

const Reviews = ({ theme }) => {
    const reviews = [
        {
            text: "“The food was absolutely wonderful, from preparation to presentation, very pleasing.”",
            name: "Robert",
            title: "CTO, Robert Consultancy",
            img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
        {
            text: "“We especially enjoyed the special bar drinks, the cucumber cooler was refreshing and delicious.”",
            name: "Jenny Doe",
            title: "CEO, Jenny Consultancy",
            img: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        },
        {
            text: "“The atmosphere was charming. I will definitely be back soon.”",
            name: "Ema Watson",
            title: "Marketing Manager at Tech",
            img: "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        
        {
            text: "“The menu is perfect, something for everyone. I highly recommend it.”",
            name: "Alice Smith",
            title: "Designer at Creatives",
            img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            text: "“The food was fresh, properly prepared, and a great value for the price.”",
            name: "Michael Brown",
            title: "Manager at Business Inc.",
            img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            text: "“I highly recommend this restaurant. The food is fantastic and the service is great.”",
            name: "Sarah Conner",
            title: "CEO at FutureTech",
            img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
    ];

    return (
        <section className={`bg-white ${theme === "dark" ? "bg-gray-900" : ""}`}>
            <div className="container px-6 py-10 mx-auto">
                <div className="mt-6 md:flex md:items-center md:justify-between">
                    <div>
                        <h1
                            className={`text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ${
                                theme === "dark" ? "text-white" : ""
                            }`}
                        >
                            What our Customer are saying
                        </h1>

                        <div className="flex mx-auto mt-6">
                            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 xl:mt-12">
                    {reviews.map((review, index) => (
                        <div key={index} className="p-8 border rounded-lg min-w-[300px]">
                            <p className="leading-loose text-gray-500">{review.text}</p>
                            <div className="flex items-center mt-8 -mx-2">
                                <img
                                    className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300"
                                    src={review.img}
                                    alt=""
                                />
                                <div className="mx-2">
                                    <h1 className="font-semibold text-gray-500">{review.name}</h1>
                                    <span className="text-sm text-gray-500">{review.title}</span>
                                    <div className="flex mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-yellow-500" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
