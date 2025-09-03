import React from "react";

// import images and logos
import logo from "../../assets/dock.svg";
import {TiSocialFacebook, TiSocialInstagram, TiSocialTumbler, TiSocialTwitter} from "react-icons/ti";
import home from "../Home/Home.jsx";
import search from "../Search/Search.jsx";
import support from "../Support/Support.jsx";
import info from "../Info/Info.jsx";
import lounge from "../Lounge/Lounge.jsx";
import travelers from "../Travelers/Travelers.jsx";
import subscribe from "../Subscribers/Subscribe.jsx";
import FAQ from "../FAQ/FAQ.jsx";

const Footer = () => {
    return (
        <div className="footer">
            <div className="sectionContainer container grid">
                <div className="gridOne">
                    <div className="logoDiv">
                        <img src={logo} alt="" className='logo' />
                    </div>
                    <p>Your mind should be stronger than your feelings, Fly</p>
                    <div className="socialIcon flex">
                        <TiSocialFacebook className='icon' />
                        <TiSocialTwitter className='icon' />
                        <TiSocialInstagram className='icon' />
                        <TiSocialTumbler className='icon' />
                    </div>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li><a href={home}>Home</a></li>
                    <li><a href={search}>Search Fly</a></li>
                    <li><a href={support}>Support</a></li>
                    <li><a href={info}>Info</a></li>
                    <li><a href={lounge}>Lounge</a></li>
                    <li><a href={travelers}>Travelers</a></li>
                    <li><a href={subscribe}>Subscribe</a></li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Quick Guide</span>
                    <li><a href={FAQ}>FAQ</a></li>
                    <li><a href={search}>How to</a></li>
                    <li><a href={support}>Features</a></li>
                    <li><a href={info}>Route Map</a></li>
                    <li><a href={lounge}>Our Communities</a></li>
                    <li><a href={travelers}>Travelers</a></li>
                    <li><a href={subscribe}>Subscribe</a></li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Quick Guide</span>
                    <li><a href={FAQ}>FAQ</a></li>
                    <li><a href={search}>How to</a></li>
                    <li><a href={support}>Features</a></li>
                    <li><a href={info}>Route Map</a></li>
                    <li><a href={lounge}>Our Communities</a></li>
                    <li><a href={travelers}>Travelers</a></li>
                    <li><a href={subscribe}>Subscribe</a></li>
                </div>
            </div>

            <div className="copyRightDiv flex">
                <p>Design Courtesy | Developed by <a target='_blank' href="https://wistantkode.vercel.app">Wistant Kode</a> </p>
            </div>
        </div>
    )
}
export default Footer;