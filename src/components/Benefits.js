import React from "react";
import benefitimg from "../images/benefit.jpg"

const BenefitsSections = () => {
    return ( 
    <div className="benefits">
        <div className="description"> 
        <h2>High quality system </h2>
        <div className="benefit">
            <h3>Online platform</h3> 
            <h3>Hogh experienced and talanted mentors</h3> 
            <h3>Fast learning system</h3> 
            <h3>Offline school for children</h3> 
        </div>
        <img src={benefitimg} alt="benefit"></img>
        </div>

    </div>
)
}
export default BenefitsSections;