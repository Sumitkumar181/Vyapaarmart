import React from "react";
import Snacks from "../../assets/homePageImage/Food/Snacks.jpeg";
import Oils from "../../assets/homePageImage/Food/Oils.jpeg";
import Staples from "../../assets/homePageImage/Food/Staples.jpeg";
import Beverage from "../../assets/homePageImage/Food/Beverage.jpeg";
import Spices from "../../assets/homePageImage/Food/Spices.jpeg";
import Dairy from "../../assets/homePageImage/Food/Dairy.jpeg";
import Sweeteners from "../../assets/homePageImage/Food/Sweeteners.jpeg";
import { useNavigate } from "react-router-dom";

const products = [
    {
        title: "Staples & Grains",
        img: Staples,
        items: [
            "Basmati Rice",
            "Wheat Flour",
            "Pulses & Beans",
            "Millets",
            "Sugar"
        ]
    },
    {
        title: "Spices & Masala Mixes",
        img: Spices,
        items: [
            "Whole Spices",
            "Powdered Spices",
            "Masala Mixes & Seasonings",
            "Vegetable Powder & Dried Fruits Powder"
        ]
    },
    {
        title: "Oils, Ghee & Fats",
        img: Oils,
        items: [
            "Cooking Oil",
            "Pure Ghee & Clarified Butter",
            "Edible Oil in Bulk"
        ]
    },
    {
        title: "Beverage Bases & Concentrates",
        img: Beverage,
        items: [
            "Soft Drink Concentrates",
            "Fruit Juice Concentrates",
            "Tea & Green Tea Bulk Packs"
        ]
    },
    {
        title: "Snacks & Grain-Based Products",
        img: Snacks,
        items: [
            "Muesli, Oats, Bran",
            "Corn Flakes, Cereal Products",
            "Dry Snacks",
            "Breakfast Cereals"
        ]
    },
    {
        title: "Dairy Powders & Additives",
        img: Dairy, 
        items: [
            "Milk Powder",
            "Butter & Margarine",
            "Food Additives"
        ]
    },
    {
        title: "Bulk Ingredients & Sweeteners",
        img: Sweeteners, 
        items: [
            "Jaggery & Sugar Sweeteners",
            "Honey ",
            "Cooking Oils",
            "Grain Snacks in bulk",
        ]
    }
];


export default function FoodBeverages() {
    const navigate = useNavigate();
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Food & Beverages
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
