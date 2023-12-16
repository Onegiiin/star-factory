import React from 'react';
import PersonalElements from "../components/PersonalElements";
import image1 from "../images/prihodko/1.jpg"
import image2 from "../images/prihodko/2.jpg"
import image3 from "../images/prihodko/3.jpg"
import image4 from "../images/prihodko/4.jpg"
import image5 from "../images/prihodko/5.jpg"
import image6 from "../images/prihodko/6.jpg"
import image7 from "../images/prihodko/7.jpg"
import main from "../images/Card5.jpg"
import classes from "./Prihodko.module.css"
import Navbar from "../components/Navbar";
import Myfooter from "../components/Myfooter";

const Prihodko = () => {
    return (
        <div className={classes.bgImg}>
            <Navbar/>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
            <Myfooter/>
        </div>
    );
};

const info = {
    name: "prihodko.name",
    gender: "woman",
    mainImg: main,
    season: 7,
    shortInfo: "Анастаси́я Константи́новна Прихо́дько — украинская певица, автор песен, общественный и политический деятель, заслуженная артистка Украины (2017). После победы на шоу, Приходько продолжила активную творческую деятельность, выпустив несколько популярных альбомов и хитов, которые стали любимыми среди поклонников. Её музыкальный стиль сочетает в себе эмоциональность и силу голоса, что делает её выступления запоминающимися и яркими. Звание заслуженной артистки Украины в 2017 году стало признанием не только её музыкального мастерства, но и вклада в культурную и общественную жизнь страны.",
    born: "21 апреля 1987",
    death: "настоящее время",
    mapCenter: [50.45, 30.52],
    mapMarkers: [[50.45, 30.52]]
};
const bio = [
    {
        time: "2007",
        event: [
            "prihodko.bio1"
        ]
    },
    {
        time: "2009",
        event: [
            "prihodko.bio2",
            "prihodko.bio3",
            "prihodko.bio4",
            "prihodko.bio5"
        ]
    },
    {
        time: "2010",
        event: [
            "prihodko.bio6"
        ]
    },
    {
        time: "2011",
        event: [
            "prihodko.bio7"
        ]
    },
    {
        time: "2021",
        event: [
            "prihodko.bio8",
            "prihodko.bio9"
        ]
    },
    {
        time: "2018",
        event: [
            "prihodko.bio10"
        ]
    },
    {
        time: "2018",
        event: [
            "prihodko.bio11"
        ]
    },
    {
        time: "2019",
        event: [
            "prihodko.bio12"
        ]
    },
    {
        time: "2022",
        event: [
            "prihodko.bio13"
        ]
    }
];
const photos = [
    {
        img: image1,
        title: 'Москва',
    },
    {
        img: image2,
    },
    {
        img: image6,
        featured: true,
    },
    {
        img: image3,
    },
    {
        img: image4,
        title: 'Евровидение 2011'
    },
    {
        img: image7,
        title: 'Киев'
    },
    {
        img: image5,
    },
];
const video = "https://www.youtube.com/embed/iEPE-vbWqWw?si=oBm9j7uIPGNitvch";


export default Prihodko;