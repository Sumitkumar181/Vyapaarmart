import React from 'react';
import { Menu, ChevronRight } from 'lucide-react';
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Television from '../../assets/card/television.png';
import fashion from '../../assets/card/fashion.png';
import smartwatch from "../../assets/homePageImage/smartwatch.webp"
import hardware from '../../assets/card/hardware.png';
import onlineShow from '../../assets/card/online_show.png';
import Gphone from '../../assets/homePageImage/5G-phone.jpg'
import powerbank from '../../assets/homePageImage/powerbank.jpg';
import pepidies from '../../assets/card/pepidies.webp';
import headphones from "../../assets/homePageImage/headphones-1-scaled.jpg"

import banner1 from '../../assets/homePageImage/newbanner-1.png';
import banner2 from '../../assets/homePageImage/newbanner-2.png';
import banner3 from '../../assets/homePageImage/newbanner3.png';

const Items = [
    { name: "Electronic", image: Television },
    { name: "Fashion", image: fashion },
    { name: "Hardware", image: hardware },
    { name: "Online Show", image: onlineShow },
];

const banners = [banner1, banner2, banner3];

const categories = [
    {
        name: "Health & Beauty",
        subCategories: {
            "Personal Care Products": [
                "Face Mask",
                "Sanitary Napkins",
                "Safety Masks",
                "Hand Sanitizers",
                "Wet Wipes",
            ],
            "Common Medicines & Drugs": [
                "Cough Syrup",
                "Multivitamins Tablets",
                "Anti Allergic Medicine",
                "Pharmaceutical Injection",
                "Softgel Capsules",
            ],
            "Soap & Hand Wash": [
                "Liquid Hand Wash",
                "Ayurvedic Soap",
                "Ketoconazole Soap",
                "Glycerine Soap",
                "Antiseptic Hand Wash",
            ],
            "Cosmetics": [
                "Face Wash",
                "Face Packs",
                "Body Wash",
                "Talcum Powder",
                "Moisturizing Cream",
            ],
            "Ayurvedic Medicines & Products": [
                "Ayurvedic Syrups",
                "Ayurvedic Capsules",
                "Giloy Juice",
                "Isabgol",
                "Ashwagandha Tablets",
            ],
            "Pain Relief Drugs & Medicines": [
                "Nimesulide",
                "Pain Relief Gel",
                "Pain Killer Oil",
                "Etoricoxib Tablet",
                "Aceclofenac Paracetamol Tablet",
            ],
        },
    },
    {
        name: "Apparel & Fashion",
        subCategories: {
            "Human Hair & Accessories": [
                "Human Hair",
                "Curly Hair",
                "Virgin Human Hair",
                "Hair Accessories",
                "Hair Clip",
            ],
            "T-Shirts": [
                "Girls T Shirts",
                "Mens T Shirts",
                "Cotton T Shirts",
                "Casual T Shirts",
                "Polo T Shirt",
            ],
            "Kurtis": [
                "Ladies Kurtis",
                "Cotton Kurtis",
                "Designer Kurtis",
                "Fancy Kurti",
                "Printed Kurtis",
            ],
            "Jeans": [
                "Denim Jeans",
                "Mens Jeans",
                "Ladies Jeans",
                "Casual Jeans",
                "Slim Fit Jeans",
            ],
            "Sarees": [
                "Cotton Sarees",
                "Silk Sarees",
                "Designer Sarees",
                "Banarasi Sarees",
                "Georgette Sarees",
            ],
            "Sport Shoes": [
                "Mens Sports Shoes",
                "Running Shoes",
                "Gym Shoes",
                "Cricket Shoes",
                "Football Shoes",
            ],
        },
    },
    {
        name: "Machinery",
        subCategories: {
            "Packaging Machine": [
                "Milk Packing Machine",
                "Taping Machines",
                "Box Packing Machine",
                "Wrapping Machines",
                "Banding Machine",
            ],
            "Construction Machinery": [
                "Concrete Mixer Machines",
                "Vertical Shaft Impactor",
                "Interlock Machines",
                "Soil Compactor",
                "Concrete Pump",
            ],
            "Cutting Machine": [
                "Cutting Machines",
                "Paper Cutting Machines",
                "Core Cutting Machine",
                "Bosch Cutting Machine",
                "Jigsaw Machine",
            ],
            "Food Processing Machinery": [
                "Popcorn Machines",
                "Food Dryer",
                "Peanut Roaster",
                "Papad Making Machine",
                "Onion Cutting Machine",
            ],
            "Industrial Machinery & Parts": [
                "Sand Blasting Machine",
                "Vmc Machine",
                "Wet Grinder Machine",
                "Cold Press Machine",
                "Winding Machine",
            ],
            "Agricultural Machines & Tools": [
                "Agricultural Machinery",
                "Agricultural Equipment",
                "Agricultural Machinery",
                "Cultivators",
                "Power Tiller",
            ],
        },
    },
    {
        name: "Constructions & Real Estate",
        subCategories: {
            "Prefabricated & Portable Buildings": [
                "Pre Engineered Building",
                "Industrial Shed",
                "Prefabricated Structures",
                "Portable Toilets",
                "Peb Structure",
            ],
            "Tiles": [
                "Ceramic Tiles",
                "Porcelain Tile",
                "Vitrified Tiles",
                "Glossy Tiles",
                "3D Tiles",
            ],
            "Portable Cabins": [
                "Portable Cabin",
                "Ms Portable Cabin",
                "Security Cabins",
                "Frp Portable Cabins",
                "Portable Office Cabin",
            ],
            "Bathroom & Toilet Accessories/Fittings": [
                "Jacuzzi Bathtub",
                "Bathroom Fittings",
                "Bathroom Shower",
                "Wash Basin",
                "Bathroom Accessories",
            ],
            "Sanitaryware": [
                "Kitchen Sink",
                "Commodes",
                "Toilet Seats",
                "Table Top Wash Basin",
                "Wall Mixer",
            ],
            "Doors/Windows Accessories & Fittings": [
                "Upvc Windows",
                "Door Lock Set",
                "Door Handles",
                "Door Closers",
                "Aluminum Windows",
            ],
        },
    },
    {
        name: "Electronics & Electrical Supplies",
        subCategories: {
            "Air Conditioner": [
                "Air Conditioning Systems",
                "Window Air Conditioners",
                "Split Air Conditioner",
                "Ac Filters",
                "Ac Blower",
            ],
            "Voltage Stabilizers": [
                "Servo Voltage Stabilizer",
                "Automatic Voltage Stabilizer",
                "Industrial Voltage Stabilizer",
                "Electronic Voltage Stabilizer",
                "Ac Voltage Stabilizer",
            ],
            "Air Cooler": [
                "Coolers",
                "Desert Cooler",
                "Industrial Coolers",
                "Room Cooler",
                "Cooler Pump",
            ],
            "Refrigerator & Freezer": [
                "Ice Cream Freezer",
                "Commercial Refrigerator",
                "Deep Freezer",
                "Water Chiller",
                "Double Door Refrigerator",
            ],
            "Solar Products & Equipment": [
                "Solar Inverter",
                "Solar Street Lights",
                "Mini Solar Panels",
                "Commercial Solar Panels",
                "Solar Battery",
            ],
            "LED Products": [
                "Led Flood Light",
                "Led Panel Light",
                "Led Lights",
                "Indoor Led Light",
                "Spot Lights",
            ],
        },
    },
    {
        name: "Hospital & Medical Supplies",
        subCategories: {
            "Disposable Gloves": [
                "Disposable Hand Gloves",
                "Surgical Gloves",
                "Sterile Surgical Gloves",
                "Latex Surgical Gloves",
                "Nitrile Disposable Gloves",
            ],
            "Hospital Beds": [
                "Fowler Bed",
                "Portable Bed",
                "Semi Fowler Bed",
                "Icu Bed",
                "Hydraulic Bed",
            ],
            "Medical Equipment": [
                "Nebulizer",
                "Patient Monitor",
                "Suction Machine",
                "Cpap Machine",
                "Medical Instruments",
            ],
            "Medical, Diagnostic & Hospital Supplies": [
                "Digital Clinical Thermometer",
                "Ceiling Ot Lights",
                "Diagnostic Test Kits",
                "Gastroenterology Products",
                "Medical Kit",
            ],
            "Pulse Oximeters": [
                "Finger Pulse Oximeter",
                "Pulse Meter",
                "Spo2 Sensor",
                "Portable Pulse Oximeter",
                "Spo2 Probe",
            ],
            "Surgical Dressings & Disposable": [
                "Bandages",
                "Iv Cannula",
                "Ryles Tube",
                "Suction Catheter",
                "Ankle Support",
            ],
        },
    },
    {
        name: "Gifts & Crafts",
        subCategories: {
            "Handicrafts": [
                "Decorative Handicraft",
                "Handicraft Boxes",
                "Indian Handicrafts",
                "Handmade Bags",
                "Handicraft Gifts",
            ],
            "Decorative Items": [
                "Decorative Wallpaper",
                "Decoration Articles",
                "Decorative Lamps",
                "Wall Art",
                "Decorative Bowl",
            ],
            "Incense & Agarbatti": [
                "Agarbatti",
                "Incense Sticks",
                "Dhoop Sticks",
                "Aroma Incense Sticks",
                "Incense Cones",
            ],
            "Religious Crafts": [
                "Marble Temple",
                "Buddha Idols",
                "Wooden Temple",
                "Religious Articles",
                "Marble Home Temple",
            ],
            "Watches & Clocks": [
                "Wooden Wall Clock",
                "Customized Wall Clocks",
                "Wrist Watch",
                "Digital Clock",
                "Stop Watch",
            ],
            "Pooja Articles & Items": [
                "Brass Pooja Items",
                "Incense Holder",
                "Cotton Wicks",
                "Pooja Thali Set",
                "Hawan Samagri",
            ],
        },
    },
    {
        name: "Packaging & Paper",
        subCategories: {
            "Adhesive Tapes": [
                "Pvc Adhesive Tape",
                "Kapton Tape",
                "Pvc Electrical Tape",
                "Abrasive Tape",
                "Ptfe Adhesive Tape",
            ],
            "Bottles": [
                "Mineral Water Bottle",
                "Aluminium Bottles",
                "Copper Bottle",
                "Glass Bottles",
                "Perfume Bottles",
            ],
            "Packaging Boxes": [
                "Corrugated Packaging Boxes",
                "Food Packaging Boxes",
                "Printed Packaging Box",
                "Paper Packaging Box",
                "Industrial Packaging Box",
            ],
            "Pallets & Crates": [
                "Plastic Pallets",
                "Wooden Crates",
                "Plastic Crates",
                "Wooden Crates",
                "Industrial Pallets",
            ],
            "Paper Bags": [
                "Carry Bags",
                "Brown Paper Bags",
                "Paper Carry Bags",
                "Customized Paper Bags",
                "Kraft Paper Bags",
            ],
            "Plastic Packaging Materials": [
                "Air Bubble Rolls",
                "Strapping Rolls",
                "Pp Strapping Roll",
                "Shrink Wraps",
                "Printed Pouches",
            ],
        },
    },
    {
        name: "Agriculture",
        subCategories: {
            "Rice": [
                "Brown Rice",
                "Basmati Rice",
                "Black Rice",
                "Red Rice",
                "India Gate Basmati Rice",
            ],
            "Tea": [
                "Masala Tea",
                "Assam Ctc Tea",
                "Organic Tea",
                "Lemon Tea",
                "Tea Powder",
            ],
            "Irrigation Systems": [
                "Sprinkler",
                "Drip Irrigation System",
                "Drip Irrigation Pipes",
                "Water Sprinkler",
                "Hdpe Irrigation Pipe",
            ],
            "Organic Vegetables": [
                "Organic Potatoes",
                "Organic Ginger",
                "Organic Garlic",
                "Organic Onions",
                "Organic Drumsticks",
            ],
            "Pulses": [
                "Organic Pulses",
                "Chana Dal",
                "Toor Dal",
                "Moong Dal",
                "Masoor Dal",
            ],
            "Tractor Parts": [
                "Tractor Spare Parts",
                "Tractor Rotavator",
                "Hydraulic Tractor Parts",
                "Top Link Pins",
                "Linch Pins",
            ],
        },
    },
    {
        name: "Home Supplies",
        subCategories: {
            "Bags & Cases": [
                "Handbags",
                "Mens Wallets",
                "Duffle Bag",
                "Backpacks",
                "Laptop Bags",
            ],
            "Disposable Products": [
                "Disposable Glasses",
                "Ice Cream Sticks",
                "Plastic Glasses",
                "Plastic Plates",
                "Paper Straw",
            ],
            "Housekeeping Products": [
                "Washing Machine Stand",
                "Dustbins",
                "Bucket",
                "Microfiber Cloth",
                "Washing Machine Stand",
            ],
            "Jute Bags": [
                "Jute Lunch Bags",
                "Jute Handbag",
                "Jute Sling Bag",
                "Jute Tote Bags",
                "Jute Gunny Bags",
            ],
            "Kitchen & Canteen Accessories & Equipment": [
                "Kitchen Chimney",
                "Gas Lighter",
                "Kitchen Accessories",
                "Kitchen Trolleys",
                "Kitchen Rack",
            ],
            "Kitchenware": [
                "Onion Cutter",
                "Tumbler",
                "Lunch Box",
                "Beater",
                "Spatula",
            ],
        },
    },
    {
        name: "Mineral & Metals",
        subCategories: {
            "Aluminum & Aluminum Products": [
                "Aluminium Sheets",
                "Aluminium Section",
                "Aluminium Partitions",
                "Aluminium Profiles",
                "Aluminium Channels",
            ],
            "Copper Products": [
                "Copper Plates",
                "Copper Rings",
                "Copper Pot",
                "Copper Strips",
                "Copper Rods",
            ],
            "Metal Products & Powder": [
                "Metal Plates",
                "Titanium Plates",
                "Metal Rods",
                "Metal Wire",
                "Nickel Powder",
            ],
            "Minerals & Refractories": [
                "Industrial Minerals",
                "Silica Sand",
                "Calcite Powder",
                "Quartz Powder",
                "Dolomite",
            ],
            "Steel & Stainless Steel Products & Components": [
                "Stainless Steel Sheets",
                "304 Stainless Steel Sheet",
                "Stainless Steel Plates",
                "Stainless Steel Rods",
                "Mild Steel Plates",
            ],
            "Iron & Steel": [
                "Alloy Steel Plates",
                "Beam Channel",
                "Iron Angle",
                "Sponge Iron",
                "Iron Ores",
            ],
        },
    },
    {
        name: "Industrial Supplies",
        subCategories: {
            "Material Handling Equipment": [
                "Hydraulic Pallet Truck",
                "Agitator",
                "Industrial Trolley",
                "Manual Stacker",
                "Scissor Lift Table",
            ],
            "Conveyor & Conveyor/Industrial Belts": [
                "Belt Conveyors",
                "Conveyor Belts",
                "Conveyors",
                "Screw Conveyors",
                "Chain Conveyor",
            ],
            "Hydraulic Products & Equipment": [
                "Hydraulic Jack",
                "Hydraulic Machines",
                "Hydraulic Power Packs",
                "Hydraulic Door Closers",
                "Power Pack",
            ],
            "Laboratory Glassware & Equipment": [
                "Laboratory Equipment",
                "Humidity Chamber",
                "Laminar Air Flow",
                "Water Bath",
                "Laboratory Glassware",
            ],
            "Storage Systems": [
                "Metal Storage Rack",
                "Frp Tanks",
                "Heavy Duty Racks",
                "Storage Boxes",
                "Storage Drawers",
            ],
            "Valves": [
                "Check Valves",
                "Safety Valves",
                "3 Way Valve",
                "Multiport Valves",
                "Stop Valve",
            ],
        },
    },
    {
        name: "Pipes, Tubes & Fittings",
        subCategories: {
            "Pipes & Pipe Fittings": [
                "Round Pipe",
                "Hex Nipple",
                "Pipe Bends",
                "Pipe Reducer",
                "Agricultural Pipes",
            ],
            "Tubes & Tube Fittings": [
                "Copper Tubes",
                "Polyurethane Tubes",
                "Seamless Tubes",
                "Ms Tubes",
                "Steel Tube Fittings",
            ],
            "Brass Pipes & Tubes": [
                "Seamless Brass Pipe",
                "Seamless Brass Tubes",
                "Aluminum Brass Tubes",
                "Brass Water Pipe",
                "Brass Blender Pipe",
            ],
            "Flanges": [
                "Blind Flanges",
                "Welding Neck Flanges",
                "Mild Steel Flanges",
                "Slip On Flanges",
                "Industrial Flanges",
            ],
            "PVC Pipes": [
                "Upvc Pipes",
                "Cpvc Pipe",
                "Heavy Duty Pvc Pipe",
                "Pvc Hose Pipes",
                "Rigid Pvc Pipe",
            ],
            "Rotary Unions & Joints": [
                "Reducing Unions",
                "Pvc Jointer",
                "Sms Union",
                "Gi Union",
                "Hydraulic Rotary Union",
            ],
        },
    },
        {
            name: "Automobiles",
            subCategories: {
                "Passenger Vehicles": [
                    "Sedans",
                    "SUVs",
                    "Hatchbacks",
                    "Electric Cars",
                    "Luxury Cars"
                ],
                "Commercial Vehicles": [
                    "Trucks",
                    "Buses",
                    "Vans",
                    "Pickup Trucks",
                    "Trailers"
                ],
                "Two & Three Wheelers": [
                    "Motorcycles",
                    "Scooters",
                    "Bicycles",
                    "Electric Bikes",
                    "Rickshaws"
                ],
                "Spare Parts & Accessories": [
                    "Engines & Components",
                    "Brakes & Clutches",
                    "Batteries",
                    "Tyres & Wheels",
                    "Mirrors & Lights"
                ],
                "Automobile Services": [
                    "Car Repair",
                    "Vehicle Insurance",
                    "Car Detailing",
                    "Vehicle Registration",
                    "Car Rental Services"
                ]
            }
        },
        {
            name: "Brass Hardware & Software",
            subCategories: {
                "Brass Fittings": [
                    "Brass Nuts & Bolts",
                    "Brass Screws",
                    "Brass Washers",
                    "Brass Inserts",
                    "Brass Bushings"
                ],
                "Brass Valves": [
                    "Ball Valves",
                    "Gate Valves",
                    "Check Valves",
                    "Needle Valves",
                    "Angle Valves"
                ],
                "Brass Pipes & Tubes": [
                    "Seamless Brass Pipes",
                    "Welded Brass Tubes",
                    "Brass Plumbing Pipes",
                    "Brass Water Pipes",
                    "Brass Gas Pipes"
                ],
                "Brass Decorative Hardware": [
                    "Brass Handles",
                    "Brass Knobs",
                    "Brass Hinges",
                    "Brass Nameplates",
                    "Brass Curtain Rods"
                ],
                "Industrial Brass Components": [
                    "Brass Electrical Parts",
                    "Brass Connectors",
                    "Brass Terminals",
                    "Brass Machined Parts",
                    "Brass Couplings"
                ]
            }
        },
        {
            name: "Computer Hardware & Software",
            subCategories: {
                "Computer Hardware": [
                    "Desktops",
                    "Laptops",
                    "Monitors",
                    "Motherboards",
                    "Graphic Cards"
                ],
                "Computer Peripherals": [
                    "Keyboards",
                    "Mice",
                    "Printers & Scanners",
                    "External Drives",
                    "USB Hubs"
                ],
                "Networking Devices": [
                    "Routers",
                    "Modems",
                    "Switches",
                    "Access Points",
                    "Network Cables"
                ],
                "Software": [
                    "Operating Systems",
                    "Office Suites",
                    "Antivirus Software",
                    "Graphics & Design Tools",
                    "Database Software"
                ],
                "Cloud & IT Services": [
                    "Web Hosting",
                    "Cloud Storage",
                    "Data Recovery",
                    "IT Support",
                    "Cybersecurity Solutions"
                ]
            }
        },
        {
            name: "Food & Beverage",
            subCategories: {
                "Beverages": [
                    "Soft Drinks",
                    "Juices",
                    "Tea & Coffee",
                    "Alcoholic Beverages",
                    "Energy Drinks"
                ],
                "Packaged Food": [
                    "Snacks",
                    "Biscuits & Cookies",
                    "Instant Noodles",
                    "Canned Food",
                    "Ready-to-Eat Meals"
                ],
                "Fresh Produce": [
                    "Fruits",
                    "Vegetables",
                    "Dairy Products",
                    "Meat & Poultry",
                    "Seafood"
                ],
                "Spices & Condiments": [
                    "Spices",
                    "Herbs",
                    "Pickles",
                    "Sauces",
                    "Seasoning Mixes"
                ],
                "Bakery & Confectionery": [
                    "Bread",
                    "Cakes",
                    "Chocolates",
                    "Pastries",
                    "Candies"
                ]
            }
        },
        {
            name: "Energy Power",
            subCategories: {
                "Renewable Energy": [
                    "Solar Panels",
                    "Wind Turbines",
                    "Hydropower Equipment",
                    "Geothermal Systems",
                    "Biomass Energy"
                ],
                "Non-Renewable Energy": [
                    "Coal",
                    "Natural Gas",
                    "Diesel Generators",
                    "Petroleum",
                    "Nuclear Energy"
                ],
                "Power Generation Equipment": [
                    "Transformers",
                    "Turbines",
                    "Generators",
                    "Power Inverters",
                    "Control Panels"
                ],
                "Energy Storage": [
                    "Batteries",
                    "Capacitors",
                    "Flywheels",
                    "Pumped Storage Systems",
                    "Energy Banks"
                ],
                "Energy Services": [
                    "Power Supply & Distribution",
                    "Energy Auditing",
                    "Grid Solutions",
                    "Energy Consulting",
                    "Maintenance Services"
                ]
            }
        },
        {
            name: "Environment & Pollution",
            subCategories: {
                "Waste Management": [
                    "Solid Waste Management",
                    "Hazardous Waste Disposal",
                    "Recycling Systems",
                    "Composting Units",
                    "Landfill Equipment"
                ],
                "Water Treatment": [
                    "Water Purifiers",
                    "Effluent Treatment Plants",
                    "Sewage Treatment",
                    "Desalination Units",
                    "Filtration Systems"
                ],
                "Air Pollution Control": [
                    "Air Filters",
                    "Scrubbers",
                    "Dust Collectors",
                    "Emission Control Systems",
                    "Odor Control Systems"
                ],
                "Environmental Monitoring": [
                    "Air Quality Monitors",
                    "Water Quality Sensors",
                    "Noise Monitoring Systems",
                    "Radiation Detectors",
                    "Soil Testing Kits"
                ],
                "Eco-Friendly Products": [
                    "Biodegradable Bags",
                    "Recycled Materials",
                    "Eco-friendly Packaging",
                    "Compostable Products",
                    "Green Building Materials"
                ]
            }
        },
        {
            name: "Home Textiles & Furnishings",
            subCategories: {
                "Bedding": [
                    "Bed Sheets",
                    "Pillows",
                    "Blankets",
                    "Mattress Protectors",
                    "Comforters"
                ],
                "Curtains & Blinds": [
                    "Window Curtains",
                    "Roller Blinds",
                    "Roman Blinds",
                    "Drapes",
                    "Sheer Curtains"
                ],
                "Cushions & Covers": [
                    "Cushion Covers",
                    "Sofa Covers",
                    "Chair Pads",
                    "Throw Pillows",
                    "Bolster Covers"
                ],
                "Table & Kitchen Linen": [
                    "Tablecloths",
                    "Table Runners",
                    "Napkins",
                    "Aprons",
                    "Kitchen Towels"
                ],
                "Rugs & Carpets": [
                    "Area Rugs",
                    "Door Mats",
                    "Carpet Runners",
                    "Bath Mats",
                    "Handmade Carpets"
                ]
            }
        },
        {
            name: "Hotel Supplies & Equipment",
            subCategories: {
                "Housekeeping Supplies": [
                    "Cleaning Chemicals",
                    "Vacuum Cleaners",
                    "Laundry Equipment",
                    "Mops & Buckets",
                    "Air Fresheners"
                ],
                "Kitchen Equipment": [
                    "Commercial Ovens",
                    "Refrigerators",
                    "Dishwashers",
                    "Cooking Ranges",
                    "Food Warmers"
                ],
                "Furniture & Fixtures": [
                    "Hotel Beds",
                    "Restaurant Chairs",
                    "Lobby Sofas",
                    "Outdoor Furniture",
                    "Banquet Tables"
                ],
                "Guest Amenities": [
                    "Toiletries",
                    "Bath Towels",
                    "Mini Bars",
                    "Electric Kettles",
                    "Slippers & Bathrobes"
                ],
                "Security & Access": [
                    "Electronic Door Locks",
                    "CCTV Systems",
                    "Access Control Systems",
                    "Fire Safety Equipment",
                    "Key Card Systems"
                ]
            }
        },
        {
            name: "Leather & Leather Products",
            subCategories: {
                "Leather Raw Materials": [
                    "Genuine Leather",
                    "Synthetic Leather",
                    "Tanned Leather",
                    "Finished Leather",
                    "Leather Scraps"
                ],
                "Leather Bags": [
                    "Handbags",
                    "Backpacks",
                    "Wallets",
                    "Messenger Bags",
                    "Travel Bags"
                ],
                "Leather Footwear": [
                    "Formal Shoes",
                    "Boots",
                    "Sandals",
                    "Loafers",
                    "Slippers"
                ],
                "Leather Garments": [
                    "Leather Jackets",
                    "Leather Pants",
                    "Leather Gloves",
                    "Leather Skirts",
                    "Leather Belts"
                ],
                "Industrial Leather Goods": [
                    "Leather Safety Gloves",
                    "Welding Aprons",
                    "Leather Tool Pouches",
                    "Protective Gear",
                    "Leather Straps"
                ]
            }
        },
        {
            name: "Office & School Supplies",
            subCategories: {
                "Office Stationery": [
                    "Pens & Pencils",
                    "Notebooks",
                    "Staplers",
                    "Folders & Files",
                    "Paper Clips"
                ],
                "School Supplies": [
                    "School Bags",
                    "Geometry Sets",
                    "Crayons & Colors",
                    "Notepads",
                    "Lunch Boxes"
                ],
                "Office Equipment": [
                    "Printers",
                    "Photocopiers",
                    "Laminators",
                    "Shredders",
                    "Projectors"
                ],
                "Writing Instruments": [
                    "Gel Pens",
                    "Fountain Pens",
                    "Markers",
                    "Highlighters",
                    "Whiteboard Markers"
                ],
                "Art & Craft Materials": [
                    "Paints",
                    "Brushes",
                    "Craft Paper",
                    "Glue & Adhesives",
                    "Sketchbooks"
                ]
            }
        },
        {
            name: "Pharmaceuticals",
            subCategories: {
                "Prescription Medicines": [
                    "Antibiotics",
                    "Pain Relievers",
                    "Antihypertensives",
                    "Antidepressants",
                    "Antidiabetics"
                ],
                "Over-the-Counter Drugs": [
                    "Cough Syrups",
                    "Painkillers",
                    "Allergy Medicines",
                    "Antacids",
                    "Vitamins & Supplements"
                ],
                "Medical Devices": [
                    "Thermometers",
                    "Blood Pressure Monitors",
                    "Glucometers",
                    "Nebulizers",
                    "Oxygen Concentrators"
                ],
                "Herbal & Ayurvedic Products": [
                    "Herbal Tonics",
                    "Ayurvedic Tablets",
                    "Herbal Teas",
                    "Digestive Powders",
                    "Natural Oils"
                ],
                "Healthcare Services": [
                    "Diagnostic Labs",
                    "Pharmacy Chains",
                    "Online Medicine Delivery",
                    "Telemedicine Services",
                    "Vaccination Centers"
                ]
            }
        },
        {
            name: "Plastics & Publishing",
            subCategories: {
                "Plastic Raw Materials": [
                    "PVC Granules",
                    "HDPE",
                    "LDPE",
                    "Polypropylene",
                    "ABS Plastic"
                ],
                "Plastic Products": [
                    "Plastic Containers",
                    "Plastic Bottles",
                    "Plastic Furniture",
                    "Plastic Sheets",
                    "Plastic Bags"
                ],
                "Printing Services": [
                    "Offset Printing",
                    "Digital Printing",
                    "Screen Printing",
                    "Flex Printing",
                    "3D Printing"
                ],
                "Publishing Services": [
                    "Book Publishing",
                    "Magazine Publishing",
                    "Newspaper Publishing",
                    "E-Book Publishing",
                    "Academic Publishing"
                ],
                "Plastic Recycling": [
                    "Recycled Plastics",
                    "Plastic Waste Management",
                    "Shredded Plastic",
                    "Plastic Granulation",
                    "Eco-friendly Plastics"
                ]
            }
        },
        {
            name: "Scientific & Laboratory Instruments",
            subCategories: {
                "Analytical Instruments": [
                    "Spectrophotometers",
                    "Microscopes",
                    "Chromatography Systems",
                    "pH Meters",
                    "Titration Equipment"
                ],
                "Measuring Instruments": [
                    "Thermometers",
                    "Manometers",
                    "Barometers",
                    "Flow Meters",
                    "Calipers"
                ],
                "Laboratory Glassware": [
                    "Beakers",
                    "Test Tubes",
                    "Flasks",
                    "Pipettes",
                    "Petri Dishes"
                ],
                "Laboratory Equipment": [
                    "Centrifuges",
                    "Hot Plates",
                    "Autoclaves",
                    "Incubators",
                    "Fume Hoods"
                ],
                "Testing Kits": [
                    "Soil Testing Kits",
                    "Water Testing Kits",
                    "Air Quality Testing Kits",
                    "Chemical Analysis Kits",
                    "Biological Test Kits"
                ]
            }
        },
        {
            name: "Security & Protection",
            subCategories: {
                "Surveillance Systems": [
                    "CCTV Cameras",
                    "IP Cameras",
                    "DVR/NVR Systems",
                    "Video Door Phones",
                    "Body Cameras"
                ],
                "Fire Safety": [
                    "Fire Extinguishers",
                    "Smoke Detectors",
                    "Sprinkler Systems",
                    "Fire Blankets",
                    "Fire Alarms"
                ],
                "Access Control": [
                    "Biometric Systems",
                    "RFID Locks",
                    "Smart Door Locks",
                    "Turnstiles",
                    "Key Card Systems"
                ],
                "Personal Safety": [
                    "Pepper Sprays",
                    "Self-defense Tools",
                    "Emergency Alarms",
                    "Safety Helmets",
                    "Protective Clothing"
                ],
                "Industrial Safety": [
                    "Safety Gloves",
                    "Safety Shoes",
                    "Gas Detectors",
                    "Hard Hats",
                    "Fall Protection Gear"
                ]
            }
        },
        {
            name: "Sports & Entertainment",
            subCategories: {
                "Sports Equipment": [
                    "Cricket Gear",
                    "Football Equipment",
                    "Gym Equipment",
                    "Tennis Gear",
                    "Cycling Equipment"
                ],
                "Outdoor Recreation": [
                    "Camping Gear",
                    "Hiking Equipment",
                    "Fishing Tools",
                    "Swimming Accessories",
                    "Adventure Gear"
                ],
                "Indoor Games": [
                    "Chess Boards",
                    "Table Tennis",
                    "Carrom Boards",
                    "Darts",
                    "Board Games"
                ],
                "Fitness & Training": [
                    "Yoga Mats",
                    "Dumbbells",
                    "Resistance Bands",
                    "Treadmills",
                    "Exercise Bikes"
                ],
                "Entertainment Products": [
                    "Musical Instruments",
                    "Party Supplies",
                    "Stage Equipment",
                    "Home Theater Systems",
                    "Karaoke Systems"
                ]
            }
        },
        {
            name: "Telecommunications",
            subCategories: {
                "Mobile Devices": [
                    "Smartphones",
                    "Feature Phones",
                    "Tablets",
                    "Smart Watches",
                    "Mobile Accessories"
                ],
                "Networking Solutions": [
                    "WiFi Routers",
                    "Switches",
                    "Modems",
                    "Signal Boosters",
                    "LAN Cables"
                ],
                "Telecom Equipment": [
                    "Base Stations",
                    "Antenna Systems",
                    "Repeaters",
                    "Telecom Towers",
                    "Fiber Optic Equipment"
                ],
                "Communication Services": [
                    "Mobile Plans",
                    "Broadband Services",
                    "VoIP Solutions",
                    "Satellite Communication",
                    "Call Center Services"
                ],
                "Telecom Infrastructure": [
                    "Data Centers",
                    "Server Racks",
                    "Cabling Solutions",
                    "Power Backup Systems",
                    "Network Security Devices"
                ]
            }
        },
        {
            name: "Textiles & Fabrics",
            subCategories: {
                "Natural Fabrics": [
                    "Cotton Fabrics",
                    "Linen Fabrics",
                    "Silk Fabrics",
                    "Wool Fabrics",
                    "Jute Fabrics"
                ],
                "Synthetic Fabrics": [
                    "Polyester Fabrics",
                    "Nylon Fabrics",
                    "Rayon Fabrics",
                    "Acrylic Fabrics",
                    "Viscose Fabrics"
                ],
                "Industrial Fabrics": [
                    "Geotextiles",
                    "Non-Woven Fabrics",
                    "Filter Fabrics",
                    "Canvas",
                    "Tarpaulins"
                ],
                "Home Furnishing Fabrics": [
                    "Upholstery Fabrics",
                    "Curtain Fabrics",
                    "Cushion Fabrics",
                    "Bed Linen Fabrics",
                    "Table Linen Fabrics"
                ],
                "Garment Fabrics": [
                    "Dress Materials",
                    "Suiting & Shirting",
                    "Knitted Fabrics",
                    "Printed Fabrics",
                    "Denim Fabrics"
                ]
            }
        },
        {
            name: "Toys",
            subCategories: {
                "Educational Toys": [
                    "Building Blocks",
                    "Learning Games",
                    "STEM Kits",
                    "Puzzle Toys",
                    "Alphabet Toys"
                ],
                "Soft Toys": [
                    "Teddy Bears",
                    "Stuffed Animals",
                    "Plush Dolls",
                    "Cushion Toys",
                    "Ragdolls"
                ],
                "Outdoor Toys": [
                    "Bicycles",
                    "Skateboards",
                    "Ride-on Cars",
                    "Swing Sets",
                    "Water Toys"
                ],
                "Electronic Toys": [
                    "Remote Control Cars",
                    "Robotic Toys",
                    "Musical Toys",
                    "Video Games",
                    "Drones"
                ],
                "Board & Card Games": [
                    "Chess",
                    "Monopoly",
                    "UNO Cards",
                    "Scrabble",
                    "Ludo"
                ]
            }
        },
        {
            name: "Transportation",
            subCategories: {
                "Public Transportation": [
                    "Buses",
                    "Metro Systems",
                    "Trains",
                    "Ferries",
                    "Cable Cars"
                ],
                "Freight & Logistics": [
                    "Cargo Trucks",
                    "Freight Trains",
                    "Air Cargo",
                    "Shipping Containers",
                    "Courier Services"
                ],
                "Aviation": [
                    "Passenger Aircraft",
                    "Cargo Aircraft",
                    "Private Jets",
                    "Helicopters",
                    "Drones"
                ],
                "Marine Transport": [
                    "Cargo Ships",
                    "Tankers",
                    "Fishing Boats",
                    "Yachts",
                    "Speed Boats"
                ],
                "Transport Infrastructure": [
                    "Road Construction",
                    "Railway Equipment",
                    "Airport Equipment",
                    "Port Cranes",
                    "Traffic Management Systems"
                ]
            }
        }


];

