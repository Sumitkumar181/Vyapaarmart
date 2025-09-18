import { useState, useEffect } from "react";
import { PiTelegramLogoLight } from "react-icons/pi";


export default function LeadFormPopup({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        productName: "",
        email: "",
        number: "",
    });

    
    const resetForm = () => {
        setFormData({
            productName: "",
            email: "",
            number: "",
        });
    };

    
    useEffect(() => {
        if (!isOpen) {
            resetForm();
        }
    }, [isOpen]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);

       

        resetForm(); 
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 ">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative font-roboto">
               
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                >
                    ✕
                </button>

                <h2 className="text-lg font-semibold text-gray mb-4 ">Provide the below details to get quick quotes from sellers <span className="text-darkRed">*</span></h2>

                
                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        type="text"
                        name="productName"
                        placeholder="Product Name"
                        value={formData.productName}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg border-gray border-opacity-15 py-1 px-3 placeholder:text-sm"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg border-gray border-opacity-15 py-1 px-3 placeholder:text-sm"
                    />
                    <input
                        type="tel"
                        name="number"
                        placeholder="Phone Number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg border-gray border-opacity-15 py-1 px-3 placeholder:text-sm"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white rounded-lg py-2 flex content-center items-center justify-center gap-2 uppercase hover:bg-gray-800"
                    >
                        Submit  <PiTelegramLogoLight size={20} />
                    </button>
                    
                </form>
            </div>
        </div>
    );
}
