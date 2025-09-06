import React, { useState, useMemo } from 'react';
import { FileUp, X, ChevronDown, ChevronUp, Check } from 'lucide-react';
import dayjs from 'dayjs';

const names = [
    'Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard',
    'Omar Alexander', 'Carlos Abbott', 'Miriam Wagner',
    'Bradley Wilkerson', 'Virginia Andrews', 'Kelly Snyder',
];

const options = [
    "Business services",
    "Customized product",
    "Non-customized product",
    "Total solution",
    "Other",
];

const DatePicker = ({ value, onChange }) => {
    const [open, setOpen] = useState(false);

    const handleInputChange = (e) => {
        const date = dayjs(e.target.value, 'YYYY-MM-DD');
        if (date.isValid()) {
            onChange(date);
        }
    };

    return (
        <div className="relative">
            <input
                type="date"
                value={value ? value.format('YYYY-MM-DD') : ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:text-gray-400"
            />
        </div>
    );
};


export default function App() {
    const [image, setImage] = useState(null);
    const [selectedNames, setSelectedNames] = useState([]);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Select Source Type");
    const [value, setValue] = useState(null);

    const diffDays = useMemo(() => {
        if (!value) return null;
        const today = dayjs().startOf("day");
        const target = dayjs(value).startOf("day");
        return target.diff(today, "day");
    }, [value]);

    const displayText =
        diffDays === null
            ? "0 days"
            : diffDays === 0
                ? "Today"
                : diffDays > 0
                    ? `${diffDays} day${diffDays !== 1 ? "s" : ""}`
                    : `${Math.abs(diffDays)} day${Math.abs(diffDays) !== 1 ? "s" : ""} ago`;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleRemoveImage = () => setImage(null);

    const handleSelectChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue && !selectedNames.includes(selectedValue)) {
            setSelectedNames([...selectedNames, selectedValue]);
        }
    };

    const handleRemoveChip = (name) => {
        setSelectedNames(selectedNames.filter((item) => item !== name));
    };

    return (
        <div className="bg-gray-100 min-h-screen font-inter p-4 md:p-8 lg:p-12 flex items-center justify-center">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 p-4 rounded-xl shadow-lg bg-white">
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg p-6 sm:p-8">
                        <h2 className="font-bold text-xl sm:text-2xl text-gray-800 mb-4">
                            Request for Quotations - RFQ
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-between items-stretch gap-4 mb-6">
                            {[
                                ["Submit a RFQ in just 1", "minute."],
                                ["Get multiple quotations from", "verified suppliers."],
                                ["Compare and choose the best", "quotation!"]
                            ].map((text, i) => (
                                <div key={i} className="flex gap-3 items-center bg-gray-100 p-4 rounded-lg flex-1">
                                    <div className="h-7 w-7 border-2 border-blue-600 flex items-center justify-center text-sm font-bold text-blue-600 rounded-full">
                                        {i + 1}
                                    </div>
                                    <div className="flex flex-col text-sm font-medium text-gray-700">
                                        <p>{text[0]}</p>
                                        <p>{text[1]}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-blue-600 text-sm mb-6 cursor-pointer hover:underline">Learn More</p>

                        <form className="space-y-6">
                            <div className="flex flex-col">
                                <label className="text-gray-700 text-base sm:text-lg font-medium mb-1">
                                    Product Name<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter a specific product name..."
                                    className="border border-gray-300 rounded-md py-2 px-3 placeholder:text-gray-400 placeholder:text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-700 text-base sm:text-lg font-medium mb-1">
                                    Product Category<span className="text-red-500">*</span>
                                </label>
                                <select
                                    onChange={handleSelectChange}
                                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-400"
                                >
                                    <option value="">Select the closest matching product category</option>
                                    {names.map((name) => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {selectedNames.map((name) => (
                                        <div key={name} className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                            {name}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveChip(name)}
                                                className="ml-2 text-blue-500 hover:text-blue-700 font-bold"
                                            >
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-700 text-base sm:text-lg font-medium mb-1">
                                    About your Product<span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    maxLength={3000}
                                    className="border border-gray-300 rounded-md h-36 p-3 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Describe your product in detail..."
                                ></textarea>
                            </div>

                            <div className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-lg p-6 cursor-pointer hover:border-blue-400 transition w-full">
                                <input
                                    type="file"
                                    accept="image/*"
                                    id="file-upload"
                                    className="hidden"
                                    onChange={handleImageChange}
                                />
                                <label htmlFor="file-upload" className="cursor-pointer text-blue-600 flex flex-col items-center gap-2">
                                    <FileUp size={28} />
                                    Click to Upload
                                </label>
                                <p className="text-xs text-gray-500 mt-1 text-center">PNG, JPG, JPEG allowed</p>
                            </div>

                            {image && (
                                <div className="mt-4 relative inline-block">
                                    <img src={image} alt="Preview" className="h-24 w-24 rounded-md object-cover" />
                                    <button
                                        type="button"
                                        onClick={handleRemoveImage}
                                        className="absolute bg-red-400 -top-2 -right-2 text-white p-1 rounded-full hover:bg-red-600 transition"
                                    >
                                        <X size={12} />
                                    </button>
                                </div>
                            )}

                            <div className="flex flex-col">
                                <label className="text-gray-700 font-medium mb-2 text-base sm:text-lg">
                                    Source Type
                                </label>
                                <div className="relative">
                                    <div
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white shadow-sm flex justify-between items-center cursor-pointer hover:border-blue-400 transition"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="text-gray-700">{selected}</span>
                                        <span className="text-gray-500">{open ? <ChevronUp /> : <ChevronDown />}</span>
                                    </div>
                                    {open && (
                                        <ul className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-lg max-h-60 overflow-y-auto border border-gray-200">
                                            {options.map((option, idx) => (
                                                <li
                                                    key={idx}
                                                    className="px-4 py-3 hover:bg-blue-500 hover:text-white cursor-pointer transition"
                                                    onClick={() => {
                                                        setSelected(option);
                                                        setOpen(false);
                                                    }}
                                                >
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label className="text-base sm:text-lg font-medium text-gray-700 mb-2">
                                        Estimated Order Quantity<span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="number"
                                            placeholder="e.g. 1000"
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        />
                                        <select
                                            className="w-28 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        >
                                            <option value="units">Units</option>
                                            <option value="kg">Kg</option>
                                            <option value="pcs">Pieces</option>
                                            <option value="box">Boxes</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label className="text-base sm:text-lg font-medium text-gray-700 mb-2">
                                        Preferred Unit Price
                                    </label>
                                    <div className="flex gap-2">
                                        <select
                                            className="w-28 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        >
                                            <option value="usd">USD</option>
                                            <option value="inr">INR</option>
                                            <option value="eur">EUR</option>
                                            <option value="gbp">GBP</option>
                                        </select>
                                        <input
                                            type="number"
                                            placeholder="e.g. 50"
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700 font-medium mb-2 text-base sm:text-lg">
                                    Valid To
                                </label>
                                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
                                    <DatePicker value={value} onChange={setValue} />
                                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm md:text-base">
                                        {displayText}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-700 text-base sm:text-lg font-medium mb-1">
                                    Email address<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your Email..."
                                    className="border border-gray-300 rounded-md py-2 px-3 placeholder:text-gray-400 placeholder:text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            <div className='flex gap-4 mt-4 items-start'>
                                <input type='checkbox' className='w-4 h-4 mt-1 accent-blue-600' />
                                <p className='text-sm font-medium text-gray-500'>I'd like to send this RFQ to more suppliers, if I have not received 20 quotations within the next 48 hours.</p>
                            </div>

                            <button
                                type="submit"
                                className="px-8 py-3 mt-6 rounded-lg text-white text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 lg:col-span-1">
                    <div className="flex-col flex gap-4">
                        <h2 className="font-bold text-lg sm:text-xl mb-2 text-gray-800">RFQ Score</h2>
                        <p className="text-gray-600 text-sm font-normal">
                            Provide as many details as possible about your request to ensure a faster response from the right suppliers. The higher the score the better responses you will get.
                        </p>
                        <ul className='mt-4 grid gap-4 text-sm font-normal'>
                            <li className='flex gap-3 items-center text-gray-700'>
                                <Check size={20} className="text-green-500" />
                                Product Name
                            </li>
                            <li className='flex gap-3 items-center text-gray-700'>
                                <Check size={20} className="text-green-500" />
                                Product Category
                            </li>
                            <li className='flex gap-3 items-center text-gray-700'>
                                <Check size={20} className="text-green-500" />
                                About Your Product
                            </li>
                            <li className='flex gap-3 items-center text-gray-700'>
                                <Check size={20} className="text-green-500" />
                                Add Attachment
                            </li>
                            <li className='flex gap-3 items-center text-gray-700'>
                                <Check size={20} className="text-green-500" />
                                Sourcing Type
                            </li>
                            <li className='flex gap-3 items-center text-gray-700'>
                                <Check size={20} className="text-green-500" />
                                Estimated Order Quantity
                            </li>
                            <li className='flex gap-3 items-center text-gray-700'>
                                <Check size={20} className="text-green-500" />
                                Valid To
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
