import React, {useEffect, useState} from 'react';
import classes from './ScrollableText.module.css';
import {Carousel} from "bootstrap";
import {useTranslation} from "react-i18next";

const ScrollableText = () => {
        const [aboutInitialized, setAboutInitialized] = useState(false);
        useEffect(() => {
            const carousel = new Carousel(document.getElementById('myCarousel'), {
                interval: 2000,
            });

            setAboutInitialized(true);

            return () => {
                carousel.dispose();
            };
        }, []);

        useEffect(() => {
            const hash = window.location.hash;
            if (aboutInitialized && hash === '#aboutPortal') {
                const scrollToDevs = () => {
                    const devsElement = document.getElementById('aboutPortal');
                    if (devsElement) {
                        devsElement.scrollIntoView({ behavior: 'smooth' });
                    }
                };
                setTimeout(scrollToDevs, 0);
            }
        }, [aboutInitialized]);

    const { t, i18n } = useTranslation();

    return (
        <div id="aboutPortal" className={classes.scrol}>
            <div>
                <h2>{t("st.title")}</h2>
        <div className={classes.cont}>
            <p>{t("st.p1")}</p>
            <p>{t("st.p2")}</p>
            <p>{t("st.p3")}</p>
            <p>{t("st.p4")}</p>
            <p>{t("st.p5")}</p>
            <p>{t("st.p6")}</p>
            <p>{t("st.p7")}</p>
            <p>{t("st.p8")}</p>
            <p>{t("st.p9")}</p>
            <p>{t("st.p10")}</p>
        </div>
        </div>
        </div>
    );
};

export default ScrollableText;
