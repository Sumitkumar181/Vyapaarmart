import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <footer className="w-full  bg-[#042939]  text-gray-700 px-4 sm:px-6 lg:px-8 py-10 font-roboto">
     
      

     
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm text-[#EBEFF0] mb-10">
        
        <div>
          <h3 className="font-semibold text-base text-white mb-3">
            Customer Support
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-darkRed cursor-pointer">Help Center</li>
            <li className="hover:text-darkRed cursor-pointer">User Guide</li>
            <li className="hover:text-darkRed cursor-pointer">Return & Cancellation Policy</li>
            <li className="hover:text-darkRed cursor-pointer">Shipping & Delivery Policy</li>
          </ul>
          
          
        </div>

        <div>
          <h3 className="font-semibold text-base text-white mb-2 ">About Us</h3>
          <ul className="space-y-2  ">
            <li className="hover:text-darkRed cursor-pointer text-lightgray">About Vyapaarmart</li>
            <li className="hover:text-darkRed cursor-pointer">Our Services</li>
            <li className="hover:text-darkRed cursor-pointer">Our Quality Commitment</li>
            <li className="hover:text-darkRed cursor-pointer">Buyer Stories</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-base text-white mb-3">For Buyer</h3>
          <ul className="space-y-2">
            <li className="hover:text-darkRed cursor-pointer">Post Your Requirements</li>
            <li className="hover:text-darkRed cursor-pointer">Browse Suppliers</li>
            <li className="hover:text-darkRed cursor-pointer">Subscribe sell Trade Alerts</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-base text-white mb-3">Our Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-darkRed cursor-pointer">Advertise with Us</li>
            <li className="hover:text-darkRed cursor-pointer">Book Domains</li>
            <li className="hover:text-darkRed cursor-pointer">Catalog Templates</li>
            <li className="hover:text-darkRed cursor-pointer">Appoint Distributors</li>
            
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-base text-white mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li className="hover:text-darkRed cursor-pointer"><span className="font-medium text-base">Address :</span> NX One, Sector-Techzone-4, Greater Noida West, Greater Noida, Gautam Buddha Nagar, Uttar Pradesh, 201306.</li>
            <li className="hover:text-darkRed cursor-pointer"><span className="font-medium text-base">Phone Number :</span> 0120-4213085, +91 964 371 2933</li>
            <li className="hover:text-darkRed cursor-pointer"><span className="font-medium text-base">Time :</span> 10: 00 am – 6:30pm</li>
            <li className="hover:text-darkRed cursor-pointer"><span className="font-medium text-base">Mail Us :</span> helpdesk@vyapaarmart.com support@vyapaarmart.com</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 border-t border-b border-lightgray py-4 mb-4">
        <span className="text-sm text-white">Follow Us:</span>
        <FaFacebookSquare size={20} className="hover:text-blue-600 text-white cursor-pointer" />
        <FaSquareXTwitter size={20} className="hover:text-black text-white cursor-pointer" />
        <FaInstagramSquare size={20} className="hover:text-darkRed text-white cursor-pointer" />
        <FaLinkedin size={20} className="hover:text-blue-700 text-white cursor-pointer" />
        <FaSquareYoutube size={20} className="hover:text-darkRed text-white cursor-pointer" />
      </div>

    
      

    
      <div className="flex flex-wrap justify-center gap-4 text-sm text-[#EBEFF0] mb-3">
        {["Terms of Use", "Privacy Policy", "Security Measures", "IP Policy", "Cookie Policy", "Preference"].map(
          (item, i) => (
            <p key={i} className="hover:text-darkRed cursor-pointer">
              {item}
            </p>
          )
        )}
      </div>

      <div className="text-center text-sm text-[#EBEFF0] mt-4">
        © 2021 Publishers Representatives Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;