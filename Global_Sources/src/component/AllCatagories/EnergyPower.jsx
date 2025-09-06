import React from "react";
import Switchgear from "../../assets/homePageImage/EnergySystem/Switchgear.jpg";
import Batteries from "../../assets/homePageImage/EnergySystem/Batteries.webp";
import Cables from "../../assets/homePageImage/EnergySystem/Cables.jpg";
import Generators from "../../assets/homePageImage/EnergySystem/Generators.jpg";
import Power_Transformers from "../../assets/homePageImage/EnergySystem/Power Transformers.jpg";
import Renewable_Energy from "../../assets/homePageImage/EnergySystem/Renewable Energy.jpeg";
import { useNavigate } from "react-router-dom";

const products = [
    {
        title: "Solar Energy",
        img: Renewable_Energy,
        items: [
            "Solar Panels",
            "Solar Inverters",
            "Solar Batteries",
            "Solar Charge Controllers",
            "Solar Street Lights"
        ]
    },
    {
        title: "Batteries & Storage",
        img: Batteries,
        items: [
            "Lithium-Ion Batteries",
            "Lead Acid Batteries",
            "UPS Batteries",
            "EV Batteries",
            "Energy Storage Systems"
        ]
    },
    {
        title: "Generators",
        img: Generators,
        items: [
            "Diesel Generators",
            "Gas Generators",
            "Portable Generators",
            "Silent Generators",
            "Industrial Generators"
        ]
    },
    {
        title: "Cables & Wires",
        img: Cables,
        items: [
            "Power Cables",
            "High Voltage Cables",
            "Copper Wires",
            "Aluminum Cables",
            "Control Cables"
        ]
    },
    {
        title: "Transformers",
        img: Power_Transformers,
        items: [
            "Power Transformers",
            "Distribution Transformers",
            "Dry Type Transformers",
            "Oil Filled Transformers",
            "Isolation Transformers"
        ]
    },
    {
        title: "Switchgear & Control",
        img: Switchgear,
        items: [
            "Circuit Breakers",
            "Switchgear Panels",
            "Relays",
            "Disconnect Switches",
            "Control Panels"
        ]
    }
];





export default function EnergyPower() {
    const navigate = useNavigate(); 
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Energy Power
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

                            <div className="mt-4 flex ">
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
