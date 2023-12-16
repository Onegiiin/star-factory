import React from 'react';
import PersonalElements from "../components/PersonalElements";
import image1 from "../images/daineko/1.jpg"
import image2 from "../images/daineko/2.jpg"
import image3 from "../images/daineko/3.jpg"
import image4 from "../images/daineko/4.jpg"
import image5 from "../images/daineko/5.jpg"
import image6 from "../images/daineko/6.jpg"
import image7 from "../images/daineko/7.jpg"
import main from "../images/Card6.jpg"
import classes from "./Daineko.module.css"
import Navbar from "../components/Navbar";
import Myfooter from "../components/Myfooter";

const Daineko = () => {
    return (
        <div className={classes.bgImg}>
            <Navbar/>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
            <Myfooter/>
        </div>
    );
};

const info = {
    name: "daineko.name",
    gender: "woman",
    mainImg: main,
    season: 5,
    shortInfo: "daineko.short",
    born: "daineko.born",
    death: "nowadays",
    mapCenter: [44.9, 78.22],
    mapMarkers: [[44.9, 78.22]]
};
const bio = [
    {
        time: "2004",
        event: [
            "daineko.bio1"
        ]
    },
    {
        time: "2005",
        event: [
            "daineko.bio2"
        ]
    },
    {
        time: "2007",
        event: [
            "daineko.bio3",
            "daineko.bio4",
            "daineko.bio5"
        ]
    },
    {
        time: "2008",
        event: [
            "daineko.bio6"
        ]
    },
    {
        time: "2009",
        event: [
            "daineko.bio7"
        ]
    },
    {
        time: "2011",
        event: [
            "daineko.bio8"
        ]
    },
    {
        time: "2014",
        event: [
            "daineko.bio9"
        ]
    },
    {
        time: "2015",
        event: [
            "daineko.bio10"
        ]
    },
    {
        time: "2016",
        event: [
            "daineko.bio11"
        ]
    },
    {
        time: "2019",
        event: [
            "daineko.bio12"
        ]
    },
    {
        time: "2021",
        event: [
            "daineko.bio13"
        ]
    },
    {
        time: "2023",
        event: [
            "daineko.bio14"
        ]
    }
];

const photos = [
    {
        img: image1,
        title: "daineko.img1",
        featured: true,
    },
    {
        img: image2,
        title: "daineko.img2",
    },
    {
        img: image3,
        title: "daineko.img3",
    },
    {
        img: image4,
        title: "daineko.img4",
        featured: true
    },
    {
        img: image6,
        title: "daineko.img5",
    },
    {
        img: image7,
        title: "daineko.img6",
    },
    {
        img: image5,
        title: "daineko.img7",
        featured: true
    },

];
const video = "https://www.youtube.com/embed/BzjpBVVKKCE?si=GokmUeqQfqlJq8u9";


export default Daineko;
