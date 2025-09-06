import React, { useRef, useState, useEffect } from "react";
import { FileText, Package, PhoneCall } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import buyerImage from "../../assets/homePageImage/buyerfor.svg";

const MAX_FILE_SIZE = 4_500_000;
const ALLOWED_MIME = [
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/jpg",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const emailRegex = /^\S+@\S+\.\S+$/;
const phoneRegex = /^\+?\d{7,15}$/;

export default function BuyerForm() {
    const [selected, setSelected] = useState("Select unit");
    const [open, setOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const dropdownRef = useRef(null);

    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    const [priceMin, setPriceMin] = useState("");
    const [priceMax, setPriceMax] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [file, setFile] = useState(null);
    const [sending, setSending] = useState(false);
    const [message, setMessage] = useState(null);
    const [errors, setErrors] = useState({});

    const options = ["Kg", "Ton", "Piece", "Pack", "Litre", "Unit"];

    const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

    const handleFileChange = (e) => {
        const f = e.target.files?.[0];
        if (!f) {
            setFile(null);
            return;
        }
        if (!ALLOWED_MIME.includes(f.type)) {
            setMessage({ type: "error", text: "Invalid file type" });
            return;
        }
        if (f.size > MAX_FILE_SIZE) {
            setMessage({ type: "error", text: "File too large (max 4.5MB)" });
            return;
        }
        setFile(f);
    };

    const removeFile = () => setFile(null);

    const formatBytes = (bytes) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = ["Bytes", "KB", "MB"];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    const validate = () => {
        let errs = {};
        if (!product.trim()) errs.product = "Product is required";
        if (!quantity || Number.isNaN(Number(quantity)) || Number(quantity) <= 0)
            errs.quantity = "Quantity must be greater than 0";
        if (!name.trim()) errs.name = "Full name is required";
        if (!email.trim() || !emailRegex.test(email))
            errs.email = "Valid email is required";
        if (!phone.trim() || !phoneRegex.test(phone))
            errs.phone = "Valid phone number is required";
        if (selected === "Select unit") errs.unit = "Please select a unit";

        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);

        if (!validate()) return;

        setSending(true);
        try {
            const fd = new FormData();
            fd.append("product", product);
            fd.append("quantity", quantity);
            fd.append("unit", selected);
            fd.append("priceMin", priceMin);
            fd.append("priceMax", priceMax);
            fd.append("city", city);
            fd.append("state", state);
            fd.append("description", description);
            fd.append("name", name);
            fd.append("company", company);
            fd.append("email", email);
            fd.append("phone", phone);
            if (file) fd.append("file", file);

            console.log("[BuyerForm] sending:", Object.fromEntries(fd));

            const res = await fetch(`${API_BASE}/send-email`, {
                method: "POST",
                body: fd,
            });
            const data = await res.json().catch(() => ({}));

            if (res.ok) {
                setMessage({ type: "success", text: data.message || "Submitted" });
                setProduct("");
                setQuantity("");
                setSelected("Select unit");
                setPriceMin("");
                setPriceMax("");
                setCity("");
                setState("");
                setDescription("");
                setName("");
                setCompany("");
                setEmail("");
                setPhone("");
                setFile(null);
                setErrors({});
            } else {
                setMessage({
                    type: "error",
                    text: data.message || data.error || "Server error, try later",
                });
            }
        } catch (err) {
            console.error("[BuyerForm] network error:", err);
            setMessage({ type: "error", text: "Network error" });
        } finally {
            setSending(false);
            setTimeout(() => setMessage(null), 6000);
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex justify-center items-center font-roboto min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-6xl bg-white rounded-lg grid md:grid-cols-2 overflow-hidden shadow-lg">
                
                <div className="bg-white text-[#083544] border-r border-[#083544] border-opacity-20 p-6 sm:p-8 md:p-10">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 leading-snug">
                        Connect with Verified Suppliers & Grow Your Business 🚀
                    </h2>
                    <ul className="space-y-2 text-sm sm:text-xs">
                        <li className="flex items-start gap-3">
                            <FileText size={20} />
                            <span>Post your buying requirement in just a few clicks</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Package size={20} />
                            <span>Get best quotes from multiple verified suppliers</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <PhoneCall size={20} />
                            <span>Our team will connect you with the right supplier</span>
                        </li>
                    </ul>
                    <div className="rounded-lg mt-4">
                        <img
                            src={buyerImage}
                            alt="Business Deal"
                            className="w-full h-full max-w-sm mx-auto rounded-lg object-contain"
                        />
                    </div>
                </div>


                <div className="w-full bg-white rounded-2xl p-4 sm:p-6 md:p-8">
                    <h2 className="text-sm sm:text-lg font-semibold text-[#083544] mb-4">
                        Post Your Requirement (RFQ)
                    </h2>

                    {message && (
                        <div
                            role="alert"
                            className={`mb-4 px-4 py-2 rounded ${message.type === "success"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                        >
                            {message.text}
                        </div>
                    )}

                    <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
                        
                        <div className="grid gap-2">
                            <label htmlFor="product" className="text-sm font-medium text-[#083544]">
                                Product Name
                            </label>
                            <input
                                id="product"
                                value={product}
                                onChange={(e) => setProduct(e.target.value)}
                                type="text"
                                placeholder="Enter product name..."
                                required
                                className={`border rounded-lg px-3 py-2 w-full outline-none ${errors.product ? "border-darkRed" : "border-gray"
                                    }`}
                            />
                        </div>

                        
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <label htmlFor="quantity" className="text-sm font-medium text-[#083544]">
                                    Quantity
                                </label>
                                <input
                                    id="quantity"
                                    value={quantity}
                                    onChange={(e) =>
                                        setQuantity(e.target.value.replace(/[^\d.]/g, ""))
                                    }
                                    inputMode="numeric"
                                    type="text"
                                    placeholder="Enter quantity"
                                    required
                                    className={`border rounded-lg px-3 py-2 w-full outline-none ${errors.quantity ? "border-darkRed" : "border-gray"
                                        }`}
                                />
                            </div>

                            <div className="grid gap-2" ref={dropdownRef}>
                                <label className="text-sm font-medium text-[#083544]">
                                    Unit
                                </label>
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setOpen(!open)}
                                        className={`w-full border rounded-lg px-3 py-2 text-sm bg-white flex justify-between items-center ${errors.unit ? "border-darkRed" : "border-gray"
                                            }`}
                                    >
                                        <span>{selected}</span>
                                        <IoIosArrowDown />
                                    </button>

                                    {open && (
                                        <ul className="absolute mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-44 overflow-y-auto z-20">
                                            {options.map((opt, idx) => (
                                                <li
                                                    key={opt}
                                                    onClick={() => {
                                                        setSelected(opt);
                                                        setOpen(false);
                                                    }}
                                                    className={`px-3 py-2 text-sm cursor-pointer ${focusedIndex === idx ? "bg-blue-50" : ""
                                                        }`}
                                                >
                                                    {opt}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>

                       
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="priceMin" className="text-sm font-medium text-[#083544]">
                                    Price Range (Min)
                                </label>
                                <input
                                    id="priceMin"
                                    value={priceMin}
                                    onChange={(e) =>
                                        setPriceMin(e.target.value.replace(/[^\d.]/g, ""))
                                    }
                                    type="text"
                                    placeholder="Min price"
                                    className="border border-gray-300 rounded-lg px-3 py-2 w-full outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="priceMax" className="text-sm font-medium text-[#083544]">
                                    Price Range (Max)
                                </label>
                                <input
                                    id="priceMax"
                                    value={priceMax}
                                    onChange={(e) =>
                                        setPriceMax(e.target.value.replace(/[^\d.]/g, ""))
                                    }
                                    type="text"
                                    placeholder="Max price"
                                    className="border border-gray-300 rounded-lg px-3 py-2 w-full outline-none"
                                />
                            </div>
                        </div>

                       
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="city" className="text-sm font-medium text-[#083544]">
                                    City
                                </label>
                                <input
                                    id="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    type="text"
                                    placeholder="Enter city..."
                                    className="border border-gray-300 rounded-lg px-3 py-2 w-full outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="state" className="text-sm font-medium text-[#083544]">
                                    State
                                </label>
                                <input
                                    id="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    type="text"
                                    placeholder="Enter state..."
                                    className="border border-gray-300 rounded-lg px-3 py-2 w-full outline-none"
                                />
                            </div>
                        </div>


                        <div className="grid gap-2">
                            <label htmlFor="description" className="text-sm font-medium text-[#083544]">
                                Additional Details
                            </label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows="4"
                                placeholder="Enter specifications..."
                                className="border rounded-lg px-3 py-2 w-full outline-none"
                            />
                        </div>

                       
                        <div className="grid gap-2">
                            <label htmlFor="file" className="text-sm font-medium text-[#083544]">
                                Upload Reference File (Optional)
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    id="file"
                                    type="file"
                                    onChange={handleFileChange}
                                    className="border border-gray-300 rounded-lg px-2 py-1 w-full"
                                />
                                {file && (
                                    <div className="text-sm text-gray">
                                        <div>
                                            {file.name}{" "}
                                            <span className="text-xs text-gray">
                                                ({formatBytes(file.size)})
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={removeFile}
                                            className="text-xs text-darkRed underline mt-1"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                       
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium text-[#083544]">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Enter your full name"
                                    required
                                    className={`border rounded-lg px-3 py-2 w-full outline-none ${errors.name ? "border-red-400" : "border-gray-300"
                                        }`}
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="text-sm font-medium text-[#083544]">
                                    Company Name
                                </label>
                                <input
                                    id="company"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    type="text"
                                    placeholder="Enter your company name"
                                    className="border border-gray-300 rounded-lg px-3 py-2 w-full outline-none"
                                />
                            </div>
                        </div>

                        
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="text-sm font-medium text-[#083544]">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className={`border rounded-lg px-3 py-2 w-full outline-none ${errors.email ? "border-red-400" : "border-gray-300"
                                        }`}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="text-sm font-medium text-[#083544]">
                                    Phone
                                </label>
                                <input
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value.replace(/[^\d+]/g, ""))}
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    required
                                    className={`border rounded-lg px-3 py-2 w-full outline-none ${errors.phone ? "border-darkRed" : "border-gray"
                                        }`}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={sending}
                            className={`w-full py-2 mt-4 rounded-lg text-white ${sending ? "bg-gray" : "bg-blue-600 hover:bg-blue-700"
                                }`}
                        >
                            {sending ? "Submitting..." : "Submit Requirement"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
