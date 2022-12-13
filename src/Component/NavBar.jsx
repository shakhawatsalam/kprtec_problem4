import React from "react";
import './navbar.css'
import Mlogo from "../Assets/Marvel_Logo.svg";
import { CiDollar } from "react-icons/ci";

const NavBar = () => {
    return (
        <>
        <nav className="nav_container">
                <div className="first_section">
                <div className="blank">
                    blank
                </div>
                <div className="signIN">
                        <CiDollar />
                        <p>Sign in</p>
                        <div></div>
                        <p>join</p>
                </div>
                <div className="logo">
                        <div className="img">
                            <img src={Mlogo} alt="" />
                    </div>
                </div>
                <div className="unlimited">
                    Unlimited
                </div>
                <div className="blank2">
                    Blank
                </div>
                </div>
        </nav>
        </>);
};

export default NavBar;
