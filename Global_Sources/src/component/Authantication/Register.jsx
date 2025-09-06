import { useState } from "react";
import registerBanner from "../../assets/AuthenticationImage/Registerbanner.png";
import logo from "../../assets/image/Logo/logo.png";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        countryCode: "+91",
        mobile: "",
        company: "",
        pincode: "",
    });
    const [phone, setPhone] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Register Data:", formData);
    };

    return (
        <div className="min-h-screen pt-20 sm:pt-32  flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row w-full max-w-6xl rounded-2xl overflow-hidden bg-white  ">

                
                <div className="hidden md:flex flex-col justify-center items-center w-1/2 text-white p-6 lg:p-10">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#083544] mb-6 font-[poppins] text-center md:text-left leading-snug">
                        Start your <span className="text-[#EE343B]">journey</span> with a VyapaarMart built to accelerate{" "}
                        <span className="text-[#EE343B]">business growth.</span>
                    </h2>
                    <img
                        src={registerBanner}
                        alt="Register Illustration"
                        className="rounded-xl w-full max-w-md lg:max-w-lg object-contain"
                    />
                </div>

                
                <div className="flex-1 p-6 sm:p-8 lg:p-10 mb-6 rounded-2xl border border-blue-400">
                    <span className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-[#042939] font-[poppins] text-center sm:text-left">
                            Register With Us
                        </h2>
                        <img src={logo} alt="logo" className="w-28 sm:w-32 md:w-36" />
                    </span>

                    <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-blue-600 rounded-xl  
                           focus:outline-none focus:border-blue-500 focus:ring-2 
                           focus:ring-blue-400 transition-all text-base sm:text-lg"
                            />
                        </div>

                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-blue-600 rounded-xl  
                           focus:outline-none focus:border-blue-500 focus:ring-2 
                           focus:ring-blue-400 transition-all text-base sm:text-lg"
                            />
                        </div>

                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                            <PhoneInput
                                country={"in"}
                                value={phone}
                                onChange={setPhone}
                                inputClass="!w-full !py-3 sm:!py-4 px-4 !rounded-xl !border !shadow-sm focus:!ring-2 focus:!ring-blue-400 text-base sm:text-lg"
                                buttonClass="!rounded-l-xl !border"
                                dropdownClass="!shadow-lg !rounded-xl"
                                enableSearch={true}
                            />
                        </div>

                       
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                            <input
                                type="text"
                                name="company"
                                placeholder="Enter your company name"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-blue-600 rounded-xl  
                           focus:outline-none focus:border-blue-500 focus:ring-2 
                           focus:ring-blue-400 transition-all text-base sm:text-lg"
                            />
                        </div>

                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
                            <input
                                type="text"
                                name="pincode"
                                placeholder="Enter pin code"
                                value={formData.pincode}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-blue-600 rounded-xl shadow-sm 
                           focus:outline-none focus:border-blue-500 focus:ring-2 
                           focus:ring-blue-400 transition-all text-base sm:text-lg"
                            />
                        </div>

                       
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 
                         text-white font-semibold py-3 sm:py-4 rounded-xl 
                         shadow-md hover:from-blue-700 hover:to-blue-800 
                         transition-all transform hover:scale-[1.02] text-base sm:text-lg"
                        >
                            Register
                        </button>
                    </form>

                    
                    <p className="text-center text-gray-600 mt-6 text-base sm:text-lg">
                        Already have an account?{" "}
                        <a href="/SignIn" className="text-blue-600 hover:underline">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
