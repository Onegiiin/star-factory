import React from 'react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

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

const Myfooter = () => {
    return (
        <footer style={footerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 d-flex align-items-center justify-content-between">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YeEnh3Xdpq64TROsU93sSXRBqywsUd5o2Q&usqp=CAU" alt="Logo" />
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
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Myfooter;