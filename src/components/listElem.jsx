import React from 'react';
import { Card, Typography } from '@mui/material';
import {NavLink} from "react-router-dom";

const styles = {
    cardContainer: {
        position: 'relative',
        maxWidth: 'fit-content',
    },
    image: {
        width: '500px',
        height: 'auto',
    },
    textOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#fff',
        width: '100%',
    },
    text: {
        margin: 0,
    },
    card: {
        display: 'inline-block',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

const ListElem = ({ param, onClick }) => {
    return (
            <div style={styles.container}>
        <Card sx={{ width: 'auto' }} style={styles.card} onClick={onClick}>
            <div style={styles.cardContainer}>
                <NavLink to={param.persUrl}>
                <img src={param.imageUrl} alt="Артист" style={styles.image} />
                </NavLink>
                <div style={styles.textOverlay}>
                    <Typography variant="body1" style={styles.text}>
                        {param.text}
                    </Typography>
                </div>
            </div>
        </Card>
            </div>
    );
};

export default ListElem;
