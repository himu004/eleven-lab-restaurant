import { motion } from "framer-motion";

const Menu = () => {
    return (
        <motion.div 
            className="max-w-7xl mx-auto py-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-500">Our Menu</h1>
            
            {menuItems.map((category, categoryIndex) => (
                <motion.div 
                    key={categoryIndex}
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                >
                    <h2 className="text-3xl font-semibold text-center mb-8 text-primary">
                        {category.category}
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        {category.items.map((item, index) => (
                            <motion.div 
                                key={index}
                                className="flex justify-between items-center border-b border-dotted border-gray-300 pb-4 mb-4"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <div className="flex-1">
                                    <h3 className="text-gray-500 text-xl font-bold mb-1">{item.name}</h3>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                                <div className="ml-4">
                                    <span className="text-xl font-bold text-primary">
                                        ${item.price.toFixed(2)}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

// Keep the menuItems array as is
const menuItems = [
    {
        category: "Appetizers",
        items: [
            { name: "Spring Rolls", description: "Crispy rolls with vegetables", price: 5.99 },
            { name: "Garlic Bread", description: "Toasted bread with garlic and herbs", price: 3.99 },
        ],
    },
    {
        category: "Main Courses",
        items: [
            { name: "Grilled Chicken", description: "Chicken breast with herbs and spices", price: 12.99 },
            { name: "Beef Steak", description: "Juicy steak with a side of vegetables", price: 19.99 },
        ],
    },
    {
        category: "Desserts",
        items: [
            { name: "Cheesecake", description: "Creamy cheesecake with a graham cracker crust", price: 6.99 },
            { name: "Chocolate Cake", description: "Rich chocolate cake with chocolate frosting", price: 5.99 },
        ],
    },
    {
        category: "Beverages",
        items: [
            { name: "Coffee", description: "Freshly brewed coffee", price: 2.99 },
            { name: "Lemonade", description: "Refreshing lemonade with a hint of mint", price: 3.49 },
        ],
    },
];
export default Menu;
