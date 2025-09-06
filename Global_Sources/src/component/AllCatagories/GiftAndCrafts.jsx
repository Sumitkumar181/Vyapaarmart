import React from "react";
import Pooja from "../../assets/homePageImage/Gifts/Pooja.jpeg";
import Decorative from "../../assets/homePageImage/Gifts/Decorative.jpeg";
import Handicrafts from "../../assets/homePageImage/Gifts/Handicrafts.jpeg";
import Incense from "../../assets/homePageImage/Gifts/Incense.jpeg";
import Marble from "../../assets/homePageImage/Gifts/Marble.jpeg";
import Watches from "../../assets/homePageImage/Gifts/Watches.jpeg";
import { useNavigate } from "react-router-dom";

const products = [
    {
        img: Handicrafts,
        title: "Handicrafts",
        items: [
            "Decorative Handicraft",
            "Handicraft Boxes",
            "Indian Handicrafts",
            "Handmade Bags",
            "Handicraft Gifts",
        ],
    },
    {
        img: Decorative,
        title: "Decorative Items",
        items: [
            "Decorative Wallpaper",
            "Decoration Articles",
            "Decorative Lamps",
            "Wall Art",
            "Decorative Bowl",
        ],
    },
    {
        img: Incense,
        title: "Incense & Agarbatti",
        items: [
            "Agarbatti",
            "Incense Sticks",
            "Dhoop Sticks",
            "Aroma Incense Sticks",
            "Incense Cones",
        ],
    },
    {
        img: Marble,
        title: "Religious Crafts",
        items: [
            "Marble Temple",
            "Buddha Idols",
            "Wooden Temple",
            "Religious Articles",
            "Marble Home Temple",
        ],
    },
    {
        img: Watches,
        title: "Watches & Clocks",
        items: [
            "Wooden Wall Clock",
            "Customized Wall Clocks",
            "Wrist Watch",
            "Digital Clock",
            "Stop Watch",
        ],
    },
    {
        img: Pooja,
        title: "Pooja Articles & Items",
        items: [
            "Brass Pooja Items",
            "Incense Holder",
            "Cotton Wicks",
            "Pooja Thali Set",
            "Hawan Samagri",
        ],
    },
];





export default function GiftAndCrafts() {
    const navigate = useNavigate();
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Gift & Crafts
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
