import React from 'react';
import PersonalElements from "../components/PersonalElements";
import image1 from "../images/korni/1.jpg"
import image2 from "../images/korni/2.jpg"
import image3 from "../images/korni/3.jpg"
import image4 from "../images/korni/4.jpg"
import image5 from "../images/korni/5.jpg"
import image6 from "../images/korni/6.jpg"
import image7 from "../images/korni/7.jpg"
import main from "../images/Card1.jpg"
import classes from "./Korni.module.css"
import Navbar from "../components/Navbar";
import Myfooter from "../components/Myfooter";

const Korni = () => {
    return (
        <div className={classes.bgImg}>
            <Navbar/>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
            <Myfooter/>
        </div>
    );

};

const info = {
        name: "Корни",
        gender: "man",
        mainImg: main,
        season: 1,
        shortInfo: 'Российская поп-рок группа, победившая в первом сезоне талант-шоу «Фабрика звёзд». В состав «Корней» тогда вошли Александр Бердников, Алексей Кабанов, Павел Артемьев и Александр Асташёнок. В качестве приза участники бойз-бенда получили символический подарок — микрофон, который использовался в записи «фабричных» композиций, а также контракт с центром Матвиенко, гастрольный тур по России и поездку во Францию на конкурс «Евробест», объединивший призеров международных «Фабрик».',
        born: "2002",
        death: "настоящее время",
        mapCenter: [48, 38.5],
        mapMarkers: [[55.75, 37.57],[49.6, 17.25],[51.77, 55.1],[37.95,58,38]]
    };
const bio = [
    {
        time: "2002",
        event: [
            "Группа \"Корни\" создана во время проекта \"Фабрика звёзд\" и побеждает в конце года."
        ]
    },
    {
        time: "2003",
        event: [
            "Участие в международном музыкальном конкурсе \"Евробест\" в Каннах, 6-е место с песней группы Queen \"We Will Rock You\".",
            "Выпуск дебютного альбома \"На века\" в декабре, снятие видеоклипов для трех песен."
        ]
    },
    {
        time: "2004",
        event: [
            "Первый гастрольный тур по городам России.",
            "Выпуск песни \"С днём рождения, Вика!\"."
        ]
    },
    {
        time: "2005",
        event: [
            "Выпуск клипа на песню \"С новым годом, люди!\".",
            "Работа над вторым альбомом \"Дневники\", презентация в мае.",
            "Выпуск видеоклипа на песню \"25 этаж\".",
            "Переиздание альбома с бонус-треком \"Снова в школу\"."
        ]
    },
    {
        time: "2006",
        event: [
            "Выпуск сингла \"Хочешь, я тебе спою\" в апреле.",
            "Выпуск клипа на песню \"Хочешь, я тебе спою\" в мае.",
            "Выпуск клипа на песню \"Наперегонки с ветром\" в августе, ставшей саундтреком к телесериалу \"Кадетство\" на канале СТС."
        ]
    },
    {
        time: "2007",
        event: [
            "Выпуск песни \"Закрыть глаза\" («К тебе»), входящей в саундтрек к фильму \"В ожидании чуда\".",
            "Выпуск клипа на песню \"Ей везёт\"."
        ]
    },
    {
        time: "2008",
        event: [
            "Гастролирование в США."
        ]
    },
    {
        time: "2009",
        event: [
            "Запись и съемка клипа на песню \"Лепесток\" в июне.",
            "Презентация саундтрека \"Наша Маша\" к фильму \"Наша Маша и волшебный орех\" в конце года."
        ]
    },
    {
        time: "2010",
        event: [
            "Запись сингла \"Не может быть\" в апреле с новым солистом.",
            "Выпуск песни \"Это не спам\" в конце года."
        ]
    },
    {
        time: "2011",
        event: [
            "Участие в проекте \"Фабрика звёзд. Возвращение\" в марте, в команде продюсера Игоря Матвиенко."
        ]
    },
    {
        time: "2012",
        event: [
            "Получение четырех премий \"Золотой граммофон\", включая \"Просто любовь\" (совместно с Любэ, In2nation)."
        ]
    }
];
const photos = [
    {
        img: image1,
        title: 'Минск'
    },
    {
        img: image2
    },
    {
        img: image3,
        title: 'Гродно'
    },
    {
        img: image4,
        title: 'Брест'
    },
    {
        img: image5,
        title: 'Москва'
    },
    {
        img: image6
    },
    {
        img: image7,
        title: 'Брест'
    }
];
const video = "https://www.youtube.com/embed/GSjk94YPpaM?si=x1SEHiGXYFlghXBs";



export default Korni;