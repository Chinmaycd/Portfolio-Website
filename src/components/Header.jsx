import { useEffect, useState } from "react";
import React from 'react'
import "./Header.css"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-scroll'
import Hamburger from 'hamburger-react'
import { Link as Linkk } from 'react-router-dom'
import { RiLoginCircleFill } from "react-icons/ri";
import { RiLogoutCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const [log, setLog] = useState(true)
  // let log = localStorage.getItem("loggedin")
  const navigate = useNavigate()
  useEffect(() => {
    let data = localStorage.getItem('loggedin');
    setLog(data);
  })
  function Logout() {
    navigate('/')
    localStorage.removeItem('loggedin')
  }
  return (
    <div id='header' >
      <div className='header_left'>
        <img className='logo' src='https://trydo.rainbowit.net/assets/images/logo/logo-symbol-dark.png' />
        <ul className='menu'>
          <Link smooth to="home">
            <li className="underline"><span>Home</span></li>
          </Link>
          <Link smooth to="about">
            <li className="underline"><span>About</span></li>

          </Link>
          <Link smooth to="service">
            <li className="underline"><span>Service</span></li>

          </Link>
          <Link smooth to="portfolio">

            <li className="underline"><span>Portfolio</span></li>
          </Link>
          <Link smooth to="blog">
            <li className="underline"><span>Blog</span></li>

          </Link>
          <Link smooth to="contact">
            <li className="underline"><span>Contact</span></li>
          </Link>

        </ul>
      </div>

      <div className='header_right' id="header">
        {log ?
          <RiLogoutCircleFill className="login_icon" onClick={Logout} /> :
          <Linkk className="login_icon" to='/login'><RiLoginCircleFill /></Linkk>

        }


        {/* <Linkk className="login_icon" to='/'><RiLogoutCircleFill /></Linkk> */}
        <div className="icon">
          <span className='fb_logo'><FaFacebookF /></span>
          <span className='ln_logo'><FaLinkedinIn /></span>
          <span className='insta_logo'><FaInstagram /></span>
          <span className='tw_logo'><FaTwitter /></span>

          <button>BUY NOW</button>

          <div className='navbar'>
            <div className='iconn' onClick={() => setShowMediaIcons(!showMediaIcons)}><Hamburger size={20} toggled={isOpen} toggle={setOpen} /></div>
            <div className={showMediaIcons ? "nav_menu2" : "nav_menu"}>
              <ul className="menu2">
                <Link smooth to="home">
                  <li className="underline2"><span>Home</span></li>
                </Link>
                <Link smooth to="about">
                  <li className="underline2"><span>About</span></li>

                </Link>
                <Link smooth to="service">
                  <li className="underline2"><span>Service</span></li>

                </Link>
                <Link smooth to="portfolio">

                  <li className="underline2"><span>Portfolio</span></li>
                </Link>
                <Link smooth to="blog">
                  <li className="underline2"><span>Blog</span></li>

                </Link>
                <Link smooth to="contact">
                  <li className="underline2"><span>Contact</span></li>
                </Link>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
