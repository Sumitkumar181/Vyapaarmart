    import React from "react";
    import { motion } from "framer-motion";

    import Emblem_Rajasthan from "../../assets/homePageImage/Emblem_Rajasthan.png";
    import Manipur from "../../assets/homePageImage/Kanglasa.png";
    import Sikkim from "../../assets/homePageImage/Seal_of_Sikkim.png";
    import TamilNadu from "../../assets/homePageImage/TamilNadu_Logo.webp";
    import Tripura from "../../assets/homePageImage/Tripura_Emblem.png";
    import AndhraPradesh from "../../assets/homePageImage/Andhra_Pradesh.png";
    import Meghalaya from "../../assets/homePageImage/Meghalaya.png";
    import Uttarakhand from "../../assets/homePageImage/Uttarakhand.webp";
    import Arunachal_Pradesh from "../../assets/homePageImage/Arunachal_Pradesh.png";
    import Assam from "../../assets/homePageImage/Assam.png";
    import Bihar from "../../assets/homePageImage/Bihar.webp";
    import Chhattisgarh from "../../assets/homePageImage/Chhattisgarh.png";
    import Goa from "../../assets/homePageImage/Goa.png";
    import Haryana from "../../assets/homePageImage/Haryana.webp";
    import Himachal_Pradesh from "../../assets/homePageImage/Himachal_Pradesh.png";
    import Karnataka from "../../assets/homePageImage/Karnataka.webp";
    import Kerala from "../../assets/homePageImage/Kerala.webp";
    import Gujrat from "../../assets/homePageImage/Gujrat.png";

    const states = [
        { name: "Rajasthan", image: Emblem_Rajasthan },
        { name: "Manipur", image: Manipur },
        { name: "Sikkim", image: Sikkim },
        { name: "Tamil Nadu", image: TamilNadu },
        { name: "Tripura", image: Tripura },
        { name: "Uttarakhand", image: Uttarakhand },
        { name: "Meghalaya", image: Meghalaya },
        { name: "Andhra Pradesh", image: AndhraPradesh },
        { name: "Chhattisgarh", image: Chhattisgarh },
        { name: "Arunachal Pradesh", image: Arunachal_Pradesh },
        { name: "Assam", image: Assam },
        { name: "Bihar", image: Bihar },
        { name: "Goa", image: Goa },
        { name: "Haryana", image: Haryana },
        { name: "Himachal Pradesh", image: Himachal_Pradesh },
        { name: "Karnataka", image: Karnataka },
        { name: "Kerala", image: Kerala },
        { name: "Gujrat", image: Gujrat },
    ];

    export default function SourceByRegion() {
        return (
            <div className="w-full bg-white font-roboto py-4 mt-14 rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                
                <div className="max-w-7xl mx-auto   mb-6">
                    <h2 className="text-2xl font-semibold text-gray mb-1">
                        Find Suppliers from Top States
                    </h2>
                    <p className="text-sm text-lightgray">
                        Facilitate world wholesale, retail and E-commerce businesses.
                        Vyapaarmart is easy!
                    </p>
                </div>

                
                <div className="relative w-full overflow-hidden px-10 md:px-20">
                    <motion.div
                        className="inline-flex gap-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear",
                        }}
                    >
                        {[...states, ...states].map((state, index) => (
                            <div
                                key={index}
                                className="h-28 w-44 flex-shrink-0 rounded-lg bg-[#f2f2f2] hover:bg-[#e0eff5] flex flex-col items-center justify-center gap-2 transition"
                            >
                                <div className="h-16 w-18">
                                    <img
                                        src={state.image}
                                        alt={state.name}
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <p className="font-semibold text-lgx text-gray text-center">
                                    {state.name}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        );
    }
