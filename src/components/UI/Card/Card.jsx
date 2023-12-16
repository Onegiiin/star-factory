import React from 'react';
import classes from './Card.module.css';
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";

function getSizeOfMap(name) {
    if (name === "Корни") {
        return 3;
    } else {
        return 11;
    }
}
function Group(name) {
    if (name === "Корни") {
        return " группы";
    } else {
        return "";
    }    
}

function Place(name) {
    if (name === "Корни") {
        return "Места рождения основателей";
    } else {
        return "Место рождения";
    }      
}

const Card = (props) => {
    return (
        <div className={classes.personContainer}>
            <h2 style={{textAlign: 'center'}}>{props.info.name}</h2>
            <div className={classes.infoContainer}>
                <img src={props.info.mainImg} alt={props.info.name}/>
                <div className={classes.descriptionContainer}>
                    <div className={classes.shortInfoContainer}>
                        {props.info.gender === "man"
                            ? <p>Победитель {props.info.season}-ого сезона "Фабрики звезд"</p>
                            : props.info.gender === "woman"
                                ? <p>Победительница {props.info.season}-ого сезона "Фабрики звезд"</p>
                                : <p>Победители {props.info.season}-ого сезона "Фабрики звезд"</p>
                        }
                        <p>{props.info.shortInfo}</p>
                    </div>
                    <div className={classes.yearAndMapContainer}>
                        <p>Годы жизни{Group(props.info.name)}: </p>
                        <p className={classes.secondParagraph}><time>{props.info.born}</time>{'⠀ —⠀'}<time>{props.info.death}</time></p>
                        <p>{Place(props.info.name)}</p>
                        <YMaps>
                            <Map
                                defaultState={{
                                    center: props.info.mapCenter,
                                    zoom: getSizeOfMap(props.info.name),
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
        </div>

    );
};

export default Card;