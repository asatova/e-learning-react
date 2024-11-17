import React from "react";
import styled from "styled-components";



const Nav = () => {
    return (
    <StyledNav>
        <h1>
            <a href="#" id="logo">e-Learning</a>
        </h1>
        <ul>
            <li><a href="#!">About Us</a></li>
            <li><a href="#!">Courses</a></li>
            <li><a href="#!">Contact Us</a></li>
        </ul>
    </StyledNav>
    );
};

const StyledNav  = styled.nav`

min-height: 10vh;
display: flex;
margin: auto;
justify-content: space-between;
align-items: center;
padding: 1rem 10rem;
background-color: #383e47;

a{
    text-decoration: none;
    color: #fff;
    
}
ul{
    display: flex;
    list-style-type: none;
}
#logo{
    font-weight: lighter;
    font-size: 1.5rem;
    font-family: "Silkscreen", sans-serif;
  font-weight: 400;
  font-style: normal;
}
li{
    padding-left: 10rem;
    
}
`


export default Nav;