import React from "react";
import '../styles/App.css'
import WeeklyImage from "../components/Plashka";
import ScrollableText from "../components/ScrollableText";
import MyCustomCarousel from "../components/UI/Slider/Gitprof";

function Home() {
    return (
        <div className="App">
            <WeeklyImage/>
            <ScrollableText/>
            <MyCustomCarousel/>
        </div>
    );
}

export default Home;
