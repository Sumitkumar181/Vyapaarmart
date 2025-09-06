import React from "react";
import Electrical_Wiring from "../../assets/homePageImage/Construction/Electrical & Wiring.jpeg";
import Cement_Concrete from "../../assets/homePageImage/Construction/Cement & Concrete.webp";
import Steel_Metal from "../../assets/homePageImage/Construction/Steel & Metal.jpeg";
import Bricks_Blocks from "../../assets/homePageImage/Construction/Bricks & Blocks.jpeg";
import Construction_Equipment from "../../assets/homePageImage/Construction/Construction Tools & Equipment.jpeg";
import Plumbing_Pipes from "../../assets/homePageImage/Construction/Plumbing & Pipes.jpeg";
import { useNavigate } from "react-router-dom";

const products = [
    {
        title: "Cement & Concrete",
        img: Cement_Concrete,
        items: [
            "Ordinary Portland Cement (OPC)",
            "Portland Pozzolana Cement (PPC)",
            "Ready Mix Concrete",
            "Concrete Blocks",
            "Fiber Reinforced Concrete"
        ]
    },
    {
        title: "Steel & Metal",
        img: Steel_Metal,
        items: [
            "TMT Bars",
            "Structural Steel",
            "Steel Beams",
            "Steel Sheets",
            "Metal Rods"
        ]
    },
    {
        title: "Bricks & Blocks",
        img: Bricks_Blocks,
        items: [
            "Clay Bricks",
            "Fly Ash Bricks",
            "Concrete Blocks",
            "Hollow Bricks",
            "AAC Blocks"
        ]
    },
    {
        title: "Construction Tools & Equipment",
        img: Construction_Equipment,
        items: [
            "Cement Mixer",
            "Concrete Vibrator",
            "Scaffolding",
            "Trowels & Floats",
            "Wheelbarrows"
        ]
    },
    {
        title: "Plumbing & Pipes",
        img: Plumbing_Pipes,
        items: [
            "PVC Pipes",
            "HDPE Pipes",
            "Copper Pipes",
            "Pipe Fittings",
            "Valves"
        ]
    },
    {
        title: "Electrical & Wiring",
        img: Electrical_Wiring,
        items: [
            "Copper Wires",
            "Switches & Sockets",
            "Circuit Breakers",
            "Distribution Boards",
            "Conduits & Trunking"
        ]
    }
];





export default function Construction() {
    const navigate = useNavigate();
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Construction & Real Estate
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
                                            className="last:border-b-0 pb-1 hover:text-blue-600 cursor-pointer"
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
