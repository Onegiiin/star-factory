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

const ListElem = ({ param, onClick }) => {
    return (
        <Card onClick={onClick}>
            <div style={styles.cardContainer}>
                <img src={param.imageUrl} alt="Image" style={styles.image} />
                <div style={styles.textOverlay}>
                    <Typography variant="body1" style={styles.text}>
                        {param.text}
                    </Typography>
                </div>
            </div>
            <CardContent>
            </CardContent>
        </Card>
    );
};

export default ListElem;
