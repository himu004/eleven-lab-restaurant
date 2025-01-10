import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./banner.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = ({theme}) => {
  
  return (
    <div className="hero md:p-0">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <div className="md:w-full md:max-w-2xl max-w-xs rounded-lg overflow-hidden">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 2000,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                className="b-im"
                  src="https://i.pinimg.com/736x/fb/94/ca/fb94cab6d7c260b8c5952385d5dfee94.jpg"
                  alt="slide"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                className="b-im"
                  src="https://i.pinimg.com/736x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg"
                  alt="slide"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                className="b-im"
                  src="https://i.pinimg.com/736x/eb/cb/c6/ebcbc6aaa9deca9d6efc1efc93b66945.jpg"
                  alt="slide"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                className="b-im"
                  src="https://i.pinimg.com/736x/76/19/ef/7619ef4dfcf7382aab410d57e796ffbf.jpg"
                  alt="slide"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                className="b-im"
                  src="https://i.pinimg.com/736x/b3/60/ae/b360aefcded25044c9f367c78aea4b07.jpg"
                  alt="slide"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                className="b-im"
                  src="https://i.pinimg.com/736x/78/c4/33/78c433eb22a7fb53e31df6150ca867b2.jpg"
                  alt="slide"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                className="b-im"
                  src="https://i.pinimg.com/736x/c8/11/e1/c811e16e296b7830943b90943a3d5c51.jpg"
                  alt="slide"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                className="b-im"
                  src="https://i.pinimg.com/736x/d4/5c/65/d45c6504ba23520418b2cb1b2fee71a2.jpg"
                  alt="slide"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="flex-1 p-5">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}
          >
            Welcome to Eleven Lab{" "}
            <span className={`${theme === "dark" ? "text-error" : "text-success"}`}>Restaurant</span>
          </motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            }}
            className={`py-6 text-lg text-justify text-gray-500 ${theme === "dark" ? "text-white" : "text-gray-500"}`}
          >
            A food-focused site that provides tools and resources to explore,
            plan, and manage meals efficiently. Users can discover diverse
            recipes, track ingredients, and plan meals tailored to their
            preferences.
          </motion.p>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut",
            }}
          >
            <Link to="/all-foods">
              <button className={`btn px-10 text-white ${theme === "dark" ? "btn-error hover:btn-success hover:text-white" : "btn-success  hover:btn-error hover:text-white"}`}>
                Foods We Have
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
