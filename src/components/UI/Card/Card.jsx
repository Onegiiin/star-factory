import React from 'react';
import classes from './Card.module.css';
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {useTranslation} from "react-i18next";

function getSizeOfMap(gender) {
    if (gender === "-") {
        return 3;
    } else {
        return 11;
    }
}


const Card = (props) => {
    const {t, i18n} = useTranslation();
    return (
        <div className={classes.personContainer}>
            <h2 style={{textAlign: 'center'}}>{t(props.info.name)}</h2>
            <div className={classes.infoContainer}>
                <img src={props.info.mainImg} alt={props.info.name}/>
                <div className={classes.descriptionContainer}>
                    <div className={classes.shortInfoContainer}>
                        {props.info.gender === "man"
                            ? <p>{t("card.man")} {props.info.season}{t("card.season")}</p>
                            : props.info.gender === "woman"
                                ? <p>{t("card.woman")} {props.info.season}{t("card.season")}</p>
                                : <p>{t("card.multi")} {props.info.season}{t("card.season")}</p>
                        }
                        <p>{t(props.info.shortInfo)}</p>
                    </div>
                    <div className={classes.yearAndMapContainer}>
                        {props.info.gender === "-"
                            ? <p>{t("card.yearsGroup")}</p>
                            : <p>{t("card.years")}</p>
                        }
                        <p className={classes.secondParagraph}>
                            <time>{t(props.info.born)}</time>
                            {'⠀ —⠀'}
                            <time>{t(props.info.death)}</time>
                        </p>
                        {props.info.gender === "-"
                            ? <p>{t("card.bornPlaces")}</p>
                            : <p>{t("card.bornPlace")}</p>
                        }
                        <YMaps>
                            <Map
                                defaultState={{
                                    center: props.info.mapCenter,
                                    zoom: getSizeOfMap(props.info.gender),
                                    controls: ["zoomControl", "fullscreenControl"],
                                }}
                                modules={["control.ZoomControl", "control.FullscreenControl"]}
                            >
                                {props.info.mapMarkers.map((coordinates, index) => (
                                    <Placemark key={index} defaultGeometry={coordinates}/>
                                ))}
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;