import React from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme } from "@mui/material/styles";

import RequestForQuatation from '../../assets/homePageImage/RequestForQuatation.jpeg';

const names = [
    'Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard',
    'Omar Alexander', 'Carlos Abbott', 'Miriam Wagner',
    'Bradley Wilkerson', 'Virginia Andrews', 'Kelly Snyder',
];

const getStyles = (name, personName, theme) => ({
    fontWeight: personName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
});

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut'
        }
    })
};


const theme = createTheme({
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
});


export default function RequestForQuotations() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const { target: { value } } = event;
        setPersonName(typeof value === 'string' ? value.split(',') : value);
    };

    return (
        
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-7xl mx-auto mt-10  font-roboto"
        >
            <div
                className="relative w-full font-roboto rounded-xl overflow-hidden shadow-lg"
                style={{
                    backgroundImage: `url(${RequestForQuatation})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

                <div className="relative flex flex-col lg:flex-row gap-6 p-6 sm:p-10">

                   
                    <div className="text-white flex flex-col justify-center space-y-4 w-full lg:w-1/2">

                        <motion.h2
                            variants={fadeInUp}
                            custom={1}
                            className="text-2xl  sm:text-3xl font-semibold"
                        >
                            Request for Quotations (RFQ)
                        </motion.h2>

                        <motion.div
                            variants={fadeInUp}
                            custom={2}
                            className="text-xs sm:text-xs text-white text-opacity-70"
                        >
                            <p>Post your Request for Quotations (RFQ) to connect instantly with verified suppliers worldwide. Compare offers, get the best prices, and source products with confidence.</p>
                           
                        </motion.div>

                        <motion.button
                            variants={fadeInUp}
                            custom={3}
                            className="w-max px-6 py-2 bg-blue-400 text-white rounded-md text-sm font-medium hover:bg-gray-100 transition"
                        >
                            View More
                        </motion.button>

                        <motion.ul
                            variants={fadeInUp}
                            custom={4}
                            className="mt-12 space-y-1 text-sm list-disc list-inside"
                        >
                            <motion.li variants={fadeInUp} custom={4.1}>Submit an RFQ in just one minute</motion.li>
                            <motion.li variants={fadeInUp} custom={4.2}>Get multiple quotations from Verified Suppliers</motion.li>
                            <motion.li variants={fadeInUp} custom={4.3}>Compare and choose the best quotation!</motion.li>
                        </motion.ul>
                    </div>

                    
                    <motion.div
                        variants={fadeInUp}
                        custom={5}
                        className="w-full lg:w-1/2 bg-white p-5 sm:p-6 rounded-xl shadow-md"
                    >
                        <form className="w-full space-y-5">
                            <motion.h3
                                variants={fadeInUp}
                                custom={5.1}
                                className="text-xl sm:text-2xl font-semibold text-gray-800"
                            >
                                Get Quotations Now
                            </motion.h3>

                            <motion.input
                                variants={fadeInUp}
                                custom={5.2}
                                type="text"
                                placeholder="Please enter a specific product name"
                                className="w-full border border-[#b8b9ba] rounded-full px-4 py-2 text-sm outline-blue-500"
                            />

                            <motion.div
                                variants={fadeInUp}
                                custom={5.3}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <input
                                    type="number"
                                    placeholder="Quantity"
                                    className="flex-1 border border-[#b8b9ba] rounded-full px-4 py-2 text-sm outline-blue-500"
                                />

                                <FormControl
                                    sx={{
                                        width: '100%',
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '999px',
                                            height: 40,
                                            fontSize: '0.85rem',
                                        },
                                        '& .MuiInputLabel-root': {
                                            fontSize: '0.75rem',
                                        },
                                        '& .MuiSelect-select': {
                                            paddingY: '10px',
                                            paddingX: '14px',
                                        },
                                    }}
                                    size="small"
                                >
                                    <InputLabel id="demo-multiple-name-label">Bags</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Bags" />}
                                        MenuProps={{
                                            PaperProps: {
                                                style: {
                                                    maxHeight: 100,
                                                    borderRadius: '10px',
                                                },
                                            },
                                        }}
                                    >
                                        {names.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, personName, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </motion.div>

                            <motion.button
                                variants={fadeInUp}
                                custom={5.4}
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-full transition"
                            >
                                Request for Quotations
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
