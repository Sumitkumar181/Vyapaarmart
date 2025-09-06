import React from "react";
import purifier from "../../assets/homePageImage/AirEquipment/ABS-Plastic-HEPA-Air-Purifier.jpg";
import AirPurifierFilter from "../../assets/homePageImage/AirEquipment/Mini-Pleated-HEPA-Filter.jpg";
import ElectronicCleaner from "../../assets/homePageImage/AirEquipment/Electronic-Air-Cleaner.jpg";
import AirCleaner from "../../assets/homePageImage/AirEquipment/Air-Cleaner.jpg";
import IndustrialAirCleaner from "../../assets/homePageImage/AirEquipment/146101.jpg";
import IndustrialAirWasher from "../../assets/homePageImage/AirEquipment/Industrial-Air-washer-Units.jpg";

const products = [
    {
        img: purifier,
        title: "Air Purifiers",
        items: [
            "Indoor Air Purifier",
            "Portable Air Purifier",
            "Home Air Purifier",
            "Car Air Purifier",
        ],
    },
    {
        img: AirPurifierFilter,
        title: "Air Purifier Filter",
        items: [
            "Hepa Filters",
            "Mini Pleat Hepa Filter",
            "Air Purifier Filter",
            "Bag House Filter",
        ],
    },
    {
        img: ElectronicCleaner,
        title: "Air Cleaning Devices",
        items: [
            "Air Dust Cleaner",
            "Air Filtering System",
            "Air Deodorizers",
            "Electrostatic Air Cleaner",
        ],
    },
    {
        img: AirCleaner,
        title: "Air Cleaner",
        items: [
            "Electronic Air Cleaners",
            "Air Cleaning Systems",
            "Air Care Systems",
            "Clean Air System",
        ],
    },
    {
        img: IndustrialAirCleaner,
        title: "Industrial Air Cleaner",
        items: [
            "Laminar Air Flow Unit",
            "Mini Dust Collector",
            "Mini Duster",
            "Air Purification System",
        ],
    },
    {
        img: IndustrialAirWasher,
        title: "Air Washer Units",
        items: [
            "Air Washer",
            "Treated Fresh Air Units",
            "Air Treatment Unit",
            "Air Dispenser",
        ],
    },
];

export default function AirCleaningEquipment() {
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Air Cleaning Equipment
            </h2>

            <div className="overflow-x-auto md:overflow-visible">
                <div className="flex space-x-4 md:grid md:grid-cols-2 lg:grid-cols-6 md:gap-4">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="min-w-[220px] md:min-w-0 rounded-md bg-white px-4 py-2 shadow-sm hover:shadow-md transition flex flex-col justify-between h-full"
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
