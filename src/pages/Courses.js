import React from "react";
import image from "../images/benefit.jpg"
import styled from "styled-components";
import { Link } from "react-router-dom";




const Courses = () => {
    return (
        <StyledCourses>
            <Course>
            <h2>React course</h2>
            <div className="line"></div>
                <Link>
                <img src={image} alt="react" />
                 </Link>
                 </Course>

                 <Course>
            <h2>React course</h2>
            <div className="line"></div>
                <Link>
                <img src={image} alt="react" />
                 </Link>
                 </Course>

                 <Course>
            <h2>React course</h2>
            <div className="line"></div>
                <Link>
                <img src={image} alt="react" />
                 </Link>
                 </Course>
        </StyledCourses>
    )
}

const StyledCourses = styled.div `
min-height: 100vh;
padding: 5rem 10rem;


h2{
    padding: 1rem 0rem;
}



`;


const Course =styled.div`
padding-bottom: 10rem;
.line{
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
`;

export default Courses;