import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const styles = {
    cardContainer: {
        position: 'relative',
        maxWidth: 'fit-content',
    },
    image: {
        width:"1200px",
        height:"628px",
    },
    textOverlay: {
        position: 'absolute',
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
        display:"inline-block",
        fontSize: "150px",
        whiteSpace: "nowrap"
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

const ClickableImageWithText = ({ imageUrl, text, onClick }) => {
    return (
        <div style={styles.container}>
        <Card onClick={onClick} style={styles.card}>
            <div style={styles.cardContainer}>
                <img src={imageUrl} alt="Image" style={styles.image} />
                <div style={styles.textOverlay}>
                    <Typography variant="body1" style={styles.text}>
                        {text}
                    </Typography>
                </div>
            </div>
        </Card>
            </div>
    );
};

export default ClickableImageWithText;
