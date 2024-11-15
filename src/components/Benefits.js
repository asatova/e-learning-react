import React from "react";
import styled from "styled-components";
import benefitimg from "../images/benefit.jpg";
import { About, Description,Image } from "../styles";

const BenefitsSection = () => {
    return ( 
        <Benefits>
            <Description> 
                <h2>High quality system</h2>
                <div className="benefit">
                    <h3>Online platform</h3> 
                    <h3>Highly experienced and talented mentors</h3> 
                    <h3>Fast learning system</h3> 
                    <h3>Offline school for children</h3> 
                </div>
            </Description>
            <Image>
            <img src={benefitimg} alt="benefit" />
            </Image>
        </Benefits>
    );
};

// Styled component
const Benefits = styled(About)`
    flex-direction: row-reverse;
    
    /* gap: 20px; */
h2{
    color: #30bee1;
    padding-bottom: 5rem;
    font-family: 'SF Pro Display', sans-serif;
    margin: 0rem 0rem 0rem 5rem;
                                                
}
h3{
font-size: 1.4 rem;
padding: 1rem;
background-color: white;
font-weight: 400;
margin: 1 rem;
width: 70%;
margin: 1rem 0rem 0rem 5rem;
color: black;
clip-path: polygon(0 10%, 100% 0, 100% 91%, 0% 100%);
border-left: 4px solid #30bee1;

}

`;

export default BenefitsSection;
