import React from 'react';
import PersonalElements from "../components/PersonalElements";
import image1 from "../images/koldun/1.jpg"
import image2 from "../images/koldun/2.jpg"
import image3 from "../images/koldun/3.jpg"
import image4 from "../images/koldun/4.jpg"
import image5 from "../images/koldun/5.jpg"
import image6 from "../images/koldun/6.jpg"
import image7 from "../images/koldun/7.jpg"
import image8 from "../images/koldun/8.jpg"
import main from "../images/koldun/main.jpg"
import classes from "./Koldun.module.css"
import Navbar from "../components/Navbar";
import Myfooter from "../components/Myfooter";

const Koldun = () => {
    return (
        <div className={classes.bgImg}>
            <Navbar/>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
            <Myfooter/>
        </div>
    );
};

const info = {
    name: "Дмитрий Колдун",
    gender: "man",
    mainImg: main,
    season: 6,
    shortInfo: "Дми́трий Алекса́ндрович Колду́н — белорусский певец, поэт и композитор. Представлял Беларусь на конкурсе Евровидение 2007 года с песней «Work Your Magic», заняв 6-е место (лучший результат Беларуси за всё время участия в конкурсе).",
    born: "11 июня 1985",
    death: "настоящее время",
    mapCenter: [53.9, 27.5667],
    mapMarkers: [[53.9, 27.5667]]
}

const bio = [
    {
        time: "2004",
        event: [
            "Участие в проекте \"Народный артист-2\" на телеканале \"Россия\"."
        ]
    },
    {
        time: "2004—2005",
        event: [
            "Работа в Государственном концертном оркестре Республики Беларусь.",
            "Участие в фестивалях \"Молодечно-2005\" и \"Славянский базар\" в Витебске."
    ]
    },
    {
        time: "2006",
        event: [
            "Участие в национальном белорусском отборе на \"Евровидение\" (\"Еврофест\") с песней \"May be\".",
            "Победитель проекта \"Фабрика звёзд-6\" на \"Первом канале\".",
            "Стал солистом обновлённого состава группы \"К. Г. Б.\" (Колдун, Гуркова, Барсуков), но вскоре покинул коллектив.",
            "После совместного исполнения с группой Scorpions песни \"Still Loving You\", получил приглашение от солиста Клауса Майне исполнить эту песню в рамках совместного тура."
        ]
    },
    {
        time: "2007",
        event: [
            "Победа в белорусском отборе на \"Евровидение-2007\" (\"Еврофест\") с песней \"Work Your Magic\".", 
            "Занял 6-е место на \"Евровидении-2007\"."
        ]
    },
    {
        time: "Декабрь 2007 — март 2008",
        event: [
            "Участие в проекте \"Две звезды\" на \"Первом канале\" в паре с Натальей Рудовой."
        ]
    },
    {
        time: "2008",
        event: [
            "Роль главного героя в рок-опере \"Звезда и смерть Хоакина Мурьеты\"."
        ]
    },
    {
        time: "2009",
        event: [
            "Участие в проекте канала Муз ТВ \"Звезда пошла на…\".", "Открытие студии звукозаписи \"Ящерица\" вместе с Александром Асташёнком."
        ]
    },
    {
        time: "29 апреля 2009",
        event: [
            "Первый сольный концерт в Королёве."
        ]
    },
    {
        time: "20 ноября 2010",
        event: [
            "Выступление на \"Детском Евровидении 2010\" с финальным гимном UNICEF \"A day without war\"."
        ]
    },
    {
        time: "Март 2012",
        event: [
            "Релиз второго студийного альбома \"Ночной пилот\"."
        ]
    },
    {
        time: "Июнь 2012",
        event: [
            "Участие в музыкальном проекте \"Фабрика звёзд. Россия-Украина\" на \"Первом канале\"."
        ]
    },
    {
        time: "6 ноября 2013",
        event: [
            "Презентация третьего студийного альбома \"Город больших огней\"."
        ]
    },
    {
        time: "2 марта — 8 июня 2014",
        event: [
            "Участие в шоу \"Точь-в-точь\" на \"Первом канале\", дойдя до финала."
        ]
    },
    {
        time: "2016",
        event: [
            "Участие в новом сезоне шоу \"Точь-в-точь\" на \"Первом канале\"."
        ]
    },
    {
        time: "2017",
        event: [
            "Выступление на открытии XXVI фестиваля искусств \"Славянский базар в Витебске\" с песней \"Пятница\"."
        ]
    },
    {
        time: "2021",
        event: [
            "Выпуск сингла \"Всё сначала\"."
        ]
    },
    {
        time: "2022",
        event: [
            "Участие в шоу \"Фантастика\" на Первом канале как артист, персонаж Фантом."
        ]
    }
];

const photos = [
    {
        img: image1,
        title: 'Краснодар',
        featured: true,
    },
    {
        img: image2,
        title: 'Фабрика звезд',
    },
    {
        img: image3,
        title: 'Авторадио',
    },
    {
        img: image4,
        title: 'Золотой граммофон',
    },
    {
        img: image5,
        title: 'Гомель',
    },
    {
        img: image6,
        title: 'Русское радио',
        featured: true,
    },
    {
        img: image7,
        title: 'Нижневартовск',
    },
    {
        img: image8,
        title: 'Евровидение',
    }
];

const video = "https://www.youtube.com/embed/Igp6p7sTT_4?si=lkfU-1tx6RqDm0VI";


export default Koldun;