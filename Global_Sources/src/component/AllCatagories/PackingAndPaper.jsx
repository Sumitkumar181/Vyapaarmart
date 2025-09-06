import React from "react";
import PlasticMaterials from "../../assets/homePageImage/PaperPaking/PlasticMaterials.jpeg";
import AdhesiveTapes from "../../assets/homePageImage/PaperPaking/AdhesiveTapes.jpeg";
import Bottles from "../../assets/homePageImage/PaperPaking/Bottles.jpeg";
import PackagingBoxes from "../../assets/homePageImage/PaperPaking/PackagingBoxes.jpeg";
import PalletsCrates from "../../assets/homePageImage/PaperPaking/PalletsCrates.jpeg";
import PaperBeg from "../../assets/homePageImage/PaperPaking/PaperBeg.jpeg";
import { useNavigate } from "react-router-dom";

const products = [
    {
        img: AdhesiveTapes,
        title: "Adhesive Tapes",
        items: [
            "Pvc Adhesive Tape",
            "Kapton Tape",
            "Pvc Electrical Tape",
            "Abrasive Tape",
            "Ptfe Adhesive Tape",
        ],
    },
    {
        img: Bottles,
        title: "Bottles",
        items: [
            "Mineral Water Bottle",
            "Aluminium Bottles",
            "Copper Bottle",
            "Glass Bottles",
            "Perfume Bottles",
        ],
    },
    {
        img: PackagingBoxes,
        title: "Packaging Boxes",
        items: [
            "Corrugated Packaging Boxes",
            "Food Packaging Boxes",
            "Printed Packaging Box",
            "Paper Packaging Box",
            "Industrial Packaging Box",
        ],
    },
    {
        img: PalletsCrates,
        title: "Pallets & Crates",
        items: [
            "Plastic Pallets",
            "Wooden Crates",
            "Plastic Crates",
            "Wooden Crates",
            "Industrial Pallets",
        ],
    },
    {
        img: PaperBeg,
        title: "Paper Bags",
        items: [
            "Carry Bags",
            "Brown Paper Bags",
            "Paper Carry Bags",
            "Customized Paper Bags",
            "Kraft Paper Bags",
        ],
    },
    {
        img: PlasticMaterials,
        title: "Plastic Packaging Materials",
        items: [
            "Air Bubble Rolls",
            "Strapping Rolls",
            "Pp Strapping Roll",
            "Shrink Wraps",
            "Printed Pouches",
        ],
    },
];





export default function PackingAndPaper() {
    const navigate = useNavigate();
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Packing & Paper
            </h2>

            <div className="overflow-x-auto md:overflow-visible">
                <div className="flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-6 md:gap-4 gap-4">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            onAbort={handleCardClick}
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
