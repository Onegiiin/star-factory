import React from 'react';
import PersonalElements from "../components/PersonalElements";

const Korni = () => {
    return (
        <div>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
        </div>
    );

};

<<<<<<< HEAD
const info = [];
const bio = [];
const photos = [];
const video = "";
=======
const info = {
    name: "Гузель Хасанова",
    gender: "woman",
    mainImg: "",
    season: 4,
    shortInfo: "Гузель Хасанова — яркая и талантливая певица, заявившая о себе в качестве победительницы российского вокального проекта «Новая Фабрика звезд». С тех пор она регулярно радует поклонников новыми хитами, которые никого не оставляют равнодушным.",
    born: "28 января 1993",
    death: "настоящее время"
};
const bio = [];
const photos = [];
const video = "https://www.youtube.com/watch?v=GSjk94YPpaM";
>>>>>>> f2ce75c (.)



export default Korni;