import React from 'react';
import PersonalElements from "../components/PersonalElements";
import image1 from "../images/gagarina/1.jpg"
import image2 from "../images/gagarina/2.jpg"
import image3 from "../images/gagarina/3.jpg"
import image4 from "../images/gagarina/4.jpg"
import image5 from "../images/gagarina/5.jpg"
import image6 from "../images/gagarina/6.jpg"
import image7 from "../images/gagarina/7.jpg"
import main from "../images/Card2.jpg"
import classes from "./Gagarina.module.css"
import Navbar from "../components/Navbar";
import Myfooter from "../components/Myfooter";

const Gagarina = () => {
    return (
        <div className={classes.bgImg}>
            <Navbar/>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
            <Myfooter/>
        </div>
    );
};

const info = {
    name: "gagarina.name",
    gender: "woman",
    mainImg: main,
    season: 2,
    shortInfo: "Полина Сергеевна Гагарина — российская эстрадная певица, актриса кино, телевидения, озвучивания и дубляжа, композитор и фотомодель. После победы на «Фабрике звезд» Полина Гагарина стала одной из ярких звёзд мировой музыкальной сцены. Её эмоциональные и мощные выступления завоевали сердца слушателей не только в России, но и за рубежом, открыв ей двери к международному признанию.",
    born: "27 марта 1987",
    death: "настоящее время",
    mapCenter: [55.75, 37.61],
    mapMarkers: [[55.75, 37.61]]
};
const bio = [
    {
        time: "27 марта 1987",
        event: [
            "gagarina.bio1"
        ]
    },
    {
        time: "1991",
        event: [
            "gagarina.bio2"    
        ]
    },
    {
        time: "Сентябрь 1993",
        event: [
            "gagarina.bio3"
        ]
    },
    {
        time: "2003",
        event: [
            "gagarina.bio4",
            "gagarina.bio5",
            "gagarina.bio6"
        ]
    },
    {
        time: "2004—2007",
        event: [
            "gagarina.bio7",
            "gagarina.bio8",
            "gagarina.bio9",
            "gagarina.bio10"
        ]
    },
    {
        time: "2008—2010",
        event: [
            "gagarina.bio11",
            "gagarina.bio12",
            "gagarina.bio13",
            "gagarina.bio14",
            "gagarina.bio15"
        ]
    },
    {
        time: "Весна 2011",
        event: [
            "gagarina.bio16"
        ]
    },
    {
        time: "Апрель 2011",
        event: [
            "gagarina.bio17"
        ]
    },
    {
        time: "Август 2011",
        event: [
            "gagarina.bio18"
        ]
    },
    {
        time: "Конец 2011",
        event: [
            "gagarina.bio19"
        ]
    },
    {
        time: "Январь 2012",
        event: [
            "gagarina.bio20"
        ]
    },
    {
        time: "Лето 2012",
        event: [
            "gagarina.bio21"
        ]
    },
    {
        time: "Август 2012",
        event: [
            "gagarina.bio22"
        ]
    },
    {
        time: "Сентябрь 2012",
        event: [
            "gagarina.bio23",
            "gagarina.bio24",
            "gagarina.bio25",
            "gagarina.bio26"
        ]
    },
    {
        time: "Апрель 2013",
        event: [
            "gagarina.bio27"
        ]
    },
    {
        time: "Май 2013",
        event: [
            "gagarina.bio28"
        ]
    },
    {
        time: "Июнь 2013",
        event: [
            "gagarina.bio29",
            "gagarina.bio30"
        ]
    },
    {
        time: "2014",
        event: [
            "gagarina.bio31"
        ]
    },
    {
        time: "Март 2015",
        event: [
            "gagarina.bio32"
        ]
    },
    {
        time: "19 мая 2015",
        event: [
            "gagarina.bio33"
        ]
    },
    {
        time: "23 мая 2015",
        event: [
            "gagarina.bio34"
        ]
    },
    {
        time: "Июнь 2015",
        event: [
            "gagarina.bio35"
        ]
    },
    {
        time: "Июль 2015",
        event: [
            "gagarina.bio36"
        ]
    },
    {
        time: "Сентябрь 2015",
        event: [
            "gagarina.bio37"
        ]
    },
    {
        time: "Октябрь 2015",
        event: [
            "gagarina.bio38"
        ]
    }
];
const photos = [
    {
        img: image1,
        title: 'Победа на RU.TV',
    },
    {
        img: image2,
        title: 'Евровиденье-2015',
    },
    {
        img: image3,
        title: 'Новосибирск',
    },
    {
        img: image4,
        title: 'Челябинск',
    },
    {
        img: image5,
        title: 'Минск',
        featured: true
    },
    {
        img: image6,
        title: 'Шоу "Голос"',
    },
    {
        img: image7,
        title: 'Музыкальное шоу "Навсегда"',
    }

];
const video = "https://www.youtube.com/embed/V94vZTNkLng?si=xm7tSjODQGoFScXK";


export default Gagarina;