const MainBar = () => {

    const [hoveredCategory, setHoveredCategory] = useState(null);
    const navigate = useNavigate();
    return (
        <div className="bg-gray-50 min-h-screen  mb-10  font-roboto bg-gradient-to-b from-[#083544] to-[#B9C5CA]   overflow-x-hidden">


            <div className="relative py-6  flex flex-col md:flex-row items-center justify-center gap-4 px-4 md:px-8">

                <div className="text-center md:text-center flex-1">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white">
                        VyapaarMart – India’s Most Reliable B2B Marketplace
                    </h1>
                    <p className="font-normal text-white mt-2 text-sm sm:text-base">
                        One-stop B2B marketplace connecting businesses across India.
                    </p>
                </div>


                <Link to="/buyerForm" className="mt-4 md:mt-0 md:ml-auto">
                    <button className="py-2 px-6 bg-white rounded-full text-sm font-bold text-darkRed hover:bg-gray-100 transition">
                       Inquire Now
                    </button>
                </Link>
            </div>



            <main className="container mx-auto bg-white py-4 mb-10 rounded-lg ">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 items-start">

                    <div className="relative bg-white  rounded-lg flex">
                        <aside
                            className="bg-white rounded-xl pl-4 pt-1 hidden md:flex md:flex-col col-span-1 
            max-h-[calc(100vh-120px)] overflow-y-auto "
                        >
                            <span className="flex gap-2 items-center   pb-2 shrink-0">
                                <Menu size={20} className="mr-2" />
                                <h2 className="text-base font-semibold">Categories</h2>
                            </span>

                            <ul
                                className="flex-1 overflow-y-auto space-y-2 text-xs text-gray 
              [scrollbar-width:none] [-ms-overflow-style:none]
              [&::-webkit-scrollbar]:hidden"
                            >
                                {categories.map((category, index) => (
                                    <li
                                        key={index}
                                        onMouseEnter={() => setHoveredCategory(category)}
                                        onMouseLeave={() => setHoveredCategory(null)}
                                        className="flex justify-between items-center py-2 px-2 
                  hover:text-darkRed hover:font-medium rounded-md
                  hover:bg-purple-50 transition-colors cursor-pointer"
                                    >
                                        <span className="text-xs">{category.name}</span>
                                        <ChevronRight size={20} className="text-gray-400 shrink-0" />
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        {hoveredCategory && hoveredCategory.subCategories && (
                            <div
                                className="absolute left-64 top-0 w-[800px] group-hover:block bg-white shadow-lg rounded-r-lg p-6 grid grid-cols-2 lg:grid-cols-3 gap-6 z-50"
                                onMouseEnter={() => setHoveredCategory(hoveredCategory)}
                                onMouseLeave={() => setHoveredCategory(null)}
                            >
                                {Object.entries(hoveredCategory.subCategories).map(
                                    ([section, items], idx) => (
                                        <div key={idx} className='relative group/sub'>
                                            <h3 className="font-semibold text-gray mb-2">{section}</h3>
                                            <ul className="space-y-1">
                                                {items.map((item, i) => (
                                                    <li
                                                        key={i}
                                                        onClick={() => navigate("/allCatagories")}
                                                        className="text-sm text-lightgray hover:text-darkRed cursor-pointer"
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                )}
                            </div>
                        )}

                    </div>


                    <div className="col-span-1 md:col-span-3 lg:col-span-3 space-y-6">


                        <div className="relative w-full  h-48 sm:h-56 lg:h-[280px] rounded-xl overflow-hidden">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                className="w-full h-full"
                            >
                                {banners.map((banner, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={banner}
                                            alt={`Banner ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {Items.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl flex flex-col items-center 
                  cursor-pointer border border-lightgray border-opacity-20 hover:shadow-md transition"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full rounded-lg object-cover"
                                    />
                                    <span className="text-xs sm:text-sm font-medium text-gray-700 bg-[#edeef0] w-full py-2 text-center rounded-tr-lg rounded-tl-lg">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="col-span-1 md:col-span-4 lg:col-span-1 bg-white rounded-xl px-3">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">Most Popular</h2>
                            <a
                                href="#"
                                className="text-purple-600 text-sm font-medium hover:underline"
                            >
                                See All
                            </a>
                        </div>
                        <ul className="space-y-4">
                            {[
                                { name: 'Android Phones', price: '5G ref...', moq: '5 Units (MOQ)', image: Gphone },
                                { name: "Smart Watch ", price: 'Fitness tra..', moq: '10000 Pieces (MOQ)', image: smartwatch },
                                { name: "Power Bank'", price: 'fast charging.', moq: '10 Pieces (MOQ)', image: powerbank },
                                { name: "Noise Cancelling", price: 'ANC immer..', moq: '10 Pieces (MOQ)', image: headphones },
                            ].map((product, index) => (
                                <li
                                    key={index}
                                    className="flex space-x-4 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-16 h-14 sm:w-20 sm:h-20 rounded-lg object-contain border border-lightgray border-opacity-25"
                                    />
                                    <div className="flex-1">
                                        <p className="text-sm font-bold  text-gray">{product.name}</p>
                                        <p className="text-sm text-lightgray">{product.price}</p>
                                        <p className="text-xs text-gray-500 mt-1">{product.moq}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MainBar;
