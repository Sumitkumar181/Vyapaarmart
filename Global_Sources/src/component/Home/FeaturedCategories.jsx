import React, { useRef } from 'react';
import { motion } from 'framer-motion';

import Angriculture from '../../assets/homePageImage/Angro-Product01-300x3001-1.jpg'
import Appliances from '../../assets/homePageImage/home__appliance.jpg'
import Fashion from '../../assets/homePageImage/young-business-1.jpg'
import Chemicals from '../../assets/homePageImage/chemicals-1.jpg'
import Healthy_Products from '../../assets/homePageImage/Angro-Product031.jpg'
import Industrial from '../../assets/homePageImage/hard-hat-25458651.webp'
import Furniture from '../../assets/homePageImage/furniture.jpg'
import Health from '../../assets/homePageImage/health.jpg'
import Oil from '../../assets/homePageImage/oil.webp'
import Electronics from '../../assets/homePageImage/electronic-e-scooter.jpg'
import Automobile from '../../assets/homePageImage/customized-spare-parts.jpg'
import Machinery from '../../assets/homePageImage/Tungsten-Carbide-bushing.jpg'
import Sports from '../../assets/homePageImage/Sports-Entertainment.png'
import Textiles from '../../assets/homePageImage/Yarn-dyed-fabric.png'
import Beauty from '../../assets/homePageImage/Nail-Sticker.jpg'
import Lighting from '../../assets/homePageImage/Ceiling-lights.jpg'
import Toys from '../../assets/homePageImage/toy-car.jpg'
import Medical from '../../assets/homePageImage/medical-equipment.jpg'


import { ChevronLeft, ChevronRight } from 'lucide-react';

const productList = [
    { title: 'Agriculture', image: Angriculture },
    { title: 'Appliances', image: Appliances },
    { title: 'Fashion', image: Fashion },
    { title: 'Chemicals', image: Chemicals },
    { title: 'Healthy Food Products', image: Healthy_Products },
    { title: 'Industrial', image: Industrial },
    { title: 'Furniture', image: Furniture },
    { title: 'Health', image: Health },
    { title: 'Oil', image: Oil },
    { title: 'Electronics & Electricals', image: Electronics },
    { title: 'Automobiles & Spare Parts', image: Automobile },
    { title: 'Machinery & Equipment', image: Machinery },
    { title: 'Sports & Entertainment', image: Sports },
    { title: 'Textiles & Leather Products', image: Textiles },
    { title: 'Beauty & Personal Care', image: Beauty },
    { title: 'Lighting Products', image: Lighting },
    { title: 'Toys & Hobbies', image: Toys },
    { title: 'Medical Equipment & Supplies', image: Medical },
    


];


const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
};

export default function FeaturedCategories() {
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: dir === 'left' ? -300 : 300,
                behavior: 'smooth',
            });
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-7xl bg-white mx-auto px-4 mt-10 rounded-lg py-6 font-roboto relative"
        >

            <motion.div
                variants={fadeInUp}
                custom={1}
                className="flex  sm:items-center gap-2 sm:gap-4 "
            >
                <h2 className="font-bold text-2xl text-gray font-[roboto]">
                    Featured Categories
                </h2>
                <p className="text-xs text-lightgray font-[roboto]">
                    The most in-demand categories among buyers.
                </p>
            </motion.div>


            <motion.div
                variants={fadeInUp}
                custom={2}
                className="relative mt-10"
            >

                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10  shadow h-full rounded-tr-lg rounded-br-lg bg-[#e1ecf7]"
                >
                    <ChevronLeft size={28} />
                </button>


                <div
                    ref={scrollRef}
                    className="flex space-x-6 overflow-hidden scroll-smooth bg-white px-4 py-10 rounded-lg  scrollbar-hide"
                >
                    {productList.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            custom={index * 0.1 + 3}
                            className="flex-shrink-0 flex flex-col items-center text-center space-y-2"
                        >
                            <div className="h-20 w-20 rounded-full bg-gray-100 shadow flex items-center justify-center overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <p className="text-sm font-medium text-lightgray">{item.title}</p>
                        </motion.div>
                    ))}
                </div>


                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full rounded-tl-lg rounded-bl-lg bg-[#e1ecf7] hover:text-blue-900"
                >
                    <ChevronRight size={28} />
                </button>
            </motion.div>
        </motion.div>
    );
}
