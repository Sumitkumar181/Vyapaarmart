import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom"; // <-- useNavigate import
import { FaIndianRupeeSign } from "react-icons/fa6";

import eyemasager from '../../assets/homePageImage/eye-masager.png';
import box from '../../assets/homePageImage/box.png';
import razors from '../../assets/homePageImage/razors.png';
import nightsuit from '../../assets/homePageImage/night-suit.png';
import third from '../../assets/homePageImage/third-1.png';

const newProducts = [
    { title: "Eye massagers", price: "2380.00", moq: "5 Pieces (MOQ)", image: eyemasager },
    { title: "Cosmetic packaging boxes", price: "16.15", moq: "2000 Pieces (MOQ)", image: box },
    { title: "Qi2 3-in-1 Magnetic Wireless Charging Stand", price: "", moq: "1000 Pieces (MOQ)", image: razors },
    { title: "Bathrobes", price: "425", moq: "100 Pieces (MOQ)", image: nightsuit },
    { title: "Plastic cosmetic bottles", price: "13.06", moq: "100 Pieces (MOQ)", image: third }
];

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const card = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
};

export default function NewProducts() {
    const navigate = useNavigate(); 

    const handleInquire = (product) => {
        
        navigate("/buyerform");
    };

    return (
        <div className="w-[95%] max-w-[1600px] mx-auto mt-10 px-4 sm:px-6 md:px-8 font-roboto py-6 rounded-lg shadow-lg bg-[#446373]">

          
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-roboto font-bold italic text-white">
                    New <span className='text-[#EE343B]'>Products</span>
                    <span className="block sm:inline text-xs sm:text-sm font-normal italic pl-0 sm:pl-4">
                        Explore the hottest releases in the past two weeks
                    </span>
                </h2>
                <Link to="/allCatagories" className="text-sm md:text-base font-medium text-[#EE343B] hover:underline self-start sm:self-center">
                    See All
                </Link>
            </div>

            
            <motion.div
                className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {newProducts.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={card}
                        whileHover={{ scale: 1.04 }}
                        className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="rounded-lg w-full h-36 sm:h-40 md:h-44 lg:h-48 object-contain mb-3"
                        />
                        <h3 className="text-xs sm:text-sm text-[#7b7b7c] font-medium leading-tight mb-2 line-clamp-2">
                            {item.title}
                        </h3>
                        {item.price && (
                            <p className="text-sm sm:text-base flex items-center text-gray font-semibold mt-1">
                                <FaIndianRupeeSign />
                                {item.price}
                                <span className="text-gray-500 font-normal text-xs sm:text-sm"> / Piece</span>
                            </p>
                        )}
                        <p className="text-xs text-gray-500 mb-2">{item.moq}</p>
                        <button
                            onClick={() => handleInquire(item)}
                            className="mt-2 text-xs sm:text-sm border border-darkRed text-darkRed hover:text-white transition-colors duration-300 rounded-full hover:bg-darkRed px-3 sm:px-4 py-1"
                        >
                            Inquire Now
                        </button>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
