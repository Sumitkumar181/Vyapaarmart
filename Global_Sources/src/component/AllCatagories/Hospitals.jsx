import SurgicalDressings from "../../assets/homePageImage/Hospital/SurgicalDressings.jpeg";
import PulseOximeters from "../../assets/homePageImage/Hospital/PulseOximeters.jpeg";
import MedicalEquipment from "../../assets/homePageImage/Hospital/MedicalEquipment.jpeg";
import Disposable_Gloves from "../../assets/homePageImage/Hospital/Disposable_Gloves.jpeg";
import Diagnostic_Equipment from "../../assets/homePageImage/Hospital/Diagnostic_Equipment.jpeg";
import beds from "../../assets/homePageImage/Hospital/beds.webp";
import { useNavigate } from "react-router-dom";

const products = [
    {
        img: Disposable_Gloves,
        title: "Disposable Gloves",
        items: [
            "Disposable Hand Gloves",
            "Surgical Gloves",
            "Sterile Surgical Gloves",
            "Latex Gloves",
            "Nitrile Gloves"
        ]
    },
    {
        img: beds,
        title: "Hospital Beds",
        items: [
            "Fowler Bed",
            "Portable Bed",
            "Semi Fowler Bed",
            "ICU Bed",
            "Hydraulic Bed"
        ]
    },
    {
        img: MedicalEquipment,
        title: "Medical Equipment",
        items: [
            "Nebulizer",
            "Patient Monitor",
            "Suction Machine",
            "CPAP Machine",
            "Defibrillator"
        ]
    },
    {
        img: Diagnostic_Equipment,
        title: "Diagnostic Equipment",
        items: [
            "Digital Thermometer",
            "OT Lights",
            "Diagnostic Test Kits",
            "Blood Pressure Monitor",
            "Glucometer"
        ]
    },
    {
        img: PulseOximeters,
        title: "Pulse Oximeters",
        items: [
            "Finger Pulse Oximeter",
            "Pulse Meter",
            "SpO2 Sensor",
            "Portable Pulse Oximeter",
            "SpO2 Probe"
        ]
    },
    {
        img: SurgicalDressings,
        title: "Surgical Dressings & Consumables",
        items: [
            "Bandages",
            "Gauze Pads",
            "Surgical Cotton",
            "IV Cannula",
            "Suction Catheter"
        ]
    }
];



export default function Hospitals() {
    const navigate = useNavigate();
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-6 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Hospitals
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
