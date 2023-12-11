import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const styles = {
    cardContainer: {
        position: 'relative',
        maxWidth: 'fit-content',
    },
    image: {
        width: '100%',
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
};

const ClickableImageWithText = ({ imageUrl, text, onClick }) => {
    return (
        <Card onClick={onClick}>
            <div style={styles.cardContainer}>
                <img src={imageUrl} alt="Image" style={styles.image} />
                <div style={styles.textOverlay}>
                    <Typography variant="body1" style={styles.text}>
                        {text}
                    </Typography>
                </div>
            </div>
            <CardContent>
            </CardContent>
        </Card>
    );
};

export default ClickableImageWithText;
