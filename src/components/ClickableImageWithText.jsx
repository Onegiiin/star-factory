import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import classes from "./ClickableImageWithText.module.css"

const ClickableImageWithText = ({ imageUrl, text, shortInfo, born }) => {
    return (
        <div>
            <div className={classes.container}>
                <Card className={classes.card}>
                    <div className={classes.cardContainer}>
                        <img src={imageUrl} alt="Image" className={classes.image} />
                        <div className={classes.textOverlay}>
                            <Typography variant="body1" className={classes.text}>
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
