




import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import allFoods from '../../assets/gellary.png'

const Gallery = () => {
    const galleryImages = [
        { id: 1, img: "https://i.pinimg.com/736x/91/17/15/9117155a6a5735033bfea2afbd843ba0.jpg", title: "Special Pasta", desc: "Italian homemade pasta with fresh ingredients" },
        { id: 2, img: "https://i.pinimg.com/736x/75/8b/0e/758b0eab205895cf4569400dfd8a0a0c.jpg", title: "Grilled Salmon", desc: "Fresh Atlantic salmon with herbs" },
        { id: 3, img: "https://i.pinimg.com/736x/64/4a/f2/644af21b17517190e5488f1ec496776e.jpg", title: "Caesar Salad", desc: "Classic salad with our special dressing" },
        { id: 4, img: "https://i.pinimg.com/736x/fd/d5/ad/fdd5adc775b688ac921256ab369fbf0f.jpg", title: "Beef Steak", desc: "Premium cut beef with vegetables" },
        { id: 5, img: "https://i.pinimg.com/736x/fc/b5/96/fcb596a832f5460dc3c8ade4d657d8a2.jpg", title: "Sushi Platter", desc: "Assorted fresh sushi selection" },
        { id: 6, img: "https://i.pinimg.com/736x/62/a0/50/62a050cfa783c0f897bcf25325be5fac.jpg", title: "Pizza Margherita", desc: "Traditional Italian pizza" },
        { id: 7, img: "https://i.pinimg.com/736x/13/31/4e/13314e50861215cd5f0f2e2544aaa8ec.jpg", title: "Seafood Paella", desc: "Spanish rice dish with seafood" },
        { id: 8, img: "https://i.pinimg.com/736x/eb/7b/2b/eb7b2b809751f7b3cd6757426914b5ae.jpg", title: "Chocolate Cake", desc: "Rich chocolate layer cake" },
        { id: 9, img: "https://i.pinimg.com/736x/56/fb/3f/56fb3f0a81ab2a5fef185f774365ef82.jpg", title: "Garden Bowl", desc: "Fresh vegetarian bowl" },
        { id: 10, img: "https://i.pinimg.com/736x/92/c0/03/92c0030e944c187f4427e363025e6e53.jpg", title: "BBQ Ribs", desc: "Slow-cooked BBQ pork ribs" },
        { id: 10, img: "https://i.pinimg.com/736x/9f/9b/59/9f9b5972c477421cd03aa1e75606b5b4.jpg", title: "Rice Platter", desc: "Indian rice platter, continental taste" },
        { id: 10, img: "https://i.pinimg.com/736x/26/99/12/269912a43432af5c9cf603093bb984c9.jpg", title: "Fried Chicken", desc: "KFC Styled Mouth Weathering Fried Chicken" },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    return (
        <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between">
            <div
                style={{ backgroundImage: `url(${allFoods})` }}
                className="bg-center bg-cover object-cover text-center mb-8 h-32 rounded-xl"
            >
                <div className="h-full flex flex-col items-center justify-center bg-black bg-opacity-20 rounded-xl">
                    <h2 className="text-4xl font-bold text-red-500">Gallery</h2>
                    <div className="w-24 h-1 mx-auto bg-red-500 mt-3"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((item, index) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden rounded-lg cursor-pointer group"
                        onClick={() => {
                            setPhotoIndex(index);
                            setIsOpen(true);
                        }}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-sm mt-2">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={galleryImages.map(item => ({ src: item.img }))}
                index={photoIndex}
            />
        </div>
    );
};

export default Gallery;