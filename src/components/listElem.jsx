import React from 'react';
import {Card, Typography} from '@mui/material';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import classes from './ListElem.module.css'


const ListElem = ({param, onClick}) => {
    const { t, i18n } = useTranslation();
    return (
        <div className={classes.container}>
            <Card sx={{width: 'auto'}} className={classes.card} onClick={onClick}>
                <div className={classes.cardContainer}>
                    <NavLink to={param.persUrl}>
                        <img src={param.imageUrl} alt={t("artist")} className={classes.image}/>
                        <div className={classes.textOverlay}>
                            <Typography variant="body1" className={classes.text}>
                                {t(param.text)}
                            </Typography>
                        </div>
                    </NavLink>
                </div>
            </Card>
        </div>
    );
};

export default ListElem;
