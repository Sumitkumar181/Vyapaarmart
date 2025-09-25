import React, { useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SupplierCard from "../SupplierProductCard/SupplierCard";
import Led from "../../../assets/image/supplierProduct/led.jpeg"

const ProductCategories = [
    "LED Bulbs",
    "LED Tubes",
    "LED Panel Lights",
    "LED Downlights",
    "LED Spotlights & Track Lights",
    "LED Street Lights",
    "LED Flood Lights",
    "LED Strip Lights",
    "LED High Bay & Low Bay Lights",
    "LED Ceiling Lights (Chandeliers, Pendants)",
    "LED Wall Lights & Sconces",
    "LED Emergency Lights",
    "LED Exit Signs",
    "LED Garden & Landscape Lights",
    "LED Underwater Lights",
    "LED Display Boards (Digital Signage)",
    "LED Video Walls",
    "LED TV Backlights",
    "LED Automotive Lighting (Headlights, DRLs)",
    "LED Grow Lights (For Plants)",
    "LED Decorative & Christmas Lights",
    "LED Portable & Work Lights",
    "LED Rechargeable Lights",
    "LED Projector Lamps",
    "LED Stage & Studio Lights",
];

const IndianCities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Surat",
    "Kochi",
    "Lucknow",
    "Nagpur",
    "Indore",
    "Bhopal",
    "Visakhapatnam",
    "Patna",
    "Ludhiana",
    "Agra",
    "Varanasi",
    "Thiruvananthapuram",
    "Bhubaneswar",
    "Coimbatore",
    "Chandigarh",
    "Guwahati",
];

export default function CategoryShowcase() {
    const scrollRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState(null);

    
    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth - 100;
            scrollRef.current.scrollTo({
                left:
                    direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="px-4 sm:px-6 lg:px-14 pt-20 sm:pt-28 mb-10 bg-blue-100 font-roboto">
           
            <div className="flex text-xs sm:text-sm text-gray-700 items-center flex-wrap gap-1">
                <p>Vyapaarmart</p>
                <IoIosArrowForward />
                <p>Seller</p>
                <IoIosArrowForward />
                <p>Electronic & Electrical</p>
                <IoIosArrowForward />
                <p>LED Products</p>
            </div>

            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mt-2">
                LED Products
            </h2>

           
            <div className="relative w-full bg-white border rounded shadow-sm overflow-hidden mt-4">
               
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-r-md p-1 z-10 hover:bg-gray-100"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                
                <div
                    ref={scrollRef}
                    className="h-12 flex items-center rounded-lg overflow-x-auto scrollbar-hide px-6 sm:px-10 bg-white border-b space-x-4"
                >
                    {ProductCategories.map((cat, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveCategory(cat)}
                            className={`whitespace-nowrap flex items-center h-full px-3 sm:px-4 cursor-pointer text-xs sm:text-sm font-medium transition rounded 
                ${activeCategory === cat
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-800 hover:bg-blue-100"
                                }`}
                        >
                            {cat}
                        </div>
                    ))}
                </div>

                
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-l-md p-1 z-10 hover:bg-gray-100"
                >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
            </div>

            
            <div className="flex flex-col lg:flex-row gap-6 mt-6">
                
                <div className="w-full h-[700px] lg:w-64 bg-white shadow-sm border rounded-lg overflow-hidden">
                    
                    <div className="px-4 py-3 bg-gray-50 border-b">
                        <h3 className="text-base font-semibold text-gray-800">
                            Top Cities
                        </h3>
                    </div>

                   
                    <ul className="divide-y divide-gray-200 max-h-[500px] overflow-y-auto">
                        {IndianCities.map((cat, idx) => (
                            <li key={idx}>
                                <button
                                    onClick={() => setActiveCategory(cat)}
                                    className={`w-full text-left px-4 py-2 text-sm transition 
                    ${activeCategory === cat
                                            ? "bg-blue-600 text-white"
                                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                        }`}
                                >
                                    {cat}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                
                <div className="flex-1">
                    <div className="grid grid-rows gap-6">
                       
                        <SupplierCard
                            image={Led}
                            title="Led Logo Projection Light 600W - Color: Black"
                            price="260000 INR/Piece"
                            moq="1 Piece/Pieces"
                            color="Black"
                            lightColor="Black"
                            productType="Logo"
                            material="Aluminum"
                            inputVoltage="600 Watt (W)"
                            weight="20 Kilograms (kg)"
                            sellerName="Hesham Industrial Solutions"
                            sellerLocation="Vadodara"
                            businessType="Manufacturer | Distributor"
                            established="2016"
                            badges={[
                                { label: "Trusted Seller", color: "bg-green-100 text-green-700" },
                                { label: "Super Seller", color: "bg-blue-100 text-blue-700" },
                            ]}
                            years={7}
                        />

                        <SupplierCard
                            image={Led}
                            title="LED Flood Light 400W - Color: White"
                            price="180000 INR/Piece"
                            moq="2 Piece/Pieces"
                            color="White"
                            lightColor="Cool White"
                            productType="Flood Light"
                            material="Aluminum"
                            inputVoltage="400 Watt (W)"
                            weight="15 Kilograms (kg)"
                            sellerName="Shree Light Pvt Ltd"
                            sellerLocation="Delhi"
                            businessType="Manufacturer"
                            established="2018"
                            badges={[
                                { label: "Verified Seller", color: "bg-yellow-100 text-yellow-700" },
                            ]}
                            years={5}
                        />
                        <SupplierCard
                            image={Led}
                            title="LED Flood Light 400W - Color: White"
                            price="180000 INR/Piece"
                            moq="2 Piece/Pieces"
                            color="White"
                            lightColor="Cool White"
                            productType="Flood Light"
                            material="Aluminum"
                            inputVoltage="400 Watt (W)"
                            weight="15 Kilograms (kg)"
                            sellerName="Shree Light Pvt Ltd"
                            sellerLocation="Delhi"
                            businessType="Manufacturer"
                            established="2018"
                            badges={[
                                { label: "Verified Seller", color: "bg-yellow-100 text-yellow-700" },
                            ]}
                            years={5}
                        />
                        <SupplierCard
                            image={Led}
                            title="LED Flood Light 400W - Color: White"
                            price="180000 INR/Piece"
                            moq="2 Piece/Pieces"
                            color="White"
                            lightColor="Cool White"
                            productType="Flood Light"
                            material="Aluminum"
                            inputVoltage="400 Watt (W)"
                            weight="15 Kilograms (kg)"
                            sellerName="Shree Light Pvt Ltd"
                            sellerLocation="Delhi"
                            businessType="Manufacturer"
                            established="2018"
                            badges={[
                                { label: "Verified Seller", color: "bg-yellow-100 text-yellow-700" },
                            ]}
                            years={5}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
