import React, {useEffect} from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import {NavLink, useLocation} from "react-router-dom";
import logo from "../images/logo.png";

const footerStyle = {
    backgroundColor: 'rgba(240, 240, 240, 0)',
    padding: '12px',
    marginTop: 'auto',
    backdropFilter: 'blur(6px)'
}

const socialIconsStyle = {
    fontSize: '2rem',
    width: '40px',
    height: '40px',
    margin: '4px',
};

const MyFooter = () => {
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
                                    <NavLink to="/home#devs" color="inherit">
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