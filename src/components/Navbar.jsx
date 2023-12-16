import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import classes from './Navbar.module.css';

const MyNavbar = () => {

    return (
        <div className={`${classes.nvbr}`}>
            <nav className={'navbar navbar-expand-lg navbar-dark'}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/home">
                        <img src={logo} alt="Bootstrap" width="100" height="80" />
                    </NavLink>
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
                                <NavLink className="nav-link active" aria-current="page" to="/home" >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/list" >
                                    List
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/home#devs"
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
