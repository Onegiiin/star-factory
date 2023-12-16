import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import {useState} from "react";
import classes from './ImageList.module.css'
import {useTranslation} from "react-i18next";

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${
            height * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}


export default function CustomImageList(props) {
    const [open, setOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    const openImg = (event) => {
        setSelectedImg(event.target.src);
        setOpen(true);
    }
    const {t, i18n} = useTranslation();

    return (
        <div>
            <h2>{t("photogallery")}</h2>
            {open && (
                <div>
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.9)",
                            zIndex: 1,
                        }}
                        onClick={() => setOpen(false)}
                    ></div>
                    <img
                        style={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "none",
                            zIndex: 2,
                        }}
                        onClick={() => setOpen(false)}
                        src={selectedImg}
                        alt={t("enlargedImg")}
                    />
                </div>
            )}
            <ImageList className={classes.ImageListBackground} style={{marginLeft: "auto", marginRight: "auto"}}
                       sx={{
                           width: 1000,
                           height: 800,
                           // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                           transform: 'translateZ(0)',
                           '&::-webkit-scrollbar': {width: "5px"},
                           '&::-webkit-scrollbar-track': {backgroundColor: "transparent"},
                           '&::-webkit-scrollbar-thumb': {backgroundColor: "#888888", borderRadius: "5px"},

                       }}
                       rowHeight={400}
                       gap={2}
            >
                {props.photos.map((item) => {
                    const cols = item.featured ? 2 : 1;
                    const rows = item.featured ? 2 : 1;

                    return (
                        <ImageListItem key={item.img} cols={cols} rows={rows}>
                            <img
                                {...srcset(item.img, 250, 200, rows, cols)}
                                alt={item.title}
                                onClick={openImg}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                }}
                                title={t(item.title)}
                                position="top"
                                actionIcon={
                                    <IconButton
                                        sx={{color: 'white'}}
                                        aria-label={`star ${item.title}`}
                                    >
                                        <PlaceOutlinedIcon/>
                                    </IconButton>
                                }
                                actionPosition="left"
                            />
                        </ImageListItem>
                    );
                })}
            </ImageList>
        </div>
    );
}

