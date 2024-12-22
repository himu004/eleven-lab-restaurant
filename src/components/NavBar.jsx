import { useContext } from "react";
// import logo from '../assets/images/logo.png'

import { Link } from "react-router-dom";
import { AuthContext, ThemeContext } from "../providers/Context";
import { motion } from "framer-motion";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { handleChangeTheme, theme } = useContext(ThemeContext);
  console.log(theme);

return (
    <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
        <div className="flex-1">
            <Link to="/" className="flex gap-2 items-center">
                <motion.span
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="font-bold"
                >
                    Eleven Lab Restaurant
                </motion.span>
            </Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/jobs">All Jobs</Link>
                </li>
                {/* Dropdown */}
                {!user && (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
            </ul>

            {user && (
                <div className="dropdown dropdown-end z-50">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div title={user?.displayName} className="w-10 rounded-full">
                            <img
                                referrerPolicy="no-referrer"
                                alt="User Profile Photo"
                                src={user?.photoURL}
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/add-job" className="justify-between">
                                Add Job
                            </Link>
                        </li>
                        <li>
                            <Link to="/my-posted-jobs">My Posted Jobs</Link>
                        </li>
                        <li>
                            <Link to="/my-bids">My Bids</Link>
                        </li>
                        <li>
                            <Link to="/bid-requests">Bid Requests</Link>
                        </li>
                        <li className="mt-2">
                            <button
                                onClick={logOut}
                                className="bg-gray-200 block text-center"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleChangeTheme}
            className="ml-4 p-2 rounded-full hover:bg-base-200"
        >
            {theme === "light" ? (
                <MdOutlineDarkMode className="text-xl" />
            ) : (
                <MdOutlineLightMode className="text-xl" />
            )}
        </motion.button>
    </div>
);
};

export default Navbar;

