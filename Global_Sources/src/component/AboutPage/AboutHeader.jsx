import React, { useState } from "react";
import { motion } from "framer-motion";
import AboutInto from "../../assets/image/AboutIntro.mp4";
import { MessageSquare, Users, Grid, Award, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Mission from "../../assets/image/mission.jpg";
import Vision from "../../assets/image/vision.jpg";
import ConstantLearning from "../../assets/image/Constant Learning.jpg";
import Ownership from "../../assets/image/Ownership.avif";

const testimonials = [
  { id: 1, title: "Integrity", text: `We believe that lasting business relationships can only be built on honesty and fairness. At Vyapaarmart, integrity means ensuring transparency in every transaction, accurate representation of products, and ethical conduct in all dealings. By upholding integrity, we create a safe and reliable environment where buyers and suppliers can trade with complete confidence.` },
  { id: 2, title: "Innovation", text: `The future of trade belongs to those who innovate. We constantly evolve by integrating smart technologies, AI-driven matchmaking, advanced search systems, and seamless communication tools. Innovation at Vyapaarmart is not just about adopting new technology — it is about reimagining how businesses connect, negotiate, and grow in a rapidly changing global market.` },
  { id: 3, title: "Inclusivity", text: `We believe opportunity should never be limited by size, geography, or resources. Whether it’s a small startup from a local town or a large multinational enterprise, Vyapaarmart provides equal access to global markets. Inclusivity drives us to empower SMEs with the same tools and exposure that big companies enjoy, ensuring that every business has a fair chance to succeed.` },
  { id: 4, title: "Excellence", text: `Our commitment is not just to provide a platform but to deliver an experience defined by quality, reliability, and professionalism. Excellence at Vyapaarmart means setting high standards in service, continuously improving our features, and providing unwavering support. We strive to exceed expectations, so every buyer and supplier feels valued and empowered.` },
  { id: 5, title: "Sustainability", text: `We recognize that true growth is not only measured in profits but also in responsibility. Vyapaarmart promotes sustainable sourcing, ethical practices, and eco-conscious trade. By encouraging responsible partnerships and forward-looking practices, we ensure that the growth we enable today does not come at the expense of tomorrow.` },
];

const stats = [
  { id: 1, icon: <MessageSquare className="w-10 h-10 text-blue-600 mx-auto" />, value: "89M+", label: "Inquiries Every Year" },
  { id: 2, icon: <Users className="w-10 h-10 text-blue-600 mx-auto" />, value: "10.8M+", label: "Registered Users" },
  { id: 3, icon: <Grid className="w-10 h-10 text-blue-600 mx-auto" />, value: "90,000+", label: "Product Categories" },
  { id: 4, icon: <Award className="w-10 h-10 text-blue-600 mx-auto" />, value: "20", label: "Category Rank" },
];

const cards = [
  { id: 1, title: "Our Vision", body: "At Vyapaarmart, our vision is to be the most trusted and innovative B2B marketplace connecting businesses worldwide. We aim to break trade barriers, empower companies of all sizes, and create an ecosystem of limitless opportunities.", image: Vision },
  { id: 2, title: "Our Mission", body: "Our mission is to simplify trade and empower businesses with trust, technology, and transparency. We connect genuine buyers with verified suppliers, provide global exposure, and offer digital tools for growth.", image: Mission },
];

export default function AboutHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="w-full bg-gray-50 mt-24 font-[roboto]">
     
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 lg:px-8 py-16 grid gap-12 lg:gap-20 lg:grid-cols-2 items-center"
      >
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-3xl lg:text-3xl  font-extrabold text-[#083544] leading-tight">
            About VyapaarMart
          </h1>
          <p className="text-base sm:text-sm text-gray-700">
            Vyapaarmart is a B2B marketplace designed to connect buyers and suppliers with trust, transparency, and technology at the core. We provide a powerful digital ecosystem where businesses of every size—startups, SMEs, and large enterprises—can showcase their products, discover opportunities, and expand their reach to new markets.
          </p>
          <p className="text-base sm:text-sm text-gray-700">
            Our platform is built to simplify international trade by removing traditional barriers and creating a seamless bridge between genuine buyers and verified suppliers. With advanced digital tools, AI-driven product matchmaking, and secure trade assurance, Vyapaarmart ensures that every interaction leads to meaningful business growth.
          </p>  
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full  max-w-lg mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <video
              className="w-full h-full aspect-video object-cover"
              controls
              autoPlay
              loop
              muted
            >
              <source src={AboutInto} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </motion.div>

     
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              whileHover={{ scale: 1.05 }}
              className="space-y-3 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              {stat.icon}
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

     
      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map((card) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="flex bg-white rounded-2xl border border-blue-500 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-44 sm:w-52 md:w-60 object-cover rounded-l-2xl"
              />
              <div className="flex flex-col justify-between p-6 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {card.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      
      <section className="w-full bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-10">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded shadow-lg bg-blue-400 p-8 relative"
            >
              <Quote className="w-10 h-10 text-white mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-white">
                {current.title}
              </h3>
              <p className="text-white leading-relaxed mb-6">{current.text}</p>
            </motion.div>

            <div className="relative flex justify-center items-center">
              <div className="absolute top-0 left-10 w-12 h-12 bg-blue-800 rounded-full"></div>
              <div className="absolute bottom-16 right-16 w-24 h-24 bg-blue-800 rounded-full"></div>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[ConstantLearning, Ownership, ConstantLearning, ConstantLearning].map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="w-40 h-40 bg-gray-400 rounded-2xl"
                  >
                    <img src={img} alt="Value" className="h-full w-full rounded-2xl object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border-2 border-blue-900 flex items-center justify-center hover:bg-blue-900 hover:text-white transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border-2 border-blue-900 flex items-center justify-center hover:bg-blue-900 hover:text-white transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
