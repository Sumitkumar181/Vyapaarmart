import React from "react";
import { useNavigate } from "react-router-dom";
import Spare_Parts from "../../assets/homePageImage/Automobiles/Spare Parts & Accessories.jpg";
import Automobile_Equipment from "../../assets/homePageImage/Automobiles/Automobile Tools & Equipment.jpeg";
import Commercial_Vehicles from "../../assets/homePageImage/Automobiles/Commercial Vehicles.jpg";
import Passenger_Vehicles from "../../assets/homePageImage/Automobiles/Passenger Vehicles.jpeg";
import Two_Wheeler from "../../assets/homePageImage/Automobiles/two-wheeler-three-wheeler.png";

const products = [
    {
        img: Passenger_Vehicles,
        title: "Passenger Vehicles",
        items: [
            "Sedans",
            "SUVs",
            "Hatchbacks",
            "Electric Cars",
            "Luxury Cars",
        ],
    },
    {
        img: Commercial_Vehicles,
        title: "Commercial Vehicles",
        items: [
            "Trucks",
            "Buses",
            "Vans",
            "Pickup Trucks",
            "Trailers",
        ],
    },
    {
        img: Two_Wheeler,
        title: "Two & Three Wheelers",
        items: [
            "Motorcycles",
            "Scooters",
            "Bicycles",
            "Electric Bikes",
            "Rickshaws",
        ],
    },
    {
        img: Spare_Parts,
        title: "Spare Parts & Accessories",
        items: [
            "Engines & Engine Components",
            "Brakes & Clutches",
            "Batteries",
            "Tyres & Wheels",
            "Mirrors & Lights",
            
        ],
    },
    {
        img: Automobile_Equipment,
        title: "Automobile Tools & Equipment",
        items: [
            "Car Lifts & Jacks",
            "Diagnostic Tools",
            "Tire Changers",
            "Battery Chargers",
            "Workshop Tools",
        ],
    },
];

export default function Automobiles() {
    const navigate = useNavigate(); 
    const handleCardClick = () => {
        navigate("/buyerform"); 
    };

    return (
        <div className="px-4 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Automobiles
            </h2>

            <div className="overflow-x-auto md:overflow-visible">
                <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-6 md:gap-4 gap-4">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            onClick={handleCardClick}
                            className="min-w-[220px] md:min-w-0 rounded-md bg-white px-4 py-4 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between h-full"
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
                                            className="last:border-b-0 pb-1 hover:text-blue-600"
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
