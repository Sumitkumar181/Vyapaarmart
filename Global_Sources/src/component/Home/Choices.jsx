import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import CarOrganizers from '../../assets/homePageImage/Car-organizers.jpg';
import SFRrepeater from '../../assets/homePageImage/SFR-repeater.jpg';
import tires from '../../assets/homePageImage/tires.jpg';
import Car1 from '../../assets/homePageImage/Car1.jpg';
import jack from '../../assets/homePageImage/jack.jpg';
import spring from '../../assets/homePageImage/spring.jpg';
import headphone from '../../assets/card/headphone.jpeg';
import gaming from '../../assets/card/gaming.jpeg';
import ElectronicComponents from '../../assets/card/electronic_components.jpeg';

const sections = [
    {
        title: "Analyst's Choice",
        path: "/allCatagories",
        subtitle: "Goods & services handpicked by B2B sourcing & procurement specialists",
        items: [
            { title: "Trending", description: "Sports bras", image: headphone },
            { title: "Hot Picks", description: "Backpacks", image: gaming },
            { title: "Innovative", description: "Fragrance diffusers", image: ElectronicComponents },
        ]
    },
    {
        title: "Low MOQ",
        path: "/allCatagories",
        subtitle: "Find products from certified low MOQ manufacturers & wholesale suppliers",
        items: [
            { title: "New Arrivals", description: "Wristbands", image: Car1 },
            { title: "Quick...", description: "Fingerprint door locks", image: jack },
            { title: "Best Sellers", description: "Blockchain miners", image: spring },
        ]
    },
    {
        title: "OEM Products",
        path: "/allCatagories",
        subtitle: "Reliable OEM companies offering thousands of popular OEM parts & items",
        items: [
            { title: "US$ 55", description: "Hot Picks (5 Pieces)", image: CarOrganizers },
            { title: "US$ 2080", description: "Hot Picks (5 Pieces)", image: SFRrepeater },
            { title: "US$ 79", description: "Hot Picks (150 Pieces)", image: tires },
        ]
    }
];


const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            when: 'beforeChildren',
            staggerChildren: 0.1,
        },
    },
};

const itemVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function Choices() {
    return (
        <div className="container mx-auto px-4 py-6 font-roboto bg-[#e8e8e9] rounded-lg mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.map((section, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white rounded-xl shadow-lg p-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={sectionVariant}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-2xl font-bold text-gray font-roboto">{section.title}</h3>
                            <Link to={section.path} className="text-sm text-blue-500 hover:underline">See All</Link>
                        </div>

                        <p className="text-lightgray text-xs mb-4">{section.subtitle}</p>

                        <div className="grid grid-cols-3 gap-2">
                            {section.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariant}
                                    whileHover={{ scale: 1.05 }}
                                    className="flex flex-col items-center text-center text-sm"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-20 h-20 object-cover rounded-md mb-1 cursor-pointer"
                                    />
                                   
                                    <p className="text-lightgray text-xs">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
