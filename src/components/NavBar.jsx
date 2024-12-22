import { useContext, useState } from "react";
import logo from '../assets/logo1.png';
import { Link, NavLink } from "react-router-dom";
import { AuthContext, ThemeContext } from "../providers/Context";
import { motion } from "framer-motion";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { handleChangeTheme, theme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar max-w-7xl mx-auto px-4 md:px-5 shadow-md bg-base-100 text-base-content sticky top-0 z-50 rounded-lg m-5">
            <div className="flex-1">
                <Link to="/" className="flex gap-2 items-center">
                    <motion.img
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10"
                        src={logo}
                        alt="Logo"
                    />
                    <motion.span
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="font-bold hidden sm:block"
                    >
                        Eleven Lab Restaurant
                    </motion.span>
                </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
                <button onClick={toggleMenu} className="p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden lg:flex flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/all-foods">All Foods</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                    {!user && <li><Link to="/login">Login</Link></li>}
                </ul>

                {user && (
                    <div className="dropdown dropdown-end z-50">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div title={user?.displayName} className="w-10 rounded-full">
                                <img referrerPolicy="no-referrer" alt="User Profile Photo" src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/add-job">Add Job</Link></li>
                            <li><Link to="/my-posted-jobs">My Posted Jobs</Link></li>
                            <li><Link to="/my-bids">My Bids</Link></li>
                            <li><Link to="/bid-requests">Bid Requests</Link></li>
                            <li className="mt-2">
                                <button onClick={logOut} className="bg-gray-200 block text-center">Logout</button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Mobile menu (dropdown) */}
            <div className={`lg:hidden absolute top-16 left-0 right-0 bg-base-100 shadow-md ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="menu menu-vertical px-4 py-2">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/all-foods">All Foods</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                    {!user && <li><Link to="/login">Login</Link></li>}
                    {user && (
                        <>
                            <li><Link to="/add-job">Add Job</Link></li>
                            <li><Link to="/my-posted-jobs">My Posted Jobs</Link></li>
                            <li><Link to="/my-bids">My Bids</Link></li>
                            <li><Link to="/bid-requests">Bid Requests</Link></li>
                            <li className="mt-2">
                                <button onClick={logOut} className="bg-gray-200 block text-center">Logout</button>
                            </li>
                        </>
                    )}
                </ul>
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
