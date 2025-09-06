import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import powerbank from '../../assets/homePageImage/power-bank.png';
import MedicalAir from '../../assets/homePageImage/Medical-Air.png';
import powerbank1 from '../../assets/homePageImage/power-bank1.jpg';
import ElectricTricycles from '../../assets/homePageImage/Electric-Tricycles.jpg';
import readytoorder from '../../assets/homePageImage/readytoorder.png';
import { FaIndianRupeeSign } from "react-icons/fa6";


const readyToOrder = [
    {
        title: 'Online direct purchase OF A 500W Elderly Moped/electric...',
        price: '830.00',
        moq: '1 Pieces (MOQ)',
        image: MedicalAir
    },
    {
        title: 'Freight load king electric tricycle manufacturer supplies large...',
        price: '357.00 - 425.00',
        moq: '10 Pieces (MOQ)',
        image: powerbank
    },
    {
        title: 'Adult four-wheel karting gasoline drift karting suitable for club...',
        price: '2900.00',
        moq: '2 Pieces (MOQ)',
        image: powerbank1
    },
    {
        title: 'MU Hot Sale Blue and red color electric cargo trike 1500W 72V...',
        price: '600.00 - 625.00',
        moq: '1 Pieces (MOQ)',
        image: ElectricTricycles
    }
];


const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const card = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
};

export default function ReadyToOrder() {
    return (
        <div className="w-full container mx-auto mt-10 px-4 sm:px-4 lg:px-0 rounded-lg font-roboto shadow-lg bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">

                
                <div className="sm:col-span-1 bg-blue-600 text-white flex flex-col items-center rounded-tl-lg rounded-bl-lg justify-center py-8 px-4 text-center">
                    <Link to="/buyerform" className='group cursor-pointer'>
                    <h2 className="text-2xl font-bold mb-4 ">Ready to Order</h2>
                        <button className="bg-white text-darkRed  px-6 py-2 rounded-full font-semibold hover:bg-darkRed hover:text-white transition-colors duration-300">
                        View More
                        </button>
                    </Link>
                    <img src={readytoorder} alt="Ready to Order Banner" className="mt-6 w-full h-40 object-contain" />
                </div>

                
                <motion.div
                    className="sm:col-span-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {readyToOrder.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={card}
                            whileHover={{ scale: 1.03 }}
                            className="bg-white rounded-lg shadow-sm p-2"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-lg w-full h-36 object-contain mb-6"
                            />
                            <h3 className="text-sm font-roboto text-lightgray mb-2 font-medium leading-tight line-clamp-2">
                                {item.title}
                            </h3>
                            <p className="text-sm flex items-center text-gray font-semibold mt-4">
                                <FaIndianRupeeSign />
                                {item.price} <span className="text-gray font-normal text-sm">/ Piece</span>
                            </p>
                            <p className="text-xs text-gray mb-2">{item.moq}</p>
                            <button className="mt-2 text-xs border border-darkRed rounded-full px-4 py-1 text-darkRed hover:bg-darkRed hover:text-white transition-colors duration-300">
                                Start Order
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
