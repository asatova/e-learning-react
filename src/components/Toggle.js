import { title } from "motion/react-client";
import React from "react";
import { useState } from "react";
import {motion} from "framer-motion"



const Toggle = ({children, title}) => {
    const [toggle, setToggle] =useState(true);
    return <motion.div layout onClick={() => setToggle(!toggle)}>
        <motion.h4  layout className="question">{title}</motion.h4>
        
        {toggle ? children : ""}
    
    <div className="faq-line"></div>
    
    </motion.div>;
};





export default Toggle;