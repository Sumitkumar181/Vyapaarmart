import React from "react";
import carpet from "../../assets/homePageImage/HomeTextiles/carpet.jpeg";
import Cushions from "../../assets/homePageImage/HomeTextiles/Cushions.jpeg";
import Table from "../../assets/homePageImage/HomeTextiles/Table.jpeg";
import Curtains from "../../assets/homePageImage/HomeTextiles/Curtains.jpeg";
import Bedding from "../../assets/homePageImage/HomeTextiles/Bedding.jpeg";
import { useNavigate } from "react-router-dom";

const products = [
    {
        img: Bedding,
        title: "Bedding",
        items: [
            "Bed Sheets",
            "Pillows",
            "Blankets",
            "Mattress Protectors",
            "Comforters",
        ],
    },
    {
        img: Curtains,
        title: "Curtains & Blinds",
        items: [
            "Window Curtains",
            "Roller Blinds",
            "Roman Blinds",
            "Drapes",
            "Sheer Curtains",
        ],
    },
    {
        img: Cushions,
        title: "Cushions & Covers",
        items: [
            "Cushion Covers",
            "Sofa Covers",
            "Chair Pads",
            "Throw Pillows",
            "Bolster Covers",
        ],
    },
    {
        img: Table,
        title: "Table & Kitchen Linen",
        items: [
            "Tablecloths",
            "Table Runners",
            "Napkins",
            "Aprons",
            "Kitchen Towels",
        ],
    },
    {
        img: carpet,
        title: "Rugs & Carpets",
        items: [
            "Area Rugs",
            "Door Mats",
            "Carpet Runners",
            "Bath Mats",
            "Handmade Carpets",
        ],
    },
];


export default function HomeTextiles() {
    const navigate = useNavigate();
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Home Textiles & Furnishings
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
