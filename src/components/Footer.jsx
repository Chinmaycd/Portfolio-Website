import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer_left">
                <a href='#'> <img src="https://trydo.rainbowit.net/assets/images/logo/logo.png" /></a>
            </div>
            <div className="footer_centre">
                <div className='footer_centre_inner'>
                    <a href='#'> <span><FaFacebookF /></span></a>
                    <a href='#'> <span><FaLinkedinIn /></span></a>
                    <a href='#'><span><FaInstagram /></span></a>
                    <a href='#'>  <span><FaTwitter /></span></a>
                </div>

            </div>
            <div className="footer_right">
                <span>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</span>
                <a>  <ScrollToTop className='top' smooth /></a>
            </div>

        </div>
    )
}

export default Footer
