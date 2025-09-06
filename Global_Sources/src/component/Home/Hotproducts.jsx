import React from 'react';
import { motion } from 'framer-motion';
import headphone from '../../assets/card/headphone.jpeg';
import gaming from '../../assets/card/gaming.jpeg';
import homeKitchen from '../../assets/card/home_kitchen.jpeg';
import lifestyle from '../../assets/card/lifestyle.jpeg';
import security from '../../assets/card/security.jpeg';
import watch from '../../assets/card/watch.jpeg';
import outdoor from '../../assets/card/outdoor.jpeg';
import ElectronicComponents from '../../assets/card/electronic_components.jpeg';
import { Link } from 'react-router-dom';

const products = [
    { name: "Consumer Electronics", image: headphone },
    { name: "Electronic Components", image: ElectronicComponents },
    { name: "Gaming", image: gaming },
    { name: "Mobile Electronics", image: watch },
    { name: "Smart Home, Security & Appliances", image: security },
    { name: "Lifestyle", image: lifestyle },
    { name: "Home & kitchen", image: homeKitchen },
    { name: "Sports & Outdoor", image: outdoor }
];

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            when: 'beforeChildren',
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Hotproducts() {
    return (
        <motion.div
            className="w-full bg-[#042939] container mx-auto mt-10 rounded-lg px-3 sm:px-6 lg:px-10 py-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            
            <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-4">
                <div className="flex flex-col gap-1">
                    <h2 className="text-white font-bold font-roboto italic text-lg sm:text-xl md:text-2xl">
                        Featured products   
                    </h2>
                    <p className="text-white font-roboto text-xs sm:text-sm md:text-base">
                        Hot products, new trends, more sourcing opportunities
                    </p>
                </div>
                <div className="w-full sm:w-auto">
                    <button className="h-10 w-full sm:w-36 rounded-full text-sm font-bold 
            hover:bg-darkRed hover:text-white transition-colors duration-300 
            text-[#042939] font-roboto bg-white">
                        View More
                    </button>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-6">
                {products.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="bg-white rounded-lg flex flex-col items-center justify-start p-2 sm:p-3 h-40 sm:h-44 md:h-48"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-20 sm:h-24 md:h-28 w-auto object-contain mb-3"
                        />
                        <p className="text-center font-roboto text-gray-800 text-xs sm:text-sm font-medium line-clamp-2">
                            {item.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
