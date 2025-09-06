import React from "react";
import RadioTV from "../../assets/homePageImage/printingPublishing/RadioTV.jpeg";
import BarcodeEquipment from "../../assets/homePageImage/printingPublishing/BarcodeEquipment.jpeg";
import BindingMachines from "../../assets/homePageImage/printingPublishing/BindingMachines.jpeg";
import Book from "../../assets/homePageImage/printingPublishing/Book.jpeg";
import Computerscanners from "../../assets/homePageImage/printingPublishing/Computerscanners.jpeg";
import Printers from "../../assets/homePageImage/printingPublishing/Printers.jpeg";
import PrintersBinders from "../../assets/homePageImage/printingPublishing/PrintersBinders.jpeg";
import PrintingInk from "../../assets/homePageImage/printingPublishing/PrintingInk.jpeg";
import PrintingMaterial from "../../assets/homePageImage/printingPublishing/PrintingMaterial.jpeg";
import StampingFoils from "../../assets/homePageImage/printingPublishing/StampingFoils.jpeg";
import { useNavigate } from "react-router-dom";

const products = [
    { img: Printers, title: "Printers", items: ["Printer Head", "Brother Inkjet Printer", "Epson Photo Printer", "Ricoh Multifunction Printer", "Portable Label Printer"] },
    { img: Computerscanners, title: "Computer Printers & Scanners", items: ["Electronic Scanners", "Flex Printers", "Business Card Scanner", "Thermal Receipt Printers", "Network Printer"] },
    { img: PrintingInk, title: "Printing Ink", items: ["Offset Inks", "Heat Resistant Ink", "Invisible Ink", "Offset Printing Chemical", "Fuser Film Sleeve"] },
    { img: BarcodeEquipment, title: "Barcode Stickers & Equipment", items: ["Bumper Sticker", "Frosted PVC Sticker", "Portable Barcode Scanner", "Printed Barcode Stickers", "Barcode Verifiers"] },
    { img: Book, title: "Books", items: ["Story Book", "Textbook", "Motivational Books", "Educational Books", "Science Book"] },
    { img: PrintersBinders, title: "Printers & Binders", items: ["Sticker Printer", "Argox Label Printer", "Citizen Barcode Printer", "Nail Printer", "Zebra ID Card Printer"] },
    { img: PrintingMaterial, title: "Printing Material", items: ["Creasing Matrix", "Dye Ink", "Printing Chemicals", "Barcode Ribbons", "Printing Stationery"] },
    { img: StampingFoils, title: "Stamping Foils", items: ["Stamping", "Foil Stamping Machine", "Stamping Parts", "Hot Stamping Foils", "Golden Hot Stamping Foil"] },
    { img: BindingMachines, title: "Binding Machines", items: ["Comb Binding Systems", "Glue Binding Machine", "Wire Binding Machine", "PVC Binding Comb", "Steel Binding Machine"] },
    { img: RadioTV, title: "Radio & TV", items: ["Outdoor Antenna", "TV Antenna", "TV Tuner Card", "Color TV Kit", "Headphone Radio"] },
];

export default function PrintingPublishing() {
    const navigate = useNavigate();
                const handleCardClick = () => {
                    navigate("/buyerform"); 
        };
    return (
        <div className="px-4 md:px-16 lg:px-10 py-10 font-roboto">
            <h2 className="text-xl md:text-2xl font-semibold text-[#042939] mb-6">
                Printing & Publishing
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
