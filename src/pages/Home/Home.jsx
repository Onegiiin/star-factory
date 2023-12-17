import React from "react";
import '../../styles/App.css'
import WeeklyImage from "../../components/Plashka/Plashka";
import ScrollableText from "../../components/ScrollableText/ScrollableText";
import MyCustomCarousel from "../../components/Slider/Gitprof";
import classes from "./Home.module.css";
import MyFooter from "../../components/MyFooter/Myfooter";
import Navbar from "../../components/Navbar/Navbar";


function Home() {
    return (
        <div className={`${classes.bgImg}`}>
            <Navbar/>
            <WeeklyImage/>
            <ScrollableText classname={classes.srcol}/>
            <MyCustomCarousel/>
            <MyFooter />
        </div>
    );
}

export default Home;
