import React from "react";
import Industrial_Brass from "../../assets/homePageImage/BrassHardware/Industrial Brass Components.jpg";
import Brass_Decorative from "../../assets/homePageImage/BrassHardware/Brass Decorative Hardware.png";
import Brass_Fittings from "../../assets/homePageImage/BrassHardware/Brass Fittings.webp";
import Brass_Pipes from "../../assets/homePageImage/BrassHardware/Brass Pipes & Tubes.jpg";
import Brass_Valves from "../../assets/homePageImage/BrassHardware/Brass Valves.jpeg";
import { useNavigate } from "react-router-dom";

const products = [
    {
        img: Brass_Fittings,
        title: "Brass Fittings",
        items: [
            "Brass Nuts & Bolts",
            "Brass Screws",
            "Brass Washers",
            "Brass Inserts",
            "Brass Bushings",
        ],
    },
    {
        img: Brass_Valves,
        title: "Brass Valves",
        items: [
            "Ball Valves",
            "Gate Valves",
            "Check Valves",
            "Needle Valves",
            "Angle Valves",
        ],
    },
    {
        img: Brass_Pipes,
        title: "Brass Pipes & Tubes",
        items: [
            "Seamless Brass Pipes",
            "Welded Brass Tubes",
            "Brass Plumbing Pipes",
            "Brass Water Pipes",
            "Brass Gas Pipes",
        ],
    },
    {
        img: Brass_Decorative,
        title: "Brass Decorative Hardware",
        items: [
            "Brass Handles",
            "Brass Knobs",
            "Brass Hinges",
            "Brass Nameplates",
            "Brass Curtain Rods",
        ],
    },
    {
        img: Industrial_Brass,
        title: "Industrial Brass Components",
        items: [
            "Brass Electrical Parts",
            "Brass Connectors",
            "Brass Terminals",
            "Brass Machined Parts",
            "Brass Couplings",
        ],
    },
];




export default function BrassHardware() {
    const navigate = useNavigate(); 
        const handleCardClick = () => {
            navigate("/buyerform"); 
    };
    
    return (
        <div className="px-4 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Brass Hardware & Software
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

                            <div className="mt-4">
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
