import React from 'react';
import PersonalElements from "../components/PersonalElements";

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
    mainImg: "../images/daineko/main.jpg",
    season: 1,
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
        img: '../images/daineko/1.png',
        title: 'Фабрика звезд',
        featured: true,
    },
    {
        img: '../images/daineko/2.png',
        title: 'Три аккорда',
    }
];
const video = "https://www.youtube.com/watch?v=BzjpBVVKKCE";



export default Daineko;