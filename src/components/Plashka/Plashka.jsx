import React from 'react';
import ClickableImageWithText from '../ClickableImageWithText/ClickableImageWithText';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import classes from './Plashka.module.css'


const images = {
    Card1: import('../../images/Card/Card1.jpg'),
    Card2: import('../../images/Card/Card2.jpg'),
    Card3: import('../../images/Card/Card3.jpg'),
    Card4: import('../../images/Card/Card4.jpg'),
    Card5: import('../../images/Card/Card5.jpg'),
    Card6: import('../../images/Card/Card6.jpg'),
    Card7: import('../../images/Card/Card7.jpg')
};

const WeeklyImage = () => {
    const currentDay = new Date().getDay();
    const { t, i18n } = useTranslation();

    const imagesData = [
        {
            imageUrl: images.Card1,
            text: "korni.name",
            persUrl: '/korni',
            shortInfo: "korni.short",
            born: "2002",

        },
        {
            imageUrl: images.Card2,
            text: "gagarina.name",
            persUrl: '/gagarina',
            shortInfo: "gagarina.short",
            born: "gagarina.born",
        },
        {
            imageUrl: images.Card3,
            text: "dubcova.name",
            persUrl: '/dubcova',
            shortInfo: "dubcova.short",
            born: "dubcova.born",
        },
        {
            imageUrl: images.Card4,
            text: "koldun.name",
            persUrl: '/koldun',
            shortInfo: "koldun.short",
            born: "koldun.born",
        },
        {
            imageUrl: images.Card5,
            text: "prihodko.name",
            persUrl: '/prihodko',
            shortInfo: "prihodko.short",
            born: "prihodko.born"
        },
        {
            imageUrl: images.Card6    ,
            text: "daineko.name",
            persUrl: '/daineko',
            shortInfo: "daineko.short",
            born: "daineko.born",
        },
        {
            imageUrl: images.Card7,
            text: "hasanova.name",
            persUrl: '/hasanova',
            shortInfo: "hasanova.short",
            born:"hasanova.born",
        }
    ];

    const getImage = async (image) => {
        const imageModule = await image;
        return imageModule.default || imageModule;
    };

    const getCurrentImageData = async () => {
        const currentImage = imagesData[currentDay].imageUrl;
        const resolvedImage = await getImage(currentImage);
        return {
            imageUrl: resolvedImage,
            text: imagesData[currentDay].text,
            persUrl: imagesData[currentDay].persUrl,
            shortInfo: imagesData[currentDay].shortInfo,
            born: imagesData[currentDay].born,
        };
    };

    const [currentImageData, setCurrentImageData] = React.useState(null);

    React.useEffect(() => {
        getCurrentImageData().then(data => {
            setCurrentImageData(data);
        });
    }, [currentDay]);

    if (!currentImageData) {
        return <div>Loading...</div>;
    }

    return (
        <div id="homepage">
            <h2>{t("plashka.title")}</h2>
            <div className={classes.borderedDivStyle}>
            <NavLink to={currentImageData.persUrl}>
            <ClickableImageWithText imageUrl={currentImageData.imageUrl} text={t(currentImageData.text)}/>
            </NavLink>
                {currentImageData.text === "korni.name"
                    ? <p className={classes.content}>{t(currentImageData.shortInfo)} {t("plashka.yearsGroup")}  {t(currentImageData.born)}</p>
                    : <p className={classes.content}>{t(currentImageData.shortInfo)} {t("plashka.years")}  {t(currentImageData.born)}</p>
                }
            </div>
        </div>
    );
};

export default WeeklyImage;