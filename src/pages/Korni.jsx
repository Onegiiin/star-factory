import React from 'react';
import PersonalElements from "../components/PersonalElements";
import image1 from "../images/korni/1.jpg"
import image2 from "../images/korni/2.jpg"
import image3 from "../images/korni/3.jpg"
import image4 from "../images/korni/4.jpg"
import image5 from "../images/korni/5.jpg"
import image6 from "../images/korni/6.jpg"
import image7 from "../images/korni/7.jpg"
import image8 from "../images/korni/8.jpg"
import main from "../images/Card1.jpg"
import classes from "./Korni.module.css"
import Navbar from "../components/Navbar";
import Myfooter from "../components/Myfooter";

const Korni = () => {
    return (
        <div className={classes.bgImg}>
            <Navbar/>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
            <Myfooter/>
        </div>
    );

};

const info = {
    name: "korni.name",
    gender: "-",
    mainImg: main,
    season: 1,
    shortInfo: "korni.short",
    born: "korni.born",
    death: "nowadays",
    mapCenter: [48, 38.5],
    mapMarkers: [[55.75, 37.57], [49.6, 17.25], [51.77, 55.1], [37.95, 58, 38]]
};
const bio = [
    {
        time: "2002",
        event: [
            "korni.bio1"
        ]
    },
    {
        time: "2003",
        event: [
            "korni.bio2",
            "korni.bio3"
        ]
    },
    {
        time: "2004",
        event: [
            "korni.bio4",
            "korni.bio5"
        ]
    },
    {
        time: "2005",
        event: [
            "korni.bio6",
            "korni.bio7",
            "korni.bio8",
            "korni.bio9"
        ]
    },
    {
        time: "2006",
        event: [
            "korni.bio10",
            "korni.bio11",
            "korni.bio12"
        ]
    },
    {
        time: "2007",
        event: [
            "korni.bio13",
            "korni.bio14"
        ]
    },
    {
        time: "2008",
        event: [
            "korni.bio15"
        ]
    },
    {
        time: "2009",
        event: [
            "korni.bio16",
            "korni.bio17"
        ]
    },
    {
        time: "2010",
        event: [
            "korni.bio18",
            "korni.bio19"
        ]
    },
    {
        time: "2011",
        event: [
            "korni.bio20"
        ]
    },
    {
        time: "2012",
        event: [
            "korni.bio21"
        ]
    }
];
const photos = [
    {
        img: image1,
        title: 'Минск',
        featured: true
    },
    {
        img: image2
    },
    {
        img: image3,
        title: 'Гродно'
    },
    {
        img: image4,
        title: 'Брест'
    },
    {
        img: image8,
        title: 'Псков'
    },
    {
        img: image6,
        featured: true
    },
    {
        img: image5,
        title: 'Москва'
    },
    {
        img: image7,
        title: 'Брест'
    },
];
const video = "https://www.youtube.com/embed/GSjk94YPpaM?si=x1SEHiGXYFlghXBs";


export default Korni;