import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import classes from "./Navbar.module.css";

const MyNavbar = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);

            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    const handleNavLinkClick = (e) => {
        const { hash } = e.currentTarget;

        if (hash) {
            const element = document.querySelector(hash);

            if (element) {
                e.preventDefault();
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div  className={`${classes.nvbr}`}>
        <nav className={'navbar navbar-expand-lg navbar-dark'}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Bootstrap" width="100" height="80" />
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
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/home" onClick={handleNavLinkClick}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/list" onClick={handleNavLinkClick}>
                                List
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                to="/home#devs"
                                onClick={handleNavLinkClick}
                            >
                                Devs
                            </NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        {' '}
                        <button type="button" className="btn btn-dark">
                            EU
                        </button>
                    </span>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default MyNavbar;
