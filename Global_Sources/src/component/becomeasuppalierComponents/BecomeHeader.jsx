import React from 'react'
import office from '../../assets/becomeSuppalier/office.jpg'

export default function BecomeHeader() {
    const memberships = [
        {
            title: "Free Membership",
            button: "Apply Now",
            bg: "bg-[#e6f0ff]",
            textColor: "text-gray",
            buttonColor: "bg-gray",
            icon: "🆓",
        },
        {
            title: "Standard Membership",
            button: "Inquire Now",
            bg: "bg-[#fcefe9]",
            textColor: "text-[#5c2c13]",
            buttonColor: "bg-[#5c2c13]",
            icon: "🥉",
        },
        {
            title: "Advance Membership",
            button: "Inquire Now",
            bg: "bg-[#e6e9ff]",
            textColor: "text-[#1e1eaa]",
            buttonColor: "bg-[#1e1eaa]",
            icon: "💎",
        },
    ];

    return (
        <div className="w-full font-roboto pt-10 sm:pt-28">
            
            <div className="relative flex justify-center items-center bg-darkIndigo h-[350px] sm:h-[400px] md:h-[500px] w-full">
                <img
                    src={office}
                    alt="Office"
                    className="absolute h-full w-full opacity-40 object-cover"
                />
                <div className="absolute px-6 sm:px-12 md:px-24 py-10 sm:py-16 md:py-20 grid  sm:gap-4  sm:text-left">
                    <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold">
                        Get Verified. Get Leads. Get Business.
                    </h2>
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                       As a Supplier Now
                    </h2>
                    <div className="mt-2">
                        <p className="text-white text-xs sm:text-sm">
                            Become a verified supplier today. Gain visibility, attract authentic leads, and build long-term business growth with our secure platform.
                        </p>
                        <p className="text-white text-xs sm:text-sm">
                            in the global marketplace.
                        </p>
                    </div>
                    <button className="h-6 sm:h-10 w-32 sm:w-40 mt-4 font-bold flex justify-center items-center text-xs sm:text-sm text-white rounded-full bg-darkRed hover:opacity-90 transition">
                        Apply Now
                    </button>
                </div>
            </div>

            
            <div className="px-6 sm:px-12 md:px-24 py-8 flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 relative bg-white">
                
                <div className="text-center lg:text-left max-w-md">
                    <h2 className="text-gray text-2xl sm:text-3xl font-bold leading-snug">
                        Explore tailor-made <br />
                        benefits for your <br />
                        business.
                    </h2>
                </div>

                
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <h2 className="text-darkRed text-2xl sm:text-3xl md:text-4xl font-bold">30M+</h2>
                        <p className="text-sm sm:text-base font-bold mt-2">Products</p>
                    </div>
                    <div>
                        <h2 className="text-darkRed text-2xl sm:text-3xl md:text-4xl font-bold">30M+</h2>
                        <p className="text-sm sm:text-base font-bold mt-2">Suppliers</p>
                    </div>
                    <div>
                        <h2 className="text-darkRed text-2xl sm:text-3xl md:text-4xl font-bold">30M+</h2>
                        <p className="text-sm sm:text-base font-bold mt-2">Product Categories</p>
                    </div>
                    <div>
                        <h2 className="text-darkRed text-2xl sm:text-3xl md:text-4xl font-bold">30M+</h2>
                        <p className="text-sm sm:text-base font-bold mt-2">Registered Buyers</p>
                    </div>
                </div>
            </div>

           
            <section className="bg-gradient-to-b from-[#0b1c3f] to-[#132d5c] py-10 px-4 md:px-12 text-center">
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-10">
                    Supplier Membership Program
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {memberships.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-6 flex flex-col items-center shadow-xl ${item.bg}`}
                        >
                            <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
                            <h3
                                className={`text-lg sm:text-xl font-semibold mb-6 ${item.textColor}`}
                            >
                                {item.title}
                            </h3>
                            <button
                                className={`text-white text-sm sm:text-base font-semibold px-8 sm:px-12 md:px-16 py-2 rounded-full ${item.buttonColor} hover:opacity-90 transition`}
                            >
                                {item.button}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Inquiry Section */}
            <div className="px-4 sm:px-8 md:px-16 lg:px-20 py-6 sm:py-8 md:py-10 w-full flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center justify-between bg-slate-200">
                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-base sm:text-lg md:text-2xl font-bold text-gray-800">
                        For more membership plans, please contact us immediately!
                    </h2>
                    <p className="text-xs sm:text-sm md:text-lg mt-3">
                        Click the button on the right to learn about the{" "}
                        <span className="italic">"Infinite Opportunities Beyond Borders"</span>{" "}
                        sales
                    </p>
                    <p className="text-xs sm:text-sm md:text-lg">
                        package. Get the{" "}
                        <span className="italic">"O2O Cross-Border Service Pack"</span>.
                    </p>
                </div>

                {/* Button */}
                <div className="flex justify-center md:justify-end w-full md:w-auto">
                    <button className="bg-[#4A45D2] w-full sm:w-auto px-6 sm:px-10 md:px-20 py-2 sm:py-3 rounded-full text-white font-bold text-sm sm:text-base transition-transform hover:scale-105">
                        Inquire Now
                    </button>
                </div>
            </div>
        </div>
    );
}
