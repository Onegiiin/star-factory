import React from 'react';
import PersonalElements from "../components/PersonalElements";

const Hasanova = () => {
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
    mainImg: "../images/hasanova/main.jpg",
    season: 4,
    shortInfo: "Гузель Хасанова — яркая и талантливая певица, заявившая о себе в качестве победительницы российского вокального проекта «Новая Фабрика звезд». С тех пор она регулярно радует поклонников новыми хитами, которые никого не оставляют равнодушным.",
    born: "28 января 1993",
    death: "настоящее время"
};
const bio = [
    {
        time: "4 года",
        event: [
            "Начало занятий музыкой в музыкальной школе \"Радость\"."
        ]
    },
    {
        time: "13 лет",
        event: [
            "Профессиональные уроки вокала."
        ]
    },
    {
        time: "2014",
        event: [
            "Завершение обучения в университете нефти и газа имени Ивана Губкина, получение юридического образования.",
            "Совмещение учебы и музыкальной карьеры.",
            "Участие в \"Х-фактор\": Присоединение к команде Ивана Дорна.",
            "Присоединение к группе CoolTimeBand с Никитой Осиным."
        ]
    },
    {
        time: "2017",
        event: [
            "Участие в молодежном форуме \"Таврида\".",
            "\"Новая волна\": Участие в международном проекте.",
            "Выпуск дебютного альбома \"Неизвестный исполнитель\".",
            "Участие в шоу \"Новая Фабрика звезд\".",
            "9 декабря: Победа, исполнение \"Найди меня\" Ирины Дубцовой."
        ]
    },
    {
        time: "2020",
        event: [
            "Выпуск мини-альбома \"Безысходность\"."
        ]
    },
    {
        time: "2021",
        event: [
            "Выход новых треков, включая \"Главное\" и \"Танцуй\"."
        ]
    }
];
const photos = [
    {
        img: '../images/hasanova/1.png',
        title: '\"Х-фактор\"',
    },
    {
        img: '../images/hasanova/2.png',
        title: '\"Новая фабрика звезд\"',
    },
    {
        img: '../images/hasanova/3.png',
        title: '\"Х-фактор\"',
    },
    {
        img: '../images/hasanova/4.png',
        title: '\"Х-фактор\"',
    },
    {
        img: '../images/hasanova/5.png',
        title: '\"Х-фактор\"',
    },
    {
        img: '../images/hasanova/6.png',
        title: '\"Х-фактор\"',
    },
    {
        img: '../images/hasanova/7.png',
        title: '\"Х-фактор\"',
    }
];
const video = "https://www.youtube.com/watch?v=jBmM53g88t4";
>>>>>>> f2ce75c (.)


export default Hasanova;