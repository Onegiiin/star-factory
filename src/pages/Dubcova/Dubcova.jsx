import React from 'react';
import PersonalElements from "../../components/PersonalElements";
import image1 from "../../images/dubcova/1.jpg"
import image2 from "../../images/dubcova/2.jpg"
import image3 from "../../images/dubcova/3.jpg"
import image4 from "../../images/dubcova/4.jpg"
import image5 from "../../images/dubcova/5.jpg"
import image6 from "../../images/dubcova/6.jpg"
import image7 from "../../images/dubcova/7.jpg"
import image8 from "../../images/dubcova/8.jpg"
import main from "../../images/Card/Card3.jpg"
import classes from "./Dubcova.module.css"
import Navbar from "../../components/Navbar/Navbar";
import Myfooter from "../../components/MyFooter/Myfooter";

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
    shortInfo: "dubcova.short",
    born: "dubcova.born",
    death: "nowadays",
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
        time: "dubcova.date1",
        event: [
            "dubcova.bio6",
            "dubcova.bio7"
        ]
    },
    {
        time: "dubcova.date2",
        event: [
            "dubcova.bio8",
            "dubcova.bio9"
        ]
    },
    {
        time: "dubcova.date3",
        event: [
            "dubcova.bio10"
        ]
    },
    {
        time: "dubcova.date4",
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
        time: "dubcova.date5",
        event: [
            "dubcova.bio17",
            "dubcova.bio18"
        ]
    },
    {
        time: "dubcova.date6",
        event: [
            "dubcova.bio19"
        ]
    },
    {
        time: "dubcova.date7",
        event: [
            "dubcova.bio20"
        ]
    },
    {
        time: "dubcova.date8",
        event: [
            "dubcova.bio21"
        ]
    },
    {
        time: "dubcova.date9",
        event: [
            "dubcova.bio22"
        ]
    },
    {
        time: "dubcova.date10",
        event: [
            "dubcova.bio23"
        ]
    },
    {
        time: "dubcova.date11",
        event: [
            "dubcova.bio24"
        ]

    },
    {
        time: "dubcova.date12",
        event: [
            "dubcova.bio25",
            "dubcova.bio26"
        ]
    },
    {
        time: "dubcova.date13",
        event: [
            "dubcova.bio27"
        ]
    },
    {
        time: "dubcova.date14",
        event: [
            "dubcova.bio28"
        ]
    },
    {
        time: "dubcova.date15",
        event: [
            "dubcova.bio29"
        ]
    },
    {
        time: "dubcova.date16",
        event: [
            "dubcova.bio30"
        ]
    },
    {
        time: "dubcova.date17",
        event: [
            "dubcova.bio31"
        ]
    },
    {
        time: "dubcova.date18",
        event: [
            "dubcova.bio32"
        ]
    },
    {
        time: "dubcova.date19",
        event: [
            "dubcova.bio33"
        ]
    },
    {
        time: "dubcova.date20",
        event: [
            "dubcova.bio34"
        ]
    },
    {
        time: "dubcova.date21",
        event: [
            "dubcova.bio35"
        ]
    },
    {
        time: "dubcova.date22",
        event: [
            "dubcova.bio36"
        ]
    },
    {
        time: "dubcova.date23",
        event: [
            "dubcova.bio37"
        ]
    },
    {
        time: "dubcova.date24",
        event: [
            "dubcova.bio38"
        ]
    },
    {
        time: "dubcova.date25",
        event: [
            "dubcova.bio39"
        ]
    },
    {
        time: "dubcova.date26",
        event: [
            "dubcova.bio40"
        ]
    },
    {
        time: "dubcova.date27",
        event: [
            "dubcova.bio41"
        ]
    },
    {
        time: "dubcova.date28",
        event: [
            "dubcova.bio42"
        ]
    },
    {
        time: "dubcova.date29",
        event: [
            "dubcova.bio43"
        ]
    },
    {
        time: "dubcova.date30",
        event: [
            "dubcova.bio44"
        ]
    },
    {
        time: "dubcova.date31",
        event: [
            "dubcova.bio45"
        ]
    },
    {
        time: "dubcova.date32",
        event: [
            "dubcova.bio46"
        ]
    }
];
const photos = [
    {
        img: image1,
        title: "dubcova.img1"
    },
    {
        img: image3,
        title: "dubcova.img3"
    },
    {
        img: image2,
        title: "dubcova.img2",
        featured: true
    },
    {
        img: image4,
        title: "dubcova.img4"
    },
    {
        img: image7,
        title: "dubcova.img7"
    },
    {
        img: image5,
        title: "dubcova.img5",
        featured: true
    },
    {
        img: image6,
        title: "dubcova.img6"
    },
    {
        img: image8,
        title: "dubcova.img18"
    },
];
const video = "https://www.youtube.com/embed/OlbkXZGH0JI?si=R7pd6PB9VZ9kIcWg";


export default Dubcova;
