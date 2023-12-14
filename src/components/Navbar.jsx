import React from 'react';
<<<<<<< HEAD
import {NavLink} from "react-router-dom";
import logo from '../utils/logo.png';
=======
>>>>>>> f2ce75c (.)

const MyNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
<<<<<<< HEAD
                    <img src={logo} alt="Bootstrap" width="100" height="80" />
=======
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YeEnh3Xdpq64TROsU93sSXRBqywsUd5o2Q&usqp=CAU" alt="Bootstrap" width="30" height="24" />
>>>>>>> f2ce75c (.)
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
<<<<<<< HEAD
                            <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/list">List</NavLink>
=======
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">List</a>
>>>>>>> f2ce75c (.)
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Devs</a>
                        </li>
                    </ul>
                    <span className="navbar-text"> <button type="button" className="btn btn-dark">EU</button></span>
                </div>
            </div>
        </nav>
    );
};

export default MyNavbar;
