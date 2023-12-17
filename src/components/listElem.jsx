import React from 'react';
import {Card, Typography} from '@mui/material';
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const styles = {
    cardContainer: {
        position: 'relative',
        maxWidth: 'fit-content',
    },
    image: {
        width: "900px",
        height: "471px",
    },
    textOverlay: {
        position: 'absolute',
        marginBottom: "-40px",
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        width: '100%',
    },
    text: {
        fontFamily: "journalism",
        color: 'rgba(255, 215, 0, 1)',
        margin: 0,
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center", /* Center the text vertically */
        alignItems: "flex-end", /* Align the text to the bottom */
        fontSize: "112px",
        whiteSpace: "nowrap",
    },
    card: {
        display: 'inline-block',
    },
    container: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        padding: "20px",
    },
};

const ListElem = ({param, onClick}) => {
    const { t, i18n } = useTranslation();
    return (
        <div style={styles.container}>
            <Card sx={{width: 'auto'}} style={styles.card} onClick={onClick}>
                <div style={styles.cardContainer}>
                    <NavLink to={param.persUrl}>
                        <img src={param.imageUrl} alt={t("artist")} style={styles.image}/>
                        <div style={styles.textOverlay}>
                            <Typography variant="body1" style={styles.text}>
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
