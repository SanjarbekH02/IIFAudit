import React from 'react';
import './Footer.css'
import Logo from '../../images/Logo.png'
import Facebook from '../../images/facebook.svg'
import Instagram from '../../images/instagram.svg'
import Telegram from '../../images/telegram.svg'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-block">
                    <div className="footer-logo">
                        <a className='logo-img' href="#">
                            <img src={Logo} alt="Logo" />
                        </a>
                        <h4 className="footer-title">Resources</h4>
                    </div>
                    <div className="footer-top">
                        <div className="footer-left">
                            <a href="tel:" className="footer-link">+1 (7635) 547-12-97</a>
                            <a href="mailto:iifa@edu.com" className="footer-link">iifa@edu.com</a>
                        </div>
                        <div className="footer-right">
                            <NavLink to={'/'} className="footer-link">Video lessons</NavLink>
                            <NavLink to={'/quiz'} className="footer-link">Quiz</NavLink>
                            <NavLink to={'/certificate'} className="footer-link">Certificate</NavLink>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="footer-in">© 2024  •  All Rights Reserved</p>
                        <div className="addres-block">
                            <a href="#" className="addres-link">
                                <i class="ri-facebook-fill"></i>
                            </a>
                            <a href="#" className="addres-link">
                                <i class="ri-instagram-fill"></i>
                            </a>
                            <a href="#" className="addres-link">
                                <i class="ri-telegram-fill"></i>
                            </a>

                            <select className='luanguag-select'>
                                <option value="uz">Uz</option>
                                <option value="ru">Ru</option>
                                <option value="en">En</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
