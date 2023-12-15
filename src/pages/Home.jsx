import React from "react";
import '../styles/App.css'
import WeeklyImage from "../components/Plashka";
import ScrollableText from "../components/ScrollableText";
import MyCustomCarousel from "../components/UI/Slider/Gitprof";
import classes from "./Home.module.css";
import MyFooter from "../components/Myfooter";
import Navbar from "../components/Navbar";


function Home() {
    return (
        <div className={`${classes.bgImg}`}>
            <Navbar/>
            <WeeklyImage classname={classes.zagal}/>
            <ScrollableText classname={classes.srcol}/>
            <MyCustomCarousel/>
            <MyFooter/>
        </div>
    );
}

export default Home;
