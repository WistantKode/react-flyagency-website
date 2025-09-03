import React, { useState } from 'react';

// import react-icons
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from "react-icons/bs"
import { AiOutlineGlobal } from "react-icons/ai";

//  Import logo
import logo from '../../assets/app.svg';
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
    // We only need one function to toggle the menu.
    const [active, setActive] = useState("navBarMenu");

    // New toggle function
    const toggleNavBar = () => {
        if (active === "navBarMenu") {
            setActive("navBarMenu showNavBar");
        } else {
            setActive("navBarMenu");
        }
    };

    const [noBg, addBg] = useState("navBarTwo");

    const addBgColor = () => {
        if (window.scrollY > 10) {
            addBg("navBarTwo navBar_With_Bg");
        } else {
            addBg("navBarTwo");
        }
    };
    window.addEventListener('scroll', addBgColor);

    return (
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className="icon" />
                </div>
                <div className="none flex">
                    <li className="flex"> <BsPhoneVibrate /> Support</li>
                    <li className="flex"> <AiOutlineGlobal /> Languages</li>
                </div>
                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>

            <div className={noBg}>
                <div className="logoDiv">
                    <img src={logo} alt="logo" className="Logo" />
                </div>
                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={toggleNavBar} className="listitem">Home</li>
                        <li onClick={toggleNavBar} className="lisitem">About</li>
                        <li onClick={toggleNavBar} className="lisitem">Offers</li>
                        <li onClick={toggleNavBar} className="lisitem">Seats</li>
                        <li onClick={toggleNavBar} className="lisitem">Destinations</li>
                    </ul>
                    <button className="btn flex btnOne">Contact</button>
                </div>

                <button className="btn flex btnTwo">Contact</button>

                {/* Attach the toggle function to the click event */}
                <div onClick={toggleNavBar} className="toggleIcon">
                    <CgMenuGridO />
                </div>
            </div>
        </div>
    );
};

export default Navbar;