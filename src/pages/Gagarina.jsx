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
    shortInfo: "gagarina.short",
    born: "gagarina.born",
    death: "nowadays",
    mapCenter: [55.75, 37.61],
    mapMarkers: [[55.75, 37.61]]
};
const bio = [
    {
        time: "gagarina.date1",
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
        time: "gagarina.date2",
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
        time: "gagarina.date3",
        event: [
            "gagarina.bio16"
        ]
    },
    {
        time: "gagarina.date4",
        event: [
            "gagarina.bio17"
        ]
    },
    {
        time: "gagarina.date5",
        event: [
            "gagarina.bio18"
        ]
    },
    {
        time: "gagarina.date6",
        event: [
            "gagarina.bio19"
        ]
    },
    {
        time: "gagarina.date7",
        event: [
            "gagarina.bio20"
        ]
    },
    {
        time: "gagarina.date8",
        event: [
            "gagarina.bio21"
        ]
    },
    {
        time: "gagarina.date9",
        event: [
            "gagarina.bio22"
        ]
    },
    {
        time: "gagarina.date10",
        event: [
            "gagarina.bio23",
            "gagarina.bio24",
            "gagarina.bio25",
            "gagarina.bio26"
        ]
    },
    {
        time: "gagarina.date11",
        event: [
            "gagarina.bio27"
        ]
    },
    {
        time: "gagarina.date12",
        event: [
            "gagarina.bio28"
        ]
    },
    {
        time: "gagarina.date13",
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
        time: "gagarina.date14",
        event: [
            "gagarina.bio32"
        ]
    },
    {
        time: "gagarina.date15",
        event: [
            "gagarina.bio33"
        ]
    },
    {
        time: "gagarina.date16",
        event: [
            "gagarina.bio34"
        ]
    },
    {
        time: "gagarina.date17",
        event: [
            "gagarina.bio35"
        ]
    },
    {
        time: "gagarina.date18",
        event: [
            "gagarina.bio36"
        ]
    },
    {
        time: "gagarina.date19",
        event: [
            "gagarina.bio37"
        ]
    },
    {
        time: "gagarina.date20",
        event: [
            "gagarina.bio38"
        ]
    }
];
const photos = [
    {
        img: image1,
        title: "gagarina.img1",
    },
    {
        img: image2,
        title: "gagarina.img2",
    },
    {
        img: image3,
        title: "gagarina.img3",
    },
    {
        img: image4,
        title: "gagarina.img4",
    },
    {
        img: image5,
        title:"gagarina.img5",
        featured: true
    },
    {
        img: image6,
        title: "gagarina.img6",
    },
    {
        img: image7,
        title: "gagarina.img7",
    }

];
const video = "https://www.youtube.com/embed/V94vZTNkLng?si=xm7tSjODQGoFScXK";


export default Gagarina;