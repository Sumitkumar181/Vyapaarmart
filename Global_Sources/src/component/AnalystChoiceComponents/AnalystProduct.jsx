import React, { useState, useEffect, useRef } from 'react';
import { products } from '../../data/AnalystChoiceProducts';

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";





const categories = [
    "Beauty & Personal Care",
    "Consumer Electronics",
    "Electronic Components",
    "Fashion Accessories & Footwear",
    "Fashion Apparel & Fabrics",
    "Food & Beverages",
];

export default function AnalystProduct() {
     const [activeCategory, setActiveCategory] = useState(null)
        const scrollRef = useRef(null);
    const [visibleProduct, setVisibleProduct] = useState(15);
    const [loading, setLoading] = useState(false);
    const loaderRef = useRef(null);


    



    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }


    


   
    const loadMoreProducts = () => {
        if (loading) return; 
        setLoading(true);
        setTimeout(() => {
            setVisibleProduct(prev => prev + 15);
            setLoading(false);
        }, 1200);
    };

    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && visibleProduct < products.length) {
                    loadMoreProducts();
                }
            },
            { threshold: 1.0 }
        );

        const timer = setTimeout(() => {
            if (loaderRef.current) {
                observer.observe(loaderRef.current);
            }
        }, 1000)
        

        return () => {
            clearTimeout(timer)
            if (loaderRef.current) observer.unobserve(loaderRef.current);
        };
    }, [visibleProduct, products.length]);

    

    const filteredProducts = activeCategory
        ? products.filter(p => p.category === activeCategory)
        : products;
    
    const visibleProducts = filteredProducts.slice(0, visibleProduct);

    useEffect(() => {
        setVisibleProduct(15);
    }, [activeCategory]);
    
    

    return (

        <div className="p-8 rounded-lg w-full  font-roboto">

            <div className=" flex items-center w-full bg-[#0d1321] text-white max-w-7xl mx-auto rounded-lg   ">
            
                        <button
                            onClick={scrollLeft}
                            className="px-2 py-4 text-white  shadow-white hover:text-white  shadow-[15px_0_20px_-10px_rgba(0,0,0,0.5)]"
                        >
                            <IoIosArrowBack size={24} />
                        </button>
            
            
                        <div
                            ref={scrollRef}
                            className="flex gap-8  overflow-x-auto  scrollbar-hide whitespace-nowrap flex-1 px-1"
                        >
                            {categories.map((cat, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`relative px-2 py-4 text-white cursor-pointer text-base font-normal  transition-all duration-200
                          ${activeCategory === cat
                                        ? "bg-gradient-to-r from-[#f5e8b0] to-[#ddb463] text-black"
                                            : " "
                                        }`}
                                >
                                    {cat}
                                    {activeCategory === cat && (
                                        <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-yellow-500 transform"></div>
                                    )}
                                </div>
                            ))}
                        </div>
            
                       
                        <button
                            onClick={scrollRight}
                            className="px-1 py-4 text-white shadow-white hover:text-white shadow-[-15px_0_20px_-10px_rgba(0,0,0,0.5)]"
                        >
                            <IoIosArrowForward size={24} />
                        </button>
                    </div>



            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
                {visibleProducts.map((product, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        
                        <div className="relative">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-44 object-contain bg-white p-2"
                            />
                        </div>

                        
                        <div className="flex flex-col flex-1 p-2 text-gray text-sm">
                            <div className="flex gap-2 items-center">
                                <img src={product.Ac} alt="" className="h-6 w-8 object-cover" />
                                <p className="line-clamp-2 text-lightgray h-10">{product.title}</p>
                            </div>
                            <div className="flex gap-2 items-center mt-2">
                                <p className="font-semibold">{product.price}</p>
                                <p className="font-normal text-xs text-lightgray">{product.set}</p>
                            </div>
                            <p className="text-xs font-normal mt-1 text-gray-300">{product.moq}</p>
                        </div>

                        
                        <div className="p-2">
                            <button className="w-full border border-lightgray hover:border-darkRed border-opacity-20 hover:text-white text-gray text-xs py-1 rounded-full hover:bg-darkRed transition-colors duration-300">
                                Inquire Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            
            {visibleProduct < products.length && (
                <div ref={loaderRef} className="flex justify-center mt-6">
                    {loading && (
                        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}
                </div>
            )}
        </div>
    );
}
