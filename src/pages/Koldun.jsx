import React from 'react';
import PersonalElements from "../components/PersonalElements";
import image1 from "../images/koldun/1.jpg"
import image2 from "../images/koldun/2.jpg"
import image3 from "../images/koldun/3.jpg"
import image4 from "../images/koldun/4.jpg"
import image5 from "../images/koldun/5.jpg"
import image6 from "../images/koldun/6.jpg"
import image7 from "../images/koldun/7.jpg"
import image8 from "../images/koldun/8.jpg"
import main from "../images/Card4.jpg"
import classes from "./Koldun.module.css"
import Navbar from "../components/Navbar";
import Myfooter from "../components/Myfooter";

const Koldun = () => {
    return (
        <div className={classes.bgImg}>
            <Navbar/>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
            <Myfooter/>
        </div>
    );
};

const info = {
    name: "koldun.name",
    gender: "man",
    mainImg: main,
    season: 6,
    shortInfo: "Дми́трий Алекса́ндрович Колду́н — белорусский певец, поэт и композитор. Представлял Беларусь на конкурсе Евровидение 2007 года с песней «Work Your Magic», заняв 6-е место (лучший результат Беларуси за всё время участия в конкурсе). Дмитрий Колдун обладает не только уникальным вокалом, но и широким творческим спектром. После участия в Евровидении 2007 года он активно развивает свою музыкальную карьеру, выпуская хиты, которые пользуются популярностью как в Беларуси, так и за её пределами.",
    born: "11 июня 1985",
    death: "настоящее время",
    mapCenter: [53.9, 27.5667],
    mapMarkers: [[53.9, 27.5667]]
}

const bio = [
    {
        time: "2004",
        event: [
            "koldun.bio1"
        ]
    },
    {
        time: "2005",
        event: [
            "koldun.bio2",
            "koldun.bio3"
        ]
    },
    {
        time: "2006",
        event: [
            "koldun.bio4",
            "koldun.bio5",
            "koldun.bio6",
            "koldun.bio7"
        ]
    },
    {
        time: "2007",
        event: [
            "koldun.bio8",
            "koldun.bio9"    
        ]
    },
    {
        time: "Декабрь 2007 — март 2008",
        event: [
            "koldun.bio10"  
        ]
    },
    {
        time: "2008",
        event: [
            "koldun.bio11"
        ]
    },
    {
        time: "2009",
        event: [
            "koldun.bio12",
            "koldun.bio13"
        ]
    },
    {
        time: "29 апреля 2009",
        event: [
            "koldun.bio14"
        ]
    },
    {
        time: "20 ноября 2010",
        event: [
            "koldun.bio15"
        ]
    },
    {
        time: "Март 2012",
        event: [
            "koldun.bio16"
        ]
    },
    {
        time: "Июнь 2012",
        event: [
            "koldun.bio17"
        ]
    },
    {
        time: "6 ноября 2013",
        event: [
            "koldun.bio18"
        ]
    },
    {
        time: "2 марта — 8 июня 2014",
        event: [
            "koldun.bio19"
        ]
    },
    {
        time: "2016",
        event: [
            "koldun.bio20"
        ]
    },
    {
        time: "2017",
        event: [
            "koldun.bio21"
        ]
    },
    {
        time: "2021",
        event: [
            "koldun.bio22"
        ]
    },
    {
        time: "2022",
        event: [
            "koldun.bio23"
        ]
    }    
];

const photos = [
    {
        img: image1,
        title: 'Краснодар',
        featured: true,
    },
    {
        img: image2,
        title: 'Фабрика звезд',
    },
    {
        img: image3,
        title: 'Авторадио',
    },
    {
        img: image4,
        title: 'Золотой граммофон',
    },
    {
        img: image5,
        title: 'Гомель',
    },
    {
        img: image6,
        title: 'Русское радио',
        featured: true,
    },
    {
        img: image7,
        title: 'Нижневартовск',
    },
    {
        img: image8,
        title: 'Евровидение',
    }
];

const video = "https://www.youtube.com/embed/Igp6p7sTT_4?si=lkfU-1tx6RqDm0VI";


export default Koldun;