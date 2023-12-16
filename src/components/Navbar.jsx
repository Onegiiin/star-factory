import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../images/logo.png';
import classes from "./Navbar.module.css";
import {useTranslation} from 'react-i18next';


const MyNavbar = () => {
    const {t, i18n} = useTranslation();

    const handleLangClick = () => {
        if (i18n.language === "ru")
            i18n.changeLanguage("en");
        else
            i18n.changeLanguage("ru")
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
                                <NavLink className={`nav-link active ${classes.link}`}
                                         aria-current="page" to="/home"
                                >
                                    {t("navbar.home")}
                                </NavLink>
                            </li>
                            <li className={`nav-item ${classes.element}`}>
                                <NavLink className={`nav-link active ${classes.link}`} to="/list">
                                    {t("navbar.artists")}
                                </NavLink>
                            </li>
                            <li className={`nav-item ${classes.element}`}>
                                <NavLink className={`nav-link active ${classes.link}`} to="/home#aboutPortal">
                                    {t("navbar.about")}
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={`nav-link active ${classes.link}`}
                                    aria-current="page"
                                    to="/home#devs"
                                >
                                    {t("navbar.devs")}
                                </NavLink>
                            </li>
                        </ul>
                        <span className="navbar-text">
                        {' '}
                            <button type="button" className={`btn btn-lg ${classes.btn}`} onClick={handleLangClick}>
                            {t("navbar.btnLng")}
                        </button>
                    </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MyNavbar;
