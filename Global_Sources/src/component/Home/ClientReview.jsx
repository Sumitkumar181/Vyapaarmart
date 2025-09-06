import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

import Rating from '@mui/material/Rating';



import Client1 from "../../assets/homePageImage/ClientReviews/Client1.mp4";
import Client2 from "../../assets/homePageImage/ClientReviews/Client2.mp4";
import Client3 from "../../assets/homePageImage/ClientReviews/Client3.mp4";
import Client4 from "../../assets/homePageImage/ClientReviews/Client4.mp4";
import Client5 from "../../assets/homePageImage/ClientReviews/Client5.mp4";
import Client6 from "../../assets/homePageImage/ClientReviews/Client6.mp4";
import Client7 from "../../assets/homePageImage/ClientReviews/Client7.mp4";
import Client8 from "../../assets/homePageImage/ClientReviews/Client8.mp4";
import Client9 from "../../assets/homePageImage/ClientReviews/Client9.mp4";
import Client10 from "../../assets/homePageImage/ClientReviews/Client10.mp4";
import Client11 from "../../assets/homePageImage/ClientReviews/Client11.mp4";
import Client1img from "../../assets/homePageImage/ClientReviews/Client1img.png";
import Client2img from "../../assets/homePageImage/ClientReviews/Client2img.png";
import Client3img from "../../assets/homePageImage/ClientReviews/Client3img.png";
import Client4img from "../../assets/homePageImage/ClientReviews/Client4img.png";
import Client5img from "../../assets/homePageImage/ClientReviews/Client5img.png";
import Client6img from "../../assets/homePageImage/ClientReviews/Client6img.png";
import Client7img from "../../assets/homePageImage/ClientReviews/Client7img.png";
import Client8img from "../../assets/homePageImage/ClientReviews/Client8img.png";
import Client9img from "../../assets/homePageImage/ClientReviews/Client9img.png";
import Client10img from "../../assets/homePageImage/ClientReviews/Client10img.png";
import Client11img from "../../assets/homePageImage/ClientReviews/Client11img.png";

import { RxCross2 } from "react-icons/rx";


const testimonials = [
    {
        name: "Sandeep led",
        location: "New York, America",
        text: "I am manoj from Sandeep led . I really happy to inform you that the miss aarti and team is very good in communication. We really satisfaction by her work. But we really want a achive our goal of high value sell. So please try it.",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        name: "Shree Laxmi Gruh Udhyog",
        location: "New York, America",
        text: "This is another good shop of this area for the purchase of homemade nastas at reasonably low prices,customers used to purchase different products made for different seasons,very good quality,tasty.",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        name: "Sarju Confectionery",
        location: "New York, America",
        text: "Sarju Confectionery” is manufacturing  Masala Candy,Fruit Candy etc.  We are well-supported by our team of highly skilled professionals who possess rich industry experience.",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        name: "Sampatti Foods",
        location: "Los Angeles, USA",
        text: "It’s an amazing product. We found Top quality Bites and Roll made with milti grain wheat first time. Freshness , amazing quality Product , Supportive Team members & Company staff.",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    }
];





