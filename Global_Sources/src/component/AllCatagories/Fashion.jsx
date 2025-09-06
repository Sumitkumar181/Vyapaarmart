import React from "react";
import HumanHair from "../../assets/homePageImage/AirEquipment/natural-texture-human-hair-for-glamorous-and-authentic-look-790.jpg"
import sarees from "../../assets/homePageImage/AirEquipment/Black-Color-Banarasi-Silk-Saree..jpg"
import kurtis from "../../assets/homePageImage/AirEquipment/breathable-casual-wear-3-4th-sleeves-printed-rayon-kurti-for-women-855.jpg"
import Tshirts from "../../assets/homePageImage/AirEquipment/Cotton-Corporate-Uniform..jpg"
import Skirts from "../../assets/homePageImage/AirEquipment/plain-cotton-girls-tops-for-casual-wear-981.jpg"
import shorts from "../../assets/homePageImage/AirEquipment/nickers-197.jpg";
import { useNavigate } from "react-router-dom";


const products = [
    {
        img: HumanHair,
        title: "Human Hair & Accessories",
        items: [
            "Human Hair",
            "Hair Patch",
            "Indian Human Hair",
            "Human Hair Wigs",
        ],
    },
    {
        img: sarees,
        title: "Sarees",
        items: [
            "Silk Sarees",
            "Cotton Sarees",
            "Banarasi Sarees",
            "Sambalpuri Sarees",
        ],
    },
    {
        img: kurtis,
        title: "Kurtis",
        items: [
            "Ladies Kurtis",
            "Cotton Kurtis",
            "Printed Kurtis",
            "Chikan Kurtis",
        ],
    },
    {
        img: Tshirts,
        title: "T-Shirts",
        items: [
            "Sports T-Shirts",
            "Mens T-Shirts",
            "Girls T-Shirts",
            "Cotton T-Shirts",
        ],
    },
    {
        img: Skirts,
        title: "Skirts & Tops",
        items: [
            "Ladies Tops",
            "Embroidered Tops",
            "Ladies Skirts",
            "Denim Skirts",
        ],
    },
    {
        img: shorts,
        title: "Shorts",
        items: [
            "Sports Shorts",
            "Mens Cotton Shorts",
            "Ladies Shorts",
            "Boxer Shorts",
        ],
    },
];

export default function Fashion() {
    const navigate = useNavigate();
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Apparel & Fashion
            </h2>

            <div className="overflow-x-auto md:overflow-visible">
                <div className="flex flex-nowrap md:grid md:grid-cols-6 md:gap-4 gap-4">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            onClick={handleCardClick}
                            className="min-w-[200px] md:min-w-0 rounded-md bg-white px-4 py-4 shadow-sm hover:shadow-md transition flex flex-col justify-between h-full"
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
