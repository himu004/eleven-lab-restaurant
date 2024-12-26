import { useContext, useEffect, useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import galleryBG from "../../assets/gellary.png";
import { AuthContext } from "../../providers/Context";
import axios from "axios";
import LoadingSpinner from "../../components/LoadingSpinner";

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [galleryImages, setGalleryImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; // Updated to 12

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetchJobData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchJobData = async () => {
        const { data } = await axios.get(
            `https://eleven-lab-retaurant-backend.vercel.app/all-foods`
        );
        setGalleryImages(data);
        setIsLoading(false);
        console.log(data);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = galleryImages.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(galleryImages.length / itemsPerPage);

    return (
        <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
            <div
                style={{ backgroundImage: `url(${galleryBG})` }}
                className="bg-center bg-cover object-cover text-center mb-8 h-32 rounded-xl"
            >
                <div className="h-full flex flex-col items-center justify-center bg-black bg-opacity-20 rounded-xl">
                    <h2 className="text-4xl font-bold text-green-500">Gallery</h2>
                    <div className="w-24 h-1 mx-auto bg-red-500 mt-3"></div>
                </div>
            </div>

            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentItems.map((item, index) => (
                            <div
                                key={item._id}
                                className="relative overflow-hidden rounded-lg cursor-pointer group"
                                onClick={() => {
                                    setPhotoIndex(indexOfFirstItem + index);
                                    setIsOpen(true);
                                }}
                            >
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                                    <p>Hello,</p>
                                    <h1 className="text-2xl font-bold">{user?.displayName}</h1>
                                    <p>We Present You</p>
                                    <h3 className="text-xl font-bold">{item.name}</h3>
                                    <p className="text-xs mt-2 max-w-xs text-center">
                                        {item.description.substring(0, 80)}....
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-6">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`px-4 py-2 mx-1 rounded ${
                                    currentPage === index + 1
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-200 text-gray-700"
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </>
            )}
            {isOpen && (
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    slides={galleryImages.map((item) => ({ src: item.imageUrl }))}
                    index={photoIndex}
                />
            )}
        </div>
    );
};

export default Gallery;