const reviews = [
    {
        id: "day1",
        title: "Ram sevak Rathore,  Radha Rani Footwear (Uttar Pradesh, India)",
        subtitle: "Vyapaarmart has made supplier discovery seamless for our team. The platform connects us with verified...",
        date: "2022-03-15",
        defaultValue: 4,
        img: Client1img,
        video: Client1,
        desc: "Vyapaarmart has made supplier discovery seamless for our team. The platform connects us with verified vendors quickly, and the response time is impressive. It has truly simplified our bulk sourcing process."
    },
    {
        id: "day2",
        title: "Abhishek Mishra, Gel Ambe Creation (Surat, Gujarat)",
        subtitle: "We were able to find reliable manufacturers through Vyapaarmart at very competitive prices. The product...",
        date: "2023-01-22",
        defaultValue: 4.5,
        img: Client2img,
        video: Client2,
        desc: "We were able to find reliable manufacturers through Vyapaarmart at very competitive prices. The product variety is excellent, and the quotation process is easy to manage. A faster delivery integration would make the experience even better."
    },
    {
        id: "day3",
        title: "Jay Godani, Shree Raj Industries (Rajkot, Gujarat)",
        subtitle: "The platform is valuable for connecting with new suppliers. However, we occasionally received irrelevant...",
        date: "2024-05-09",
        defaultValue: 4,
        img: Client3img,
        video: Client3,
        desc: "The platform is valuable for connecting with new suppliers. However, we occasionally received irrelevant quotes. With stronger filtering and supplier matching, Vyapaarmart could become the go-to B2B marketplace."
    },
    {
        id: "day4",
        title: "Jay Prakash, Geeta Industries (Mumbai, Maharashtra)",
        subtitle: "Vyapaarmart helped us expand our supplier network significantly. The dashboard makes it easy to manage...",
        date: "2025-07-03",
        defaultValue: 2.5,
        img: Client4img,
        video: Client4,
        desc: "Vyapaarmart helped us expand our supplier network significantly. The dashboard makes it easy to manage RFQs, compare quotes, and finalize deals efficiently. A must-have platform for serious buyers."
    },
    {
        id: "day5",
        title: "Dev Chouhan, D-Zone Tshirt (New Delhi, India)",
        subtitle: "Through Vyapaarmart we connected with multiple verified fabric suppliers in just a few days. The quality..",
        date: "2022-11-17",
        defaultValue: 3,
        img: Client5img,
        video: Client5,
        desc: "Through Vyapaarmart we connected with multiple verified fabric suppliers in just a few days. The quality was consistent, and the RFQ process saved us a lot of time compared to traditional sourcing methods."
    },
    {
        id: "day6",
        title: "Shree Varsha, Nutrition and Life style (Tamil Nadu, India)",
        subtitle: "We received competitive quotations for auto components from trusted suppliers. The platform ensures...",
        date: "2023-08-11",
        defaultValue: 3.5,
        img: Client6img,
        video: Client6,
        desc: "We received competitive quotations for auto components from trusted suppliers. The platform ensures transparency and gives small businesses like ours better negotiating power..."
    },
    {
        id: "day7",
        title: "Krishna Gupta, Anirudh Traders (Ambala Haryana, India)",
        subtitle: "Vyapaarmart has been a game-changer for us. The platform not only provided access to verified suppliers...",
        date: "2024-04-19",
        defaultValue: 5,
        img: Client7img,
        video: Client7,
        desc: "Vyapaarmart has been a game-changer for us. The platform not only provided access to verified suppliers but also helped us expand our product sourcing to new categories without risk."
    },
    {
        id: "day8",
        title: "Abdul Qadir, Royal India (New Delhi, India)",
        subtitle: "The supplier verification and documentation checks by Vyapaarmart give us confidence before closing...",
        date: "2025-12-29",
        defaultValue: 4,
        img: Client8img,
        video: Client8,
        desc: "The supplier verification and documentation checks by Vyapaarmart give us confidence before closing deals. It has reduced our procurement risks significantly."
    },
    {
        id: "day9",
        title: "Divesh Aggarwal, RB Chain (Agra, India)",
        subtitle: "As an exporter, we rely on trusted suppliers. Vyapaarmart connected us with reliable manufacturers across...",
        date: "2022-06-07",
        defaultValue: 3.5,
        img: Client9img,
        video: Client9,
        desc: "As an exporter, we rely on trusted suppliers. Vyapaarmart connected us with reliable manufacturers across India and streamlined our bulk order requirements smoothly."
    },
    {
        id: "day10",
        title: "Monika Mishra, Monika Fashion house (Lucknow, Uttar Pradesh, India)",
        subtitle: "This platform helped us showcase our handicraft products to buyers across India. The visibility and inquiries...",
        date: "2023-09-14",
        defaultValue: 4.5,
        img: Client10img,
        video: Client10,
        desc: "This platform helped us showcase our handicraft products to buyers across India. The visibility and inquiries we received exceeded our expectations. Vyapaarmart is excellent for MSMEs."
    },
    {
        id: "day11",
        title: "Amol, A-one material solution (Pune Maharashtra, India)",
        subtitle: "The platform is very useful, but sometimes quotations take longer than expected. With better response...",
        date: "2024-10-26",
        defaultValue: 3,
        img: Client11img,
        video: Client11,
        desc: "The platform is very useful, but sometimes quotations take longer than expected. With better response tracking, it will become the number one B2B marketplace in India."
    }
];







