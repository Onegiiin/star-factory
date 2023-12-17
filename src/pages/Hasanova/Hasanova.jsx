import React from 'react';
import PersonalElements from "../../components/PersonalElements";
import image1 from "../../images/hasanova/1.jpg"
import image2 from "../../images/hasanova/2.jpg"
import image3 from "../../images/hasanova/3.jpg"
import image4 from "../../images/hasanova/4.jpg"
import image5 from "../../images/hasanova/5.jpg"
import image6 from "../../images/hasanova/6.jpg"
import image7 from "../../images/hasanova/7.jpg"
import main from "../../images/Card/Card7.jpg"
import classes from "./Hasanova.module.css"
import Navbar from "../../components/Navbar/Navbar";
import Myfooter from "../../components/MyFooter/Myfooter";

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
    shortInfo: "hasanova.short",
    born: "hasanova.born",
    death: "nowadays",
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
        title: "hasanova.img1"
    },
    {
        img: image2,
        title: "hasanova.img2"
    },
    {
        img: image3,
        featured: true,
    },
    {
        img: image4,
        title: "hasanova.img4"
    },
    {
        img: image5,
        title: "hasanova.img5"
    },
    {
        img: image6,
    },
    {
        img: image7,
        title: "hasanova.img7"
    }
];
const video = "https://www.youtube.com/embed/jBmM53g88t4?si=5-ui1Q6ttM-idYuy";


export default Hasanova;