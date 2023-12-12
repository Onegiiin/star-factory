import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import {useState} from "react";

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${
            height * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}


export default function CustomImageList() {
    const [open, setOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState(null);

    const openImg = (event) => {
        setSelectedImg(event.target.src);
        setOpen(true);
    }

    return (
        <div>
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
                        alt="Увеличенное изображение"
                    />
                </div>
            )}
            <ImageList style={{marginLeft: "auto", marginRight: "auto"}}
                       sx={{
                           width: 1000,
                           height: 800,
                           // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                           transform: 'translateZ(0)',
                       }}
                       rowHeight={400}
                       gap={2}
            >
                {itemData.map((item) => {
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
                                title={item.title}
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

const itemData = [
    {
        img: 'https://www.vkpress.ru/upload/iblock/b68/b6852f425de87f7f1b6d355f391c8b21.jpg',
        title: 'Краснодар',
        featured: true,
    },
    {
        img: 'https://i.pinimg.com/564x/01/08/21/0108211aab68b56cbf0d7c23fb7f9cf7.jpg',
        title: 'Фабрика звезд',
    },
    {
        img: 'https://showbi.ru/upload/2021/11/02/20211102144304-ae306648.jpg',
        title: 'Авторадио',
    },
    {
        img: 'https://api.delfi.lt/media-api-image-cropper/v1/0fa3e900-7a86-11ed-bbfd-e17f1d900260.jpg?noup&w=1200&h=711&fx=0.5&fy=0.25',
        title: 'Золотой граммофон',
        author: '@nolanissac',
    },
    {
        img: 'https://gp.by/upload/medialibrary/d78/d7898e2874f176f0c02d6e3a24e30928.jpg',
        title: 'Гомель',
    },
    {
        img: 'https://avatars.dzeninfra.ru/get-zen_doc/96506/pub_5c6ae908170ed700ae1963e1_5c6ae983fec61f00b2b842d3/scale_1200',
        title: 'Русское радио',
        featured: true,
    },
    {
        img: 'https://s.ura.news/760/images/news/upload/news/558/780/1052558780/24621_Final_Miss_Ekaterinburg_2013_koldun_dmitriy_250x0_5184.3456.0.0.jpg',
        title: 'Нижневартовск',
    },
    {
        img: 'https://www.womanhit.ru/media/CACHE/images/articleimage2/2020/3/a56f32357347/7adf65ab5bee59f2c92f9a92f7c9d88e.jpg',
        title: 'Евровидение',
    },
];