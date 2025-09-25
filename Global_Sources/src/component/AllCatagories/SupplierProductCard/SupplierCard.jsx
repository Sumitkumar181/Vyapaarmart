import React from "react";

export default function SupplierCard({
    image,
    title,
    price,
    moq,
    color,
    lightColor,
    productType,
    material,
    inputVoltage,
    weight,
    sellerName,
    sellerLocation,
    businessType,
    established,
    badges = [],
    years,
}) {
    return (
        <div className="w-full bg-white border rounded-lg shadow-sm flex flex-col md:flex-row overflow-hidden">

            <div className="w-full md:w-1/3 flex items-center justify-center p-4 bg-gray-50">
                <img
                    src={image}
                    alt={title}
                    className="object-contain max-h-64"
                />
            </div>


            <div className="w-full md:w-2/3 lg:w-1/2 flex-1 p-4 border-r">
                <h2 className="text-base sm:text-lg font-semibold text-blue-700">
                    {title}
                </h2>

                <p className="mt-2 text-sm font-medium text-gray-900">
                    Price:{" "}
                    <span className="font-bold text-black">{price}</span>
                </p>

                <button className="mt-2 px-4 py-1 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700">
                    Get Best Quote
                </button>


                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-700">
                    <p><span className="font-semibold">MOQ:</span> {moq}</p>
                    <p><span className="font-semibold">Color:</span> {color}</p>
                    <p><span className="font-semibold">Light Color:</span> {lightColor}</p>
                    <p><span className="font-semibold">Product Type:</span> {productType}</p>
                    <p><span className="font-semibold">Material:</span> {material}</p>
                    <p><span className="font-semibold">Input Voltage:</span> {inputVoltage}</p>
                    <p><span className="font-semibold">Weight:</span> {weight}</p>
                </div>

                <a
                    href="#"
                    className="mt-3 inline-block text-sm text-blue-600 hover:underline"
                >
                    More details...
                </a>
            </div>


            <div className="w-full lg:w-1/3 p-4 bg-gray-50 flex flex-col justify-between">
                <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                        {sellerName}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">{sellerLocation}</p>
                    <p className="text-xs text-gray-500 mt-1">
                        Business Type: {businessType} <br />
                        Established In: {established}
                    </p>


                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                        {badges.map((badge, idx) => (
                            <span
                                key={idx}
                                className={`px-2 py-1 text-xs rounded ${badge.color}`}
                            >
                                {badge.label}
                            </span>
                        ))}
                    </div>

                    <p className="mt-2 text-xs text-gray-600">{years} Years</p>
                </div>

            
                <div className="mt-4 flex flex-col gap-2">
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 border border-blue-600 rounded hover:bg-blue-50">
                        📞 View Mobile Number
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
                        Contact Supplier ↗
                    </button>
                </div>
            </div>
        </div>
    );
}
