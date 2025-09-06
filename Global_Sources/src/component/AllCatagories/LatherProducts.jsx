import React from "react";
import IndustrialLeather from "../../assets/homePageImage/LatherProduct/IndustrialLeather.jpeg";
import LeatherBags from "../../assets/homePageImage/LatherProduct/LeatherBags.jpeg";
import LeatherFootwear from "../../assets/homePageImage/LatherProduct/LeatherFootwear.jpeg";
import LeatherGarments from "../../assets/homePageImage/LatherProduct/LeatherGarments.jpeg";
import RawMaterials from "../../assets/homePageImage/LatherProduct/RawMaterials.jpeg";
import { useNavigate } from "react-router-dom";

const products = [
    {
        img: RawMaterials,
        title: "Leather Raw Materials",
        items: [
            "Genuine Leather",
            "Synthetic Leather",
            "Tanned Leather",
            "Finished Leather",
            "Leather Scraps",
        ],
    },
    {
        img: LeatherBags,
        title: "Leather Bags",
        items: [
            "Handbags",
            "Backpacks",
            "Wallets",
            "Messenger Bags",
            "Travel Bags",
        ],
    },
    {
        img: LeatherFootwear,
        title: "Leather Footwear",
        items: [
            "Formal Shoes",
            "Boots",
            "Sandals",
            "Loafers",
            "Slippers",
        ],
    },
    {
        img: LeatherGarments,
        title: "Leather Garments",
        items: [
            "Leather Jackets",
            "Leather Pants",
            "Leather Gloves",
            "Leather Skirts",
            "Leather Belts",
        ],
    },
    {
        img: IndustrialLeather,
        title: "Industrial Leather Goods",
        items: [
            "Leather Safety Gloves",
            "Welding Aprons",
            "Leather Tool Pouches",
            "Protective Gear",
            "Leather Straps",
        ],
    },
];




export default function LatherProducts() {
    const navigate = useNavigate();
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Leather & Leather Products
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

                            <div className="mt-4 flex justify-center">
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
