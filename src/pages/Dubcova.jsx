import React from 'react';
import PersonalElements from "../components/PersonalElements";
import image1 from "../images/dubcova/1.jpg"
import image2 from "../images/dubcova/2.jpg"
import image3 from "../images/dubcova/3.jpg"
import image4 from "../images/dubcova/4.jpg"
import image5 from "../images/dubcova/5.jpg"
import image6 from "../images/dubcova/6.jpg"
import image7 from "../images/dubcova/7.jpg"
import image8 from "../images/dubcova/8.jpg"
import main from "../images/Card3.jpg"
import classes from "./Dubcova.module.css"
import Navbar from "../components/Navbar";
import Myfooter from "../components/Myfooter";

const Dubcova = () => {
    return (
        <div className={classes.bgImg}>
            <Navbar/>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
            <Myfooter/>
        </div>
    );
};

const info = {
    name: "dubcova.name",
    gender: "woman",
    mainImg: main,
    season: 4,
    shortInfo: "Ирина Викторовна Дубцова — российская певица, поэтесса и композитор, бывшая солистка группы «Девочки» (1999—2001). Исполнительница собственных песен (как сольных, так и совместных), выпускница и победительница «Фабрики звёзд — 4», финалистка проекта «Фабрика звёзд. Возвращение». Ирина Дубцова прочно утвердилась как творческая личность, создавая хиты, которые завоевали популярность не только в России, но и за её пределами.",
    born: "14 февраля 1982",
    death: "настоящее время",
    mapCenter: [48.72, 44.5],
    mapMarkers: [[48.72, 44.5]]
};
const bio = [
    {
        time: "1999",
        event: [
            "dubcova.bio1",
            "dubcova.bio2"
        ]
    },
    {
        time: "2001",
        event: [
            "dubcova.bio3",
            "dubcova.bio4",
            "dubcova.bio5"
        ]
    },
    {
        time: "12 марта 2004",
        event: [
            "dubcova.bio6",
            "dubcova.bio7"
        ]
    },
    {
        time: "Июнь 2004",
        event: [
            "dubcova.bio8",
            "dubcova.bio9"
        ]
    },
    {
        time: "Февраль 2005",
        event: [
            "dubcova.bio10"
        ]
    },
    {
        time: "19 июля 2007",
        event: [
            "dubcova.bio11",
            "dubcova.bio12",
            "dubcova.bio13"
        ]
    },
    {
        time: "2008",
        event: [
            "dubcova.bio14",
            "dubcova.bio15"
        ]
    },
    {
        time: "2010",
        event: [
            "dubcova.bio16"
        ]
    },
    {
        time: "Весна 2012",
        event: [
            "dubcova.bio17",
            "dubcova.bio18"
        ]
    },
    {
        time: "Осень 2012",
        event: [
            "dubcova.bio19"
        ]
    },
    {
        time: "1 декабря 2012",
        event: [
            "dubcova.bio20"
        ]
    },
    {
        time: "5 января 2013",
        event: [
            "dubcova.bio21"
        ]
    },
    {
        time: "Июнь 2013",
        event: [
            "dubcova.bio22"
        ]
    },
    {
        time: "Осень 2013",
        event: [
            "dubcova.bio23"
        ]
    },
    {
        time: "Начало 2014 года",
        event: [
            "dubcova.bio24"
        ]

    },
    {
        time: "Март 2014 года:",
        event: [
            "dubcova.bio25",
            "dubcova.bio26"
        ]
    },
    {
        time: "Июль 2014 года",
        event: [
            "dubcova.bio27"
        ]
    },
    {
        time: "Сентябрь 2014 года",
        event: [
            "dubcova.bio28"
        ]
    },
    {
        time: "Начало 2015",
        event: [
            "dubcova.bio29"
        ]
    },
    {
        time: "25 января 2015 года:",
        event: [
            "dubcova.bio30"
        ]
    },
    {
        time: "3 февраля 2015 года",
        event: [
            "dubcova.bio31"
        ]
    },
    {
        time: "Февраль 2016",
        event: [
            "dubcova.bio32"
        ]
    },
    {
        time: "23 марта 2016",
        event: [
            "dubcova.bio33"
        ]
    },
    {
        time: "29 марта 2016",
        event: [
            "dubcova.bio34"
        ]
    },
    {
        time: "21 июля 2016",
        event: [
            "dubcova.bio35"
        ]
    },
    {
        time: "28 апреля 2016",
        event: [
            "dubcova.bio36"
        ]
    },
    {
        time: "19 ноября 2016",
        event: [
            "dubcova.bio37"
        ]
    },
    {
        time: "3 декабря 2016",
        event: [
            "dubcova.bio38"
        ]
    },
    {
        time: "Конец 2016",
        event: [
            "dubcova.bio39"
        ]
    },
    {
        time: "Февраль 2017",
        event: [
            "dubcova.bio40"
        ]
    },
    {
        time: "12 ноября 2017",
        event: [
            "dubcova.bio41"
        ]
    },
    {
        time: "14 февраля 2022",
        event: [
            "dubcova.bio42"
        ]
    },
    {
        time: "21 октября 2022",
        event: [
            "dubcova.bio43"
        ]
    },
    {
        time: "12 июня 2023",
        event: [
            "dubcova.bio44"
        ]
    },
    {
        time: "23 июня 2023",
        event: [
            "dubcova.bio45"
        ]
    },
    {
        time: "Осень 2023",
        event: [
            "dubcova.bio46"
        ]
    }
];
const photos = [
    {
        img: image1,
        title: 'Вологда',
    },
    {
        img: image3,
        title: 'Сочи',
    },
    {
        img: image2,
        title: 'Гомель',
        featured: true
    },
    {
        img: image4,
        title: 'Фабрика звезд',
    },
    {
        img: image7,
        title: 'Телесериал "Куба"',
    },
    {
        img: image5,
        title: 'Омск',
        featured: true
    },
    {
        img: image6,
        title: 'Воронеж',
    },
    {
        img: image8,
        title: 'Красногорск',
    },
];
const video = "https://www.youtube.com/embed/OlbkXZGH0JI?si=R7pd6PB9VZ9kIcWg";


export default Dubcova;
