import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '@mui/material/Button';
import classes from './Myfooter.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab.faVk, fab.faInstagram, fab.faYoutube, fab.faTwitter);

const MyFooter = () => {
    const location = useLocation();
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    const [isVkHovered, setIsVkHovered] = useState(false);
    const [isInstagramHovered, setIsInstagramHovered] = useState(false);
    const [isTwitterHovered, setIsTwitterHovered] = useState(false);
    const [isYoutubeHovered, setIsYoutubeHovered] = useState(false);

    const handleVkHover = () => {
        setIsVkHovered(!isVkHovered);
    };

    const handleInstagramHover = () => {
        setIsInstagramHovered(!isInstagramHovered);
    };

    const handleTwitterHover = () => {
        setIsTwitterHovered(!isTwitterHovered);
    };

    const handleYoutubeHover = () => {
        setIsYoutubeHovered(!isYoutubeHovered);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const styles = {
        footerStyle: {
            backgroundColor: 'rgba(240, 240, 240, 0)',
            padding: '12px',
            marginTop: 'auto',
            backdropFilter: 'blur(6px)',
        },
        buttonStyle: {
            backgroundColor: isHovered ? '#f4eaff' : 'rgba(12, 17, 23, 0.8)',
            width: '400px',
            height: '40px',
            border: `2px solid ${isHovered ? 'rgba(12, 17, 23, 0.8)' : '#f4eaff'}`,
        },
        icn: {
            fontSize: '60px',
            color: isHovered ? 'rgba(12, 17, 23, 0.8)' : '#f4eaff',
        },
        vk:{
            color: isVkHovered ? 'rgba(12, 17, 23, 0.8)' : '#f4eaff',
        },
        inst:{
            color: isInstagramHovered ? 'rgba(12, 17, 23, 0.8)' : '#f4eaff',
        },
        you:{
            color: isYoutubeHovered ? 'rgba(12, 17, 23, 0.8)' : '#f4eaff',
        },
        twit:{
            color: isTwitterHovered ? 'rgba(12, 17, 23, 0.8)' : '#f4eaff',
        }

    };
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
        <footer style={styles.footerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col d-flex align-items-center justify-content-between">
                        <img src={logo} alt="Logo" />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex' }}>
                                <a href='https://vk.com/fabrika_zvezd' target="_blank">
                                <IconButton onMouseEnter={handleVkHover}
                                            onMouseLeave={handleVkHover}
                                >
                                    <FontAwesomeIcon className={classes.socialIconsStyle} style={styles.vk} icon={['fab', 'vk']} />
                                </IconButton>
                                    </a>
                                    <a href='https://www.instagram.com/fabrika1tv/' target="_blank">
                                <IconButton onMouseEnter={handleInstagramHover}
                                            onMouseLeave={handleInstagramHover}
                                >
                                    <FontAwesomeIcon className={classes.socialIconsStyle} style={styles.inst} icon={['fab', 'instagram']} />
                                </IconButton>
                                </a>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <a href='https://twitter.com/1fabrika' target="_blank">
                                <IconButton onMouseEnter={handleTwitterHover}
                                            onMouseLeave={handleTwitterHover}
                                >
                                    <FontAwesomeIcon className={classes.socialIconsStyle} style={styles.twit} icon={['fab', 'twitter']} />
                                </IconButton>
                                </a>
                                    <a href='https://www.youtube.com/playlist?list=PLMybm55sL_M6p8bc_bGcuCp3MNYWXDZXe' target="_blank">
                                <IconButton onMouseEnter={handleYoutubeHover}
                                            onMouseLeave={handleYoutubeHover}
                                >
                                    <FontAwesomeIcon className={classes.socialIconsStyle} style={styles.you} icon={['fab', 'youtube']} />
                                </IconButton>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            style={styles.buttonStyle}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}
                            onClick={scrollToTop}
                        >
                            <KeyboardArrowUpIcon style={styles.icn} />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default MyFooter;
