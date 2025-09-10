import React, { useEffect } from 'react'
import { Check } from 'lucide-react';
import { FaRupeeSign } from "react-icons/fa";



const packages = [
    {
        title: "Start Up",
        price: "25,000",
        description: "Packages for 1 years",
        bgColor: "#E0F2FE",
        headerColor: "#0284C7",
        titleColor: "#0C4A6E",
        priceColor: "#0284C7",
        textColor: "#374151",
        features: [
            "Catalogue",
            "Target Area Promotion",
            "Sub-Domain Website",
            "3 Verified Buyer a Month",
            "Unlimited Enquiry",
            "Weekly Report",
            "Expert Account Manager",
            "Conference Meeting Call",
        ],
        buttonText: "Get Started",
    },
    {
        title: "Platinum Pro",
        price: "56,200",
        description: "Packages for 1 years",
        bgColor: "#DCFCE7",
        headerColor: "#16A34A",
        titleColor: "#14532D",
        priceColor: "#16A34A",
        textColor: "#374151",
        features: [
            "Catalogue",
            "Target Area Promotion",
            "Website Domain",
            "5 Verified Buyer a Month & Distributors Also",
            "Unlimited Enquiry",
            "Expert Account Manager",
            "Weekly Report",
            "Website Design",
            "Logo Design",
            "Trusted Seller Certificate",
            "Google SEO",
            "SSL/Logo Design",
            "Distributor/Sales Agent",
            "Conference Meeting Call",
        ],
        buttonText: "Get Started",
    },
    {
        title: "Diamond Mart Plus",
        price: "1,26,000",
        description: "Packages For 1 years",
        bgColor: "#FFEDD5",
        headerColor: "#EA580C",
        titleColor: "#7C2D12",
        priceColor: "#EA580C",
        textColor: "#374151",
        features: [
            "Catalogue",
            "Target Area Promotion",
            "Logo Design",
            "Weekly Report",
            "Website Domain",
            "Expert Account Manager",
            "E-Commerce Responsive Website",
            "Payment Gateway",
            "Trusted Seller Certificate",
            "Language Converter",
            "Google SEO",
            "Paid Google Ads",
            "8 Verified Buyer in Month",
            "Trusted Seller Certificate",
            "Language Converter",
        ],
        buttonText: "Get Started    ",
    },
    {
        title: "Growth Accelarators",
        price: "2,48,600",
        description: "Packages for 1 years",
        bgColor: "#EDE9FE",
        headerColor: "#7C3AED",
        titleColor: "#4C1D95",
        priceColor: "#7C3AED",
        textColor: "#374151",
        features: [
            "E-Commerce Website",
            "Paid Ads Promotion With Video Gallery Ads",
            "Trusted Seller Certificate",
            "Domain With Logo",
            "VIP Listing",
            "Export With Languages Converter",
            "Google Adwords",
            "Account Team Handling",
            "Socail Media Promotion",
            "360 Business Solution",
            "12 Verified Buyer a Month",
            "SSL/Logo Design",
            "Weekly Work Report",
            "Fully Responsive Website",
        ],
        buttonText: "Get Started",
    },
];

export default function OurPackages() {
    useEffect(() => {
        const handleContextMenu = (e) => e.prevetDefault();
        document.addEventListener("contextmenu", handleContextMenu);
        return () => document.removeEventListener("contextmenu", handleContextMenu);
    }, []);
    return (
        <div>
            <section className="bg-white mt-20 py-12 px-4 md:px-12 font-[roboto] select-none">
                <h2 className="text-green-500 text-2xl sm:text-4xl font-bold text-center mb-10">
                    Our Packages
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-6 t shadow-md flex flex-col justify-between hover:shadow-lg transition`}
                            style={{ backgroundColor: pkg.bgColor}}
                        >
                            <div>
                                <h3 className="text-sm font-semibold mb-2" style={{ color: pkg.headerColor }} >{pkg.title}</h3>
                                <h1 className="text-4xl font-bold mb-2 flex pt-2" style={{ color: pkg.priceColor }}><FaRupeeSign />{pkg.price}</h1>
                                <p className="text-sm mb-4" style={{ color: pkg.titleColor }}>{pkg.description}</p>
                                <ul className="space-y-2 mb-6">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center space-x-2" style={{ color: pkg.textColor }}>
                                            <span className="text-black"><Check size={32} color='green'/></span>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full font-medium hover:bg-gray-800 transition"
                                
                               >
                                {pkg.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
