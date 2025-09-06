import React from "react";
import Storage_Devices from "../../assets/homePageImage/ComputerHardware/Storage Devices.jpg";
import Desktops_Laptops from "../../assets/homePageImage/ComputerHardware/Desktops & Laptops.png";
import Motherboards from "../../assets/homePageImage/ComputerHardware/Motherboards.jpeg";
import Processors from "../../assets/homePageImage/ComputerHardware/Processors.jpg";
import Graphics_Cards from "../../assets/homePageImage/ComputerHardware/Graphics Cards.jpg";
import Memory from "../../assets/homePageImage/ComputerHardware/Memory.png";
import { useNavigate } from "react-router-dom";

const products = [
    {
        title: "Desktops & Laptops",
        img: Desktops_Laptops,
        items: [
            "Gaming Desktop",
            "Workstation Desktop",
            "Mini PC",
            "Gaming Laptop",
            "Business Laptop"
        ]
    },
    {
        title: "Motherboards",
        img: Motherboards,
        items: [
            "ATX Motherboard",
            "Micro-ATX Motherboard",
            "Mini-ITX Motherboard",
            "Server Motherboard",
            "High-End Gaming Motherboard"
        ]
    },
    {
        title: "Processors (CPU)",
        img: Processors,
        items: [
            "Intel Core i3",
            "Intel Core i5",
            "Intel Core i7",
            "AMD Ryzen 5",
            "AMD Ryzen 7"
        ]
    },
    {
        title: "Graphics Cards (GPU)",
        img: Graphics_Cards,
        items: [
            "NVIDIA GeForce RTX 3060",
            "NVIDIA GeForce RTX 4070",
            "AMD Radeon RX 6600",
            "AMD Radeon RX 7900",
            "Workstation GPU"
        ]
    },
    {
        title: "Memory (RAM)",
        img: Memory,
        items: [
            "DDR4 8GB RAM",
            "DDR4 16GB RAM",
            "DDR5 8GB RAM",
            "DDR5 16GB RAM",
            "Laptop SO-DIMM 16GB RAM"
        ]
    },
    {
        title: "Storage Devices",
        img: Storage_Devices,
        items: [
            "1TB HDD",
            "2TB HDD",
            "512GB SSD (SATA)",
            "1TB SSD (NVMe)",
            "External SSD 1TB"
        ]
    }
];





export default function ComputerHardware() {
    const navigate = useNavigate(); 
            const handleCardClick = () => {
                navigate("/buyerform"); 
    };
    
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Computer Hardware & Software
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
