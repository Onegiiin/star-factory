import React from 'react';
import PersonalElements from "../components/PersonalElements";
import image1 from "../images/hasanova/1.jpg"
import image2 from "../images/hasanova/2.jpg"
import image3 from "../images/hasanova/3.jpg"
import image4 from "../images/hasanova/4.jpg"
import image5 from "../images/hasanova/5.jpg"
import image6 from "../images/hasanova/6.jpg"
import image7 from "../images/hasanova/7.jpg"
import main from "../images/Card7.jpg"
import classes from "./Hasanova.module.css"
import Navbar from "../components/Navbar";
import Myfooter from "../components/Myfooter";

const Hasanova = () => {
    return (
        <div className={classes.bgImg}>
            <Navbar/>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
            <Myfooter/>
        </div>
    );

};

const info = {
    name: "hasanova.name",
    gender: "woman",
    mainImg: main,
    season: 10,
    shortInfo: "Гузель Хасанова — яркая и талантливая певица, заявившая о себе в качестве победительницы российского вокального проекта «Новая Фабрика звезд». С тех пор она регулярно радует поклонников новыми хитами, которые никого не оставляют равнодушным. 9 декабря 2017 года Гузель стала победительницей музыкального проекта телеканала «МУЗ-ТВ», посвятив свою награду брату Ильясу, который во всем поддерживает Хасанову.",
    born: "28 января 1993",
    death: "настоящее время",
    mapCenter: [54.33, 48.38],
    mapMarkers: [[54.33, 48.38]]
};
const bio = [
    {
        time: "1997",
        event: [
            "hasanova.bio1"
        ]
    },
    {
        time: "2006",
        event: [
            "hasanova.bio2"
        ]
    },
    {
        time: "2014",
        event: [
            "hasanova.bio3",
            "hasanova.bio4",
            "hasanova.bio5",
            "hasanova.bio6"
        ]
    },
    {
        time: "2017",
        event: [
            "hasanova.bio7",
            "hasanova.bio8",
            "hasanova.bio9",
            "hasanova.bio10",
            "hasanova.bio11"
        ]
    },
    {
        time: "2020",
        event: [
            "hasanova.bio12"
        ]
    },
    {
        time: "2021",
        event: [
            "hasanova.bio13"
        ]
    }
];
const photos = [
    {
        img: image1,
        title: '"Х-фактор"',
    },
    {
        img: image2,
        title: '"Новая фабрика звезд"',
    },
    {
        img: image3,
        featured: true,
    },
    {
        img: image4,
        title: 'Москва'
    },
    {
        img: image5,
        title: 'Ульяновск'
    },
    {
        img: image6,
    },
    {
        img: image7,
        title: 'Сочи'
    }
];
const video = "https://www.youtube.com/embed/jBmM53g88t4?si=5-ui1Q6ttM-idYuy";


export default Hasanova;