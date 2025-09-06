import React from "react";
import Kitchenware from "../../assets/homePageImage/HomeSuppliers/Kitchenware.jpg";
import Kitchen from "../../assets/homePageImage/HomeSuppliers/Kitchen.jpeg";
import Jute from "../../assets/homePageImage/HomeSuppliers/Jute.jpeg";
import Housekeeping from "../../assets/homePageImage/HomeSuppliers/Housekeeping.jpeg";
import Disposable from "../../assets/homePageImage/HomeSuppliers/Disposable.jpeg";
import Bags from "../../assets/homePageImage/HomeSuppliers/Bags.jpeg";
import { useNavigate } from "react-router-dom";

const products = [
    {
        img: Bags,
        title: "Bags & Cases",
        items: [
            "Handbags",
            "Mens Wallets",
            "Duffle Bag",
            "Backpacks",
            "Laptop Bags",
        ],
    },
    {
        img: Disposable,
        title: "Disposable Products",
        items: [
            "Disposable Glasses",
            "Ice Cream Sticks",
            "Plastic Glasses",
            "Plastic Plates",
            "Paper Straw",
        ],
    },
    {
        img: Housekeeping,
        title: "Housekeeping Products",
        items: [
            "Washing Machine Stand",
            "Dustbins",
            "Bucket",
            "Microfiber Cloth",
            "Washing Machine Stand",
        ],
    },
    {
        img: Jute,
        title: "Jute Bags",
        items: [
            "Jute Lunch Bags",
            "Jute Handbag",
            "Jute Sling Bag",
            "Jute Tote Bags",
            "Jute Gunny Bags",
        ],
    },
    {
        img: Kitchen,
        title: "Kitchen & Canteen Accessories & Equipment",
        items: [
            "Kitchen Chimney",
            "Gas Lighter",
            "Kitchen Accessories",
            "Kitchen Trolleys",
            "Kitchen Rack",
        ],
    },
    {
        img: Kitchenware,
        title: "Kitchenware",
        items: [
            "Onion Cutter",
            "Tumbler",
            "Lunch Box",
            "Beater",
            "Spatula",
        ],
    },
];




export default function HomeSupplies() {
    const navigate = useNavigate();
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Home Supplies
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
