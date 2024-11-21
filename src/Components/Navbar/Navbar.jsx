import React, { useEffect, useRef, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import './Navbar.css'
import Logo from '../../images/Logo.png'
import SignIn from '../../images/sign.svg'
import CloseImg from '../../images/close-nav.png'
import { NavLink } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css'
import * as faceapi from "face-api.js";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCitizen, setIsCitizen] = useState(null);
    const [phone, setPhone] = useState('');
    const [activeNav, setActiveNav] = useState(false)
    const [citizenship, setCitizenship] = useState('uzb')

    const handleCitizenChange = (event) => {
        setIsCitizen(event.target.value);
    };
    const activeNavHandle = () => {
        setActiveNav(x => !x)
    }
    const closeHandle = () => {
        setIsModalOpen(x => !x)
    }


    const videoRef = useRef(null);
    const [passportNumber, setPassportNumber] = useState("");
    const [dob, setDob] = useState("");
    const [isPassportValid, setIsPassportValid] = useState(false);
    const [isFaceDetected, setIsFaceDetected] = useState(false);

    // Pasport raqamini tekshirish
    const validatePassport = () => {
        const passportRegex = /^[A-Z]{2}\d{7}$/; // Misol uchun format: AB1234567
        if (passportRegex.test(passportNumber)) {
            setIsPassportValid(true);
        } else {
            alert("Iltimos, to‘g‘ri pasport raqamini kiriting! (masalan: AB1234567)");
        }
    };

    return (
        <div className="container">
            <div className='navbar'>
                <div onClick={activeNavHandle} className="toggle">
                    <span className="toggle-line"></span>
                    <span className="toggle-line2"></span>
                    <span className="toggle-line"></span>
                </div>
                <a href="#" className="logo-link">
                    <img src={Logo} alt="logo image" />
                </a>
                <ul className={`nav-list ${activeNav && "nav-list--active"}`}>
                    <div className="list-logo-block">
                        <a href="#" className="logo-link">
                            <img src={Logo} alt="logo image" />
                        </a>
                        <img onClick={activeNavHandle} src={CloseImg} alt="" />
                    </div>
                    <li className="nav-list-item">
                        <NavLink to='/' onClick={activeNavHandle} className={({ isActive }) => (isActive ? 'nav-link-active nav-link' : 'nav-link')} >ABOUT</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/courses' onClick={activeNavHandle} className={({ isActive }) => (isActive ? 'nav-link-active nav-link' : 'nav-link')}>COURSES</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/certificate' onClick={activeNavHandle} className={({ isActive }) => (isActive ? 'nav-link-active nav-link' : 'nav-link')}>CERTIFICATE</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/quiz' onClick={activeNavHandle} className={({ isActive }) => (isActive ? 'nav-link-active nav-link' : 'nav-link')}>QUIZ</NavLink>
                    </li>
                    <li className="nav-list-item">
                        <NavLink to='/partners' onClick={activeNavHandle} className={({ isActive }) => (isActive ? 'nav-link-active nav-link' : 'nav-link')}>HAMKORLAR</NavLink>
                    </li>
                    <div className="luanguage-block">
                        <select className='luanguag-select select-nav'>
                            <option value="uz">Uz</option>
                            <option value="ru">Ru</option>
                            <option value="en">En</option>
                        </select>
                        <a href="tel:" className="footer-link">+1 (7635) 547-12-97</a>
                    </div>
                </ul>
                <div className="sign-icon">
                    <img onClick={closeHandle} src={SignIn} alt="sign" />
                </div>
                <button onClick={closeHandle} className="button">Login</button>
            </div>

            {
                isModalOpen && (
                    <div className="modalLogin">
                        <div className="modalLogin-content">
                            <div className="modalLogin-title">
                                <h1 className="login-title">{citizenship === "uzb" ? "login" : "OneId orqali kirish"}</h1>
                                <div onClick={closeHandle} className="close"></div>
                            </div>
                            <div>
                                <div className="citizenship">
                                    <button onClick={() => setCitizenship('uzb')} className={`citizenship-btn ${citizenship === 'uzb' ? 'citizenship-active' : ''}`}>Uzb fuqorosi</button>
                                    <button onClick={() => setCitizenship('chet')} className={`citizenship-btn ${citizenship === 'chet' ? 'citizenship-active' : ''}`}>Chet el fuqorosi</button>
                                </div>
                                {
                                    citizenship === 'chet' ? (
                                        <form>
                                            <input required className='modalLogin-input' placeholder='Name' type="text" />
                                            <input required className='modalLogin-input input' placeholder='Email' type="email" />
                                            <PhoneInput
                                                country={'us'}
                                                value={phone} h
                                                onChange={(phone) => setPhone(phone)}
                                                inputStyle={{
                                                    width: '100%',
                                                    height: '40px',
                                                    backgroundColor: '#f5f7fa',
                                                    border: '1px solid #ddd',
                                                    borderRadius: '8px',
                                                    paddingLeft: '60px',
                                                    fontSize: '16px',
                                                }}
                                                buttonStyle={{
                                                    border: 'none',
                                                    borderRadius: '8px 0 0 8px',
                                                    padding: '0 10px',
                                                }}
                                                dropdownStyle={{
                                                    borderRadius: '8px',
                                                    padding: 0,
                                                }}
                                            />
                                            <div className="submit-block">
                                                <button onClick={closeHandle} type='click' className="cancel">Cancel</button>
                                                <button type='submit' className="submit btn">Confirm</button>
                                            </div>
                                        </form>
                                    ) : (
                                        <form className="chet-form">
                                            {/* Agar pasport hali tekshirilmagan bo'lsa, inputlar va tugmalarni ko'rsatamiz */}
                                            {!isPassportValid ? (
                                                <>
                                                    <label className="chet-label">
                                                        <input
                                                            required
                                                            className="chet-input"
                                                            type="text"
                                                            placeholder="Passport seriya va raqami"
                                                            value={passportNumber}
                                                            onChange={(e) => setPassportNumber(e.target.value)}
                                                        />
                                                        <i className="ri-qr-scan-2-line"></i>
                                                    </label>
                                                    <label className="chet-label">
                                                        <input
                                                            required
                                                            className="chet-input"
                                                            type="text"
                                                            placeholder="Tug'ilgan sanasi"
                                                            value={dob}
                                                            onChange={(e) => setDob(e.target.value)}
                                                        />
                                                        <i className="ri-calendar-2-line"></i>
                                                    </label>
                                                    <p className="chet-desc">
                                                        *My Id orqali kirishda shasingizni tasdiqlovchi ma'lumotlar talab
                                                        qilinadi. Shuningdek, ma'lumotlar yuzni tanish orqali
                                                        tasdiqlanganligi uchun yorug'lik yetarlicha bo’lishini va
                                                        qurilmangizning kamerasi sozligini ta'minlang
                                                    </p>
                                                    <button className="myId" type="submit">
                                                        MyIdga kirish
                                                    </button>
                                                </>
                                            ) : (
                                                // Agar pasport tekshiruvdan o'tgan bo'lsa, kamerani ko'rsatamiz
                                                <div>
                                                </div>
                                            )}

                                            {/* Agar yuz aniqlangan bo'lsa, xabar chiqariladi */}
                                            {isFaceDetected && (
                                                <p style={{ color: "green" }}>Yuz aniqlangan! Kirish tasdiqlandi.</p>
                                            )}
                                        </form>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Navbar;
