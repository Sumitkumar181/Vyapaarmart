import React from "react";
import RotaryJoints from "../../assets/homePageImage/PipesPipeFittings/RotaryJoints.jpeg";
import BrassPipes from "../../assets/homePageImage/PipesPipeFittings/BrassPipes.jpeg";
import CopperTubes from "../../assets/homePageImage/PipesPipeFittings/CopperTubes.jpeg";
import Flanges from "../../assets/homePageImage/PipesPipeFittings/Flanges.jpeg";
import PipesFittings from "../../assets/homePageImage/PipesPipeFittings/PipesFittings.jpeg";
import PvcPipes from "../../assets/homePageImage/PipesPipeFittings/PipesFittings.jpeg"; // duplicate import?
import { useNavigate } from "react-router-dom";

const products = [
    {
        img: PipesFittings,
        title: "Pipes & Pipe Fittings",
        items: [
            "Round Pipe",
            "Hex Nipple",
            "Pipe Bends",
            "Pipe Reducer",
            "Agricultural Pipes",
        ],
    },
    {
        img: CopperTubes,
        title: "Tubes & Tube Fittings",
        items: [
            "Copper Tubes",
            "Polyurethane Tubes",
            "Seamless Tubes",
            "Ms Tubes",
            "Steel Tube Fittings",
        ],
    },
    {
        img: BrassPipes,
        title: "Brass Pipes & Tubes",
        items: [
            "Seamless Brass Pipe",
            "Seamless Brass Tubes",
            "Aluminum Brass Tubes",
            "Brass Water Pipe",
            "Brass Blender Pipe",
        ],
    },
    {
        img: Flanges,
        title: "Flanges",
        items: [
            "Blind Flanges",
            "Welding Neck Flanges",
            "Mild Steel Flanges",
            "Slip On Flanges",
            "Industrial Flanges",
        ],
    },
    {
        img: PvcPipes,
        title: "PVC Pipes",
        items: [
            "Upvc Pipes",
            "Cpvc Pipe",
            "Heavy Duty Pvc Pipe",
            "Pvc Hose Pipes",
            "Rigid Pvc Pipe",
        ],
    },
    {
        img: RotaryJoints,
        title: "Rotary Unions & Joints",
        items: [
            "Reducing Unions",
            "Pvc Jointer",
            "Sms Union",
            "Gi Union",
            "Hydraulic Rotary Union",
        ],
    },
];



export default function PipeAndTube() {
    const navigate = useNavigate();
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Pipe & Tube
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
