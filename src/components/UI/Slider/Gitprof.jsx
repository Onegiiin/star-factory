import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';
import devs from '../../../images/back1deves.png';
import Avatar from 'react-avatar';
import classes from './Gitprof.module.css';
import {useTranslation} from "react-i18next";


const MyCustomCarousel = () => {
    const [carouselInitialized, setCarouselInitialized] = useState(false);

    useEffect(() => {
        const carousel = new Carousel(document.getElementById('myCarousel'), {
            interval: 2000,
        });

        setCarouselInitialized(true);

        return () => {
            carousel.dispose();
        };
    }, []);

    useEffect(() => {
        const hash = window.location.hash;
        if (carouselInitialized && hash === '#devs') {
            const scrollToDevs = () => {
                const devsElement = document.getElementById('devs');
                if (devsElement) {
                    devsElement.scrollIntoView({ behavior: 'smooth' });
                }
            };
            setTimeout(scrollToDevs, 0);
        }
    }, [carouselInitialized]);

    const { t, i18n } = useTranslation();

    return (
        <div id="devs">
            <h2 className={classes.pktPos}>{t("gp.title")}</h2>
            <div id="myCarousel" className={`carousel slide carousel-fade ${classes.fotPos} data-bs-ride="true"`} >
                <div className="carousel-inner ">
                    <div className="carousel-item active " data-bs-interval="10000">
                        <img src={devs} className={`d-block mx-auto ${classes.vst}`} />
                        <div className={`carousel-caption d-none d-md-block`}>
                            <Avatar src='https://avatars.githubusercontent.com/u/120668210?v=4' size="200" round={true} className={classes.avatarPosition}/>
                            <div className={classes.viS}>
                            <h5>dif76oq</h5>
                            <a href={'https://github.com/dif76oq'} target="_blank">https://github.com/dif76oq</a>
                            </div>
                        </div>
                    </div>
                <div className="carousel-item" data-bs-interval="10000">
                    <img src={devs} className={`d-block mx-auto ${classes.vst}`} />
                    <div className={`carousel-caption d-none d-md-block`}>
                        <Avatar src='https://avatars.githubusercontent.com/u/85400754?v=4' size="200" round={true} className={classes.avatarPosition}/>
                        <div className={classes.viS}>
                            <h5>kedr4</h5>
                            <a href={'https://github.com/kedr4'} target="_blank">https://github.com/kedr4</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                        <img src={devs} className={`d-block mx-auto ${classes.vst}`} />
                        <div className={`carousel-caption d-none d-md-block`}>
                            <Avatar src='https://avatars.githubusercontent.com/u/120414874?v=4' size="200" round={true} className={classes.avatarPosition}/>
                            <div className={classes.viS}>
                                <h5>ZKMLrabotaem</h5>
                                <a href={'https://github.com/ZKMLrabotaem'} target="_blank">https://github.com/ZKMLrabotaem</a>
                            </div>
                    </div>
                </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <img src={devs} className={`d-block mx-auto ${classes.vst}`} />
                        <div className={`carousel-caption d-none d-md-block`}>
                            <Avatar src='https://avatars.githubusercontent.com/u/115876035?v=4' size="200" round={true} className={classes.avatarPosition}/>
                            <div className={classes.viS}>
                                <h5>Onegiiin</h5>
                                <a href={'https://github.com/Onegiiin'} target="_blank">https://github.com/Onegiiin </a>
                            </div>
                        </div>
                    </div>
            </div>
            <button className={`carousel-control-prev ${classes.sldButton}`} type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className={`carousel-control-next ${classes.sldButton} ${classes.sldSecondButton}`} type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    );
};

export default MyCustomCarousel;
