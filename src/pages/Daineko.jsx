import React from 'react';
import PersonalElements from "../components/PersonalElements";
import image1 from "../images/daineko/1.jpg"
import image2 from "../images/daineko/2.jpg"
import image3 from "../images/daineko/3.jpg"
import image4 from "../images/daineko/4.jpg"
import image5 from "../images/daineko/5.jpg"
import image6 from "../images/daineko/6.jpg"
import image7 from "../images/daineko/7.jpg"
import main from "../images/daineko/main.jpg"

const Daineko = () => {
    return (
        <div>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
        </div>
    );
};

const info = {
    name: "Виктория Дайнеко",
    gender: "woman",
    mainImg: main,
    season: 5,
    shortInfo: "Викто́рия Петро́вна Дайне́ко — российская певица и актриса. Победительница «Фабрики звёзд-5» (2004) и «Фабрики звёзд. Возвращение» (2011).",
    born: "12 мая 1987",
    death: "настоящее время"
};
const bio = [
    {
        time: "2004",
        event: [
            "Победительница \"Фабрики звёзд 5\", получила квартиру в Москве."
        ]
    },
    {
        time: "2005",
        event: [
            "Дебютный клип на песню \"Лейла\"."
        ]
    },
    {
        time: "2007",
        event: [
            "Участие в проекте \"Ледниковый период\" с Алексеем Ягудиным.",
            "Победа в номинации \"Fashion-певица 2007 года\" от Fashion TV.",
            "Номинация \"Лучшая исполнительница\" на MTV Russia Music Awards."
        ]
    },
    {
        time: "2008",
        event: [
            "Выпуск дебютного альбома \"Иголка\"."
        ]
    },
    {
        time: "2009",
        event: [
            "Участие в проекте \"Две звезды 2009\" (3-е место)."
        ]
    },
    {
        time: "2011",
        event: [
            "Участие в проекте \"Фабрика звёзд. Возвращение\" (победа)."
        ]
    },
    {
        time: "2014",
        event: [
            "Выход сингла \"Бей себя\" и альбома \"V\"."
        ]
    },
    {
        time: "2015",
        event: [
            "Звание \"Заслуженный артист Карачаево-Черкесии\"."
        ]
    },
    {
        time: "2016",
        event: [
            "Озвучила персонажа в мультфильме \"Тролли\"."
        ]
    },
    {
        time: "2019",
        event: [
            "Выход альбома \"Магнитные\"."
        ]
    },
    {
        time: "2021",
        event: [
            "Возглавление предвыборного списка партии \"Зелёная альтернатива\"."
        ]
    },
    {
        time: "2023",
        event: [
            "Участие в седьмом сезоне шоу \"Три аккорда\" на Первом канале."
        ]
    }
];
const photos = [
    {
        img: image1,
        title: 'Фабрика звезд',
        featured: true,
    },
    {
        img: image2,
        title: 'Три аккорда',
    },
    {
        img: image3,
        title: 'Концерт "Русское Рождество"',
    },
    {
        img: image4,
        title: 'Москва',
    },
    {
        img: image5,
        title: 'Воронеж',
    },
    {
        img: image6,
        title: 'Тольятти',
    },
    {
        img: image7,
        title: 'Санкт-Петербург',
    },

];
const video = "https://www.youtube.com/embed/BzjpBVVKKCE?si=GokmUeqQfqlJq8u9";



export default Daineko;
