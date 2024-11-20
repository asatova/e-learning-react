import React from "react";
//import components
import AboutSection from "../components/AboutSection";
import BenefitSection from "../components/Benefits";
import FaqSection from "../components/FaqSection";
import {motion} from "framer-motion";
import { pageAnimation } from "../animation";



const AboutUs = () => {
    return <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        <AboutSection />
        <BenefitSection />
        <FaqSection />
    </motion.div>;
};




export  default AboutUs;