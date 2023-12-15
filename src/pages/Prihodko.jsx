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
    name: "Анастасия Приходько",
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
            "Победа в шоу \"Фабрика звёзд 7\"."
        ]
    },
    {
        time: "2009",
        event: [
            "Представление России на \"Евровидении-2009\" с песней \"Мамо\" (11-е место).",
            "Завершение сотрудничества с Константином Меладзе.",
            "Участие в проекте \"Две звезды\" с Натальей Рудовой.",
            "Игра Полины в мюзикле \"Как казаки...\" на телеканале \"Интер\"."
        ]
    },
    {
        time: "2010",
        event: [
            "Совместный клип с Валерием Меладзе \"Безответно\"."
        ]
    },
    {
        time: "2011",
        event: [
            "Участие в украинском отборе на \"Евровидение-2011\"."
        ]
    },
    {
        time: "2021",
        event: [
            "Участие в телепроекте \"Маска\" в образе Стрекозы.",
            "Возвращение на эстраду."
        ]
    },
    {
        time: "2018",
        event: [
            "Объявление об уходе со сцены."
        ]
    },
    {
        time: "2018",
        event: [
            "Присоединение к партии \"Батькивщина\"."
        ]
    },
    {
        time: "2019",
        event: [
            "Уход из партии и возвращение к музыке."
        ]
    },
    {
        time: "2022",
        event: [
            "Выпуск песни \"Подруга\" и клипа \"Степом\" (22 июня)."
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
        img: image3,
    },
    {
        img: image4,
        title: 'Евровиденье-2011'
    },
    {
        img: image5,
    },
    {
        img: image6,
    },
    {
        img: image7,
        title: 'Киев'
    }
];
const video = "https://www.youtube.com/embed/iEPE-vbWqWw?si=oBm9j7uIPGNitvch";


export default Prihodko;