import React from 'react';
import classes from './Card.module.css';
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

const Card = (props) => {
    return (
        <div className={classes.personContainer}>
            <h1 style={{textAlign: 'center'}}>{props.info.name}</h1>
            <div className={classes.infoContainer}>
                <img src={props.info.mainImg} alt={props.info.name}/>
                <div className={classes.descriptionContainer}>
                    {props.info.gender === "man"
                        ? <p>Победитель {props.info.season}-ого сезона "Фабрики звезд"</p>
                        : props.info.gender === "woman"
                            ? <p>Победительница {props.info.season}-ого сезона "Фабрики звезд"</p>
                            : <p>Победители {props.info.season}-ого сезона "Фабрики звезд"</p>
                    }
                    <p>{props.info.shortInfo}</p>
                    <p>Годы жизни: <time>{props.info.born}</time> — <time>{props.info.death}</time></p>
                    <YMaps>
                        <Map
                            defaultState={{
                                center: props.info.mapCenter,
                                zoom: 11,
                                controls: ["zoomControl", "fullscreenControl"],
                            }}
                            modules={["control.ZoomControl", "control.FullscreenControl"]}
                        >
                            {props.info.mapMarkers.map((coordinates, index) => (
                                <Placemark key={index} defaultGeometry={coordinates} />
                            ))}
                        </Map>
                    </YMaps>
                </div>
            </div>
        </div>

    );
};

export default Card;