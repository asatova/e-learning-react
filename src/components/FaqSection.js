import { color } from "framer-motion";
import React from "react";
import  styled from "styled-components";
import {About} from "../styles";
const FaqSection = () => {
    return(
     <Faq>
        <h2>Any Questions? <span>FAQ</span></h2>
        <div className="question"><h4>Can i learning from 0? </h4>
        <div className="answer"><p>lorem</p></div><div className="faq-line"></div></div>
        <div className="question"><h4>Can i learning from 0? </h4>
        <div className="answer"><p>lorem</p></div><div className="faq-line"></div></div>
        <div className="question"><h4>Can i learning from 0? </h4>
        <div className="answer" ><p>lorem</p></div></div>
        
    </Faq>
    );
};

const Faq = styled(About) `
display: block;
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.question{
    padding:3rem 0rem;
    cursor: pointer;
};
.answer{
    padding:2rem 3rem;

}
.faq-line{
    background-color: #ccc;
    height: 0.2rem;
    width: 100%;
    margin: 1rem 0rem;

}
`

export default FaqSection;