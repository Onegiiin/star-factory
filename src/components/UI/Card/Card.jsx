import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    console.log(props);
    return (
        <div className={classes.personContainer}>
            <h1 style={{textAlign: 'center'}}>{props.info.name}</h1>
            <div className={classes.infoContainer}>
                <img src={props.info.mainImg} alt={props.info.name}/>
                <div className={classes.descriptionContainer}>
                    <p>Годы жизни: <time>{props.info.born}</time> — <time>{props.info.death}</time></p>
                    {props.info.gender === "man"
                        ? <p>Победитель {props.info.season}-ого сезона "Фабрики звезд"</p>
                        : props.info.gender === "woman"
                            ? <p>Победительница {props.info.season}-ого сезона "Фабрики звезд"</p>
                            : <p>Победители {props.info.season}-ого сезона "Фабрики звезд"</p>
                    }
                    <p>{props.info.shortInfo}</p>
                </div>
            </div>
        </div>

    );
};

export default Card;