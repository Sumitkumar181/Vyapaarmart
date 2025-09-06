import React from "react";
import Monitoring from "../../assets/homePageImage/EnviromentPolution/Monitoring.jpg";
import Emission_Control from "../../assets/homePageImage/EnviromentPolution/Emission_Control _Systems.webp";
import Air_Pollution from "../../assets/homePageImage/EnviromentPolution/Air_Pollution.jpeg";
import Pollution_Control from "../../assets/homePageImage/EnviromentPolution/Pollution_Control_Devices.jpg";
import Water_Pollution from "../../assets/homePageImage/EnviromentPolution/Water _Pollution_Control.webp";
import { useNavigate } from "react-router-dom";


const products = [
    {
        title: "Air Pollution Control Equipment",
        img: Air_Pollution,
        items: [
            "Wet Scrubber",
            "Cyclone Dust Collector",
            "Bag House Filter",
            "Mist Collector",
            "Electrostatic Precipitator"
        ]
    },
    {
        title: "Pollution Control Devices & Units",
        img: Pollution_Control,
        items: [
            "Mini Pollution Control Unit",
            "Advanced Filtration System",
            "Industrial Dust Conditioner",
            "Air Pollution Control System (Stainless Steel)",
            "High-Performance Air Pollution Control System"
        ]
    },
    {
        title: "Water Pollution Control Systems",
        img: Water_Pollution,
        items: [
            "MPCB/CPCB-compliant Effluent Treatment Plant (ETP)",
            "Water Pollution Monitoring System",
            "Hypo Laboratory Water Treatment Unit",
            "Wepar Water Pollution Control System"
        ]
    },
    {
        title: "Emission Control Systems",
        img: Emission_Control,
        items: [
            "Retrofit Emission Control Device (e.g., 400 kVA)",
            "Emission Control System for Industrial Exhaust",
            "Sniffer / Sensor-based Emission Control Equipment"
        ]
    },
    {
        title: "Pollution Monitoring Instruments",
        img: Monitoring,
        items: [
            "Particulate Matter (PM) Sampler",
            "Air Quality Monitoring Instrument",
            "Dust Collector Sensor",
            "Noise Level Meter"
        ]
    }
];








export default function EnvironmentsPollution() {
    const navigate = useNavigate();
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Environments & Pollution
            </h2>

            <div className="overflow-x-auto md:overflow-visible">
                <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-6 md:gap-4 gap-4">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            onCanPlay={handleCardClick}
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
