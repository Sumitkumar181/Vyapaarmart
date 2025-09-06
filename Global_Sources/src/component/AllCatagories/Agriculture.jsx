import React from "react";
import { useNavigate } from "react-router-dom"; // ADD THIS
import TractorPartsImg from "../../assets/homePageImage/Aggriculture/Tractor Parts.jpg";
import RiceImg from "../../assets/homePageImage/Aggriculture/rice.webp";
import TeaImg from "../../assets/homePageImage/Aggriculture/Tea.webp";
import IrrigationSystemsImg from "../../assets/homePageImage/Aggriculture/Irrigation Systems.jpg";
import OrganicVegetablesImg from "../../assets/homePageImage/Aggriculture/Organic Vegetables.webp";
import PulsesImg from "../../assets/homePageImage/Aggriculture/Pulses.webp";

const products = [
    {
        img: RiceImg,
        title: "Rice",
        items: [
            "Brown Rice",
            "Basmati Rice",
            "Black Rice",
            "Red Rice",
            "India Gate Basmati Rice",
        ],
    },
    {
        img: TeaImg,
        title: "Tea",
        items: [
            "Masala Tea",
            "Assam Ctc Tea",
            "Organic Tea",
            "Lemon Tea",
            "Tea Powder",
        ],
    },
    {
        img: IrrigationSystemsImg,
        title: "Irrigation Systems",
        items: [
            "Sprinkler",
            "Drip Irrigation System",
            "Drip Irrigation Pipes",
            "Water Sprinkler",
            "Hdpe Irrigation Pipe",
        ],
    },
    {
        img: OrganicVegetablesImg,
        title: "Organic Vegetables",
        items: [
            "Organic Potatoes",
            "Organic Ginger",
            "Organic Garlic",
            "Organic Onions",
            "Organic Drumsticks",
        ],
    },
    {
        img: PulsesImg,
        title: "Pulses",
        items: [
            "Organic Pulses",
            "Chana Dal",
            "Toor Dal",
            "Moong Dal",
            "Masoor Dal",
        ],
    },
    {
        img: TractorPartsImg,
        title: "Tractor Parts",
        items: [
            "Tractor Spare Parts",
            "Tractor Rotavator",
            "Hydraulic Tractor Parts",
            "Top Link Pins",
            "Linch Pins",
        ],
    },
];

export default function Agriculture() {
    const navigate = useNavigate(); 

    const handleEnquiry = (product) => {
        navigate("/buyerform", { state: { product } }); 
    };

    return (
        <div className="px-4 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Agriculture
            </h2>

            <div className="overflow-x-auto md:overflow-visible">
                <div className="flex space-x-4 md:grid md:grid-cols-2 lg:grid-cols-6 md:gap-4">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            onClick={() => handleEnquiry(product)}
                            className="min-w-[220px] md:min-w-0 rounded-md bg-white px-4 py-2 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between h-full"
                        >
                            <div>
                            <div className="flex justify-center">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="h-32 object-contain"
                                />
                            </div>

                            <h3 className="mt-3 font-semibold text-sm border-b border-lightgray border-opacity-35">
                                {product.title}
                            </h3>

                            <ul className="mt-2 space-y-1 text-gray text-xs">
                                {product.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="pb-1 hover:text-blue-600 cursor-pointer"
                                    >
                                        {item}
                                    </li>
                                ))}
                                </ul>
                                </div>
                            <div className="mt-4 flex">
                                <button className="text-sm border-darkRed text-darkRed border hover:bg-darkRed hover:text-white transition-colors duration-300 px-3 py-1 rounded-full">
                                    Inquire Now
                                </button>
                            </div>
                        </div>
                        
                    ))}
                </div>
                
            </div>
           
        </div>
    );
}
