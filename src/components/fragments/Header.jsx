import React, { useState, useEffect } from 'react';
import { IoCloseOutline, IoLogoFacebook, IoGlobeOutline, IoLogoInstagram, IoLogoPinterest, IoLogoTwitter, IoLogoYoutube, IoSearchOutline, IoReorderTwo  } from 'react-icons/io5';
import '../css/style.css';
import logo from '../img/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const header = document.querySelector("[data-header]");

    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'active' : ''}`} data-header>
      <div className="container">
        <div className="overlay" data-overlay></div>
        <a href="./index.html" className="logo">
          <img src={logo} alt="Filmlane logo" />
        </a>
        <div className="header-actions">
          <button className="search-btn">
            <IoSearchOutline />
          </button>
          <div className="lang-wrapper">
            <label htmlFor="language">
              <IoGlobeOutline/>
            </label>
            <select name="language" id="language">
              <option value="en">EN</option>
              <option value="au">AU</option>
              <option value="ar">AR</option>
              <option value="tu">TU</option>
            </select>
          </div>
          <button className="btn btn-primary">Sign in</button>
        </div>
        <button className="menu-open-btn" onClick={toggleMenu} data-menu-open-btn>
          <IoReorderTwo/>
        </button>
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} data-navbar>
          <div className="navbar-top">
            <a href="./index.html" className="logo">
              <img src="./assets/images/logo.svg" alt="Filmlane logo" />
            </a>
            <button className="menu-close-btn" onClick={toggleMenu} data-menu-close-btn>
              <IoCloseOutline/>
            </button>
          </div>
          <ul className="navbar-list">
            <li>
              <a href="./index.html" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Movie
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Tv Show
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Web Series
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Pricing
              </a>
            </li>
          </ul>
          <ul className="navbar-social-list">
            <li>
              <a href="#" className="navbar-social-link">
                <IoLogoTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="navbar-social-link">
                <IoLogoFacebook/>
              </a>
            </li>
            <li>
              <a href="#" className="navbar-social-link">
                <IoLogoPinterest/>
              </a>
            </li>
            <li>
              <a href="#" className="navbar-social-link">
                <IoLogoInstagram />
              </a>
            </li>
            <li>
              <a href="#" className="navbar-social-link">
                <IoLogoYoutube />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
