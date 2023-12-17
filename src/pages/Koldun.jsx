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
    shortInfo: "koldun.short",
    born: "koldun.born",
    death: "nowadays",
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
        time: "koldun.date1",
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
        time: "koldun.date2",
        event: [
            "koldun.bio14"
        ]
    },
    {
        time: "koldun.date3",
        event: [
            "koldun.bio15"
        ]
    },
    {
        time: "koldun.date4",
        event: [
            "koldun.bio16"
        ]
    },
    {
        time: "koldun.date5",
        event: [
            "koldun.bio17"
        ]
    },
    {
        time: "koldun.date6",
        event: [
            "koldun.bio18"
        ]
    },
    {
        time: "koldun.date7",
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
        title: "koldun.img1",
        featured: true,
    },
    {
        img: image2,
        title: "koldun.img2",
    },
    {
        img: image3,
        title: "koldun.img3",
    },
    {
        img: image4,
        title: "koldun.img4",
    },
    {
        img: image5,
        title: "koldun.img5",
    },
    {
        img: image6,
        title: "koldun.img6",
        featured: true,
    },
    {
        img: image7,
        title:"koldun.img7",
    },
    {
        img: image8,
        title: "koldun.img8",
    }
];

const video = "https://www.youtube.com/embed/Igp6p7sTT_4?si=lkfU-1tx6RqDm0VI";


export default Koldun;