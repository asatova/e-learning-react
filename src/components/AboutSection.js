import React from 'react';
import bookimg from "../images/benefit.jpg";
import { About, Description, Image, Hide } from '../styles';
import {easeIn, motion} from "framer-motion";

function AboutSection() {
    const titleAnim = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1, 
            transition: { duration: 1.2 } // Fixed spelling here
        },
    };
    
    const container = {
        hidden: { x: 100 },
        show: { 
            x: 0, 
            transition: { 
                duration: 1.5, 
                ease: "easeOut", 
                staggerChildren: 0.5, // Corrected spelling
                when: "afterChildren" 
            },
        },
    };
    

    return (
        <About>
            <Description>
                
                <motion.div variants={container}
                initial="hidden"
                animate="show" 
                className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim} initial="hidden" animate="show">Be educated so that</motion.h2>
                    </Hide>
                  
                    <Hide>
                        <motion.h2 variants={titleAnim} >you <span>can change</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} >the world</motion.h2>
                    </Hide>
                    </motion.div>
                <p>An educated mind can teach many. An educated mind is better than empty.</p>
                <button>About us</button>
            </Description>
            <Image>
                <img src={bookimg} alt="book" />
            </Image>
        </About>
    );
}





export default AboutSection;
