import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import logo from '../images/logo.png';
import classes from "./Navbar.module.css";

const MyNavbar = () => {
    const [lang, changeLang] = useState("РУС")

    const handleLangClick = () => {
        changeLang(lang === "РУС" ? "ENG" : "РУС")
    }

    return (
        <div className={`${classes.nvbr}`}>
            <nav className={'navbar navbar-expand-lg navbar-dark'}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Bootstrap" width="100" height="80"/>
                    </a>
                    <button
                        className={`navbar-toggler ${classes.nvb}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${classes.nvb}`} id="navbarSupportedContent">
                        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${classes.txt}`}>
                            <li className={`nav-item ${classes.element}`}>
                                <NavLink className="nav-link active" aria-current="page" to="/home"
                                         onClick={handleNavLinkClick}>
                                    Главная
                                </NavLink>
                            </li>
                            <li className={`nav-item ${classes.element}`}>
                                <NavLink className="nav-link active" to="/list" onClick={handleNavLinkClick}>
                                    Поиск артистов
                                </NavLink>
                            </li>
                            <li className={`nav-item ${classes.element}`}>
                                <NavLink className="nav-link active" to="/home#aboutPortal"
                                         onClick={handleNavLinkClick}>
                                    О портале
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/home#devs"
                                    onClick={handleNavLinkClick}
                                >
                                    О разработчиках
                                </NavLink>
                            </li>
                        </ul>
                        <span className="navbar-text">
                        {' '}
                            <button type="button" className={`btn btn-lg ${classes.btn}`} onClick={handleLangClick}>
                            {lang}
                        </button>
                    </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MyNavbar;
