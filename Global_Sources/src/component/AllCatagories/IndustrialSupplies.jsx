import React from "react";
import IndustrialValves from "../../assets/homePageImage/IndustrialSuppliers/IndustrialValves.jpeg";
import MetalStorage from "../../assets/homePageImage/IndustrialSuppliers/MetalStorage.jpeg";
import Laboratory from "../../assets/homePageImage/IndustrialSuppliers/Laboratory.jpeg";
import Hydraulic from "../../assets/homePageImage/IndustrialSuppliers/Hydraulic.jpeg";
import ConveyorBelts from "../../assets/homePageImage/IndustrialSuppliers/ConveyorBelts.jpeg";
import MaterialHandling from "../../assets/homePageImage/IndustrialSuppliers/MaterialHandling.jpg";
import { useNavigate } from "react-router-dom";


const products = [
    {
        img: MaterialHandling,
        title: "Material Handling Equipment",
        items: [
            "Hydraulic Pallet Truck",
            "Industrial Trolley",
            "Manual Stacker",
            "Scissor Lift Table",
            "Goods Lift"
        ]
    },
    {
        img: ConveyorBelts,
        title: "Conveyor & Conveyor Belts",
        items: [
            "Belt Conveyors",
            "Conveyor Belts",
            "Screw Conveyors",
            "Roller Conveyors",
            "Chain Conveyor"
        ]
    },
    {
        img: Hydraulic,
        title: "Hydraulic Products & Equipment",
        items: [
            "Hydraulic Jack",
            "Hydraulic Power Packs",
            "Hydraulic Door Closers",
            "Hydraulic Cylinders",
            "Hydraulic Press"
        ]
    },
    {
        img: Laboratory,
        title: "Laboratory Glassware & Equipment",
        items: [
            "Laboratory Equipment",
            "Humidity Chamber",
            "Laminar Air Flow",
            "Water Bath",
            "Laboratory Glassware"
        ]
    },
    {
        img: MetalStorage,
        title: "Storage Systems",
        items: [
            "Metal Storage Rack",
            "FRP Storage Tanks",
            "Heavy Duty Racks",
            "Storage Bins",
            "Storage Drawers"
        ]
    },
    {
        img: IndustrialValves,
        title: "Industrial Valves",
        items: [
            "Check Valves",
            "Safety Valves",
            "Ball Valves",
            "Gate Valves",
            "Butterfly Valves"
        ]
    }
];


export default function IndustrialSupplies() {
    const navigate = useNavigate();
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Industrial Supplies
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
                                            className="pb-1 hover:text-blue-600 cursor-pointer"
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
