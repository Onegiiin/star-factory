import React from 'react';
import PersonalElements from "../components/PersonalElements";

const Prihodko = () => {
    return (
        <div>
            <PersonalElements info={info} photos={photos} video={video} bio={bio}/>
        </div>
    );
};

const info = {
    name: "Анастасия Приходько",
    gender: "woman",
    mainImg: "../images/prihodko/main.jpg",
    season: 4,
    shortInfo: "Анастаси́я Константи́новна Прихо́дько — украинская певица, автор песен, общественный и политический деятель, заслуженная артистка Украины (2017).",
    born: "21 апреля 1987",
    death: "настоящее время"
};
const bio = [
    {
        time: "2007",
        event: [
            "Победа в шоу \"Фабрика звёзд 7\"."
        ]
    },
    {
        time: "2009",
        event: [
            "Представление России на \"Евровидении-2009\" с песней \"Мамо\" (11-е место).",
            "Завершение сотрудничества с Константином Меладзе.",
            "Участие в проекте \"Две звезды\" с Натальей Рудовой.",
            "Игра Полины в мюзикле \"Как казаки...\" на телеканале \"Интер\"."
        ]
    },
    {
        time: "2010",
        event: [
            "Совместный клип с Валерием Меладзе \"Безответно\"."
        ]
    },
    {
        time: "2011",
        event: [
            "Участие в украинском отборе на \"Евровидение-2011\"."
        ]
    },
    {
        time: "2021",
        event: [
            "Участие в телепроекте \"Маска\" в образе Стрекозы.",
            "Возвращение на эстраду."
        ]
    },
    {
        time: "2018",
        event: [
            "Объявление об уходе со сцены."
        ]
    },
    {
        time: "2018",
        event: [
            "Присоединение к партии \"Батькивщина\"."
        ]
    },
    {
        time: "2019",
        event: [
            "Уход из партии и возвращение к музыке."
        ]
    },
    {
        time: "2022",
        event: [
            "Выпуск песни \"Подруга\" и клипа \"Степом\" (22 июня)."
        ]
    }
];
const photos = [];
const video = "https://www.youtube.com/watch?v=iEPE-vbWqWw";


export default Prihodko;