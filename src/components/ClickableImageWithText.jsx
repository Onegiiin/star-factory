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
    content: {
        justifyContent: 'left',
        alignItems: 'center',
        width: '1200px',
        textAlign: 'left',
        margin: '0px auto',
        padding: "0px",
        fontFamily: "Comfortaa",
        color: 'rgba(255, 215, 0, 1)',
        display:"flex",
        fontSize: "20px",
        backdropFilter: "blur(20px)",
        backgroundColor: 'rgba(0, 0, 0, 0)',
        textDecoration: 'none',
        pointerEvents: 'none'
    },
};

const ClickableImageWithText = ({ imageUrl, text, shortInfo, born }) => {
    return (
        <div>
            <div style={styles.container}>
                <Card style={styles.card}>
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
        </div>
    );
};

export default ClickableImageWithText;
