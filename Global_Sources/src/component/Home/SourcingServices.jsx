import React from 'react';
import { motion } from 'framer-motion';
import match from '../../assets/homePageImage/match2x.jpg';
import VipBuyer from '../../assets/homePageImage/vip-buyers2x.jpg';
import magazines from '../../assets/homePageImage/sourcing.jpeg';
import onlineEvent from '../../assets/homePageImage/online-event2x.jpg';
import { useNavigate } from 'react-router-dom';




const categories = [
    "Earthing Electrode", "Jackets", "Personal Care Products", "Rolling Mill Machinery",
    "ICU Equipment", "Medical, Diagnostic & Hospital Supplies", "Temperature Instruments",
    "Disposable Gloves", "Healthcare & Hygiene Products", "Immunization & Vaccination Drugs",
    "ENT Equipment & Supplies", "Hospital Beds", "Soap & Hand Wash", "Diagnostic Equipment",
    "Medical Equipment", "Common Medicines & Drugs", "Cleaning Chemicals",
    "Ayurvedic Medicines & Products", "Hospital Equipment", "Hospital Uniforms",
    "Medical & Hospital Disposables", "Scientific Instruments", "Disposable Products",
    "Respiratory Drugs", "PCD Pharma", "Pipes & Pipe Fittings", "Steel Pipes & Tubes",
    "Rotary Unions & Joints", "Carbon Steel Pipes & Tubes", "Alloy Steel Pipes & Tubes",
    "LED Products", "Sweets & Namkeen", "Consumer Electronics", "Diagnostic Equipment",
    "Medical Equipment", "Common Medicines & Drugs", "Cleaning Chemicals",
    "Ayurvedic Medicines & Products", "Hospital Equipment", "Hospital Uniforms",
    "Medical & Hospital Disposables", "Scientific Instruments", "Disposable Products",
    "Respiratory Drugs", "PCD Pharma", "Pipes & Pipe Fittings", "Steel Pipes & Tubes",
    "Rotary Unions & Joints", "Carbon Steel Pipes & Tubes", "Alloy Steel Pipes & Tubes",
    "LED Products", "Sweets & Namkeen", "Consumer Electronics"
];




const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

export default function SourcingServices() {
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/buyerform?category=${encodeURIComponent(category)}`);
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-7xl mx-auto px-4 py-8 font-roboto mt-10 bg-[#e6e9ed] rounded-tr-lg rounded-tl-lg"
        >
            
            <motion.h2
                variants={fadeInUp}
                custom={1}
                className="text-xl sm:text-2xl font-semibold mb-6"
            >
                Sourcing Services
            </motion.h2>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                    { title: "MATCH", desc: "Meet suppliers hassle-free and without boundaries", image: match },
                    { title: "VIP Buyer", desc: "Join Our VIP Buyer Community, find out more", image: VipBuyer },
                    { title: "Sourcing Magazines", desc: "Subscribe to receive Vyapaarmart e-magazines — FREE", image: magazines },
                    { title: "Online Events", desc: "Watch videos of the latest trends and products from our suppliers.", image: onlineEvent },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        custom={index + 2}
                        className="bg-white rounded-lg shadow p-4 flex flex-col space-y-2"
                    >
                        <img src={item.image} alt={item.title} className="rounded-lg w-full h-40 object-cover" />
                        <h3 className="text-gray text-xl font-bold mt-2">{item.title}</h3>
                        <p className="text-xs text-lightgray">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

           


            
            <motion.div
                variants={fadeInUp}
                custom={7}
                className="mt-10"
            >
                <h2 className="text-gray font-semibold text-xl mb-8">
                    Recommended Product List
                </h2>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-700">
                        {categories.map((cat, index) => (
                            <span
                                key={index}
                                onClick={() => handleCategoryClick(cat)}
                                className="hover:text-white hover:bg-[#083544] py-1 px-2 rounded-md cursor-pointer transition-colors"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>
                
            </motion.div>
        </motion.div>
    );
}
