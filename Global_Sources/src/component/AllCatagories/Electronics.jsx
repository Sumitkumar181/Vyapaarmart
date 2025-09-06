import React from "react";
import LED_Products from "../../assets/homePageImage/Electronics/LED Products.jpg";
import Air_Conditioner from "../../assets/homePageImage/Electronics/Air Conditioner.jpeg"
import Air_Cooler from "../../assets/homePageImage/Electronics/Air Cooler.png"
import Refrigerator_Freezer from "../../assets/homePageImage/Electronics/Refrigerator & Freezer.jpg"
import Solar_Equipment from "../../assets/homePageImage/Electronics/Solar Products & Equipment.jpeg"
import Voltage_Stabilizers from "../../assets/homePageImage/Electronics/Voltage Stabilizers.jpeg"
import { useNavigate } from "react-router-dom";

const products = [
    {
        img: Air_Conditioner,
        title: "Air Conditioner",
        items: [
            "Air Conditioning Systems",
            "Window Air Conditioners",
            "Split Air Conditioner",
            "Ac Filters",
            "Ac Blower",
        ],
    },
    {
        img: Voltage_Stabilizers,
        title: "Voltage Stabilizers",
        items: [
            "Servo Voltage Stabilizer",
            "Automatic Voltage Stabilizer",
            "Industrial Voltage Stabilizer",
            "Electronic Voltage Stabilizer",
            "Ac Voltage Stabilizer",
        ],
    },
    {
        img: Air_Cooler,
        title: "Air Cooler",
        items: [
            "Coolers",
            "Desert Cooler",
            "Industrial Coolers",
            "Room Cooler",
            "Cooler Pump",
        ],
    },
    {
        img: Refrigerator_Freezer,
        title: "Refrigerator & Freezer",
        items: [
            "Ice Cream Freezer",
            "Commercial Refrigerator",
            "Deep Freezer",
            "Water Chiller",
            "Double Door Refrigerator",
        ],
    },
    {
        img: Solar_Equipment,
        title: "Solar Products & Equipment",
        items: [
            "Solar Inverter",
            "Solar Street Lights",
            "Mini Solar Panels",
            "Commercial Solar Panels",
            "Solar Battery",
        ],
    },
    {
        img: LED_Products,
        title: "LED Products",
        items: [
            "Led Flood Light",
            "Led Panel Light",
            "Led Lights",
            "Indoor Led Light",
            "Spot Lights",
        ],
    },
];



export default function Electronics() {
    const navigate = useNavigate(); 
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Electronics & Electrical Supplies
            </h2>

            <div className="overflow-x-auto md:overflow-visible">
                <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-6 md:gap-4 gap-4">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            onClick={handleCardClick}
                            className="min-w-[220px] md:min-w-0 rounded-md bg-white px-4 py-4 shadow-sm hover:shadow-md transition flex flex-col justify-between h-full"
                        >
                            <div>
                                <div className="flex justify-center">
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="h-32 object-contain"
                                    />
                                </div>

                                <h3 className="mt-3 font-semibold text-sm border-b border-lightgray border-opacity-35 pb-1">
                                    {product.title}
                                </h3>

                                <ul className="mt-2 space-y-1 text-gray text-xs">
                                    {product.items.map((item, i) => (
                                        <li
                                            key={i}
                                            className="last:border-b-0 pb-1 hover:text-blue-600 cursor-pointer"
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