export default function ClientReview() {
    const [buyerCard, setBuyerCard] = useState(null);
    const [value, setValue] = React.useState(2);






    return (
        <div className="font-roboto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-14 mt-14 text-center">
                What Our Clients Say
            </h2>


            <div className="px-6 md:px-12 lg:px-20 mt-6 md:mt-10">
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="mySwiper"
                >
                    {reviews.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div
                                onClick={() => setBuyerCard(item.id)}
                                className="grid shadow-md bg-white rounded-md p-4 cursor-pointer group"
                            >
                                <div className="relative">


                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="cursor-pointer object-contain rounded shadow w-full h-48 sm:h-56 md:h-60 lg:h-64 transition-transform duration-300 group-hover:scale-105 opacity-70"
                                    />

                                    <div className="absolute inset-0 flex justify-center items-center">
                                        <MdOutlineSlowMotionVideo size={80} color="white" />
                                    </div>
                                </div>

                                <p className="mt-3 font-roboto font-semibold text-[#083544] text-sm transition-colors duration-300 group-hover:text-darkRed">
                                    {item.title}
                                </p>
                                <Rating name="half-rating-read" defaultValue={item.defaultValue} precision={0.5} readOnly />
                                <p className="mt-3 font-normal text-gray font-roboto text-xs transition-colors duration-300 group-hover:text-darkRed">
                                    {item.subtitle}
                                </p>

                                <p className="text-base text-lightgray font-roboto mt-3">{item.date}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


            {reviews.map(
                (item) =>
                    buyerCard === item.id && (
                        <div
                            key={item.id}
                            onClick={() => setBuyerCard(null)}
                            className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999] px-4"
                        >
                            <div
                                className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md relative overflow-y-auto max-h-[90vh]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="border-b border-lightgray border-opacity-25 relative flex  items-center justify-between  py-4">
                                    
                                    <button
                                        className="absolute right-2 text-gray hover:text-black"
                                        onClick={() => setBuyerCard(null)}
                                    >
                                        <RxCross2 size={20} />
                                    </button>
                                </div>
                                <div className="w-full aspect-video rounded mt-4 mb-4 overflow-hidden bg-black">
                                    <video
                                        src={item.video}
                                        controls
                                        autoPlay
                                        loop
                                        muted
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h2 className="text-base font-semibold font-roboto">{item.title}</h2>
                                <Rating name="half-rating-read" defaultValue={item.defaultValue} precision={0.5} readOnly />
                                <p className="text-gray text-sm font-roboto mb-4">{item.desc}</p>
                            </div>
                        </div>
                    )
            )}

            <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-24 overflow-hidden">
                <div className="max-w-6xl mx-auto text-center px-6">

                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation={{
                            prevEl: ".prev-btn",
                            nextEl: ".next-btn",
                        }}
                        pagination={{ clickable: true }}
                        spaceBetween={40}
                        slidesPerView={3}
                        centeredSlides={false}
                        loop
                        breakpoints={{
                            640: { slidesPerView: 1 },  
                            768: { slidesPerView: 2 },  
                            1024: { slidesPerView: 3 },
                        }}
                        className="relative"
                    >
                        {testimonials.map((item, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl w-[320px] h-[340px] mx-auto transition-all duration-300 hover:shadow-2xl  flex flex-col justify-between p-8"
                                >

                                    <div className="flex-1">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 mb-5 shadow-md">
                                            <FaQuoteLeft className="text-white text-lg" />
                                        </div>
                                        <p className="text-gray-700 text-base leading-relaxed line-clamp-5">
                                            {item.text}
                                        </p>
                                    </div>


                                    <div className="mt-6 flex items-center text-center gap-4">

                                        <div className="text-left">
                                            <p className="font-semibold text-lg text-gray-900">
                                                {item.name}
                                            </p>
                                            
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>



                </div>

            </section>

        </div>

    );
}
