import { useState } from "react";
import { PiStorefrontBold } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { LuUserRound } from "react-icons/lu";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/image/Logo/logo.png";
import { Link } from "react-router-dom";



const Dropdown = ({ label, items, isMobile }) => {
    const [open, setOpen] = useState(false);


    if (isMobile) {
        return (
            <div className="  font-roboto">
                <div
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-between cursor-pointer py-2 text-gray-700 hover:text-darkRed"
                >
                    <span>{label}</span>
                    <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    />
                </div>
                {open && (
                    <ul className="pl-4 space-y-1">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="text-sm text-gray-600 hover:text-darkRed cursor-pointer"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }


    return (
        <div className="relative group cursor-pointer ">
            <div className="flex items-center space-x-1 hover:text-darkRed">
                <span className="text-gray-600">{label}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                <ul className="py-2">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-darkRed text-sm"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};



const dropdowns = {
    "India Spotlight": [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
        "Karnataka", "Kerala", "Madhya Pradesh", "Tamil Nadu", "Telangana",
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ],
    English: ["English", "हिन्दी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்", "اردو", "ગુજરાતી", "ಕನ್ನಡ"],
    "Buyer Services": ["Sourcing Services", "Inspection", "Logistics"],
    "Supplier Services": ["Membership", "Booth Booking", "Promotions"],
};


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected, setSelected] = useState("Products");

    return (
        <header className="font-roboto w-full text-sm font-medium bg-white shadow-sm fixed top-0 left-0 z-50">


            <div className="hidden md:block bg-gray-50 border-b border-lightgray border-opacity-40 ">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 lg:px-16 py-2 text-gray ">
                    <div className="flex items-center gap-6">
                        {Object.entries(dropdowns).slice(0, 4).map(([label, items]) => (
                            <Dropdown key={label} label={label} items={items} isMobile={false} />
                        ))}
                    </div>
                    <div className="flex items-center gap-6">
                        {Object.entries(dropdowns).slice(4).map(([label, items]) => (
                            <Dropdown key={label} label={label} items={items} isMobile={false} />
                        ))}
                    </div>
                </div>
            </div>


            <nav className="w-full py-3  ">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 lg:px-16 ">

                    <div className="flex items-center justify-between w-full md:w-auto">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="h-10 sm:h-14 object-contain" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="text-gray focus:outline-none"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                {menuOpen ? <X size={26} /> : <Menu size={26} />}
                            </button>
                        </div>
                    </div>


                    <div className="hidden md:flex flex-1 justify-between items-center mx-6 gap-4">


                        <div className="w-full max-w-2xl flex items-center rounded-full bg-white border border-darkRed shadow-sm ">

                            <div className="relative w-40">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="w-full flex justify-between items-center bg-white rounded-l-full px-4 py-2 text-sm text-gray-700"
                                >
                                    {selected}
                                    <ChevronDown className={`ml-2 transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`} />
                                </button>

                                {dropdownOpen && (
                                    <ul className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg">
                                        {["Products", "Suppliers"].map((option) => (
                                            <li
                                                key={option}
                                                onClick={() => {
                                                    setSelected(option);
                                                    setDropdownOpen(false);
                                                }}
                                                className="px-4 py-2 text-sm text-gray-700 hover:bg-red-50 cursor-pointer"
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>


                            <input
                                type="text"
                                placeholder="I'm looking for..."
                                className="flex-1 px-4 py-2 text-sm text-gray placeholder:text-lightgray placeholder:text-xs outline-none border-l border-lightgray border-opacity-25"
                            />


                            <button className="bg-darkRed text-white px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-r-full hover:bg-red-700">
                                Search
                            </button>
                        </div>

                        <div className="flex items-center gap-4 ">
                            <Link to="/become-supplier" className="flex items-center gap-3 text-gray hover:text-darkRed transition-colors ">
                                <PiStorefrontBold size={44} />
                                <span className="text-sm ">Become a Supplier</span>
                            </Link>
                            <Link to="/buyerform" className="flex items-center gap-3 hover:text-darkRed text-gray transition-colors">
                                <TbTargetArrow size={44} />
                                <span className="text-sm ">Request for Quotations</span>
                            </Link>
                            <Link to="/register" className="flex items-center gap-3 text-gray hover:text-darkRed cursor-pointer transition-colors">
                                <LuUserRound size={44} />
                                <span className="text-sm ">Sign in / Register</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>


            {menuOpen && (
                <div className="md:hidden bg-white  px-4 pt-4 pb-6 space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-3 py-2 border border-gray-300 rounded-full text-sm outline-none"
                        />
                    </div>
                    <div className="space-y-3">
                        {Object.entries(dropdowns).map(([label, items]) => (
                            <Dropdown key={label} label={label} items={items} isMobile={true} />
                        ))}
                        <div className="hover:text-darkRed cursor-pointer text-gray-700  ">
                            Sourcing Club
                        </div>
                    </div>
                    <div className="space-y-3 pt-4 ">
                        <Link to="/become-supplier" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-red-500">
                            <PiStorefrontBold size={20} />
                            <span>Become a Supplier</span>
                        </Link>
                        <Link to="/buyerform" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-red-500">
                            <TbTargetArrow size={20} />
                            <span>Request for Quotations</span>
                        </Link>
                        <Link to="/auth" className="flex items-center gap-2 hover:text-red-500">
                            <LuUserRound size={20} />
                            <span>Sign in / Register</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
