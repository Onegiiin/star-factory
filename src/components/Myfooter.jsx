import React from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import {NavLink} from "react-router-dom";
import Home from '../pages/Home';
import logo from "../utils/logo.png";

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

const MyFooter = () => {
    return (
        <footer style={footerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 d-flex align-items-center justify-content-between">
                        <img src={logo} alt="Logo" />
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
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MyFooter;