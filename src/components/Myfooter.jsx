import React from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
<<<<<<< HEAD
import {NavLink} from "react-router-dom";
import Home from '../pages/Home';
import logo from "../utils/logo.png";
=======
import Link from '@mui/material/Link';
>>>>>>> f2ce75c (.)

const footerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '12px',
    marginTop: 'auto',
};

const socialIconsStyle = {
    fontSize: '2rem',
    width: '40px',
    height: '40px',
    margin: '4px',
};

<<<<<<< HEAD
const MyFooter = () => {
=======
const Myfooter = () => {
>>>>>>> f2ce75c (.)
    return (
        <footer style={footerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 d-flex align-items-center justify-content-between">
<<<<<<< HEAD
                        <img src={logo} alt="Logo" />
=======
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YeEnh3Xdpq64TROsU93sSXRBqywsUd5o2Q&usqp=CAU" alt="Logo" />
>>>>>>> f2ce75c (.)
                    <div className="col-xs-6 d-flex align-items-center justify-content-end">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex' }}>
                                <IconButton>
                                    <p style={socialIconsStyle} >VK</p>
                                </IconButton>
                                <IconButton>
                                    <p style={socialIconsStyle} >INST</p>
                                </IconButton>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <IconButton>
                                    <p style={socialIconsStyle} >FB</p>
                                </IconButton>
                                <IconButton>
                                    <p style={socialIconsStyle} >YT</p>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Divider style={{ margin: '12px 0' }} />
                <div className="row">
                    <div className="col">
                        <nav style={{ display: 'flex', justifyContent: 'center' }}>
                            <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                                <li style={{ margin: '0 8px' }}>
<<<<<<< HEAD
                                    <NavLink to="/home" color="inherit">
                                        Home
                                    </NavLink>
                                </li>
                                <li style={{ margin: '0 8px' }}>
                                    <NavLink to="/list" color="inherit">
                                        List
                                    </NavLink>
                                </li>
                                <li style={{ margin: '0 8px' }}>
                                    <NavLink href="/contact" color="inherit">
                                        Devs
                                    </NavLink>
=======
                                    <Link href="/about" color="inherit">
                                        Home
                                    </Link>
                                </li>
                                <li style={{ margin: '0 8px' }}>
                                    <Link href="/services" color="inherit">
                                        List
                                    </Link>
                                </li>
                                <li style={{ margin: '0 8px' }}>
                                    <Link href="/contact" color="inherit">
                                        Devs
                                    </Link>
>>>>>>> f2ce75c (.)
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

<<<<<<< HEAD
export default MyFooter;
=======
export default Myfooter;
>>>>>>> f2ce75c (.)
