import React from "react";
import '../styles/App.css'
import WeeklyImage from "../components/Plashka";
import ScrollableText from "../components/ScrollableText";
<<<<<<< HEAD
import MyCustomCarousel from "../components/UI/Slider/Gitprof";
=======
import MyCustomCarousel from "../components/Gitprof";
>>>>>>> f2ce75c (.)

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
