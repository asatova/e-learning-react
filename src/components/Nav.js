import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const { pathname } = useLocation();

    return (
        <StyledNav>
            <h1>
                <Link to="/" id="logo">e-Learning</Link>
            </h1>
            <ul>
                <NavItem>
                    <Link to="/">About Us</Link>
                    <Lines
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/" ? "50%" : "0%" }}
                    />
                </NavItem>
                <NavItem>
                    <Link to="/courses">Courses</Link>
                    <Lines
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/courses" ? "50%" : "0%" }}
                    />
                </NavItem>
                <NavItem>
                    <Link to="/contact">Contact Us</Link>
                    <Lines
                        transition={{ duration: 0.75 }}
                        initial={{ width: "0%" }}
                        animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
                    />
                </NavItem>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #383e47;

    a {
        text-decoration: none;
        color: #fff;
    }

    ul {
        display: flex;
        list-style-type: none;
    }

    #logo {
        font-weight: lighter;
        font-size: 1.5rem;
        font-family: "Silkscreen", sans-serif;
        font-weight: 400;
        font-style: normal;
    }
`;

const NavItem = styled.div`
    position: relative;
    padding-left: 10rem;

    a {
        position: relative;
        z-index: 2;
    }
`;

const Lines = styled(motion.div)`
    height: 0.3rem;
    background-color: #30bee1;
    width: 0%;
    position: absolute;
    bottom: -66%;
    left: 138px;

`;

export default Nav;
